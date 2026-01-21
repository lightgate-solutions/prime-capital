import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArticleForm } from "@/components/articles/article-form";
import { Button } from "@/components/ui/button";
import { getArticleById } from "@/db/queries/articles";

interface EditArticlePageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function EditArticlePage({
  params,
}: EditArticlePageProps) {
  const { id } = await params;
  const article = await getArticleById(id);

  if (!article) {
    notFound();
  }

  return (
    <div className="container mx-auto py-8 px-4 max-w-4xl">
      <div className="mb-8">
        <Button variant="ghost" size="sm" asChild className="mb-4">
          <Link href="/admin/news">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Articles
          </Link>
        </Button>
        <h1 className="text-3xl font-bold mb-2">Edit Article</h1>
        <p className="text-muted-foreground">
          Update the article details below
        </p>
      </div>

      <ArticleForm article={article} isEditing={true} />
    </div>
  );
}
