import { boolean, index, pgTable, text, timestamp } from "drizzle-orm/pg-core";
import { user } from "./auth";

export const career = pgTable(
  "career",
  {
    id: text("id").primaryKey(),
    slug: text("slug").notNull().unique(),
    title: text("title").notNull(),
    description: text("description").notNull(),
    location: text("location").notNull(),
    jobType: text("job_type").notNull(),
    salaryRange: text("salary_range"),
    requirements: text("requirements").notNull(),
    qualifications: text("qualifications").notNull(),
    responsibilities: text("responsibilities").notNull(),
    benefits: text("benefits"),
    applicationDeadline: timestamp("application_deadline"),
    applicationEmail: text("application_email"),
    applicationInstructions: text("application_instructions"),
    status: text("status").notNull().default("draft"),
    featured: boolean("featured").default(false).notNull(),
    authorId: text("author_id")
      .notNull()
      .references(() => user.id, { onDelete: "cascade" }),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at")
      .defaultNow()
      .$onUpdate(() => new Date())
      .notNull(),
    publishedAt: timestamp("published_at"),
  },
  (table) => [
    index("career_slug_idx").on(table.slug),
    index("career_status_idx").on(table.status),
    index("career_job_type_idx").on(table.jobType),
    index("career_location_idx").on(table.location),
    index("career_featured_idx").on(table.featured),
    index("career_deadline_idx").on(table.applicationDeadline),
  ],
);

export type Career = typeof career.$inferSelect;
export type NewCareer = typeof career.$inferInsert;
