import { and, count, desc, eq, ilike, or, sql } from "drizzle-orm";
import { db } from "@/db";
import { article, user } from "@/db/schema";
import { ArticleStatus } from "@/lib/types/articles";

export interface GetArticlesParams {
  status?: string;
  category?: string;
  search?: string;
  featured?: boolean;
  limit?: number;
  offset?: number;
}

export async function getPublishedArticles(params: GetArticlesParams = {}) {
  const { category, search, featured, limit = 10, offset = 0 } = params;

  const conditions = [eq(article.status, ArticleStatus.PUBLISHED)];

  if (category) {
    conditions.push(eq(article.category, category));
  }

  if (search) {
    conditions.push(
      or(
        ilike(article.title, `%${search}%`),
        ilike(article.excerpt, `%${search}%`),
      ) || sql`true`,
    );
  }

  if (featured !== undefined) {
    conditions.push(eq(article.featured, featured));
  }

  const articles = await db
    .select({
      id: article.id,
      slug: article.slug,
      title: article.title,
      excerpt: article.excerpt,
      coverImageUrl: article.coverImageUrl,
      category: article.category,
      featured: article.featured,
      readTime: article.readTime,
      publishedAt: article.publishedAt,
      createdAt: article.createdAt,
      author: {
        id: user.id,
        name: user.name,
        image: user.image,
      },
    })
    .from(article)
    .leftJoin(user, eq(article.authorId, user.id))
    .where(and(...conditions))
    .orderBy(desc(article.publishedAt))
    .limit(limit)
    .offset(offset);

  return articles;
}

export async function getPublishedArticlesCount(
  params: GetArticlesParams = {},
) {
  const { category, search } = params;

  const conditions = [eq(article.status, ArticleStatus.PUBLISHED)];

  if (category) {
    conditions.push(eq(article.category, category));
  }

  if (search) {
    conditions.push(
      or(
        ilike(article.title, `%${search}%`),
        ilike(article.excerpt, `%${search}%`),
      ) || sql`true`,
    );
  }

  const result = await db
    .select({ count: count() })
    .from(article)
    .where(and(...conditions));

  return result[0]?.count || 0;
}

export async function getAdminArticles(params: GetArticlesParams = {}) {
  const { status, category, search, limit = 10, offset = 0 } = params;

  const conditions = [];

  if (status) {
    conditions.push(eq(article.status, status));
  }

  if (category) {
    conditions.push(eq(article.category, category));
  }

  if (search) {
    conditions.push(
      or(
        ilike(article.title, `%${search}%`),
        ilike(article.excerpt, `%${search}%`),
      ) || sql`true`,
    );
  }

  const whereClause = conditions.length > 0 ? and(...conditions) : undefined;

  const articles = await db
    .select({
      id: article.id,
      slug: article.slug,
      title: article.title,
      excerpt: article.excerpt,
      coverImageUrl: article.coverImageUrl,
      category: article.category,
      status: article.status,
      featured: article.featured,
      readTime: article.readTime,
      publishedAt: article.publishedAt,
      createdAt: article.createdAt,
      updatedAt: article.updatedAt,
      author: {
        id: user.id,
        name: user.name,
        image: user.image,
      },
    })
    .from(article)
    .leftJoin(user, eq(article.authorId, user.id))
    .where(whereClause)
    .orderBy(desc(article.updatedAt))
    .limit(limit)
    .offset(offset);

  return articles;
}

export async function getAdminArticlesCount(params: GetArticlesParams = {}) {
  const { status, category, search } = params;

  const conditions = [];

  if (status) {
    conditions.push(eq(article.status, status));
  }

  if (category) {
    conditions.push(eq(article.category, category));
  }

  if (search) {
    conditions.push(
      or(
        ilike(article.title, `%${search}%`),
        ilike(article.excerpt, `%${search}%`),
      ) || sql`true`,
    );
  }

  const whereClause = conditions.length > 0 ? and(...conditions) : undefined;

  const result = await db
    .select({ count: count() })
    .from(article)
    .where(whereClause);

  return result[0]?.count || 0;
}

export async function getArticleBySlug(
  slug: string,
  includeUnpublished = false,
) {
  const conditions = [eq(article.slug, slug)];

  if (!includeUnpublished) {
    conditions.push(eq(article.status, ArticleStatus.PUBLISHED));
  }

  const result = await db
    .select({
      id: article.id,
      slug: article.slug,
      title: article.title,
      excerpt: article.excerpt,
      content: article.content,
      coverImageUrl: article.coverImageUrl,
      category: article.category,
      status: article.status,
      featured: article.featured,
      readTime: article.readTime,
      publishedAt: article.publishedAt,
      createdAt: article.createdAt,
      updatedAt: article.updatedAt,
      author: {
        id: user.id,
        name: user.name,
        image: user.image,
      },
    })
    .from(article)
    .leftJoin(user, eq(article.authorId, user.id))
    .where(and(...conditions))
    .limit(1);

  return result[0] || null;
}

export async function getArticleById(id: string) {
  const result = await db
    .select({
      id: article.id,
      slug: article.slug,
      title: article.title,
      excerpt: article.excerpt,
      content: article.content,
      coverImageUrl: article.coverImageUrl,
      category: article.category,
      status: article.status,
      featured: article.featured,
      readTime: article.readTime,
      publishedAt: article.publishedAt,
      createdAt: article.createdAt,
      updatedAt: article.updatedAt,
      authorId: article.authorId,
      author: {
        id: user.id,
        name: user.name,
        image: user.image,
      },
    })
    .from(article)
    .leftJoin(user, eq(article.authorId, user.id))
    .where(eq(article.id, id))
    .limit(1);

  return result[0] || null;
}

export async function checkSlugExists(slug: string, excludeId?: string) {
  const conditions = [eq(article.slug, slug)];

  if (excludeId) {
    conditions.push(sql`${article.id} != ${excludeId}`);
  }

  const result = await db
    .select({ id: article.id })
    .from(article)
    .where(and(...conditions))
    .limit(1);

  return result.length > 0;
}

export async function getFeaturedArticles(limit = 3) {
  const articles = await db
    .select({
      id: article.id,
      slug: article.slug,
      title: article.title,
      excerpt: article.excerpt,
      coverImageUrl: article.coverImageUrl,
      category: article.category,
      featured: article.featured,
      readTime: article.readTime,
      publishedAt: article.publishedAt,
      author: {
        id: user.id,
        name: user.name,
        image: user.image,
      },
    })
    .from(article)
    .leftJoin(user, eq(article.authorId, user.id))
    .where(
      and(
        eq(article.status, ArticleStatus.PUBLISHED),
        eq(article.featured, true),
      ),
    )
    .orderBy(desc(article.publishedAt))
    .limit(limit);

  return articles;
}
