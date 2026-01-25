import { Briefcase } from "lucide-react";
import { Suspense } from "react";
import { CareerCard } from "@/components/careers/career-card";
import { CareerSearch } from "@/components/careers/career-search";
import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { EmptyState } from "@/components/ui/empty-state";
import { Pagination } from "@/components/ui/pagination";
import {
  getFeaturedCareers,
  getPublishedCareers,
  getPublishedCareersCount,
} from "@/db/queries/careers";
import type { JobType } from "@/lib/types/careers";

interface CareersPageProps {
  searchParams: Promise<{
    search?: string;
    jobType?: string;
    location?: string;
    page?: string;
  }>;
}

export default async function CareersPage({ searchParams }: CareersPageProps) {
  const params = await searchParams;
  const search = params.search || "";
  const jobType = params.jobType || "";
  const location = params.location || "";
  const page = Number.parseInt(params.page || "1", 10);
  const limit = 9;
  const offset = (page - 1) * limit;

  const [featuredCareers, careers, totalCount] = await Promise.all([
    getFeaturedCareers(2),
    getPublishedCareers({ search, jobType, location, limit, offset }),
    getPublishedCareersCount({ search, jobType, location }),
  ]);

  const totalPages = Math.ceil(totalCount / limit);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-28 pb-12 md:pt-36 md:pb-16 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-background via-background to-primary/5">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 text-balance">
            Join Our <span className="text-primary">Team</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Explore exciting career opportunities at Prime Capital and become
            part of a team that's shaping the future of finance.
          </p>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Suspense fallback={<div>Loading...</div>}>
            <CareerSearch placeholder="Search careers..." />
          </Suspense>
        </div>
      </section>

      {/* Featured Careers */}
      {featuredCareers.length > 0 && !search && (
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-10">Featured Positions</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredCareers.map((career) => (
                <CareerCard
                  key={career.id}
                  slug={career.slug}
                  title={career.title}
                  description={career.description}
                  location={career.location}
                  jobType={career.jobType as JobType}
                  salaryRange={career.salaryRange}
                  applicationDeadline={career.applicationDeadline}
                  featured={career.featured}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Careers */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">
            {search ? "Search Results" : "All Open Positions"}
          </h2>
          {careers.length === 0 ? (
            <EmptyState
              title="No positions found"
              description={
                search
                  ? "Try adjusting your search terms"
                  : "Check back soon for new opportunities"
              }
              icon={<Briefcase className="h-16 w-16" />}
            />
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {careers.map((career) => (
                  <CareerCard
                    key={career.id}
                    slug={career.slug}
                    title={career.title}
                    description={career.description}
                    location={career.location}
                    jobType={career.jobType as JobType}
                    salaryRange={career.salaryRange}
                    applicationDeadline={career.applicationDeadline}
                    featured={career.featured}
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

      {/* Call to Action */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Card className="border-2 border-primary/20 bg-linear-to-br from-background to-primary/5">
            <CardContent className="pt-10 pb-10 text-center">
              <h3 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
                Don't See the Right Fit?
              </h3>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
                We're always looking for talented individuals to join our team.
                Send us your resume and we'll keep you in mind for future
                opportunities.
              </p>
              <a
                href="mailto:careers@primecapital.com"
                className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-xl font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
              >
                Send Your Resume
              </a>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
}
