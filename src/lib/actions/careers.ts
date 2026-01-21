"use server";

import { db } from "@/db";
import { career } from "@/db/schema";
import { auth } from "@/lib/auth";
import {
  CareerStatus,
  createCareerSchema,
  updateCareerSchema,
  type CreateCareerInput,
  type UpdateCareerInput,
} from "@/lib/types/careers";
import { ensureUniqueSlug, generateSlug } from "@/lib/utils/slug";
import { and, eq, like, not, sql } from "drizzle-orm";
import { headers } from "next/headers";
import { revalidatePath } from "next/cache";

async function requireAdmin() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session?.user) {
    throw new Error("Unauthorized: Please log in");
  }

  if (session.user.email !== (process.env.ADMIN_EMAIL || "elameendaiyabu@gmail.com") && (session.user as any).role !== "admin") {
    throw new Error("Forbidden: Admin access required");
  }

  return session.user;
}

export async function createCareer(data: CreateCareerInput) {
  try {
    const user = await requireAdmin();

    // Validate input
    const validatedData = createCareerSchema.parse(data);

    // Generate slug if not provided
    let slug = validatedData.slug || generateSlug(validatedData.title);

    // Ensure slug is unique
    const existingCareers = await db
      .select({ slug: career.slug })
      .from(career)
      .where(like(career.slug, `${slug}%`));

    const existingSlugs = existingCareers.map((c) => c.slug);
    slug = ensureUniqueSlug(slug, existingSlugs);

    // Generate ID
    const id = crypto.randomUUID();

    // Set published date if status is published
    const publishedAt =
      validatedData.status === CareerStatus.PUBLISHED ? new Date() : null;

    // Insert career
    await db.insert(career).values({
      id,
      slug,
      title: validatedData.title,
      description: validatedData.description,
      location: validatedData.location,
      jobType: validatedData.jobType,
      salaryRange: validatedData.salaryRange || null,
      requirements: validatedData.requirements,
      qualifications: validatedData.qualifications,
      responsibilities: validatedData.responsibilities,
      benefits: validatedData.benefits || null,
      applicationDeadline: validatedData.applicationDeadline || null,
      applicationEmail: validatedData.applicationEmail || null,
      applicationInstructions: validatedData.applicationInstructions || null,
      status: validatedData.status,
      featured: validatedData.featured,
      publishedAt,
      authorId: user.id,
    });

    // Revalidate paths
    revalidatePath("/careers");
    revalidatePath("/admin/careers");

    return { success: true, id, slug };
  } catch (error) {
    console.error("Create career error:", error);
    if (error instanceof Error) {
      return { success: false, error: error.message };
    }
    return { success: false, error: "Failed to create career" };
  }
}

export async function updateCareer(data: UpdateCareerInput) {
  try {
    await requireAdmin();

    // Validate input
    const validatedData = updateCareerSchema.parse(data);

    if (!validatedData.id) {
      throw new Error("Career ID is required");
    }

    // Get existing career
    const existingCareer = await db
      .select()
      .from(career)
      .where(eq(career.id, validatedData.id))
      .limit(1);

    if (!existingCareer[0]) {
      throw new Error("Career not found");
    }

    // Build update data
    const updateData: Record<string, unknown> = {};

    if (validatedData.title !== undefined) {
      updateData.title = validatedData.title;

      // Regenerate slug if title changed
      if (validatedData.title !== existingCareer[0].title) {
        let newSlug = generateSlug(validatedData.title);

        // Check if slug exists (excluding current career)
        const existingCareers = await db
          .select({ slug: career.slug })
          .from(career)
          .where(
            and(
              like(career.slug, `${newSlug}%`),
              not(eq(career.id, validatedData.id)),
            ),
          );

        const existingSlugs = existingCareers.map((c) => c.slug);
        newSlug = ensureUniqueSlug(newSlug, existingSlugs);
        updateData.slug = newSlug;
      }
    }

    if (validatedData.description !== undefined) {
      updateData.description = validatedData.description;
    }

    if (validatedData.location !== undefined) {
      updateData.location = validatedData.location;
    }

    if (validatedData.jobType !== undefined) {
      updateData.jobType = validatedData.jobType;
    }

    if (validatedData.salaryRange !== undefined) {
      updateData.salaryRange = validatedData.salaryRange || null;
    }

    if (validatedData.requirements !== undefined) {
      updateData.requirements = validatedData.requirements;
    }

    if (validatedData.qualifications !== undefined) {
      updateData.qualifications = validatedData.qualifications;
    }

    if (validatedData.responsibilities !== undefined) {
      updateData.responsibilities = validatedData.responsibilities;
    }

    if (validatedData.benefits !== undefined) {
      updateData.benefits = validatedData.benefits || null;
    }

    if (validatedData.applicationDeadline !== undefined) {
      updateData.applicationDeadline = validatedData.applicationDeadline || null;
    }

    if (validatedData.applicationEmail !== undefined) {
      updateData.applicationEmail = validatedData.applicationEmail || null;
    }

    if (validatedData.applicationInstructions !== undefined) {
      updateData.applicationInstructions = validatedData.applicationInstructions || null;
    }

    if (validatedData.status !== undefined) {
      updateData.status = validatedData.status;

      // Set published date if status changed to published
      if (
        validatedData.status === CareerStatus.PUBLISHED &&
        existingCareer[0].status !== CareerStatus.PUBLISHED
      ) {
        updateData.publishedAt = new Date();
      }
    }

    if (validatedData.featured !== undefined) {
      updateData.featured = validatedData.featured;
    }

    // Update career
    await db
      .update(career)
      .set(updateData)
      .where(eq(career.id, validatedData.id));

    // Revalidate paths
    revalidatePath("/careers");
    revalidatePath(`/careers/${existingCareer[0].slug}`);
    revalidatePath("/admin/careers");

    return { success: true };
  } catch (error) {
    console.error("Update career error:", error);
    if (error instanceof Error) {
      return { success: false, error: error.message };
    }
    return { success: false, error: "Failed to update career" };
  }
}

export async function deleteCareer(id: string) {
  try {
    await requireAdmin();

    // Get career to get slug for revalidation
    const existingCareer = await db
      .select({ slug: career.slug })
      .from(career)
      .where(eq(career.id, id))
      .limit(1);

    if (!existingCareer[0]) {
      throw new Error("Career not found");
    }

    // Delete career
    await db.delete(career).where(eq(career.id, id));

    // Revalidate paths
    revalidatePath("/careers");
    revalidatePath(`/careers/${existingCareer[0].slug}`);
    revalidatePath("/admin/careers");

    return { success: true };
  } catch (error) {
    console.error("Delete career error:", error);
    if (error instanceof Error) {
      return { success: false, error: error.message };
    }
    return { success: false, error: "Failed to delete career" };
  }
}

export async function togglePublishStatus(id: string) {
  try {
    await requireAdmin();

    // Get current status
    const existingCareer = await db
      .select({ status: career.status, slug: career.slug })
      .from(career)
      .where(eq(career.id, id))
      .limit(1);

    if (!existingCareer[0]) {
      throw new Error("Career not found");
    }

    const newStatus =
      existingCareer[0].status === CareerStatus.PUBLISHED
        ? CareerStatus.DRAFT
        : CareerStatus.PUBLISHED;

    const updateData: Record<string, unknown> = {
      status: newStatus,
    };

    // Set published date if publishing
    if (newStatus === CareerStatus.PUBLISHED) {
      updateData.publishedAt = new Date();
    }

    // Update status
    await db.update(career).set(updateData).where(eq(career.id, id));

    // Revalidate paths
    revalidatePath("/careers");
    revalidatePath(`/careers/${existingCareer[0].slug}`);
    revalidatePath("/admin/careers");

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
    const existingCareer = await db
      .select({ featured: career.featured, slug: career.slug })
      .from(career)
      .where(eq(career.id, id))
      .limit(1);

    if (!existingCareer[0]) {
      throw new Error("Career not found");
    }

    const newFeatured = !existingCareer[0].featured;

    // Update featured status
    await db
      .update(career)
      .set({ featured: newFeatured })
      .where(eq(career.id, id));

    // Revalidate paths
    revalidatePath("/careers");
    revalidatePath(`/careers/${existingCareer[0].slug}`);
    revalidatePath("/admin/careers");

    return { success: true, featured: newFeatured };
  } catch (error) {
    console.error("Toggle featured error:", error);
    if (error instanceof Error) {
      return { success: false, error: error.message };
    }
    return { success: false, error: "Failed to toggle featured status" };
  }
}
