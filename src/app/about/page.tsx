/** biome-ignore-all lint/suspicious/noArrayIndexKey: <> */
"use client";

import {
  Briefcase,
  Scale,
  Shield,
  Target,
  Zap,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";
import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";
import { Card, CardContent } from "@/components/ui/card";

gsap.registerPlugin(ScrollTrigger);

export default function AboutPage() {
  const missionImageRef = useRef<HTMLDivElement>(null);
  const missionCardRef = useRef<HTMLDivElement>(null);
  const visionImageRef = useRef<HTMLDivElement>(null);
  const visionCardRef = useRef<HTMLDivElement>(null);
  const philosophyScrollRef = useRef<HTMLDivElement>(null);
  const philosophySectionRef = useRef<HTMLElement>(null);
  const philosophyHeaderRef = useRef<HTMLDivElement>(null);
  const philosophyCardsRef = useRef<HTMLDivElement>(null);
  const philosophyCursorRef = useRef<HTMLDivElement>(null);
  const [isPhilosophyHovering, setIsPhilosophyHovering] = useState(false);

  // Mission & Vision animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Mission Image - slide in from left
      if (missionImageRef.current) {
        gsap.fromTo(
          missionImageRef.current,
          { x: -100, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: missionImageRef.current,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          },
        );
      }

      // Mission Card - slide in from right
      if (missionCardRef.current) {
        gsap.fromTo(
          missionCardRef.current,
          { x: 100, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: missionCardRef.current,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          },
        );
      }

      // Vision Card - slide in from left
      if (visionCardRef.current) {
        gsap.fromTo(
          visionCardRef.current,
          { x: -100, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: visionCardRef.current,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          },
        );
      }

      // Vision Image - slide in from right
      if (visionImageRef.current) {
        gsap.fromTo(
          visionImageRef.current,
          { x: 100, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: visionImageRef.current,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          },
        );
      }
    });

    return () => ctx.revert();
  }, []);

  // Philosophy section cursor and animations
  useEffect(() => {
    if (!philosophySectionRef.current || !philosophyCursorRef.current) return;

    const section = philosophySectionRef.current;
    const cursor = philosophyCursorRef.current;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = section.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      gsap.to(cursor, {
        x: x,
        y: y,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const handleMouseEnter = () => setIsPhilosophyHovering(true);
    const handleMouseLeave = () => setIsPhilosophyHovering(false);

    section.addEventListener("mousemove", handleMouseMove);
    section.addEventListener("mouseenter", handleMouseEnter);
    section.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      section.removeEventListener("mousemove", handleMouseMove);
      section.removeEventListener("mouseenter", handleMouseEnter);
      section.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  useEffect(() => {
    if (!philosophySectionRef.current || !philosophyHeaderRef.current || !philosophyCardsRef.current) return;

    const ctx = gsap.context(() => {
      // Header slide in from left
      gsap.fromTo(
        philosophyHeaderRef.current,
        { x: -60, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: philosophyHeaderRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        },
      );

      const cards = philosophyCardsRef.current?.querySelectorAll("article");
      if (cards) {
        gsap.fromTo(
          cards,
          { x: -100, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: philosophyCardsRef.current,
              start: "top 90%",
              toggleActions: "play none none reverse",
            },
          },
        );
      }
    }, philosophySectionRef);

    return () => ctx.revert();
  }, []);

  const philosophy = [
    {
      title: "Confidentiality & Data Sovereignty",
      note: "We treat client information as sacred capital. Every portfolio detail, transaction, and strategic discussion is protected by strict confidentiality protocols, secure infrastructure, and governance controls. Discretion is not optional—it is a core responsibility.",
    },
    {
      title: "Integrity & Transparency",
      note: "Trust is the foundation of wealth management. We uphold the highest ethical standards, ensuring full transparency in disclosures, reporting, and decision-making. Our clients always understand where their capital is invested and why.",
    },
    {
      title: "Excellence & Confidence",
      note: "We pursue superior outcomes through rigorous research, data-driven analysis and professional expertise. The 'Gold standard' defines our commitment to quality, precision, and confidence-inspiring performance.",
    },
    {
      title: "Disciplined, Risk-Aware Stewardship",
      note: "We act as fiduciaries first. Our long-term, risk-aware approach balances return optimization with capital preservation, supported by robust governance and continuous risk monitoring.",
    },
    {
      title: "Client-Centric Partnership",
      note: "Our clients are the center of everything we do. We build enduring partnerships by tailoring strategies to individual goals, risk profiles, and legacy aspirations.",
    },
    {
      title: "Innovation for Sustainable Growth",
      note: "We embrace innovation responsibly by leveraging cutting-edge technology, analytics, and sustainable practices to deliver resilient solutions in an evolving global market.",
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
      <section className="pt-28 pb-20 md:pt-36 md:pb-32 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-background via-background to-primary/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 text-balance">
              About <span className="">Prime Capital</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed mb-8">
              A Fund and Portfolio Management firm built on disciplined expertise,
              unwavering integrity, trust, and a clear commitment to long-term
              wealth creation.
            </p>
            <p className="text-base md:text-lg text-muted-foreground/80 max-w-2xl mx-auto mb-12">
              At the heart of our identity are the colors that define our promise:
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/20 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
              <div className="relative p-8 rounded-2xl bg-gradient-to-br from-[#D4AF37]/10 via-[#D4AF37]/5 to-white border-2 border-[#D4AF37]/20 group-hover:border-[#D4AF37] transition-all duration-500">
                <div className="flex items-start gap-5 mb-4">
                  <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-[#D4AF37] to-[#D4AF37]/70 flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                    <div className="h-7 w-7 rounded-full bg-white shadow-inner" />
                  </div>
                  <div>
                    <h4 className="font-display text-2xl font-bold text-[#0A1628] mb-2">Gold</h4>
                    <p className="text-sm text-[#0A1628]/70 leading-relaxed">
                      Represents excellence, confidence, and premium quality in
                      every mandate.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-[#0A1628]/10 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
              <div className="relative p-8 rounded-2xl bg-white border-2 border-[#0A1628]/10 group-hover:border-[#0A1628]/30 transition-all duration-500 shadow-lg">
                <div className="flex items-start gap-5 mb-4">
                  <div className="h-14 w-14 rounded-xl bg-white border-2 border-[#0A1628]/20 flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                    <div className="h-7 w-7 rounded-full bg-[#0A1628]/5 border-2 border-[#0A1628]/20" />
                  </div>
                  <div>
                    <h4 className="font-display text-2xl font-bold text-[#0A1628] mb-2">White</h4>
                    <p className="text-sm text-[#0A1628]/70 leading-relaxed">
                      Symbolizes absolute transparency, integrity, and clarity in
                      every relationship.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Identity, Mission & Vision Section */}
      <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#FDFCFA] via-white to-[#FDFCFA] relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#D4AF37]/5 rounded-full blur-[200px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-[#0A1628]/5 rounded-full blur-[200px]" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Mission & Vision Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Mission Card */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/10 to-transparent rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500" />
              <div className="relative h-[450px] md:h-[550px] rounded-3xl overflow-hidden">
                <div
                  ref={missionImageRef}
                  className="absolute inset-0 w-full h-full"
                >
                  <Image
                    src="/mission.png"
                    alt="Growth"
                    width={1200}
                    height={600}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#D4AF37] md:from-[#D4AF37]/90 via-[#D4AF37]/95 md:via-[#D4AF37]/70 to-[#0A1628]/80 md:to-transparent" />
                <div
                  ref={missionCardRef}
                  className="absolute bottom-0 left-0 right-0 p-8 md:p-10 z-10"
                >
                  <h3 className="font-display text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
                    Our Mission
                  </h3>
                  <p className="text-lg md:text-xl text-white/95 leading-relaxed font-medium drop-shadow-md">
                    Grow and protect client wealth through disciplined
                    strategies.
                  </p>
                </div>
              </div>
            </div>

            {/* Vision Card */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-[#0A1628]/10 to-transparent rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500" />
              <div className="relative h-[450px] md:h-[550px] rounded-3xl overflow-hidden">
                <div
                  ref={visionImageRef}
                  className="absolute inset-0 w-full h-full"
                >
                  <Image
                    src="/vision.png"
                    width={1200}
                    height={600}
                    alt="Wealth"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/90 via-[#0A1628]/70 to-transparent" />
                <div
                  ref={visionCardRef}
                  className="absolute bottom-0 left-0 right-0 p-8 md:p-10 z-10"
                >
                  <h3 className="font-display text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
                    Our Vision
                  </h3>
                  <p className="text-lg md:text-xl text-white/95 leading-relaxed font-medium drop-shadow-md">
                    To be one of the most trusted partners in wealth management.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Philosophy */}
      <section ref={philosophySectionRef} className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white relative">
        <div className="absolute inset-0 opacity-[0.02]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 2px 2px, #D4AF37 1px, transparent 0)",
              backgroundSize: "50px 50px",
            }}
          />
        </div>
        <div
          ref={philosophyCursorRef}
          className={cn(
            "pointer-events-none absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 z-50",
            "w-12 h-12 rounded-full border-2 border-accent bg-accent",
            "transition-opacity duration-300",
            isPhilosophyHovering ? "opacity-100" : "opacity-0",
          )}
        />
        <div className="max-w-7xl mx-auto relative z-10">
          <div ref={philosophyHeaderRef} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Our Corporate Philosophy
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our philosophy goes beyond asset management; it is a covenant of
              stewardship, excellence, and responsibility. Our core tenets are:
            </p>
          </div>
          <div
            ref={(el) => {
              philosophyScrollRef.current = el;
              philosophyCardsRef.current = el;
            }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8"
          >
            {philosophy.map((item, index) => (
              <article
                key={index}
                className={cn(
                  "group relative w-full md:w-80",
                  "transition-transform duration-500 ease-out",
                  "hover:-translate-y-2",
                )}
              >
                <div className="relative bg-card border border-border/50 md:border-t md:border-l md:border-r-0 md:border-b-0 p-3">
                  <div className="absolute -top-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-border/40 to-transparent" />
                  <h3 className="font-[var(--font-bebas)] text-xl tracking-tight mb-2 group-hover:text-accent transition-colors duration-300">
                    {item.title}
                  </h3>
                  <div className="w-12 h-px bg-accent/60 mb-2 group-hover:w-full transition-all duration-500" />
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.note}
                  </p>
                  <div className="absolute bottom-0 right-0 w-6 h-6 overflow-hidden">
                    <div className="absolute bottom-0 right-0 w-8 h-8 bg-background rotate-45 translate-x-4 translate-y-4 border-t border-l border-border/30" />
                  </div>
                </div>
                <div className="absolute inset-0 -z-10 translate-x-1 translate-y-1 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </article>
            ))}
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
                    accordance with the Investments & Securities Act (ISA) 2025,
                    as amended and applicable SEC Rules. All pooled and
                    discretionary products are subject to regulatory approval or
                    “no objection” where required.
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
