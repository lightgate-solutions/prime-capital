/** biome-ignore-all lint/suspicious/noArrayIndexKey: <> */

import {
  Award,
  Briefcase,
  Eye,
  Scale,
  Shield,
  Target,
  Users,
  Zap,
} from "lucide-react";
import Image from "next/image";
import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";
import { Card, CardContent } from "@/components/ui/card";

export default function AboutPage() {
  const philosophy = [
    {
      icon: Shield,
      title: "Integrity & Transparency (White)",
      description:
        "Trust is the foundation of wealth management. We uphold the highest ethical standards, ensuring full transparency in disclosures, reporting, and decision-making.",
    },
    {
      icon: Award,
      title: "Excellence & Confidence (Gold)",
      description:
        "We pursue superior outcomes through rigorous research, data-driven analysis and professional expertise. The 'Gold standard' defines our commitment to quality.",
    },
    {
      icon: Scale,
      title: "Disciplined Stewardship",
      description:
        "We act as fiduciaries first. Our long-term, risk-aware approach balances return optimization with capital preservation.",
    },
    {
      icon: Users,
      title: "Client-Centric Partnership",
      description:
        "Our clients are the center of everything we do. We build enduring partnerships by tailoring strategies to individual goals.",
    },
    {
      icon: Zap,
      title: "Innovation for Growth",
      description:
        "We embrace innovation responsibly by leveraging cutting-edge technology, analytics, and sustainable practices.",
    },
  ];

  const directors = [
    {
      name: "Mounir Haliru Gwarzo",
      role: "Director",
      bio: "A distinguished capital markets professional with over 37 years of experience across regulation, financial services, and corporate leadership.",
      photo: "/ceo.jpg",
    },
    {
      name: "Bahir Haliru Tahir",
      role: "Non-Executive Director",
      bio: "Contributes strategic oversight, governance insight, and risk management expertise. Founder of a real estate construction company and aviation professional with over 15 years of experience.",
      photo: "/haliru.jpeg",
    },
    {
      name: "Maryam Ibrahim Buwai",
      role: "Non-Executive Director",
      bio: "Seasoned governance and management professional with over 18 years of leadership experience in institutional administration and executive oversight.",
      photo: "/maryam.jpeg",
    },
  ];

  const management = [
    {
      name: "Mounir Haliru Gwarzo",
      role: "Chief Executive Officer",
      bio: "Former Director-General of the SEC (2015–2020). Fellow of the Chartered Institute of Stockbrokers of Nigeria. Alumnus of INSEAD and Oxford SAID Business School.",
      icon: Briefcase,
      photo: "/ceo.jpg",
    },
    {
      name: "Buhari Suleiman Alfa",
      role: "Company Secretary & Compliance Officer",
      bio: "Legal and compliance professional with expertise in corporate governance. Holds an LLM in Business and Commercial Law.",
      icon: Scale,
      photo: "/buhar.jpeg",
    },
    {
      name: "Saidu Safiyanu",
      role: "IT Officer",
      bio: "Information technology professional with expertise in network design and systems implementation. B.Eng. in Electrical Engineering.",
      icon: Zap,
      photo: "/saidu.jpg",
    },
    {
      name: "Saadah Sambo",
      role: "Senior Associate, Investment",
      bio: "Investment professional with expertise in research and portfolio management. First-Class Honours in Business Entrepreneurship.",
      icon: Target,
      photo: "/saadah.jpeg",
    },
    {
      name: "Husseinat Alabi",
      role: "Legal Officer",
      bio: "Legal and compliance professional with experience supporting legal, administrative, and regulatory operations.",
      icon: Scale,
      photo: "/hussaina.jpeg",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-28 pb-12 md:pt-36 md:pb-16 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-background via-background to-primary/5">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 text-balance">
            About <span className="">Prime Capital</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            A Fund and Portfolio Management firm built on disciplined expertise,
            unwavering integrity, and a clear commitment to long-term wealth
            creation.
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
                Who We Are
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed text-lg">
                <p>
                  Prime Capital & Investment Limited is a Fund and Portfolio
                  Management firm built on disciplined expertise, unwavering
                  integrity, and a clear commitment to long-term wealth creation
                  and preservation.
                </p>
                <p>
                  We exist to help investors navigate complexity with
                  confidence. Through professional fund management, bespoke
                  portfolio solutions, and robust risk management, we transform
                  financial aspirations into enduring value.
                </p>
                <p>
                  Together, our values define a modern, dependable, and
                  client-focused institution trusted to steward wealth across
                  market cycles.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-linear-to-tr from-primary/20 to-transparent rounded-3xl blur-3xl" />
              <p className="text-muted-foreground pb-2">
                At the heart of our identity are the colors that define our
                promise:
              </p>
              <div className="relative bg-secondary rounded-3xl p-10 shadow-2xl border border-white/10">
                <div className="space-y-8">
                  <div className="flex items-center gap-6">
                    <div className="h-16 w-16 rounded-2xl bg-primary/20 flex items-center justify-center shrink-0 border border-primary/30">
                      <div className="h-8 w-8 rounded-full bg-primary shadow-[0_0_15px_rgba(212,175,55,0.5)]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl text-black">
                        Gold Standard
                      </h3>
                      <p className="text-secondary-foreground/70">
                        Excellence, confidence, and premium quality.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="h-16 w-16 rounded-2xl bg-white/10 flex items-center justify-center shrink-0 border border-gray-500">
                      <div className="h-8 w-8 rounded-full bg-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl text-black">
                        White Clarity
                      </h3>
                      <p className="text-secondary-foreground/70">
                        Absolute transparency, integrity, and clarity.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-none shadow-xl bg-primary text-primary-foreground overflow-hidden relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <CardContent className="pt-10 pb-10">
                <div className="h-16 w-16 rounded-2xl bg-white/20 flex items-center justify-center mb-8">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold mb-6">Our Mission</h3>
                <p className="text-primary-foreground/90 leading-relaxed text-lg">
                  To grow and protect client wealth through disciplined and
                  innovative strategies. We are committed to maximizing value,
                  minimizing risk, and earning trust through fiduciary
                  discipline.
                </p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-xl bg-secondary text-secondary-foreground overflow-hidden relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <CardContent className="pt-10 pb-10">
                <div className="h-16 w-16 rounded-2xl bg-primary/20 flex items-center justify-center mb-8">
                  <Eye className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-3xl font-bold mb-6">Our Vision</h3>
                <p className="text-secondary-foreground/90 leading-relaxed text-lg">
                  To be one of the world's most trusted partners in wealth
                  management, empowering investors to achieve financial freedom
                  through smart, sustainable, and resilient investment
                  solutions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Corporate Philosophy */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Our Corporate Philosophy
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our philosophy goes beyond asset management; it is a covenant of
              stewardship, excellence, and responsibility.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {philosophy.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card
                  key={index}
                  className="border-primary/5 hover:border-primary/20 transition-all duration-300 group"
                >
                  <CardContent className="pt-8">
                    <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-bold mb-3">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Board of Directors
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Strategic oversight and governance from seasoned industry leaders.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
            {directors.map((leader, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-all duration-300 border-none bg-background"
              >
                <CardContent className="pt-8">
                  <div className="h-24 w-24 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                    <Image
                      src={leader.photo}
                      width={200}
                      height={200}
                      alt={`photo of ${leader.name}`}
                      className="rounded-full"
                    />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{leader.name}</h3>
                  <p className="text-primary font-semibold mb-4">
                    {leader.role}
                  </p>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {leader.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Management Team
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The professionals driving our day-to-day excellence.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {management.map((leader, index) => {
              return (
                <Card
                  key={index}
                  className="hover:shadow-lg transition-all duration-300"
                >
                  <CardContent className="pt-8">
                    <div className="flex items-start gap-6">
                      <div className="h-24 w-24 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <Image
                          src={leader.photo}
                          width={200}
                          height={200}
                          alt={`photo of ${leader.name}`}
                          className="rounded-full"
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-1">
                          {leader.name}
                        </h3>
                        <p className="text-sm text-primary font-medium mb-4">
                          {leader.role}
                        </p>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {leader.bio}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Regulatory Compliance */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Card className="border-2 border-primary/20 bg-primary/5">
            <CardContent className="pt-10 pb-10 px-10">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="h-24 w-24 rounded-full bg-primary flex items-center justify-center shrink-0 shadow-lg">
                  <Shield className="h-12 w-12 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">
                    Regulation & Compliance
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We are registered with and regulated by the Securities and
                    Exchange Commission (SEC), Nigeria, and operate strictly in
                    accordance with the Investments & Securities Act (ISA) 2025
                    and applicable SEC Rules. All pooled and discretionary
                    products are subject to regulatory approval or “no
                    objection” where required.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
}
