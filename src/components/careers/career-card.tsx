import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { JobTypeBadge } from "./job-type-badge";
import type { JobType } from "@/lib/types/careers";
import { MapPin, Calendar, DollarSign } from "lucide-react";

interface CareerCardProps {
  slug: string;
  title: string;
  description: string;
  location: string;
  jobType: JobType;
  salaryRange?: string | null;
  applicationDeadline?: Date | null;
  featured?: boolean;
}

export function CareerCard({
  slug,
  title,
  description,
  location,
  jobType,
  salaryRange,
  applicationDeadline,
  featured,
}: CareerCardProps) {
  // Check if deadline is approaching (within 7 days)
  const isDeadlineApproaching = applicationDeadline
    ? new Date(applicationDeadline).getTime() - new Date().getTime() <
      7 * 24 * 60 * 60 * 1000
    : false;

  return (
    <Link href={`/careers/${slug}`} className="group">
      <Card className="h-full overflow-hidden transition-shadow hover:shadow-lg">
        <CardHeader>
          <div className="flex items-center gap-2 mb-2">
            <JobTypeBadge jobType={jobType} />
            {featured && (
              <span className="px-2 py-1 text-xs rounded bg-primary text-primary-foreground font-semibold">
                Featured
              </span>
            )}
            {isDeadlineApproaching && (
              <span className="px-2 py-1 text-xs rounded bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300 font-semibold">
                Urgent
              </span>
            )}
          </div>
          <h3 className="text-xl font-bold line-clamp-2 group-hover:text-primary transition-colors">
            {title}
          </h3>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-2 mb-3 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <span>{location}</span>
          </div>
          {salaryRange && (
            <div className="flex items-center gap-2 mb-3 text-sm text-muted-foreground">
              <DollarSign className="h-4 w-4" />
              <span>{salaryRange}</span>
            </div>
          )}
          <p className="text-muted-foreground line-clamp-3">{description}</p>
        </CardContent>
        <CardFooter className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
          {applicationDeadline && (
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span>
                Apply by {new Date(applicationDeadline).toLocaleDateString()}
              </span>
            </div>
          )}
        </CardFooter>
      </Card>
    </Link>
  );
}
