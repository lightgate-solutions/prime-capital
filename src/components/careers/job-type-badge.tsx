import { Badge } from "@/components/ui/badge";
import type { JobType } from "@/lib/types/careers";

const jobTypeColors: Record<string, string> = {
  "Full-time":
    "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
  "Part-time":
    "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300",
  Contract:
    "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300",
  Internship:
    "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
};

interface JobTypeBadgeProps {
  jobType: JobType;
  className?: string;
}

export function JobTypeBadge({ jobType, className }: JobTypeBadgeProps) {
  const colorClass =
    jobTypeColors[jobType] ||
    "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300";

  return (
    <Badge variant="secondary" className={`${colorClass} ${className || ""}`}>
      {jobType}
    </Badge>
  );
}
