import {
  ArrowLeft,
  Briefcase,
  Calendar,
  DollarSign,
  Mail,
  MapPin,
} from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JobTypeBadge } from "@/components/careers/job-type-badge";
import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getCareerBySlug } from "@/db/queries/careers";
import type { JobType } from "@/lib/types/careers";

interface CareerPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function CareerPage({ params }: CareerPageProps) {
  const { slug } = await params;
  const career = await getCareerBySlug(slug);

  if (!career) {
    notFound();
  }

  // Check if deadline is approaching (within 7 days)
  const isDeadlineApproaching = career.applicationDeadline
    ? new Date(career.applicationDeadline).getTime() - Date.now() <
      7 * 24 * 60 * 60 * 1000
    : false;

  // Check if deadline has passed
  const isDeadlinePassed = career.applicationDeadline
    ? new Date(career.applicationDeadline).getTime() < Date.now()
    : false;

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <article className="flex-1 pt-28 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Button variant="ghost" size="sm" asChild className="mb-6">
            <Link href="/careers">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Careers
            </Link>
          </Button>

          {/* Career Header */}
          <header className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <JobTypeBadge jobType={career.jobType as JobType} />
              {career.featured && (
                <span className="px-2 py-1 text-xs rounded bg-primary text-primary-foreground font-semibold">
                  Featured
                </span>
              )}
              {isDeadlineApproaching && !isDeadlinePassed && (
                <span className="px-2 py-1 text-xs rounded bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300 font-semibold">
                  Urgent
                </span>
              )}
              {isDeadlinePassed && (
                <span className="px-2 py-1 text-xs rounded bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300 font-semibold">
                  Closed
                </span>
              )}
            </div>

            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6 text-balance">
              {career.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground border-t border-b py-4">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>{career.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Briefcase className="h-4 w-4" />
                <span>{career.jobType}</span>
              </div>
              {career.salaryRange && (
                <div className="flex items-center gap-2">
                  <DollarSign className="h-4 w-4" />
                  <span>{career.salaryRange}</span>
                </div>
              )}
              {career.applicationDeadline && (
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>
                    Apply by{" "}
                    {new Date(career.applicationDeadline).toLocaleDateString(
                      "en-US",
                      {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      },
                    )}
                  </span>
                </div>
              )}
            </div>
          </header>

          {/* Job Description */}
          <section className="mb-8">
            <h2 className="font-display text-2xl font-bold mb-4">About This Position</h2>
            <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
              {career.description}
            </p>
          </section>

          {/* Requirements */}
          <section className="mb-8">
            <h2 className="font-display text-2xl font-bold mb-4">Requirements</h2>
            <div className="prose prose-lg max-w-none">
              <div
                className="text-muted-foreground leading-relaxed whitespace-pre-line"
                dangerouslySetInnerHTML={{ __html: career.requirements }}
              />
            </div>
          </section>

          {/* Qualifications */}
          <section className="mb-8">
            <h2 className="font-display text-2xl font-bold mb-4">Qualifications</h2>
            <div className="prose prose-lg max-w-none">
              <div
                className="text-muted-foreground leading-relaxed whitespace-pre-line"
                dangerouslySetInnerHTML={{ __html: career.qualifications }}
              />
            </div>
          </section>

          {/* Responsibilities */}
          <section className="mb-8">
            <h2 className="font-display text-2xl font-bold mb-4">Key Responsibilities</h2>
            <div className="prose prose-lg max-w-none">
              <div
                className="text-muted-foreground leading-relaxed whitespace-pre-line"
                dangerouslySetInnerHTML={{ __html: career.responsibilities }}
              />
            </div>
          </section>

          {/* Benefits (if provided) */}
          {career.benefits && (
            <section className="mb-8">
              <h2 className="font-display text-2xl font-bold mb-4">Benefits</h2>
              <div className="prose prose-lg max-w-none">
                <div
                  className="text-muted-foreground leading-relaxed whitespace-pre-line"
                  dangerouslySetInnerHTML={{ __html: career.benefits }}
                />
              </div>
            </section>
          )}

          {/* How to Apply */}
          {!isDeadlinePassed && (
            <section className="mt-12">
              <Card className="border-2 border-primary/20 bg-linear-to-br from-background to-primary/5">
                <CardContent className="pt-8 pb-8">
                  <h2 className="font-display text-2xl font-bold mb-4">How to Apply</h2>

                  {career.applicationInstructions && (
                    <p className="text-muted-foreground mb-6 leading-relaxed whitespace-pre-line">
                      {career.applicationInstructions}
                    </p>
                  )}

                  {career.applicationEmail && (
                    <div className="mb-6">
                      <p className="text-sm text-muted-foreground mb-2">
                        Send your application to:
                      </p>
                      <a
                        href={`mailto:${career.applicationEmail}`}
                        className="flex items-center gap-2 text-primary hover:underline font-semibold"
                      >
                        <Mail className="h-4 w-4" />
                        {career.applicationEmail}
                      </a>
                    </div>
                  )}

                  {career.applicationEmail && (
                    <a
                      href={`mailto:${career.applicationEmail}?subject=Application for ${career.title}`}
                      className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-xl font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
                    >
                      Apply Now
                    </a>
                  )}

                  {career.applicationDeadline && (
                    <p className="text-sm text-muted-foreground mt-6">
                      Application deadline:{" "}
                      <strong>
                        {new Date(
                          career.applicationDeadline,
                        ).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </strong>
                    </p>
                  )}
                </CardContent>
              </Card>
            </section>
          )}

          {isDeadlinePassed && (
            <section className="mt-12">
              <Card className="border-2 border-muted bg-muted/30">
                <CardContent className="pt-8 pb-8 text-center">
                  <h2 className="font-display text-2xl font-bold mb-4">
                    Application Closed
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    The application deadline for this position has passed.
                    Please check our other open positions or send us your resume
                    for future opportunities.
                  </p>
                  <Button asChild>
                    <Link href="/careers">View Open Positions</Link>
                  </Button>
                </CardContent>
              </Card>
            </section>
          )}
        </div>
      </article>

      <Footer />
    </div>
  );
}
