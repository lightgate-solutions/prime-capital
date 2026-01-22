CREATE TABLE "article" (
	"id" text PRIMARY KEY NOT NULL,
	"slug" text NOT NULL,
	"title" text NOT NULL,
	"excerpt" text NOT NULL,
	"content" text NOT NULL,
	"cover_image_url" text,
	"category" text NOT NULL,
	"status" text DEFAULT 'draft' NOT NULL,
	"featured" boolean DEFAULT false NOT NULL,
	"read_time" text,
	"published_at" timestamp,
	"author_id" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "article_slug_unique" UNIQUE("slug")
);
--> statement-breakpoint
CREATE TABLE "career" (
	"id" text PRIMARY KEY NOT NULL,
	"slug" text NOT NULL,
	"title" text NOT NULL,
	"description" text NOT NULL,
	"location" text NOT NULL,
	"job_type" text NOT NULL,
	"salary_range" text,
	"requirements" text NOT NULL,
	"qualifications" text NOT NULL,
	"responsibilities" text NOT NULL,
	"benefits" text,
	"application_deadline" timestamp,
	"application_email" text,
	"application_instructions" text,
	"status" text DEFAULT 'draft' NOT NULL,
	"featured" boolean DEFAULT false NOT NULL,
	"author_id" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"published_at" timestamp,
	CONSTRAINT "career_slug_unique" UNIQUE("slug")
);
--> statement-breakpoint
ALTER TABLE "article" ADD CONSTRAINT "article_author_id_user_id_fk" FOREIGN KEY ("author_id") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "career" ADD CONSTRAINT "career_author_id_user_id_fk" FOREIGN KEY ("author_id") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "article_slug_idx" ON "article" USING btree ("slug");--> statement-breakpoint
CREATE INDEX "article_status_idx" ON "article" USING btree ("status");--> statement-breakpoint
CREATE INDEX "article_category_idx" ON "article" USING btree ("category");--> statement-breakpoint
CREATE INDEX "article_featured_idx" ON "article" USING btree ("featured");--> statement-breakpoint
CREATE INDEX "article_publishedAt_idx" ON "article" USING btree ("published_at");--> statement-breakpoint
CREATE INDEX "career_slug_idx" ON "career" USING btree ("slug");--> statement-breakpoint
CREATE INDEX "career_status_idx" ON "career" USING btree ("status");--> statement-breakpoint
CREATE INDEX "career_job_type_idx" ON "career" USING btree ("job_type");--> statement-breakpoint
CREATE INDEX "career_location_idx" ON "career" USING btree ("location");--> statement-breakpoint
CREATE INDEX "career_featured_idx" ON "career" USING btree ("featured");--> statement-breakpoint
CREATE INDEX "career_deadline_idx" ON "career" USING btree ("application_deadline");