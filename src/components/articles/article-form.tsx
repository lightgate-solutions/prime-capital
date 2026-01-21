"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import {
  ArticleCategories,
  ArticleStatus,
  createArticleSchema,
  type CreateArticleInput,
  type ArticleCategory,
} from "@/lib/types/articles";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { ArticleEditor } from "./article-editor";
import { createArticle, updateArticle } from "@/lib/actions/articles";
import type { Article } from "@/lib/types/articles";

interface ArticleFormProps {
  article?: Article;
  isEditing?: boolean;
}

export function ArticleForm({ article, isEditing = false }: ArticleFormProps) {
  const router = useRouter();

  const form = useForm<CreateArticleInput>({
    resolver: zodResolver(createArticleSchema),
    defaultValues: {
      title: article?.title || "",
      excerpt: article?.excerpt || "",
      content: article?.content || "",
      coverImageUrl: article?.coverImageUrl || "",
      category: (article?.category as ArticleCategory) || ArticleCategories[0],
      status:
        (article?.status as (typeof ArticleStatus)[keyof typeof ArticleStatus]) ||
        ArticleStatus.DRAFT,
      featured: article?.featured || false,
    },
  });

  const { isSubmitting } = form.formState;

  async function onSubmit(data: CreateArticleInput) {
    try {
      let result;

      if (isEditing && article) {
        result = await updateArticle({
          id: article.id,
          ...data,
        });
      } else {
        result = await createArticle(data);
      }

      if (result.success) {
        toast.success(
          isEditing
            ? "Article updated successfully"
            : "Article created successfully",
        );
        router.push("/admin/news");
        router.refresh();
      } else {
        toast.error(result.error || "Failed to save article");
      }
    } catch (error) {
      toast.error("An unexpected error occurred");
      console.error(error);
    }
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="title">Title</FieldLabel>
          <Controller
            name="title"
            control={form.control}
            render={({ field }) => (
              <Input
                {...field}
                id="title"
                placeholder="Enter article title"
                disabled={isSubmitting}
              />
            )}
          />
          <FieldError errors={[form.formState.errors.title]} />
        </Field>

        <Field>
          <FieldLabel htmlFor="excerpt">Excerpt</FieldLabel>
          <FieldDescription>
            A short summary of the article (displayed in article cards)
          </FieldDescription>
          <Controller
            name="excerpt"
            control={form.control}
            render={({ field }) => (
              <Textarea
                {...field}
                id="excerpt"
                placeholder="Enter a brief excerpt"
                rows={3}
                disabled={isSubmitting}
              />
            )}
          />
          <FieldError errors={[form.formState.errors.excerpt]} />
        </Field>

        <Field>
          <FieldLabel htmlFor="content">Content</FieldLabel>
          <Controller
            name="content"
            control={form.control}
            render={({ field }) => (
              <ArticleEditor
                content={field.value}
                onChange={field.onChange}
                placeholder="Start writing your article..."
              />
            )}
          />
          <FieldError errors={[form.formState.errors.content]} />
        </Field>

        <Field>
          <FieldLabel htmlFor="coverImageUrl">
            Cover Image URL (Optional)
          </FieldLabel>
          <FieldDescription>
            Enter a URL for the article cover image
          </FieldDescription>
          <Controller
            name="coverImageUrl"
            control={form.control}
            render={({ field }) => (
              <Input
                {...field}
                id="coverImageUrl"
                placeholder="https://example.com/image.jpg"
                disabled={isSubmitting}
              />
            )}
          />
          <FieldError errors={[form.formState.errors.coverImageUrl]} />
        </Field>

        <Field>
          <FieldLabel htmlFor="category">Category</FieldLabel>
          <Controller
            name="category"
            control={form.control}
            render={({ field }) => (
              <Select {...field} id="category" disabled={isSubmitting}>
                {ArticleCategories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </Select>
            )}
          />
          <FieldError errors={[form.formState.errors.category]} />
        </Field>

        <Field>
          <FieldLabel htmlFor="status">Status</FieldLabel>
          <Controller
            name="status"
            control={form.control}
            render={({ field }) => (
              <Select {...field} id="status" disabled={isSubmitting}>
                <option value={ArticleStatus.DRAFT}>Draft</option>
                <option value={ArticleStatus.PUBLISHED}>Published</option>
              </Select>
            )}
          />
          <FieldError errors={[form.formState.errors.status]} />
        </Field>

        <Field>
          <FieldLabel htmlFor="featured" className="flex items-center gap-2">
            <Controller
              name="featured"
              control={form.control}
              render={({ field: { value, onChange, ...field } }) => (
                <Checkbox
                  {...field}
                  id="featured"
                  checked={value}
                  onChange={(e) => onChange(e.target.checked)}
                  disabled={isSubmitting}
                />
              )}
            />
            <span>Featured Article</span>
          </FieldLabel>
          <FieldDescription>
            Featured articles appear prominently on the news page
          </FieldDescription>
          <FieldError errors={[form.formState.errors.featured]} />
        </Field>
      </FieldGroup>

      <div className="flex gap-3">
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting
            ? isEditing
              ? "Updating..."
              : "Creating..."
            : isEditing
              ? "Update Article"
              : "Create Article"}
        </Button>
        <Button
          type="button"
          variant="outline"
          onClick={() => router.push("/admin/news")}
          disabled={isSubmitting}
        >
          Cancel
        </Button>
      </div>
    </form>
  );
}
