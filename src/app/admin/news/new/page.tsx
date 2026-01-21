import { ArticleForm } from "@/components/articles/article-form";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NewArticlePage() {
  return (
    <div className="container mx-auto py-8 px-4 max-w-4xl">
      <div className="mb-8">
        <Button variant="ghost" size="sm" asChild className="mb-4">
          <Link href="/admin/news">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Articles
          </Link>
        </Button>
        <h1 className="text-3xl font-bold mb-2">Create New Article</h1>
        <p className="text-muted-foreground">
          Fill in the details below to create a new article
        </p>
      </div>

      <ArticleForm />
    </div>
  );
}
