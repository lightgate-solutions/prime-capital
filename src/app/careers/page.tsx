/** biome-ignore-all lint/suspicious/noArrayIndexKey: <> */

import {
  ArrowRight,
  Award,
  Briefcase,
  Clock,
  Heart,
  MapPin,
  TrendingUp,
  Users,
} from "lucide-react";
import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function CareersPage() {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Career Growth",
      description:
        "Clear career progression paths with continuous learning and development opportunities.",
    },
    {
      icon: Award,
      title: "Competitive Compensation",
      description:
        "Industry-leading salaries, performance bonuses, and comprehensive benefits packages.",
    },
    {
      icon: Heart,
      title: "Work-Life Balance",
      description:
        "Flexible working arrangements and generous leave policies to support your well-being.",
    },
    {
      icon: Users,
      title: "Collaborative Culture",
      description:
        "Work with talented professionals in a supportive and inclusive team environment.",
    },
  ];

  const openPositions = [
    {
      title: "Senior Investment Analyst",
      department: "Investment Advisory",
      location: "Abuja, Nigeria",
      type: "Full-time",
      description:
        "Seeking an experienced investment analyst to provide research and analysis on Nigerian equities and fixed income securities. CFA charterholder preferred.",
      requirements: [
        "Bachelor's degree in Finance, Economics, or related field",
        "5+ years experience in investment analysis",
        "CFA Level 2 or higher preferred",
        "Strong analytical and modeling skills",
      ],
    },
    {
      title: "Portfolio Manager",
      department: "Asset Management",
      location: "Abuja, Nigeria",
      type: "Full-time",
      description:
        "Looking for a skilled portfolio manager to manage client portfolios and develop investment strategies aligned with client objectives.",
      requirements: [
        "Bachelor's degree in Finance or related field, MBA preferred",
        "7+ years in portfolio management",
        "CFA charterholder required",
        "Proven track record of investment performance",
      ],
    },
    {
      title: "Compliance Officer",
      department: "Compliance & Risk",
      location: "Abuja, Nigeria",
      type: "Full-time",
      description:
        "Join our compliance team to ensure adherence to SEC regulations and internal policies. Experience with Nigerian securities regulations essential.",
      requirements: [
        "Bachelor's degree in Law, Finance, or related field",
        "4+ years in compliance or regulatory role",
        "Knowledge of Nigerian SEC regulations",
        "Strong attention to detail",
      ],
    },
    {
      title: "Client Relationship Manager",
      department: "Client Services",
      location: "Abuja, Nigeria",
      type: "Full-time",
      description:
        "Seeking a relationship manager to serve as primary point of contact for high-net-worth clients and develop long-term client relationships.",
      requirements: [
        "Bachelor's degree in Business, Finance, or related field",
        "3+ years in client-facing financial services role",
        "Excellent communication and interpersonal skills",
        "Knowledge of investment products",
      ],
    },
    {
      title: "Financial Analyst (Entry Level)",
      department: "Research",
      location: "Abuja, Nigeria",
      type: "Full-time",
      description:
        "Exciting opportunity for recent graduates to join our research team and support market analysis and company research efforts.",
      requirements: [
        "Bachelor's degree in Finance, Economics, Accounting",
        "0-2 years experience, fresh graduates welcome",
        "Strong Excel and analytical skills",
        "Passion for financial markets",
      ],
    },
    {
      title: "IT Systems Administrator",
      department: "Technology",
      location: "Abuja, Nigeria",
      type: "Full-time",
      description:
        "Manage and maintain our trading platforms and IT infrastructure. Ensure system reliability and security for our operations.",
      requirements: [
        "Bachelor's degree in Computer Science or IT",
        "3+ years in systems administration",
        "Experience with trading systems preferred",
        "Strong problem-solving skills",
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-28 pb-12 md:pt-36 md:pb-16 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-background via-background to-primary/5">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 text-balance">
            Build Your Career at{" "}
            <span className="text-primary">Prime Capital</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Join a team of talented professionals committed to excellence in
            financial services. Grow your career while making a meaningful
            impact.
          </p>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
              Open Positions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Explore current opportunities to join our team and advance your
              career in financial services.
            </p>
          </div>
          <div className="space-y-6">
            {openPositions.map((position, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-shadow"
              >
                <CardContent className="pt-6">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                        {position.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Briefcase className="h-4 w-4" />
                          {position.department}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {position.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {position.type}
                        </span>
                      </div>
                    </div>
                    <Button className="bg-primary text-primary-foreground hover:bg-primary/90 lg:shrink-0">
                      Apply Now <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {position.description}
                  </p>
                  <div>
                    <h4 className="font-semibold text-sm mb-2">
                      Key Requirements:
                    </h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      {position.requirements.map((req, idx) => (
                        <li key={idx}>• {req}</li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
              Why Work With Us
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              We invest in our people and create an environment where talent
              thrives.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card
                  key={index}
                  className="group hover:shadow-lg transition-shadow"
                >
                  <CardContent className="pt-6 text-center">
                    <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits & Perks */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
              Benefits & Perks
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Comprehensive benefits designed to support your professional and
              personal well-being.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardContent className="pt-6">
                <h4 className="font-semibold mb-2">Health & Wellness</h4>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Comprehensive health insurance (HMO)</li>
                  <li>• Life insurance coverage</li>
                  <li>• Annual health checks</li>
                  <li>• Wellness programs</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h4 className="font-semibold mb-2">Financial Benefits</h4>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Competitive base salary</li>
                  <li>• Performance bonuses</li>
                  <li>• Pension contributions</li>
                  <li>• Staff investment programs</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h4 className="font-semibold mb-2">Professional Development</h4>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• CFA exam sponsorship</li>
                  <li>• Training & certifications</li>
                  <li>• Conference attendance</li>
                  <li>• Mentorship programs</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h4 className="font-semibold mb-2">Work-Life Balance</h4>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Flexible work arrangements</li>
                  <li>• 25 days annual leave</li>
                  <li>• Paid study leave</li>
                  <li>• Maternity/paternity leave</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h4 className="font-semibold mb-2">Office & Culture</h4>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Modern office facilities</li>
                  <li>• Team building events</li>
                  <li>• Diversity & inclusion</li>
                  <li>• Collaborative environment</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h4 className="font-semibold mb-2">Additional Perks</h4>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Transportation allowance</li>
                  <li>• Meal subsidies</li>
                  <li>• Staff discounts</li>
                  <li>• Social events</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
            Our Hiring Process
          </h2>
          <p className="text-muted-foreground mb-12 text-pretty">
            We've designed a straightforward and transparent hiring process to
            help you succeed.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="h-12 w-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  1
                </div>
                <h4 className="font-semibold mb-2">Apply Online</h4>
                <p className="text-sm text-muted-foreground">
                  Submit your resume and cover letter
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="h-12 w-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  2
                </div>
                <h4 className="font-semibold mb-2">Initial Screening</h4>
                <p className="text-sm text-muted-foreground">
                  HR reviews your application
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="h-12 w-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  3
                </div>
                <h4 className="font-semibold mb-2">Interviews</h4>
                <p className="text-sm text-muted-foreground">
                  Meet with hiring managers
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="h-12 w-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  4
                </div>
                <h4 className="font-semibold mb-2">Offer</h4>
                <p className="text-sm text-muted-foreground">
                  Receive and accept your offer
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Card className="border-2 border-primary/20 bg-linear-to-br from-background to-primary/5">
            <CardContent className="pt-8 text-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-balance">
                Don't See the Right Role?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto text-pretty">
                We're always looking for talented individuals. Send us your
                resume and we'll keep you in mind for future opportunities.
              </p>
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Submit General Application{" "}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
}
