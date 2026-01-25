import { and, count, desc, eq, ilike, or, sql } from "drizzle-orm";
import { db } from "@/db";
import { career, user } from "@/db/schema";
import { CareerStatus } from "@/lib/types/careers";

export interface GetCareersParams {
  status?: string;
  jobType?: string;
  location?: string;
  search?: string;
  featured?: boolean;
  limit?: number;
  offset?: number;
}

export async function getPublishedCareers(params: GetCareersParams = {}) {
  const {
    jobType,
    location,
    search,
    featured,
    limit = 10,
    offset = 0,
  } = params;

  const conditions = [eq(career.status, CareerStatus.PUBLISHED)];

  if (jobType) {
    conditions.push(eq(career.jobType, jobType));
  }

  if (location) {
    conditions.push(ilike(career.location, `%${location}%`));
  }

  if (search) {
    conditions.push(
      or(
        ilike(career.title, `%${search}%`),
        ilike(career.description, `%${search}%`),
      ) || sql`true`,
    );
  }

  if (featured !== undefined) {
    conditions.push(eq(career.featured, featured));
  }

  const careers = await db
    .select({
      id: career.id,
      slug: career.slug,
      title: career.title,
      description: career.description,
      location: career.location,
      jobType: career.jobType,
      salaryRange: career.salaryRange,
      featured: career.featured,
      applicationDeadline: career.applicationDeadline,
      publishedAt: career.publishedAt,
      createdAt: career.createdAt,
      author: {
        id: user.id,
        name: user.name,
        image: user.image,
      },
    })
    .from(career)
    .leftJoin(user, eq(career.authorId, user.id))
    .where(and(...conditions))
    .orderBy(desc(career.applicationDeadline), desc(career.publishedAt))
    .limit(limit)
    .offset(offset);

  return careers;
}

export async function getPublishedCareersCount(params: GetCareersParams = {}) {
  const { jobType, location, search } = params;

  const conditions = [eq(career.status, CareerStatus.PUBLISHED)];

  if (jobType) {
    conditions.push(eq(career.jobType, jobType));
  }

  if (location) {
    conditions.push(ilike(career.location, `%${location}%`));
  }

  if (search) {
    conditions.push(
      or(
        ilike(career.title, `%${search}%`),
        ilike(career.description, `%${search}%`),
      ) || sql`true`,
    );
  }

  const result = await db
    .select({ count: count() })
    .from(career)
    .where(and(...conditions));

  return result[0]?.count || 0;
}

export async function getAdminCareers(params: GetCareersParams = {}) {
  const { status, jobType, location, search, limit = 10, offset = 0 } = params;

  const conditions = [];

  if (status) {
    conditions.push(eq(career.status, status));
  }

  if (jobType) {
    conditions.push(eq(career.jobType, jobType));
  }

  if (location) {
    conditions.push(ilike(career.location, `%${location}%`));
  }

  if (search) {
    conditions.push(
      or(
        ilike(career.title, `%${search}%`),
        ilike(career.description, `%${search}%`),
      ) || sql`true`,
    );
  }

  const whereClause = conditions.length > 0 ? and(...conditions) : undefined;

  const careers = await db
    .select({
      id: career.id,
      slug: career.slug,
      title: career.title,
      description: career.description,
      location: career.location,
      jobType: career.jobType,
      salaryRange: career.salaryRange,
      status: career.status,
      featured: career.featured,
      applicationDeadline: career.applicationDeadline,
      publishedAt: career.publishedAt,
      createdAt: career.createdAt,
      updatedAt: career.updatedAt,
      author: {
        id: user.id,
        name: user.name,
        image: user.image,
      },
    })
    .from(career)
    .leftJoin(user, eq(career.authorId, user.id))
    .where(whereClause)
    .orderBy(desc(career.updatedAt))
    .limit(limit)
    .offset(offset);

  return careers;
}

export async function getAdminCareersCount(params: GetCareersParams = {}) {
  const { status, jobType, location, search } = params;

  const conditions = [];

  if (status) {
    conditions.push(eq(career.status, status));
  }

  if (jobType) {
    conditions.push(eq(career.jobType, jobType));
  }

  if (location) {
    conditions.push(ilike(career.location, `%${location}%`));
  }

  if (search) {
    conditions.push(
      or(
        ilike(career.title, `%${search}%`),
        ilike(career.description, `%${search}%`),
      ) || sql`true`,
    );
  }

  const whereClause = conditions.length > 0 ? and(...conditions) : undefined;

  const result = await db
    .select({ count: count() })
    .from(career)
    .where(whereClause);

  return result[0]?.count || 0;
}

export async function getCareerBySlug(
  slug: string,
  includeUnpublished = false,
) {
  const conditions = [eq(career.slug, slug)];

  if (!includeUnpublished) {
    conditions.push(eq(career.status, CareerStatus.PUBLISHED));
  }

  const result = await db
    .select({
      id: career.id,
      slug: career.slug,
      title: career.title,
      description: career.description,
      location: career.location,
      jobType: career.jobType,
      salaryRange: career.salaryRange,
      requirements: career.requirements,
      qualifications: career.qualifications,
      responsibilities: career.responsibilities,
      benefits: career.benefits,
      applicationDeadline: career.applicationDeadline,
      applicationEmail: career.applicationEmail,
      applicationInstructions: career.applicationInstructions,
      status: career.status,
      featured: career.featured,
      publishedAt: career.publishedAt,
      createdAt: career.createdAt,
      updatedAt: career.updatedAt,
      author: {
        id: user.id,
        name: user.name,
        image: user.image,
      },
    })
    .from(career)
    .leftJoin(user, eq(career.authorId, user.id))
    .where(and(...conditions))
    .limit(1);

  return result[0] || null;
}

export async function getCareerById(id: string) {
  const result = await db
    .select({
      id: career.id,
      slug: career.slug,
      title: career.title,
      description: career.description,
      location: career.location,
      jobType: career.jobType,
      salaryRange: career.salaryRange,
      requirements: career.requirements,
      qualifications: career.qualifications,
      responsibilities: career.responsibilities,
      benefits: career.benefits,
      applicationDeadline: career.applicationDeadline,
      applicationEmail: career.applicationEmail,
      applicationInstructions: career.applicationInstructions,
      status: career.status,
      featured: career.featured,
      publishedAt: career.publishedAt,
      createdAt: career.createdAt,
      updatedAt: career.updatedAt,
      authorId: career.authorId,
      author: {
        id: user.id,
        name: user.name,
        image: user.image,
      },
    })
    .from(career)
    .leftJoin(user, eq(career.authorId, user.id))
    .where(eq(career.id, id))
    .limit(1);

  return result[0] || null;
}

export async function checkSlugExists(slug: string, excludeId?: string) {
  const conditions = [eq(career.slug, slug)];

  if (excludeId) {
    conditions.push(sql`${career.id} != ${excludeId}`);
  }

  const result = await db
    .select({ id: career.id })
    .from(career)
    .where(and(...conditions))
    .limit(1);

  return result.length > 0;
}

export async function getFeaturedCareers(limit = 3) {
  const careers = await db
    .select({
      id: career.id,
      slug: career.slug,
      title: career.title,
      description: career.description,
      location: career.location,
      jobType: career.jobType,
      salaryRange: career.salaryRange,
      featured: career.featured,
      applicationDeadline: career.applicationDeadline,
      publishedAt: career.publishedAt,
      author: {
        id: user.id,
        name: user.name,
        image: user.image,
      },
    })
    .from(career)
    .leftJoin(user, eq(career.authorId, user.id))
    .where(
      and(eq(career.status, CareerStatus.PUBLISHED), eq(career.featured, true)),
    )
    .orderBy(desc(career.applicationDeadline), desc(career.publishedAt))
    .limit(limit);

  return careers;
}
