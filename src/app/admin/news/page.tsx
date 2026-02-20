import { Edit, FileText, Plus } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";
import { ArticleSearch } from "@/components/articles/article-search";
import { CategoryBadge } from "@/components/articles/category-badge";
import { DeleteArticleDialog } from "@/components/articles/delete-article-dialog";
import { Button } from "@/components/ui/button";
import { Card, CardFooter, CardHeader } from "@/components/ui/card";
import { EmptyState } from "@/components/ui/empty-state";
import { Pagination } from "@/components/ui/pagination";
import { getAdminArticles, getAdminArticlesCount } from "@/db/queries/articles";
import type { ArticleCategory } from "@/lib/types/articles";

interface AdminNewsPageProps {
  searchParams: Promise<{
    search?: string;
    status?: string;
    category?: string;
    page?: string;
  }>;
}

export default async function AdminNewsPage({
  searchParams,
}: AdminNewsPageProps) {
  const params = await searchParams;
  const search = params.search || "";
  const status = params.status || "";
  const category = params.category || "";
  const page = Number.parseInt(params.page || "1", 10);
  const limit = 10;
  const offset = (page - 1) * limit;

  const [articles, totalCount] = await Promise.all([
    getAdminArticles({ search, status, category, limit, offset }),
    getAdminArticlesCount({ search, status, category }),
  ]);

  const totalPages = Math.ceil(totalCount / limit);

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-display text-3xl font-bold mb-2">Manage Articles</h1>
          <p className="text-muted-foreground">
            Create, edit, and manage your news articles
          </p>
        </div>
        <Button asChild>
          <Link href="/admin/news/new">
            <Plus className="h-4 w-4 mr-2" />
            New Article
          </Link>
        </Button>
      </div>

      <div className="mb-6">
        <Suspense fallback={<div>Loading...</div>}>
          <ArticleSearch placeholder="Search articles..." />
        </Suspense>
      </div>

      {articles.length === 0 ? (
        <EmptyState
          title="No articles found"
          description={
            search
              ? "Try adjusting your search terms"
              : "Get started by creating your first article"
          }
          icon={<FileText className="h-16 w-16" />}
          action={
            !search && (
              <Button asChild>
                <Link href="/admin/news/new">
                  <Plus className="h-4 w-4 mr-2" />
                  Create Article
                </Link>
              </Button>
            )
          }
        />
      ) : (
        <>
          <div className="grid gap-4 mb-6">
            {articles.map((article) => (
              <Card key={article.id}>
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <CategoryBadge
                          category={article.category as ArticleCategory}
                        />
                        <span
                          className={`px-2 py-1 text-xs rounded ${
                            article.status === "published"
                              ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                              : "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300"
                          }`}
                        >
                          {article.status}
                        </span>
                        {article.featured && (
                          <span className="px-2 py-1 text-xs rounded bg-primary/10 text-primary">
                            Featured
                          </span>
                        )}
                      </div>
                      <h3 className="font-display text-xl font-bold mb-1">
                        {article.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {article.excerpt}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" asChild>
                        <Link href={`/admin/news/${article.id}/edit`}>
                          <Edit className="h-4 w-4 mr-1" />
                          Edit
                        </Link>
                      </Button>
                      <DeleteArticleDialog
                        articleId={article.id}
                        articleTitle={article.title}
                      />
                    </div>
                  </div>
                </CardHeader>
                <CardFooter className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                  <span>By {article.author?.name || "Unknown"}</span>
                  <span>•</span>
                  <span>
                    Updated{" "}
                    {article.updatedAt
                      ? new Date(article.updatedAt).toLocaleDateString()
                      : "N/A"}
                  </span>
                  {article.publishedAt && (
                    <>
                      <span>•</span>
                      <span>
                        Published{" "}
                        {new Date(article.publishedAt).toLocaleDateString()}
                      </span>
                    </>
                  )}
                </CardFooter>
              </Card>
            ))}
          </div>

          {totalPages > 1 && (
            <Pagination currentPage={page} totalPages={totalPages} />
          )}
        </>
      )}
    </div>
  );
}
