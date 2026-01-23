"use client";

import {
  ArrowRight,
  BarChart3,
  BrainCircuit,
  ChartCandlestick,
  ChevronDown,
  Eye,
  Gem,
  House,
  Landmark,
  Mail,
  MapPin,
  NotebookTabs,
  Phone,
  PlayCircle,
  Scale,
  Shield,
  ShieldCheck,
  Target,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CustomCards } from "@/components/custom-cards";
import { InvestmentApproach } from "@/components/investment-approach";
import OrbitalLogos from "@/components/orbiting-logos";
import { RecentNewsWrapper } from "@/components/recent-news-wrapper";

export default function HomePage() {
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const services = [
    {
      icon: Shield,
      title: "Money Market Instruments",
      description:
        "Investments in securities with short-term maturities, such as Treasury Bills (T-Bills), Commercial Papers (CPs), Certificates of Deposit (CDs) and Bankers' Acceptances (BAs).",
    },
    {
      icon: TrendingUp,
      title: "Fixed Income Securities",
      description:
        "Stable income-oriented portfolios investing in government (FGN & State) bonds and high-quality corporate debt.",
    },
    {
      icon: BarChart3,
      title: "Multi-Asset Portfolios",
      description:
        "Balanced strategies dynamically allocating across asset classes to manage risk and capture opportunities.",
    },
    {
      icon: Scale,
      title: "Ethical & Shari'ah-Compliant Products",
      description:
        "Solutions aligned with ethical and Islamic investment principles.",
    },
    {
      icon: Landmark,
      title: "Discretionary & Non-Discretionary Portfolios",
      description:
        "Tailored mandates for retail and qualified investors, aligned with individual risk profiles.",
    },
    {
      icon: ChartCandlestick,
      title: "Alternative Investments",
      description:
        "Access to real estate, private equity, venture capital, and infrastructure opportunities for qualified investors.",
    },
  ];

  const investmentPillars = [
    {
      icon: BrainCircuit,
      title: "Unwavering Integrity & Transparency ",
      description:
        "Clear reporting, ethical conduct, and strict regulatory compliance.",
    },
    {
      icon: House,
      title: "The Gold Standard of Excellence",
      description:
        "Professional expertise, disciplined research, and premium service delivery.",
    },
    {
      icon: ShieldCheck,
      title: "Disciplined Risk Management ",
      description:
        "A long-term, risk-aware investment philosophy focused on capital preservation.",
    },
    {
      icon: Zap,
      title: "Client-First Partnerships",
      description:
        "Bespoke solutions aligned with individual goals and aspirations.",
    },
    {
      icon: Zap,
      title: "Future-Ready Innovation",
      description:
        "Technology-enabled insights, sustainable practices, and modern portfolio design.",
    },
    {
      icon: Zap,
      title: "SEC-Regulated Assurance",
      description:
        "Confidence that your investments are managed within a robust regulatory framework.",
    },
  ];

  const whyChooseUs = [
    {
      icon: Gem,
      title: "Gold Standard Excellence",
      description:
        "Professional expertise, disciplined research, and premium service delivery define our commitment to quality.",
    },
    {
      icon: Eye,
      title: "Absolute Transparency",
      description:
        "Represented by our 'White' value, we ensure full transparency in disclosures, reporting, and decision-making.",
    },
    {
      icon: Shield,
      title: "SEC-Regulated Assurance",
      description:
        "Managed within a robust regulatory framework, strictly in accordance with the Investments & Securities Act.",
    },
    {
      icon: Users,
      title: "Client-First Partnerships",
      description:
        "Bespoke solutions tailored to individual goals, risk profiles, and legacy aspirations.",
    },
  ];

  const stats = [
    { value: "₦50B+", label: "Assets Under Management" },
    { value: "2,500+", label: "Active Clients" },
    { value: "15+", label: "Years of Excellence" },
    { value: "98%", label: "Client Retention" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#FDFCFA] text-[#0A1628] overflow-x-hidden">
      <Navigation />
      {/* Hero Section - Light & Sophisticated */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#FDFCFA] via-[#F5F2ED] to-[#FDFCFA]"
      >
        {/* Geometric Background Pattern */}
        <div className="absolute inset-0 z-0 opacity-[0.03]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
              linear-gradient(to right, #0A1628 1px, transparent 1px),
              linear-gradient(to bottom, #0A1628 1px, transparent 1px)
            `,
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        {/* Animated Accent Elements */}
        <div
          className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[#D4AF37]/8 rounded-full blur-[120px]"
          style={{
            transform: `translate(${mousePosition.x * 0.015}px, ${mousePosition.y * 0.015}px)`,
            transition: "transform 0.5s ease-out",
          }}
        />
        <div
          className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-[#0A1628]/5 rounded-full blur-[100px]"
          style={{
            transform: `translate(${-mousePosition.x * 0.01}px, ${-mousePosition.y * 0.01}px)`,
            transition: "transform 0.5s ease-out",
          }}
        />

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <div className="text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[#0A1628] text-white text-sm font-semibold px-6 py-3 rounded-full mb-8 shadow-elevated">
              <ShieldCheck className="h-4 w-4" />
              <span>SEC Registered & Regulated Financial Institution</span>
            </div>

            {/* Main Headline */}
            <p>Preserving</p>
            <h1
              className="font-display text-6xl md:text-8xl lg:text-9xl font-bold mb-8 tracking-tight text-[#0A1628]"
              style={{
                transform: `translateY(${scrollY * 0.2}px)`,
                opacity: 1 - scrollY * 0.002,
              }}
            >
              Wealth,
              <span className="relative inline-block">
                <span className="relative z-10 ">Trust,</span>
                <span className="absolute -bottom-2 left-0 right-0 h-3 bg-[#D4AF37]/20 -z-10" />
              </span>{" "}
              & Value
            </h1>

            <p className="text-lg md:text-xl text-[#0A1628]/60 mb-12 max-w-3xl mx-auto leading-relaxed">
              Prime Capital & Investment Limited is a Fund and Portfolio
              Management firm built on{" "}
              <span className="font-semibold">
                confidentiality, disciplined expertise, unwavering integrity,
                and a clear commitment to long-term wealth creation and
                preservation.
              </span>
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <Link href="/contact">
                <button
                  type="button"
                  className="group relative hover:cursor-pointer px-10 py-5 bg-[#0A1628] text-white rounded-full font-bold text-lg overflow-hidden transition-all duration-300 hover:scale-105 shadow-elevated-lg hover:shadow-2xl"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Start Investing
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
              </Link>

              <Link href="/about">
                <button
                  type="button"
                  className="group hover:cursor-pointer px-10 py-5 border-2 border-[#0A1628]/20 text-[#0A1628] rounded-full font-bold text-lg hover:border-[#D4AF37] hover:bg-[#D4AF37]/10 transition-all duration-300 flex items-center gap-2"
                >
                  <NotebookTabs className="h-5 w-5" />
                  More about us
                </button>
              </Link>
            </div>

            <p className="text-lg md:text-xl text-[#0A1628]/60 mb-12 max-w-3xl mx-auto leading-relaxed">
              At the heart of our identity are the colors that define our
              promise:
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
              <div className="p-4 shadow shadow-black bg-muted/50 border border-border">
                <div className="flex items-center gap-3 mb-2">
                  <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center">
                    <div className="h-4 w-4 rounded-full bg-primary" />
                  </div>
                  <h4 className="font-bold">Gold</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  Represents excellence, confidence, and premium quality in
                  every mandate.
                </p>
              </div>

              <div className="p-4 shadow shadow-black bg-white border border-border shadow-sm">
                <div className="flex items-center gap-3 mb-2">
                  <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center border border-border">
                    <div className="h-4 w-4 rounded-full bg-white border border-muted-foreground/20" />
                  </div>
                  <h4 className="font-bold">White</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  Symbolizes absolute transparency, integrity, and clarity in
                  every relationship.
                </p>
              </div>
            </div>
          </div>

          <p className="md:text-lg text-[#0A1628]/60 mb-6 max-w-3xl mx-auto leading-normal text-center mt-12">
            Together, these values define a modern, dependable, and
            client-focused institution trusted to steward wealth across market
            cycles.
          </p>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <ChevronDown className="h-8 w-8 text-[#0A1628]/40" />
          </div>
        </div>
      </section>
      <section className="py-8 md:py-16 px-4 sm:px-6 lg:px-8 bg-white relative">
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

        <div className="max-w-7xl mx-auto relative z-10">
          <CustomCards />
        </div>
      </section>

      <InvestmentApproach />
      {/* Services Section - Asymmetric Layout */}
      <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-[#0A1628] relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute top-1/4 right-0 w-1/3 h-96 bg-[#D4AF37]/10 blur-[150px] rounded-full" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#D4AF37] text-[#0A1628] text-sm font-bold px-5 py-2 rounded-full mb-6">
                <Landmark className="h-4 w-4" />
                Our Investment Products
              </div>
              <p className="text-xl text-white/70 leading-relaxed mb-4">
                At Prime Capital & Investment Limited, our solutions are
                designed to meet diverse client needs for wealth creation and
                preservation, blending disciplined investment strategies with
                innovative and transparent offerings. We provide access to a
                range of professionally managed funds and bespoke portfolios.
                <br />
                <span>Our Offerings Include:</span>
              </p>
            </div>

            <div className="relative hidden md:block">
              <div className="aspect-square rounded-full border-2 border-[#D4AF37]/30 absolute -inset-4 animate-[spin_30s_linear_infinite]" />
              <div className="aspect-square rounded-full border border-[#D4AF37]/15 absolute -inset-8 animate-[spin_40s_linear_infinite_reverse]" />
              {/** NOTE: Picture can be added here **/}
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card
                  key={index}
                  className="group bg-white/5 border-white/10 hover:border-[#D4AF37] transition-all duration-300 hover:-translate-y-1 backdrop-blur-sm shadow-elevated hover:shadow-elevated-lg"
                >
                  <CardContent className="pt-8">
                    <div className="h-14 w-14 rounded-xl bg-[#D4AF37]/20 flex items-center justify-center mb-6 group-hover:bg-[#D4AF37] transition-all duration-300 group-hover:scale-110">
                      <Icon className="h-7 w-7 text-[#D4AF37] group-hover:text-[#0A1628] transition-colors duration-300" />
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-white group-hover:text-[#D4AF37] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-white/70 leading-relaxed text-sm">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
      {/* Investment Approach - Light Section */}
      <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-[#FDFCFA] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#D4AF37]/8 rounded-full blur-[150px]" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#0A1628]/5 rounded-full blur-[150px]" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-[#0A1628] text-white text-sm font-bold px-5 py-2 rounded-full mb-6">
              Why Us ?
            </div>
            <h2 className="font-display text-5xl md:text-7xl font-bold mb-6 text-[#0A1628]">
              Why Choose Prime Capital & Investment Limited
            </h2>
            <p className="text-xl text-[#0A1628]/60 max-w-4xl mx-auto leading-relaxed">
              Choosing a wealth manager is a decision of trust. Clients choose
              Prime Capital & Investment Limited because we offer:
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {investmentPillars.map((pillar, index) => {
              return (
                <div
                  key={index}
                  className="group flex gap-6 p-8 rounded-2xl bg-white border border-[#0A1628]/5 hover:border-[#D4AF37] transition-all duration-300 shadow-elevated hover:shadow-elevated-lg hover:-translate-y-1"
                >
                  <div>
                    <h3 className="text-2xl font-display font-bold mb-3 text-[#0A1628] group-hover:text-[#D4AF37] transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-[#0A1628]/70 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Recent News Section */}
      <RecentNewsWrapper />

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-8 text-[#0A1628]">
                Get in <span className="text-[#D4AF37]">Touch</span>
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-6 p-6 rounded-xl bg-[#F5F2ED] border border-[#0A1628]/5 hover:border-[#D4AF37] transition-all duration-300 shadow-elevated hover:shadow-elevated-lg">
                  <div className="h-14 w-14 rounded-xl bg-[#D4AF37]/15 flex items-center justify-center shrink-0">
                    <MapPin className="h-7 w-7 text-[#D4AF37]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-2 text-[#0A1628]">
                      Abuja Office
                    </h4>
                    <p className="text-[#0A1628]/70">
                      No. 3, Sankuru Close, Maitama, Abuja, Nigeria
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6 p-6 rounded-xl bg-[#F5F2ED] border border-[#0A1628]/5 hover:border-[#D4AF37] transition-all duration-300 shadow-elevated hover:shadow-elevated-lg">
                  <div className="h-14 w-14 rounded-xl bg-[#D4AF37]/15 flex items-center justify-center shrink-0">
                    <Phone className="h-7 w-7 text-[#D4AF37]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-2 text-[#0A1628]">
                      Phone
                    </h4>
                    <p className="text-[#0A1628]/70">+234 (0) 9 123 4567</p>
                  </div>
                </div>

                <div className="flex items-start gap-6 p-6 rounded-xl bg-[#F5F2ED] border border-[#0A1628]/5 hover:border-[#D4AF37] transition-all duration-300 shadow-elevated hover:shadow-elevated-lg">
                  <div className="h-14 w-14 rounded-xl bg-[#D4AF37]/15 flex items-center justify-center shrink-0">
                    <Mail className="h-7 w-7 text-[#D4AF37]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-2 text-[#0A1628]">
                      Email
                    </h4>
                    <p className="text-[#0A1628]/70">info@primecapital.ng</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative h-[400px] rounded-2xl overflow-hidden border border-[#0A1628]/10 shadow-elevated-lg">
              <iframe
                title="maps"
                width="520"
                height="400"
                frameBorder="0"
                scrolling="no"
                marginHeight={0}
                marginWidth={0}
                id="gmap_canvas"
                src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=No.%203,%20Sankuru%20Close,%20Maitama,%20Abuja%20Abuja+()&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              ></iframe>{" "}
              <script
                type="text/javascript"
                src="https://embedmaps.com/google-maps-authorization/script.js?id=ed8b6f49bccb559e680dc1bbdbbe488b26a5e5e3"
              ></script>
            </div>
          </div>
        </div>
      </section>
      {/* Disclaimer */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 border-t border-[#0A1628]/10 bg-[#F5F2ED]">
        <div className="max-w-7xl mx-auto">
          <div className="p-8 rounded-2xl bg-white border border-[#0A1628]/5 shadow-elevated">
            <h4 className="font-bold mb-4 flex items-center gap-2 text-[#D4AF37]">
              <ShieldCheck className="h-5 w-5" />
              Important Disclosure & Investor Warning
            </h4>
            <p className="text-sm text-[#0A1628]/70 leading-relaxed">
              The information provided above is for illustrative purposes and
              does not constitute an offer to sell or a solicitation of an offer
              to buy any securities. Investments in the capital market are
              subject to market risks, and the value of investments can go up or
              down. Past performance is not a guarantee of future returns.
              <br />
              <br />
              Prospective investors are advised to carefully read the relevant
              fund prospectus or information memorandum, which contain detailed
              risk warnings and disclosures, before making any investment
              decision. The SEC advises the public to always verify the
              registration status of any entity or investment product with the
              Commission before dealing with them to avoid investment scams. For
              verification or further information, please contact the SEC
              through their official website:{" "}
              <a
                href="https://www.sec.gov.ng"
                className="text-[#D4AF37] hover:underline font-semibold"
              >
                www.sec.gov.ng
              </a>
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
