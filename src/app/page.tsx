"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowRight,
  BarChart3,
  ChartCandlestick,
  ChevronLeft,
  ChevronRight,
  Landmark,
  Mail,
  MapPin,
  NotebookTabs,
  Phone,
  Scale,
  Shield,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

gsap.registerPlugin(ScrollTrigger);

import { CustomCards } from "@/components/custom-cards";
import { Footer } from "@/components/footer";
import { InvestmentApproach } from "@/components/investment-approach";
import { Navigation } from "@/components/navigation";
import { RecentNewsWrapper } from "@/components/recent-news-wrapper";

export default function HomePage() {
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);
  const missionImageRef = useRef<HTMLDivElement>(null);
  const missionCardRef = useRef<HTMLDivElement>(null);
  const visionImageRef = useRef<HTMLDivElement>(null);
  const visionCardRef = useRef<HTMLDivElement>(null);
  const servicesSectionRef = useRef<HTMLElement>(null);
  const servicesCursorRef = useRef<HTMLDivElement>(null);
  const servicesCardsRef = useRef<HTMLDivElement>(null);
  const whyChooseSectionRef = useRef<HTMLElement>(null);
  const whyChooseCursorRef = useRef<HTMLDivElement>(null);
  const whyChooseCardsRef = useRef<HTMLDivElement>(null);
  const whyChooseScrollRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isServicesHovering, setIsServicesHovering] = useState(false);
  const [isWhyChooseHovering, setIsWhyChooseHovering] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

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

  // Detect mobile screen size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // 768px is the md breakpoint in Tailwind
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

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

  // Services section cursor and animations
  useEffect(() => {
    if (!servicesSectionRef.current || !servicesCursorRef.current) return;

    const section = servicesSectionRef.current;
    const cursor = servicesCursorRef.current;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = section.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      gsap.to(cursor, {
        x: x,
        y: y,
        duration: 0.5,
        ease: "power3.out",
      });
    };

    const handleMouseEnter = () => setIsServicesHovering(true);
    const handleMouseLeave = () => setIsServicesHovering(false);

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
    if (!servicesSectionRef.current || !servicesCardsRef.current) return;

    const ctx = gsap.context(() => {
      const cards = servicesCardsRef.current?.querySelectorAll("article");
      if (cards) {
        gsap.fromTo(
          cards,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: servicesCardsRef.current,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          },
        );
      }
    }, servicesSectionRef);

    return () => ctx.revert();
  }, []);

  // Why Choose Us section cursor and animations
  useEffect(() => {
    if (!whyChooseSectionRef.current || !whyChooseCursorRef.current) return;

    const section = whyChooseSectionRef.current;
    const cursor = whyChooseCursorRef.current;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = section.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      gsap.to(cursor, {
        x: x,
        y: y,
        duration: 0.5,
        ease: "power3.out",
      });
    };

    const handleMouseEnter = () => setIsWhyChooseHovering(true);
    const handleMouseLeave = () => setIsWhyChooseHovering(false);

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
    if (!whyChooseSectionRef.current || !whyChooseCardsRef.current) return;

    const ctx = gsap.context(() => {
      const cards = whyChooseCardsRef.current?.querySelectorAll("article");
      if (cards) {
        gsap.fromTo(
          cards,
          { x: 100, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: whyChooseCardsRef.current,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          },
        );
      }
    }, whyChooseSectionRef);

    return () => ctx.revert();
  }, []);

  // Carousel navigation functions
  const scrollToSlide = (index: number) => {
    if (!whyChooseScrollRef.current || !whyChooseCardsRef.current) return;
    const container = whyChooseScrollRef.current;
    const cards = whyChooseCardsRef.current;
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

  // Track current slide on scroll
  useEffect(() => {
    if (!whyChooseScrollRef.current || !whyChooseCardsRef.current) return;

    const container = whyChooseScrollRef.current;
    const cards = whyChooseCardsRef.current;
    const firstCard = cards.querySelector("article");

    if (!firstCard) return;

    const handleScroll = () => {
      const slideWidth = firstCard.offsetWidth;
      const scrollLeft = container.scrollLeft;
      const slideIndex = Math.round(scrollLeft / slideWidth);

      if (slideIndex >= 0 && slideIndex < whyChooseUs.length) {
        setCurrentSlide(slideIndex);
      }
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
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
        " Balanced strategies for allocating assets across classes in order to build opportunities and manage risks.",
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
        "Tailored mandates for retail and qualified investors, aligned with their risk profiles.",
    },
    {
      icon: ChartCandlestick,
      title: "Alternative Investments",
      description:
        "Access to real estate, private equity, venture capital, and infrastructure funds.",
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
      mobilePic: "/transparency-mobile.jpg",
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
      mobilePic: "/client-handshake.png",
      title: "Client-First Partnerships",
      description:
        "Bespoke solutions tailored to individual goals, risk profiles, and legacy aspirations.",
    },
    {
      image: "/team.svg",
      mobilePic: "/team-mobile.jpg",
      title: "Our Financial Advisory Team",
      description: "",
    },
  ];

  // Auto-play carousel
  useEffect(() => {
    if (!whyChooseScrollRef.current || !whyChooseCardsRef.current) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => {
        const nextIndex = (prev + 1) % whyChooseUs.length;
        const container = whyChooseScrollRef.current;
        const cards = whyChooseCardsRef.current;
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
    <div className="min-h-screen flex flex-col bg-[#FDFCFA] text-[#0A1628] overflow-x-hidden">
      <Navigation />
      {/* Hero Section - Modern with Background Image */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-start overflow-hidden"
        style={{
          backgroundImage: `url(/hero-image.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "75% center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Dark overlay - darker on left, lighter on right */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628]/90 via-[#0A1628]/70 to-[#0A1628]/50 z-0" />

        {/* Subtle animated accent elements */}
        <div
          className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[#D4AF37]/10 rounded-full blur-[120px] z-0"
          style={{
            transform: `translate(${mousePosition.x * 0.015}px, ${mousePosition.y * 0.015}px)`,
            transition: "transform 0.5s ease-out",
          }}
        />
        <div
          className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-[100px] z-0"
          style={{
            transform: `translate(${-mousePosition.x * 0.01}px, ${-mousePosition.y * 0.01}px)`,
            transition: "transform 0.5s ease-out",
          }}
        />

        {/* Hero Content */}
        <div className="relative z-10 px-4 sm:px-6 lg:px-12 xl:px-20 pt-32 pb-20">
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-semibold px-6 py-3 rounded-full mb-8 shadow-elevated">
              <ShieldCheck className="h-4 w-4" />
              <span>SEC Registered & Regulated Financial Institution</span>
            </div>

            {/* Main Headline */}
            <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-medium mb-4 tracking-tight text-[#D4AF37] drop-shadow-lg">
              At Prime Capital
            </h2>
            <h1
              className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-8 tracking-tight text-white leading-tight drop-shadow-2xl"
              style={{
                transform: `translateY(${scrollY * 0.1}px)`,
                opacity: 1 - scrollY * 0.001,
              }}
            >
              We Build Wealth & Preserve Trust
            </h1>

            <p className="text-lg md:text-xl text-white/90 mb-12 leading-relaxed drop-shadow-lg">
              Prime Capital & Investment Limited is a Fund and Portfolio
              Management firm built on{" "}
              <span className="font-semibold text-white">
                disciplined expertise, unwavering integrity, and a clear
                commitment to long-term wealth creation.
              </span>
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6">
              <Link href="/contact">
                <button
                  type="button"
                  className="group relative hover:cursor-pointer px-10 py-5 bg-[#D4AF37] text-[#0A1628] rounded-full font-bold text-lg overflow-hidden transition-all duration-300 hover:scale-105 shadow-elevated-lg hover:shadow-2xl"
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
                  className="group hover:cursor-pointer px-10 py-5 border-2 border-white/30 text-white rounded-full font-bold text-lg hover:border-[#D4AF37] hover:bg-[#D4AF37]/20 backdrop-blur-sm transition-all duration-300 flex items-center gap-2"
                >
                  <NotebookTabs className="h-5 w-5" />
                  Our Philosophy
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* About Brief Section */}
      <section className="py-24 md:py-40 px-4 sm:px-6 lg:px-8 bg-[#FDFCFA] relative overflow-hidden">
        {/* Enhanced Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#D4AF37]/10 rounded-full blur-[200px]" />
          <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-[#0A1628]/8 rounded-full blur-[200px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-[#D4AF37]/5 to-[#0A1628]/5 rounded-full blur-[250px]" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10 space-y-32">
          {/* About Us Subsection */}
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-8 text-[#0A1628] leading-tight">
              About Us
            </h2>
            <p className="text-xl md:text-2xl text-[#0A1628]/70 leading-relaxed mb-8 font-light">
              We exist to help investors navigate complexity with confidence.
              Through professional fund management, bespoke portfolio solutions,
              and robust risk management, we transform financial aspirations
              into enduring value.
            </p>
            <p className="text-lg text-[#0A1628]/60 mb-12">
              At the heart of our identity are the colors that define our
              promise:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
              <div className="group p-8 rounded-3xl bg-white border-2 border-[#D4AF37]/30 shadow-elevated-lg hover:shadow-2xl hover:border-[#D4AF37] transition-all duration-500 hover:-translate-y-2">
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-[#D4AF37] to-[#D4AF37]/80 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <div className="h-6 w-6 rounded-full bg-white" />
                  </div>
                  <h4 className="font-display text-2xl font-bold text-[#0A1628]">
                    Gold
                  </h4>
                </div>
                <p className="text-base text-[#0A1628]/70 leading-relaxed">
                  Represents excellence, confidence, and premium quality in
                  every mandate.
                </p>
              </div>
              <div className="group p-8 rounded-3xl bg-gradient-to-br from-white to-[#F5F2ED] border-2 border-[#0A1628]/20 shadow-elevated-lg hover:shadow-2xl hover:border-[#0A1628]/40 transition-all duration-500 hover:-translate-y-2">
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-12 w-12 rounded-2xl bg-white border-2 border-[#0A1628]/30 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <div className="h-6 w-6 rounded-full bg-[#0A1628]/10 border-2 border-[#0A1628]/30" />
                  </div>
                  <h4 className="font-display text-2xl font-bold text-[#0A1628]">
                    White
                  </h4>
                </div>
                <p className="text-base text-[#0A1628]/70 leading-relaxed">
                  Symbolizes absolute transparency, integrity, and clarity in
                  every relationship.
                </p>
              </div>
            </div>
          </div>

          {/* Mission Section */}
          <div className="relative h-[500px] md:h-[600px] rounded-3xl overflow-hidden group">
            <div
              ref={missionImageRef}
              className="absolute inset-0 w-full h-full"
            >
              <Image
                src="/mission.png"
                alt="Growth"
                width={1200}
                height={600}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            {/* Gradient overlay on the right side to avoid center text */}
            <div className="absolute inset-0 bg-gradient-to-l from-[#D4AF37] via-[#D4AF37]/95 md:from-[#D4AF37]/95 md:via-[#D4AF37]/80 via-[#D4AF37]/40 to-[#0A1628]/80 md:to-transparent" />
            {/* Text content positioned on the right to avoid center image text */}
            <div
              ref={missionCardRef}
              className="absolute right-0 top-0 bottom-0 w-full lg:w-1/2 flex items-center justify-end p-8 md:p-12 z-10"
            >
              <div className="max-w-md text-right lg:text-left">
                <h3 className="font-display text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg">
                  Our Mission
                </h3>
                <p className="text-lg md:text-xl text-white/95 leading-relaxed font-medium drop-shadow-md">
                  Grow and protect client wealth through innovative and
                  disciplined strategies.
                </p>
              </div>
            </div>
          </div>

          {/* Vision Section */}
          <div className="relative h-[500px] md:h-[600px] rounded-3xl overflow-hidden group">
            <div
              ref={visionImageRef}
              className="absolute inset-0 w-full h-full"
            >
              <Image
                src="/vision.png"
                width={1200}
                height={600}
                alt="Wealth"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            {/* Gradient overlay that merges text card into image */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628]/95 via-[#0A1628]/80 via-transparent to-transparent" />
            {/* Text content positioned on the left */}
            <div
              ref={visionCardRef}
              className="absolute left-0 top-0 bottom-0 w-full lg:w-1/2 flex items-center p-8 md:p-12 z-10"
            >
              <div className="max-w-md">
                <h3 className="font-display text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg">
                  Our Vision
                </h3>
                <p className="text-lg md:text-xl text-white/95 leading-relaxed font-medium drop-shadow-md">
                  To be one of the most trusted partners in wealth management.
                </p>
              </div>
            </div>
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
      <section
        ref={servicesSectionRef}
        className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-[#0A1628] relative overflow-hidden"
      >
        {/* Cursor effect */}
        <div
          ref={servicesCursorRef}
          className="pointer-events-none absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full border-2 border-[#D4AF37] bg-[#D4AF37]/20 transition-opacity duration-300"
          style={{ opacity: isServicesHovering ? 1 : 0 }}
        />

        {/* Background Decoration */}
        <div className="absolute top-1/4 right-0 w-1/3 h-96 bg-[#D4AF37]/10 blur-[150px] rounded-full" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#D4AF37]/20 border-2 border-[#D4AF37] text-[#D4AF37] text-sm font-bold px-5 py-2 rounded-full mb-6">
                <Landmark className="h-4 w-4" />
                Our Investment Products
              </div>
              <p className="text-xl text-white/70 leading-relaxed mb-4">
                At Prime Capital & Investment Limited, our solutions are
                designed to meet diverse client needs for wealth creation and
                preservation, blending disciplined investment strategies with
                innovative and transparent offerings. We provide access to a
                range of professionally managed funds and bespoke portfolios.
                Our Offerings Include:
              </p>
            </div>

            <div className="relative hidden md:block">
              {/* Decorative element removed to reduce distraction from text */}
            </div>
          </div>

          {/* Services Grid */}
          <div
            ref={servicesCardsRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {services.map((service) => {
              return (
                <article
                  key={service.title}
                  className="group relative transition-transform duration-500 ease-out hover:-translate-y-2 h-full"
                >
                  {/* Card with paper texture effect */}
                  <div className="relative bg-white/5 border border-[#D4AF37]/20 md:border-t md:border-l md:border-r-0 md:border-b-0 p-6 h-full">
                    {/* Top torn edge effect */}
                    <div className="absolute -top-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent" />

                    {/* Title */}
                    <h3 className="font-display text-xl tracking-tight mb-3 text-white group-hover:text-[#D4AF37] transition-colors duration-300">
                      {service.title}
                    </h3>

                    {/* Divider line */}
                    <div className="w-12 h-px bg-[#D4AF37]/60 mb-4 group-hover:w-full transition-all duration-500" />

                    {/* Description */}
                    <p className="text-sm text-white/70 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Bottom right corner fold effect */}
                    <div className="absolute bottom-0 right-0 w-6 h-6 overflow-hidden">
                      <div className="absolute bottom-0 right-0 w-8 h-8 bg-[#0A1628] rotate-45 translate-x-4 translate-y-4 border-t border-l border-[#D4AF37]/30" />
                    </div>
                  </div>

                  {/* Shadow/depth layer */}
                  <div className="absolute inset-0 -z-10 translate-x-1 translate-y-1 bg-[#D4AF37]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </article>
              );
            })}
          </div>
        </div>
      </section>
      {/* Investment Approach - Light Section */}
      <section
        ref={whyChooseSectionRef}
        className="py-20 md:py-32 px-0 md:px-4 lg:px-8 bg-[#FDFCFA] relative overflow-hidden"
      >
        {/* Cursor effect */}
        <div
          ref={whyChooseCursorRef}
          className="pointer-events-none absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full border-2 border-[#D4AF37] bg-[#D4AF37]/20 transition-opacity duration-300"
          style={{ opacity: isWhyChooseHovering ? 1 : 0 }}
        />

        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#D4AF37]/8 rounded-full blur-[150px]" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#0A1628]/5 rounded-full blur-[150px]" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10 px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="font-display text-5xl md:text-7xl font-bold mb-6 text-[#0A1628]">
              Why Choose Prime Capital?
            </h2>
            <p className="text-xl text-[#0A1628]/60 max-w-4xl mx-auto leading-relaxed">
              Choosing a wealth manager is a decision of trust. We build
              enduring financial partnerships designed to empower confidence,
              stability, and prosperity.
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
            ref={whyChooseScrollRef}
            className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide w-full"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            <div ref={whyChooseCardsRef} className="flex w-full">
              {/* Slides */}
              {whyChooseUs.map((item) => {
                const hasDedicatedMobile = item.mobilePic !== item.image;
                return (
                  <article
                    key={item.title}
                    className="group relative flex-shrink-0 h-[400px] md:h-[600px] snap-start"
                    style={{ minWidth: "100%", width: "100%" }}
                  >
                    {/* Card with image as background */}
                    <div
                      className="relative w-full h-full carousel-bg-position bg-white md:bg-[#0A1628]"
                      style={{
                        backgroundImage: `url(${isMobile ? item.mobilePic : item.image})`,
                        backgroundSize:
                          isMobile && !hasDedicatedMobile ? "contain" : "cover",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition:
                          !isMobile && !hasDedicatedMobile
                            ? "center 10%"
                            : "center",
                      }}
                    >
                      {/* Stronger gradient overlay for better text visibility */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-[#0A1628]/10 via-[#0A1628]/10 to-[#0A1628]/10" />

                      {/* Content overlay */}
                      <div className="relative h-full flex flex-col justify-end p-8 md:p-12 z-10">
                        <div className="max-w-2xl">
                          {/* Title */}
                          <h3 className="font-display text-3xl md:text-4xl tracking-tight mb-4 text-[#D4AF37] font-bold drop-shadow-lg group-hover:text-[#D4AF37] transition-colors duration-300">
                            {item.title}
                          </h3>

                          {/* Divider line */}
                          <div className="w-12 h-px bg-[#D4AF37] mb-6 group-hover:w-full transition-all duration-500" />

                          {/* Description */}
                          <p className="text-base md:text-lg text-[#D4AF37] leading-relaxed drop-shadow-md font-medium">
                            {item.description}
                          </p>
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

      {/* Recent News Section */}
      <RecentNewsWrapper />

      {/* CTA Section */}
      <section className="min-h-[800px] lg:min-h-[800px] flex items-end py-20 text-white relative overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${isMobile ? "/ready-mobile.jpg" : "/ready.svg"})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            height: "800px",
          }}
        />
        {/* Background overlay for text readability */}
        <div className="absolute inset-0 bg-[#0A1628]/20 lg:from-[#0A1628] lg:via-[#0A1628]/10 lg:to-transparent z-0" />

        {/* Desktop decorative elements */}
        <div className="absolute inset-0 opacity-10 hidden lg:block z-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#D4AF37] rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#D4AF37] rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10 w-full">
          <div className="max-w-3xl px-4 sm:px-6 lg:px-8 xl:px-12 text-center lg:text-left flex flex-col relative z-10">
            <h2 className="font-display text-2xl md:text-5xl font-bold mb-6 text-[#D4AF37]">
              Ready to Secure Your Future?
            </h2>
            <p className="text-2xl mb-10 text-[#D4AF37]/90">
              Join a modern, dependable, and client-focused institution trusted
              to steward wealth across market cycles.
            </p>
            <div className="flex flex-row flex-wrap gap-6 justify-center lg:justify-start">
              <Link href="/contact">
                <button
                  type="button"
                  className="group hover:cursor-pointer bg-white text-[#0A1628] hover:bg-white/90 px-10 py-5 rounded-full font-bold text-lg transition-colors shadow-elevated-lg hover:shadow-2xl flex items-center gap-2"
                >
                  Get Started Now
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              <Link href="/about">
                <button
                  type="button"
                  className="hover:cursor-pointer bg-transparent border-2 border-white/30 hover:border-white text-white px-10 py-5 rounded-full font-bold text-lg transition-colors"
                >
                  Learn More
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-8 text-[#0A1628]">
                Get in <span className="">Touch</span>
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
                      No. 3, Sankuru Close, Off Rima street, Maitama, Abuja,
                      Nigeria
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6 p-6 rounded-xl bg-[#F5F2ED] border border-[#0A1628]/5 hover:border-[#D4AF37] transition-all duration-300 shadow-elevated hover:shadow-elevated-lg">
                  <div className="h-14 w-14 rounded-xl bg-[#D4AF37]/15 flex items-center justify-center shrink-0">
                    <Phone className="h-7 w-7 text-[#D4AF37]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-2 text-[#0A1628]">
                      Telephone
                    </h4>
                    <p className="text-[#0A1628]/70">+234 (0) 811 183 7348</p>
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
                src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=No.%203,%20Sankuru%20Close,%20Off%20Rima%20Street,%20Maitama,%20Abuja%20Abuja+()&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
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
