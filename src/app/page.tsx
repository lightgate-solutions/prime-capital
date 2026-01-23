/** biome-ignore-all lint/suspicious/noArrayIndexKey: <> */

import {
  ArrowRight,
  BarChart3,
  BrainCircuit,
  ChartCandlestick,
  Eye,
  Gem,
  House,
  Landmark,
  MapPin,
  Phone,
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
import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { InvestmentApproach } from "@/components/investment-approach";

export default function HomePage() {
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
      title: "Strategic Discovery & Alignment",
      description:
        "We begin with a deep understanding of each client's financial position, objectives, and risk tolerance, ensuring every portfolio is aligned with clear goals.",
    },
    {
      icon: House,
      title: "Disciplined Asset Allocation",
      description:
        "We construct resilient portfolios using a Total Portfolio Approach (TPA), ensuring assets work collectively across equities, fixed income, and alternatives.",
    },
    {
      icon: ShieldCheck,
      title: "Integrated Risk Management",
      description:
        "Risk management is a 24/7 commitment. We provide clear, real-time insights and ESG integration to ensure sustainable, long-term returns.",
    },
    {
      icon: Zap,
      title: "Innovation-Led Stewardship",
      description:
        "We enhance human expertise with advanced analytics, AI-enabled insights, and scenario modeling to stress-test portfolios across market cycles.",
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

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-28 pb-12 md:pt-36 md:pb-20 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-background via-background to-primary/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-in -mt-96 fade-in slide-in-from-left duration-1000">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-sm font-medium px-4 py-2 rounded-full mb-6 border border-primary/20">
                <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                SEC Registered & Regulated
              </div>
              <h1 className="text-5xl font-bold mb-6 text-balance leading-tight">
                Grow and Protect Client Wealth Through Disciplined and
                Innovative Strategies.
              </h1>
              <p className=" text-muted-foreground mb-8 text-pretty leading-relaxed max-w-xl">
                Prime Capital & Investment Limited is a Fund and Portfolio
                Management firm built on disciplined expertise, unwavering
                integrity, and a clear commitment to long-term wealth creation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 px-8"
                  asChild
                >
                  <Link href="/contact">
                    Partner With Us <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="px-8">
                  <Link href="/about">Our Philosophy</Link>
                </Button>
              </div>
            </div>
            <div className="relative animate-in fade-in zoom-in duration-1000">
              <div className="absolute inset-0 bg-linear-to-tr from-primary/20 to-transparent rounded-3xl blur-3xl" />
              <div className="relative rounded-3xl overflow-hidden border border-primary/10 shadow-2xl">
                <Image
                  src="/hero.png"
                  width={250}
                  height={250}
                  alt="Financial Excellence"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-background/80 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Brief Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">About Us</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                We exist to help investors navigate complexity with confidence.
                Through professional fund management, bespoke portfolio
                solutions, and robust risk management, we transform financial
                aspirations into enduring value.
              </p>
              <p className=" text-muted-foreground py-2">
                At the heart of our identity are the colors that define our
                promise:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="p-4 rounded-xl bg-muted/50 border border-border">
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
                <div className="p-4 rounded-xl bg-white border border-border shadow-sm">
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
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="h-48 rounded-2xl bg-primary/10 flex flex-col items-center justify-center p-6 text-center">
                  <Target className="h-10 w-10 text-primary mb-4" />
                  <h3 className="font-bold">Our Mission</h3>
                  <p className="text-xs text-muted-foreground mt-2">
                    Grow and protect client wealth through disciplined
                    strategies.
                  </p>
                </div>
                <div className="h-64 rounded-2xl bg-muted overflow-hidden relative group">
                  <Image
                    src="/mission.png"
                    alt="Growth"
                    width={250}
                    height={250}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-primary/20" />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="h-64 rounded-2xl bg-muted overflow-hidden relative group">
                  <Image
                    src="/vision.png"
                    width={250}
                    height={250}
                    alt="Wealth"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20" />
                </div>
                <div className="h-48 rounded-2xl bg-secondary text-secondary-foreground flex flex-col items-center justify-center p-6 text-center">
                  <Eye className="h-10 w-10 text-primary mb-4" />
                  <h3 className="font-bold">Our Vision</h3>
                  <p className="text-xs text-secondary-foreground/70 mt-2">
                    To be one of the most trusted partners in wealth management.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Investment Products
            </h2>
            <p className="md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Access a range of professionally managed funds and bespoke
              portfolios designed for wealth creation and preservation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card
                  key={index}
                  className="group hover:shadow-2xl transition-all duration-300 border-primary/5 hover:border-primary/20 overflow-hidden"
                >
                  <CardContent className="pt-8">
                    <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <Icon className="h-7 w-7" />
                    </div>
                    <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <InvestmentApproach />

      {/* Why Choose Us Section */}
      <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Why Choose Prime Capital
            </h2>
            <p className="md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Choosing a wealth manager is a decision of trust. We build
              enduring financial partnerships designed to empower confidence,
              stability, and prosperity.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="group p-8 rounded-3xl bg-muted/50 border border-border hover:bg-white hover:shadow-xl transition-all duration-300"
                >
                  <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Secure Your Future?
          </h2>
          <p className="text-xl mb-10 text-primary-foreground/90">
            Join a modern, dependable, and client-focused institution trusted to
            steward wealth across market cycles.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              type="button"
              className="bg-white text-primary hover:bg-white/90 px-8 py-4 rounded-full font-bold transition-colors shadow-lg"
            >
              <Link href="/contact" className="flex items-center">
                Get Started Now <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </button>
            <button
              type="button"
              className="bg-transparent border-2 border-white/30 hover:border-white text-white px-8 py-4 rounded-full font-bold transition-colors"
            >
              <Link href="/about">Learn More</Link>
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                Contact Us
              </h2>
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Abuja Office</h4>
                    <p className="text-muted-foreground">
                      No. 3, Sankuru Close, Maitama, Abuja, Nigeria
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Telephone</h4>
                    <p className="text-muted-foreground">+234 (0) 9 123 4567</p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Email</h4>
                    <p className="text-muted-foreground">
                      info@primecapital.ng
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-100 rounded-3xl bg-muted overflow-hidden relative border border-border">
              <div className="absolute inset-0 bg-linear-to-br from-primary/20 to-muted flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-16 w-16 text-primary mx-auto mb-4" />
                  <p className="text-lg font-bold">Maitama, Abuja</p>
                  <p className="text-sm text-muted-foreground">
                    Visit us for a consultation
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="p-8 rounded-3xl bg-muted/50 border border-border">
            <h4 className="font-bold mb-4 flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-primary" />
              Important Disclosure & Investor Warning
            </h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
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
                className="text-primary hover:underline"
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
