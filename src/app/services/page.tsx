/** biome-ignore-all lint/suspicious/noArrayIndexKey: <> */
"use client";

import {
  AnimatePresence,
  motion,
} from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Gem,
  Shield,
  ShieldCheck,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function ServicesPage() {
  const [openSubsections, setOpenSubsections] = useState<{
    [key: string]: boolean;
  }>({});

  const toggleSubsection = (serviceIndex: number, subsectionIndex: number) => {
    const key = `${serviceIndex}-${subsectionIndex}`;
    setOpenSubsections((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };
  const services = [
    {
      title: "Money Market Instruments",
      description:
        "Investments in securities with short-term maturities, providing liquidity and capital preservation.",
      features: [
        "Treasury Bills (T-Bills)",
        "Commercial Papers (CPs)",
        "Certificates of Deposit (CDs)",
        "Bankers' Acceptances (BAs)",
        "High liquidity and low risk",
        "Competitive short-term yields",
      ],
    },
    {
      title: "Fixed Income Securities",
      description:
        "Stable income-oriented portfolios investing in high-quality debt instruments.",
      features: [
        "FGN Bonds & State Bonds",
        "High-quality corporate debt",
        "Regular interest income",
        "Capital preservation focus",
        "Diversified credit exposure",
        "Professional duration management",
      ],
    },
    {
      title: "Multi-Asset Portfolios",
      description:
        "Balanced strategies dynamically allocating across asset classes to capture opportunities.",
      features: [
        "Dynamic asset allocation",
        "Equities and fixed income mix",
        "Risk-adjusted return focus",
        "Market cycle adaptation",
        "Diversification across sectors",
        "Continuous portfolio rebalancing",
      ],
    },
    {
      title: "Ethical & Shari'ah Products",
      description:
        "Investment products aligned with ethical and Islamic investment principles.",
      features: [
        "Shari'ah-compliant screening",
        "Interest-free instruments",
        "Ethical sector focus",
        "Socially responsible investing",
        "Transparent underlying assets",
        "Expert Shari'ah advisory oversight",
      ],
    },
    {
      title: "Discretionary Portfolios",
      description:
        "Tailored mandates for retail and qualified investors, aligned with individual risk profiles.",
      features: [
        "Bespoke investment strategy",
        "Professional fund management",
        "Personalized risk parameters",
        "Regular performance reporting",
        "Fiduciary-first approach",
        "Direct access to fund managers",
      ],
    },
    {
      title: "Alternative Investments",
      description:
        "Access to non-traditional assets for qualified investors seeking enhanced returns.",
      features: [
        "Real estate investments",
        "Private equity opportunities",
        "Venture capital access",
        "Infrastructure projects",
        "Low correlation with public markets",
        "Long-term value creation",
      ],
    },
    {
      title: "Financial Advisory",
      description:
        "Financial Advisory (Conventional & Sharia-Compliant) - Independent, objective advice across both conventional finance and Sharia-compliant finance, ensuring full compliance with applicable regulations and ethical standards.",
      hasSubsections: true,
      subsections: [
        {
          title: "Investment Advisory",
          features: [
            "Portfolio structuring and asset allocation",
            "Risk profiling and investment strategy design",
            "Advisory on equities, fixed income, and alternative assets",
            "Sharia-compliant investment structuring (non-interest based)",
          ],
        },
        {
          title: "Wealth & Financial Planning",
          features: [
            "Personal and family wealth planning",
            "Retirement and education planning",
            "Estate and succession planning (including Sharia-aligned structures)",
          ],
        },
        {
          title: "Corporate & Institutional Advisory",
          features: [
            "Capital structure advisory",
            "Business valuation and financial modelling",
            "Advisory on fund structuring and capital raising",
            "Sharia advisory for Islamic finance products",
          ],
        },
        {
          title: "Sharia Advisory & Compliance",
          features: [
            "Sharia screening of investments",
            "Ongoing Sharia compliance monitoring",
            "Advisory in line with AAOIFI and Islamic finance best practices",
            "Oversight by qualified Sharia advisors (where applicable)",
          ],
        },
      ],
      features: [],
    },
    {
      title: "Equity",
      description:
        "Equity Investment Services - Professionally managed equity investment solutions across the Nigerian and selected global markets, tailored to meet both conventional and Sharia-compliant investment objectives.",
      hasSubsections: true,
      subsections: [
        {
          title: "Conventional Equity Investments",
          features: [
            "Actively managed stock portfolios",
            "Nigerian Exchange (NGX) listed equities",
            "Sector-diversified investment strategies",
            "Fundamental and technical analysis",
            "Ongoing portfolio monitoring and rebalancing",
            "Suitable for individuals, HNW investors, corporates, and institutions",
          ],
        },
        {
          title: "Sharia-Compliant Equity Investments",
          features: [
            "Sharia-screened stocks only",
            "Exclusion of non-permissible sectors (alcohol, gambling, conventional banking)",
            "Ethical and socially responsible investing",
            "Oversight in line with Islamic finance standards",
            "Profit-sharing and asset-backed investment principles",
            "Suitable for ethical and faith-based investors",
          ],
        },
      ],
      features: [],
    },
  ];

  const whyChoose = [
    {
      title: "Gold Standard Excellence",
      description:
        "Professional expertise and disciplined research define our premium service delivery.",
      icon: Gem,
    },
    {
      title: "Absolute Transparency",
      description:
        "Clear reporting and ethical conduct ensure you always understand your investments.",
      icon: ShieldCheck,
    },
    {
      title: "SEC-Regulated",
      description:
        "Strict adherence to the Investments & Securities Act (ISA) 2025, as amended, and SEC rules.",
      icon: Shield,
    },
    {
      title: "Innovation-Led",
      description:
        "Leveraging advanced analytics and AI-enabled insights for superior stewardship.",
      icon: Zap,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-28 pb-12 md:pt-36 md:pb-16 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-background via-background to-primary/5">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 text-balance">
            Investment Products
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            At Prime Capital & Investment Limited, our solutions are designed to
            meet diverse client needs for wealth creation and preservation,
            blending disciplined investment strategies with innovative and
            transparent offerings. We provide access to a range of
            professionally managed funds and bespoke portfolios.
          </p>
          <p>Our Offerings Include:</p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-4 md:py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => {
              return (
                <Card
                  key={index}
                  className="group hover:shadow-2xl transition-all duration-300 border-primary/5 hover:border-primary/20"
                >
                  <CardContent className="pt-8">
                    <div className="mb-8">
                      <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed text-lg">
                        {service.description}
                      </p>
                    </div>
                    {service.hasSubsections ? (
                      <div className="space-y-4">
                        {service.subsections?.map((subsection, subIdx) => {
                          const key = `${index}-${subIdx}`;
                          const isOpen = openSubsections[key] ?? false;
                          return (
                            <div
                              key={subIdx}
                              className={`rounded-2xl border border-border overflow-hidden transition-all duration-300 hover:border-primary/40 hover:shadow-md group/subsection ${isOpen ? "bg-muted/50" : "bg-muted/30"}`}
                            >
                              <button
                                type="button"
                                onClick={() => toggleSubsection(index, subIdx)}
                                className="w-full flex items-center justify-between p-6 text-left hover:bg-muted/30 transition-all duration-200 active:scale-[0.98]"
                                aria-expanded={isOpen}
                              >
                                <h4 className="font-bold text-lg text-foreground group-hover/subsection:text-primary transition-colors duration-200">
                                  {subsection.title}
                                </h4>
                                <motion.div
                                  animate={{
                                    rotate: isOpen ? 180 : 0,
                                  }}
                                  transition={{
                                    duration: 0.35,
                                    ease: [0.4, 0, 0.2, 1],
                                  }}
                                  className="flex-shrink-0 ml-4"
                                >
                                  <ChevronDown className="h-5 w-5 text-muted-foreground group-hover/subsection:text-primary transition-colors duration-200" />
                                </motion.div>
                              </button>
                              <AnimatePresence initial={false}>
                                {isOpen && (
                                  <motion.div
                                    initial={{
                                      height: 0,
                                      opacity: 0,
                                    }}
                                    animate={{
                                      height: "auto",
                                      opacity: 1,
                                    }}
                                    exit={{
                                      height: 0,
                                      opacity: 0,
                                    }}
                                    transition={{
                                      duration: 0.4,
                                      ease: [0.4, 0, 0.2, 1],
                                    }}
                                    className="overflow-hidden"
                                  >
                                    <div className="px-6 pb-6 pt-2 border-t border-border/50">
                                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
                                        {subsection.features.map((feature, idx) => (
                                          <motion.div
                                            key={idx}
                                            initial={{ opacity: 0, y: -5 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -5 }}
                                            transition={{
                                              duration: 0.25,
                                              delay: idx * 0.03,
                                              ease: [0.4, 0, 0.2, 1],
                                            }}
                                            className="flex items-start gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                                          >
                                            <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                                            <span className="leading-relaxed">{feature}</span>
                                          </motion.div>
                                        ))}
                                      </div>
                                    </div>
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </div>
                          );
                        })}
                        {service.features && service.features.length > 0 && (
                          <div className="bg-muted/30 p-6 rounded-2xl border border-border">
                            <div className="flex flex-wrap gap-2">
                              {service.features.map((feature, idx) => (
                                <span
                                  key={idx}
                                  className="text-sm font-medium text-muted-foreground"
                                >
                                  {feature}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    ) : (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-muted/30 p-6 rounded-2xl border border-border">
                        {service.features.map((feature, idx) => (
                          <div
                            key={idx}
                            className="flex items-center gap-3 text-sm text-muted-foreground"
                          >
                            <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              The Prime Capital Advantage
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              We combine professional guidance with disciplined automation to
              deliver a sophisticated investment experience.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChoose.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card
                  key={index}
                  className="border-none shadow-lg hover:shadow-xl transition-all"
                >
                  <CardContent className="pt-8 text-center">
                    <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-bold text-xl mb-3">{item.title}</h3>
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

      {/* CTA Section */}
      <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-secondary text-secondary-foreground relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 translate-x-1/4" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Optimize Your Portfolio?
          </h2>
          <p className="text-xl mb-10 text-secondary-foreground/80">
            Let our experts help you navigate the complexities of the financial
            markets with confidence and clarity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-10 py-6 text-lg font-bold"
              asChild
            >
              <Link href="/contact">
                Start Investing <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/20 text-black hover:bg-white/10 px-10 py-6 text-lg font-bold"
              asChild
            >
              <Link href="/about">More on us</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
