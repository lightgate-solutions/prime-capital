import { Calendar, Clock, User } from "lucide-react";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import type { ArticleCategory } from "@/lib/types/articles";
import { CategoryBadge } from "./category-badge";

interface ArticleCardProps {
  slug: string;
  title: string;
  excerpt: string;
  category: ArticleCategory;
  coverImageUrl?: string | null;
  publishedAt?: Date | null;
  readTime?: string | null;
  author?: {
    name: string;
    image?: string | null;
  } | null;
  featured?: boolean;
}

export function ArticleCard({
  slug,
  title,
  excerpt,
  category,
  coverImageUrl,
  publishedAt,
  readTime,
  author,
  featured,
}: ArticleCardProps) {
  return (
    <Link href={`/news/${slug}`} className="group">
      <Card className="h-full overflow-hidden transition-shadow hover:shadow-lg">
        {coverImageUrl && (
          <div className="relative h-48 w-full overflow-hidden">
            {/* biome-ignore lint/performance/noImgElement: External URLs not optimizable with next/image */}
            <img
              src={coverImageUrl}
              alt={title}
              className="h-full w-full object-cover transition-transform group-hover:scale-105"
            />
            {featured && (
              <div className="absolute top-2 right-2 bg-primary text-primary-foreground px-2 py-1 text-xs font-semibold rounded">
                Featured
              </div>
            )}
          </div>
        )}
        <CardHeader>
          <div className="flex items-center gap-2 mb-2">
            <CategoryBadge category={category} />
          </div>
          <h3 className="text-xl font-bold line-clamp-2 group-hover:text-primary transition-colors">
            {title}
          </h3>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground line-clamp-3">{excerpt}</p>
        </CardContent>
        <CardFooter className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
          {publishedAt && (
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span>{new Date(publishedAt).toLocaleDateString()}</span>
            </div>
          )}
          {readTime && (
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{readTime}</span>
            </div>
          )}
          {author && (
            <div className="flex items-center gap-1">
              <User className="h-4 w-4" />
              <span>{author.name}</span>
            </div>
          )}
        </CardFooter>
      </Card>
    </Link>
  );
}
