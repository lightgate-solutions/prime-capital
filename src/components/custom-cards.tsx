"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

const signals = [
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
    note: "We pursue superior outcomes through rigorous research, data-driven analysis and professional expertise. The “Gold standard” defines our commitment to quality, precision, and confidence-inspiring performance.",
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

export function CustomCards() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    if (!sectionRef.current || !cursorRef.current) return;

    const section = sectionRef.current;
    const cursor = cursorRef.current;

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

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

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
    if (!sectionRef.current || !headerRef.current || !cardsRef.current) return;

    const ctx = gsap.context(() => {
      // Header slide in from left
      gsap.fromTo(
        headerRef.current,
        { x: -60, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        },
      );

      const cards = cardsRef.current?.querySelectorAll("article");
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
              trigger: cardsRef.current,
              start: "top 90%",
              toggleActions: "play none none reverse",
            },
          },
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="signals" ref={sectionRef} className="relative pl-6">
      <div
        ref={cursorRef}
        className={cn(
          "pointer-events-none absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 z-50",
          "w-12 h-12 rounded-full border-2 border-accent bg-accent",
          "transition-opacity duration-300",
          isHovering ? "opacity-100" : "opacity-0",
        )}
      />

      {/* Section header */}
      <div ref={headerRef} className="mb-10 pr-6 md:pr-12">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
          Our Corporate Philosophy
        </span>
        <h2 className="mt-4 font-[var(--font-bebas)] text-5xl md:text-7xl tracking-tight">
          Built on Trust
        </h2>

        <p className="font-mono text-[12px] mt-4 max-w-140  text-left">
          Our philosophy goes beyond asset management; it is a covenant of
          stewardship, excellence, and responsibility. Our core tenets are:
        </p>
      </div>

      {/* Horizontal scroll container */}
      <div
        ref={(el) => {
          scrollRef.current = el;
          cardsRef.current = el;
        }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 overflow-x-auto pb-8 scrollbar-hide"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {signals.map((signal, index) => (
          <SignalCard key={index} signal={signal} index={index} />
        ))}
      </div>
    </section>
  );
}

function SignalCard({
  signal,
  index,
}: {
  signal: { date: string; title: string; note: string };
  index: number;
}) {
  return (
    <article
      className={cn(
        "group relative flex-shrink-0 w-96 md:w-80",
        "transition-transform duration-500 ease-out",
        "hover:-translate-y-2",
      )}
    >
      {/* Card with paper texture effect */}
      <div className="relative bg-card border border-border/50 md:border-t md:border-l md:border-r-0 md:border-b-0 p-3">
        {/* Top torn edge effect */}
        <div className="absolute -top-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-border/40 to-transparent" />

        {/* Title */}
        <h3 className="font-[var(--font-bebas)] text-xl tracking-tight mb-2 group-hover:text-accent transition-colors duration-300">
          {signal.title}
        </h3>

        {/* Divider line */}
        <div className="w-12 h-px bg-accent/60 mb-2 group-hover:w-full transition-all duration-500" />

        {/* Description */}
        <p className="font-mono text-xs text-muted-foreground leading-relaxed">
          {signal.note}
        </p>

        {/* Bottom right corner fold effect */}
        <div className="absolute bottom-0 right-0 w-6 h-6 overflow-hidden">
          <div className="absolute bottom-0 right-0 w-8 h-8 bg-background rotate-45 translate-x-4 translate-y-4 border-t border-l border-border/30" />
        </div>
      </div>

      {/* Shadow/depth layer */}
      <div className="absolute inset-0 -z-10 translate-x-1 translate-y-1 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </article>
  );
}
