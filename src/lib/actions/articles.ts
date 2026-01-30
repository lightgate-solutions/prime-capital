"use server";

import { and, eq, like, not } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { headers } from "next/headers";
import { db } from "@/db";
import { article } from "@/db/schema";
import { auth } from "@/lib/auth";
import {
  ArticleStatus,
  type CreateArticleInput,
  calculateReadTime,
  createArticleSchema,
  type UpdateArticleInput,
  updateArticleSchema,
} from "@/lib/types/articles";
import { ensureUniqueSlug, generateSlug } from "@/lib/utils/slug";

async function requireAdmin() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session?.user) {
    throw new Error("Unauthorized: Please log in");
  }

  if (
    session.user.email !==
      (process.env.ADMIN_EMAIL || "safiyanusaidu2@gmail.com") &&
    (session.user as any).role !== "admin"
  ) {
    throw new Error("Forbidden: Admin access required");
  }

  return session.user;
}

export async function createArticle(data: CreateArticleInput) {
  try {
    const user = await requireAdmin();

    // Validate input
    const validatedData = createArticleSchema.parse(data);

    // Generate slug if not provided
    let slug = validatedData.slug || generateSlug(validatedData.title);

    // Ensure slug is unique
    const existingArticles = await db
      .select({ slug: article.slug })
      .from(article)
      .where(like(article.slug, `${slug}%`));

    const existingSlugs = existingArticles.map((a) => a.slug);
    slug = ensureUniqueSlug(slug, existingSlugs);

    // Calculate read time
    const readTime = calculateReadTime(validatedData.content);

    // Generate ID
    const id = crypto.randomUUID();

    // Set published date if status is published
    const publishedAt =
      validatedData.status === ArticleStatus.PUBLISHED ? new Date() : null;

    // Insert article
    await db.insert(article).values({
      id,
      slug,
      title: validatedData.title,
      excerpt: validatedData.excerpt,
      content: validatedData.content,
      coverImageUrl: validatedData.coverImageUrl || null,
      category: validatedData.category,
      status: validatedData.status,
      featured: validatedData.featured,
      readTime,
      publishedAt,
      authorId: user.id,
    });

    // Revalidate paths
    revalidatePath("/news");
    revalidatePath("/admin/news");

    return { success: true, id, slug };
  } catch (error) {
    console.error("Create article error:", error);
    if (error instanceof Error) {
      return { success: false, error: error.message };
    }
    return { success: false, error: "Failed to create article" };
  }
}

export async function updateArticle(data: UpdateArticleInput) {
  try {
    await requireAdmin();

    // Validate input
    const validatedData = updateArticleSchema.parse(data);

    if (!validatedData.id) {
      throw new Error("Article ID is required");
    }

    // Get existing article
    const existingArticle = await db
      .select()
      .from(article)
      .where(eq(article.id, validatedData.id))
      .limit(1);

    if (!existingArticle[0]) {
      throw new Error("Article not found");
    }

    // Build update data
    const updateData: Record<string, unknown> = {};

    if (validatedData.title !== undefined) {
      updateData.title = validatedData.title;

      // Regenerate slug if title changed
      if (validatedData.title !== existingArticle[0].title) {
        let newSlug = generateSlug(validatedData.title);

        // Check if slug exists (excluding current article)
        const existingArticles = await db
          .select({ slug: article.slug })
          .from(article)
          .where(
            and(
              like(article.slug, `${newSlug}%`),
              not(eq(article.id, validatedData.id)),
            ),
          );

        const existingSlugs = existingArticles.map((a) => a.slug);
        newSlug = ensureUniqueSlug(newSlug, existingSlugs);
        updateData.slug = newSlug;
      }
    }

    if (validatedData.excerpt !== undefined) {
      updateData.excerpt = validatedData.excerpt;
    }

    if (validatedData.content !== undefined) {
      updateData.content = validatedData.content;
      updateData.readTime = calculateReadTime(validatedData.content);
    }

    if (validatedData.coverImageUrl !== undefined) {
      updateData.coverImageUrl = validatedData.coverImageUrl || null;
    }

    if (validatedData.category !== undefined) {
      updateData.category = validatedData.category;
    }

    if (validatedData.status !== undefined) {
      updateData.status = validatedData.status;

      // Set published date if status changed to published
      if (
        validatedData.status === ArticleStatus.PUBLISHED &&
        existingArticle[0].status !== ArticleStatus.PUBLISHED
      ) {
        updateData.publishedAt = new Date();
      }
    }

    if (validatedData.featured !== undefined) {
      updateData.featured = validatedData.featured;
    }

    // Update article
    await db
      .update(article)
      .set(updateData)
      .where(eq(article.id, validatedData.id));

    // Revalidate paths
    revalidatePath("/news");
    revalidatePath(`/news/${existingArticle[0].slug}`);
    revalidatePath("/admin/news");

    return { success: true };
  } catch (error) {
    console.error("Update article error:", error);
    if (error instanceof Error) {
      return { success: false, error: error.message };
    }
    return { success: false, error: "Failed to update article" };
  }
}

export async function deleteArticle(id: string) {
  try {
    await requireAdmin();

    // Get article to get slug for revalidation
    const existingArticle = await db
      .select({ slug: article.slug })
      .from(article)
      .where(eq(article.id, id))
      .limit(1);

    if (!existingArticle[0]) {
      throw new Error("Article not found");
    }

    // Delete article
    await db.delete(article).where(eq(article.id, id));

    // Revalidate paths
    revalidatePath("/news");
    revalidatePath(`/news/${existingArticle[0].slug}`);
    revalidatePath("/admin/news");

    return { success: true };
  } catch (error) {
    console.error("Delete article error:", error);
    if (error instanceof Error) {
      return { success: false, error: error.message };
    }
    return { success: false, error: "Failed to delete article" };
  }
}

export async function togglePublishStatus(id: string) {
  try {
    await requireAdmin();

    // Get current status
    const existingArticle = await db
      .select({ status: article.status, slug: article.slug })
      .from(article)
      .where(eq(article.id, id))
      .limit(1);

    if (!existingArticle[0]) {
      throw new Error("Article not found");
    }

    const newStatus =
      existingArticle[0].status === ArticleStatus.PUBLISHED
        ? ArticleStatus.DRAFT
        : ArticleStatus.PUBLISHED;

    const updateData: Record<string, unknown> = {
      status: newStatus,
    };

    // Set published date if publishing
    if (newStatus === ArticleStatus.PUBLISHED) {
      updateData.publishedAt = new Date();
    }

    // Update status
    await db.update(article).set(updateData).where(eq(article.id, id));

    // Revalidate paths
    revalidatePath("/news");
    revalidatePath(`/news/${existingArticle[0].slug}`);
    revalidatePath("/admin/news");

    return { success: true, newStatus };
  } catch (error) {
    console.error("Toggle publish status error:", error);
    if (error instanceof Error) {
      return { success: false, error: error.message };
    }
    return { success: false, error: "Failed to toggle publish status" };
  }
}

export async function toggleFeatured(id: string) {
  try {
    await requireAdmin();

    // Get current featured status
    const existingArticle = await db
      .select({ featured: article.featured, slug: article.slug })
      .from(article)
      .where(eq(article.id, id))
      .limit(1);

    if (!existingArticle[0]) {
      throw new Error("Article not found");
    }

    const newFeatured = !existingArticle[0].featured;

    // Update featured status
    await db
      .update(article)
      .set({ featured: newFeatured })
      .where(eq(article.id, id));

    // Revalidate paths
    revalidatePath("/news");
    revalidatePath(`/news/${existingArticle[0].slug}`);
    revalidatePath("/admin/news");

    return { success: true, featured: newFeatured };
  } catch (error) {
    console.error("Toggle featured error:", error);
    if (error instanceof Error) {
      return { success: false, error: error.message };
    }
    return { success: false, error: "Failed to toggle featured status" };
  }
}
