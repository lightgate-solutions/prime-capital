import { relations } from "drizzle-orm";
import { boolean, index, pgTable, text, timestamp } from "drizzle-orm/pg-core";
import { user } from "./auth";

export const article = pgTable(
  "article",
  {
    id: text("id").primaryKey(),
    slug: text("slug").notNull().unique(),
    title: text("title").notNull(),
    excerpt: text("excerpt").notNull(),
    content: text("content").notNull(), // TipTap HTML output
    coverImageUrl: text("cover_image_url"),
    category: text("category").notNull(), // e.g., "Company News", "Market Insights"
    status: text("status").notNull().default("draft"), // "draft" | "published"
    featured: boolean("featured").default(false).notNull(),
    readTime: text("read_time"), // e.g., "5 min read"
    publishedAt: timestamp("published_at"),
    authorId: text("author_id")
      .notNull()
      .references(() => user.id, { onDelete: "cascade" }),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at")
      .defaultNow()
      .$onUpdate(() => /* @__PURE__ */ new Date())
      .notNull(),
  },
  (table) => [
    index("article_slug_idx").on(table.slug),
    index("article_status_idx").on(table.status),
    index("article_category_idx").on(table.category),
    index("article_featured_idx").on(table.featured),
    index("article_publishedAt_idx").on(table.publishedAt),
  ],
);

export const articleRelations = relations(article, ({ one }) => ({
  author: one(user, {
    fields: [article.authorId],
    references: [user.id],
  }),
}));
