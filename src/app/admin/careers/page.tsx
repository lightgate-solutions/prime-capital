import { Briefcase, Calendar, Edit, MapPin, Plus } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";
import { CareerSearch } from "@/components/careers/career-search";
import { DeleteCareerDialog } from "@/components/careers/delete-career-dialog";
import { JobTypeBadge } from "@/components/careers/job-type-badge";
import { Button } from "@/components/ui/button";
import { Card, CardFooter, CardHeader } from "@/components/ui/card";
import { EmptyState } from "@/components/ui/empty-state";
import { Pagination } from "@/components/ui/pagination";
import { getAdminCareers, getAdminCareersCount } from "@/db/queries/careers";
import type { JobType } from "@/lib/types/careers";

interface AdminCareersPageProps {
  searchParams: Promise<{
    search?: string;
    status?: string;
    jobType?: string;
    location?: string;
    page?: string;
  }>;
}

export default async function AdminCareersPage({
  searchParams,
}: AdminCareersPageProps) {
  const params = await searchParams;
  const search = params.search || "";
  const status = params.status || "";
  const jobType = params.jobType || "";
  const location = params.location || "";
  const page = Number.parseInt(params.page || "1", 10);
  const limit = 10;
  const offset = (page - 1) * limit;

  const [careers, totalCount] = await Promise.all([
    getAdminCareers({ search, status, jobType, location, limit, offset }),
    getAdminCareersCount({ search, status, jobType, location }),
  ]);

  const totalPages = Math.ceil(totalCount / limit);

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-display text-3xl font-bold mb-2">
            Manage Careers
          </h1>
          <p className="text-muted-foreground">
            Create, edit, and manage job postings
          </p>
        </div>
        <Button asChild>
          <Link href="/admin/careers/new">
            <Plus className="h-4 w-4 mr-2" />
            New Career
          </Link>
        </Button>
      </div>

      <div className="mb-6">
        <Suspense fallback={<div>Loading...</div>}>
          <CareerSearch placeholder="Search careers..." />
        </Suspense>
      </div>

      {careers.length === 0 ? (
        <EmptyState
          title="No careers found"
          description={
            search
              ? "Try adjusting your search terms"
              : "Get started by creating your first job posting"
          }
          icon={<Briefcase className="h-16 w-16" />}
          action={
            !search && (
              <Button asChild>
                <Link href="/admin/careers/new">
                  <Plus className="h-4 w-4 mr-2" />
                  Create Career
                </Link>
              </Button>
            )
          }
        />
      ) : (
        <>
          <div className="grid gap-4 mb-6">
            {careers.map((career) => (
              <Card key={career.id}>
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <JobTypeBadge jobType={career.jobType as JobType} />
                        <span
                          className={`px-2 py-1 text-xs rounded ${
                            career.status === "published"
                              ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                              : "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300"
                          }`}
                        >
                          {career.status}
                        </span>
                        {career.featured && (
                          <span className="px-2 py-1 text-xs rounded bg-primary/10 text-primary">
                            Featured
                          </span>
                        )}
                      </div>
                      <h3 className="font-display text-xl font-bold mb-2">
                        {career.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground mb-2">
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          <span>{career.location}</span>
                        </div>
                        {career.salaryRange && (
                          <span>• {career.salaryRange}</span>
                        )}
                        {career.applicationDeadline && (
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            <span>
                              Deadline:{" "}
                              {new Date(
                                career.applicationDeadline,
                              ).toLocaleDateString()}
                            </span>
                          </div>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {career.description}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" asChild>
                        <Link href={`/admin/careers/${career.id}/edit`}>
                          <Edit className="h-4 w-4 mr-1" />
                          Edit
                        </Link>
                      </Button>
                      <DeleteCareerDialog
                        careerId={career.id}
                        careerTitle={career.title}
                      />
                    </div>
                  </div>
                </CardHeader>
                <CardFooter className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                  <span>By {career.author?.name || "Unknown"}</span>
                  <span>•</span>
                  <span>
                    Updated{" "}
                    {career.updatedAt
                      ? new Date(career.updatedAt).toLocaleDateString()
                      : "N/A"}
                  </span>
                  {career.publishedAt && (
                    <>
                      <span>•</span>
                      <span>
                        Published{" "}
                        {new Date(career.publishedAt).toLocaleDateString()}
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
