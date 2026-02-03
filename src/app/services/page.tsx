/** biome-ignore-all lint/suspicious/noArrayIndexKey: <> */
"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function ServicesPage() {
  const [openSubsections, setOpenSubsections] = useState<{
    [key: string]: boolean;
  }>({});
  const advantageScrollRef = useRef<HTMLDivElement>(null);
  const advantageCardsRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

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
      description: "Investments in securities with short-term maturities",
      features: [
        "Treasury Bills (T-Bills)",
        "Commercial Papers (CPs)",
        "Certificates of Deposit (CDs)",
        "Bankers' Acceptances (BAs)",
      ],
    },
    {
      title: "Fixed Income Securities",
      description:
        "Stable income-oriented portfolios investing in government bonds and high-quality corporate debt",
      features: ["FGN Bonds", "State Bonds", "Corporate Bonds"],
    },
    {
      title: "Ethical & Shari'ah Compliant Products",
      description:
        "Investment products aligned with ethical investment principles.",
      features: [
        "Murabahah Investment",
        "Ijara Investment",
        "Sukuk (Islamic bond)",
        "Mudarabah Investment",
      ],
    },
    {
      title: "Alternative Investments",
      description:
        "Access to non-traditional assets for qualified investors seeking enhanced returns.",
      features: [
        "Real estate investments",
        "Private equity investments",
        "Venture capital access",
        "Infrastructure projects",
      ],
    },
    {
      title: "Financial Advisory",
      description:
        " Our Financial Advisory services are designed to help individuals and corporate institutions make sound, compliant, and sustainable financial decisions aligned with their goals, risk appetite, and ethical preferences. ",
      hasSubsections: true,
      subsections: [
        {
          title: "Investment Advisory",
          features: [
            "Portfolio structuring and asset allocation",
            "Risk profiling and investment strategy design",
            "Advisory on equities, fixed income, and alternative assets",
            "Sharia-compliant investment (non-interest based)",
          ],
        },
        {
          title: "Wealth & Financial Planning",
          features: [
            "Personal and family wealth planning",
            "Retirement and education planning",
            "Estate and succession planning",
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
      ],
      features: [],
    },
    {
      title: "Equity",
      description:
        "Equity Investment Services - Professionally managed equity investment solutions across Nigeria and selected global markets, tailored to meet both conventional and Ethical-compliant investment objectives.",
      hasSubsections: false,
      subsections: [],
      features: [],
    },
  ];

  const whyChooseUs = [
    {
      image: "/goldbars.png",
      mobilePic: "/goldbars.png",
      title: "Gold Standard Excellence",
      description:
        "Professional expertise, disciplined research, and premium service delivery define our commitment to quality.",
    },
    {
      image: "/transparency.svg",
      mobilePic: "/transparency.svg",
      title: "Absolute Transparency",
      description:
        "Represented by our 'White' value, we ensure full transparency in disclosures, reporting, and decision-making.",
    },
    {
      image: "/sec.svg",
      mobilePic: "/sec.svg",
      title: "SEC-Regulated Assurance",
      description:
        "Managed within a robust regulatory framework, strictly in accordance with the Investments & Securities Act.",
    },
    {
      image: "/client-handshake.png",
      mobilePic: "/client.svg",
      title: "Client-First Partnerships",
      description:
        "Bespoke solutions tailored to individual goals, risk profiles, and legacy aspirations.",
    },
    {
      image: "/team.svg",
      mobilePic: "/team.svg",
      title: "Our Financial Advisory Team",
      description: "",
    },
  ];

  // Carousel navigation functions
  const scrollToSlide = (index: number) => {
    if (!advantageScrollRef.current || !advantageCardsRef.current) return;
    const container = advantageScrollRef.current;
    const cards = advantageCardsRef.current;
    const firstCard = cards.querySelector("article");

    if (!firstCard) return;

    const slideWidth = firstCard.offsetWidth;
    const targetScroll = index * slideWidth;

    container.scrollTo({
      left: targetScroll,
      behavior: "smooth",
    });
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    const nextIndex = (currentSlide + 1) % whyChooseUs.length;
    scrollToSlide(nextIndex);
  };

  const prevSlide = () => {
    const prevIndex =
      (currentSlide - 1 + whyChooseUs.length) % whyChooseUs.length;
    scrollToSlide(prevIndex);
  };

  // Detect mobile screen size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // 768px is the md breakpoint in Tailwind
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Track current slide on scroll
  useEffect(() => {
    if (!advantageScrollRef.current || !advantageCardsRef.current) return;

    const container = advantageScrollRef.current;
    const cards = advantageCardsRef.current;
    const firstCard = cards.querySelector("article");

    if (!firstCard) return;

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft;
      const slideWidth = firstCard.offsetWidth;
      const currentIndex = Math.round(scrollLeft / slideWidth);
      setCurrentSlide(currentIndex);
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  // Auto-play carousel
  useEffect(() => {
    if (!advantageScrollRef.current || !advantageCardsRef.current) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => {
        const nextIndex = (prev + 1) % whyChooseUs.length;
        const container = advantageScrollRef.current;
        const cards = advantageCardsRef.current;
        const firstCard = cards?.querySelector("article");

        if (container && cards && firstCard) {
          const slideWidth = firstCard.offsetWidth;
          const targetScroll = nextIndex * slideWidth;
          container.scrollTo({
            left: targetScroll,
            behavior: "smooth",
          });
        }
        return nextIndex;
      });
    }, 8000); // 5 seconds - standard carousel timing

    return () => clearInterval(interval);
  }, []);

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
            professionally managed funds and bespoke portfolios. Our Offerings
            Include:
          </p>
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
                                        {subsection.features.map(
                                          (feature, idx) => (
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
                                              <span className="leading-relaxed">
                                                {feature}
                                              </span>
                                            </motion.div>
                                          ),
                                        )}
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
                      service.features.length > 0 && (
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
                      )
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-20 md:py-32 px-0 md:px-4 lg:px-8 bg-muted/50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10 px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              The Prime Capital Advantage
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              We combine professional guidance with disciplined automation to
              deliver a sophisticated investment experience.
            </p>
          </div>
        </div>

        {/* Horizontal Scroll Carousel - Full Width */}
        <div className="relative -mx-4 sm:-mx-6 md:mx-0 overflow-hidden">
          {/* Navigation Arrows */}
          <button
            type="button"
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 h-12 w-12 rounded-full bg-white/90 backdrop-blur-sm border-2 border-[#D4AF37] text-[#0A1628] flex items-center justify-center hover:bg-[#D4AF37] hover:text-white transition-all duration-300 shadow-elevated-lg hover:scale-110"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            type="button"
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 h-12 w-12 rounded-full bg-white/90 backdrop-blur-sm border-2 border-[#D4AF37] text-[#0A1628] flex items-center justify-center hover:bg-[#D4AF37] hover:text-white transition-all duration-300 shadow-elevated-lg hover:scale-110"
            aria-label="Next slide"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Carousel Container */}
          <div
            ref={advantageScrollRef}
            className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide w-full"
          >
            <div ref={advantageCardsRef} className="flex w-full">
              {/* Slides */}
              {whyChooseUs.map((item) => {
                return (
                  <article
                    key={item.title}
                    className="group relative flex-shrink-0 snap-start"
                    style={{ minWidth: "100%", width: "100%" }}
                  >
                    {/* Card with image using Next.js Image for proper aspect ratio preservation */}
                    <div className="relative w-full bg-white">
                      {/* Image Container - aspect ratio maintained */}
                      <div className="relative w-full aspect-[16/10] md:aspect-[16/9] lg:aspect-[16/9]">
                        <Image
                          src={isMobile ? item.mobilePic : item.image}
                          alt={item.title}
                          fill
                          className="object-contain"
                          sizes="100vw"
                          priority={false}
                        />
                      </div>

                      {/* Gradient overlay at bottom for text */}
                      <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-[#0A1628] via-[#0A1628]/80 to-transparent" />

                      {/* Content overlay - positioned at bottom */}
                      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 lg:p-12 z-10">
                        <div className="max-w-2xl">
                          {/* Title */}
                          <h3 className="font-display text-2xl md:text-3xl lg:text-4xl tracking-tight mb-3 md:mb-4 text-[#D4AF37] font-bold drop-shadow-lg">
                            {item.title}
                          </h3>

                          {/* Divider line */}
                          <div className="w-12 h-px bg-[#D4AF37] mb-4 md:mb-6 group-hover:w-full transition-all duration-500" />

                          {/* Description */}
                          {item.description && (
                            <p className="text-sm md:text-base lg:text-lg text-white/90 leading-relaxed drop-shadow-md font-medium">
                              {item.description}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="flex justify-center gap-3 mt-8 px-4 sm:px-6 md:px-0">
            {whyChooseUs.map((item, index) => (
              <button
                type="button"
                key={`${item.title}-${index}`}
                onClick={() => scrollToSlide(index)}
                className={`h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index
                    ? "w-8 bg-[#D4AF37]"
                    : "w-3 bg-[#0A1628]/30 hover:bg-[#0A1628]/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-secondary text-secondary-foreground relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 translate-x-1/4" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Optimise Your Portfolio?
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
