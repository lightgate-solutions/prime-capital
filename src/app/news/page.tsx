import { Calendar, Clock, Search } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";
import { ArticleCard } from "@/components/articles/article-card";
import { ArticleSearch } from "@/components/articles/article-search";
import { CategoryBadge } from "@/components/articles/category-badge";
import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { EmptyState } from "@/components/ui/empty-state";
import { Pagination } from "@/components/ui/pagination";
import {
  getFeaturedArticles,
  getPublishedArticles,
  getPublishedArticlesCount,
} from "@/db/queries/articles";
import type { ArticleCategory } from "@/lib/types/articles";

interface NewsPageProps {
  searchParams: Promise<{
    search?: string;
    category?: string;
    page?: string;
  }>;
}

export default async function NewsPage({ searchParams }: NewsPageProps) {
  const params = await searchParams;
  const search = params.search || "";
  const category = params.category || "";
  const page = Number.parseInt(params.page || "1", 10);
  const limit = 9;
  const offset = (page - 1) * limit;

  const [featuredArticles, articles, totalCount] = await Promise.all([
    getFeaturedArticles(2),
    getPublishedArticles({ search, category, limit, offset }),
    getPublishedArticlesCount({ search, category }),
  ]);

  const totalPages = Math.ceil(totalCount / limit);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-28 pb-12 md:pt-36 md:pb-16 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-background via-background to-primary/5">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold mb-6 text-balance">
            News & <span className="text-primary">Insights</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Stay informed with the latest company updates, market insights, and
            investment perspectives from Prime Capital.
          </p>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Suspense fallback={<div>Loading...</div>}>
            <ArticleSearch placeholder="Search articles..." />
          </Suspense>
        </div>
      </section>

      {/* Featured News */}
      {featuredArticles.length > 0 && !search && (
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-display text-3xl font-bold mb-10">
              Featured Stories
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredArticles.map((article) => (
                <Link
                  key={article.id}
                  href={`/news/${article.slug}`}
                  className="group"
                >
                  <Card className="h-full hover:shadow-2xl transition-all duration-300 overflow-hidden border-primary/5 hover:border-primary/20">
                    <CardContent className="pt-6">
                      <div className="flex items-center gap-3 mb-4">
                        <CategoryBadge
                          category={article.category as ArticleCategory}
                        />
                        <div className="flex items-center gap-4 text-xs text-muted-foreground">
                          {article.publishedAt && (
                            <span className="flex items-center gap-1">
                              <Calendar className="h-3 w-3" />
                              {new Date(
                                article.publishedAt,
                              ).toLocaleDateString()}
                            </span>
                          )}
                          {article.readTime && (
                            <span className="flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              {article.readTime}
                            </span>
                          )}
                        </div>
                      </div>
                      <h3 className="font-display text-2xl font-bold mb-3 group-hover:text-primary transition-colors text-balance">
                        {article.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed line-clamp-3">
                        {article.excerpt}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All News */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display text-2xl font-bold mb-8">
            {search ? "Search Results" : "Recent Updates"}
          </h2>
          {articles.length === 0 ? (
            <EmptyState
              title="No articles found"
              description={
                search
                  ? "Try adjusting your search terms"
                  : "Check back soon for new articles"
              }
              icon={<Search className="h-16 w-16" />}
            />
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {articles.map((article) => (
                  <ArticleCard
                    key={article.id}
                    slug={article.slug}
                    title={article.title}
                    excerpt={article.excerpt}
                    category={article.category as ArticleCategory}
                    coverImageUrl={article.coverImageUrl}
                    publishedAt={article.publishedAt}
                    readTime={article.readTime}
                    author={article.author}
                    featured={article.featured}
                  />
                ))}
              </div>
              {totalPages > 1 && (
                <Pagination currentPage={page} totalPages={totalPages} />
              )}
            </>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Card className="border-2 border-primary/20 bg-linear-to-br from-background to-primary/5">
            <CardContent className="pt-10 pb-10 text-center">
              <h3 className="font-display text-3xl md:text-4xl font-bold mb-4 text-balance">
                Stay Informed
              </h3>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
                Subscribe to our newsletter to receive the latest market
                insights, investment perspectives, and company updates directly
                in your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-xl border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                />
                <button
                  type="button"
                  className="px-8 py-3 bg-primary text-primary-foreground rounded-xl font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
                >
                  Subscribe
                </button>
              </div>
              <p className="text-xs text-muted-foreground mt-6">
                By subscribing, you agree to receive marketing communications
                from Prime Capital. You can unsubscribe at any time.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
}
