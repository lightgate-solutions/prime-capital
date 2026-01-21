import { Badge } from "@/components/ui/badge";
import type { ArticleCategory } from "@/lib/types/articles";

const categoryColors: Record<string, string> = {
  "Company News":
    "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
  "Market Insights":
    "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300",
  "Investment Tips":
    "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
  "Industry Analysis":
    "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300",
  "Economic Outlook":
    "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
  "Financial Planning":
    "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300",
};

interface CategoryBadgeProps {
  category: ArticleCategory;
  className?: string;
}

export function CategoryBadge({ category, className }: CategoryBadgeProps) {
  const colorClass =
    categoryColors[category] ||
    "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300";

  return (
    <Badge variant="secondary" className={`${colorClass} ${className || ""}`}>
      {category}
    </Badge>
  );
}
