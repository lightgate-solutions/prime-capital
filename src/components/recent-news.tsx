"use client";

import { useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import type { Article } from "@/lib/types/articles";

gsap.registerPlugin(ScrollTrigger);

interface RecentNewsProps {
  articles: Article[];
}

export function SignalsSection({ articles = [] }: RecentNewsProps) {
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
    <section id="signals" ref={sectionRef} className="relative pl-4 ">
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
      <div ref={headerRef} className="mb-2 pr-6 ">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
          Recent News
        </span>
        <h2 className="mt-4 font-[var(--font-bebas)] text-5xl md:text-7xl tracking-tight">
          LATEST UPDATES
        </h2>
      </div>

      {/* Horizontal scroll container */}
      <div
        ref={(el) => {
          scrollRef.current = el;
          cardsRef.current = el;
        }}
        className="flex gap-8 overflow-x-auto pb-8 pr-12 scrollbar-hide"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {articles.length > 0 ? (
          articles.map((article, index) => (
            <NewsCard key={article.id} article={article} index={index} />
          ))
        ) : (
          <p className="font-mono text-sm text-muted-foreground">
            No recent news available
          </p>
        )}
      </div>
    </section>
  );
}

function NewsCard({ article, index }: { article: Article; index: number }) {
  const formattedDate = article.publishedAt
    ? new Date(article.publishedAt)
        .toLocaleDateString("en-US", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        })
        .replace(/\//g, ".")
    : "Draft";

  return (
    <Link href={`/news/${article.slug}`}>
      <article
        className={cn(
          "group relative flex-shrink-0 w-80",
          "transition-transform duration-500 ease-out",
          "hover:-translate-y-2 cursor-pointer",
        )}
      >
        {/* Card with paper texture effect */}
        <div className="relative bg-card border border-border/50 md:border-t md:border-l md:border-r-0 md:border-b-0 p-8 h-full">
          {/* Top torn edge effect */}
          <div className="absolute -top-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-border/40 to-transparent" />

          {/* Issue number and category */}
          <div className="flex items-baseline justify-between mb-8">
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              No. {String(index + 1).padStart(2, "0")}
            </span>
            <time className="font-mono text-[10px] text-muted-foreground/60">
              {formattedDate}
            </time>
          </div>

          {/* Category badge */}
          {article.category && (
            <div className="mb-3">
              <span className="inline-block px-2 py-1 font-mono text-[9px] uppercase tracking-wider bg-accent/10 text-accent border border-accent/20">
                {article.category}
              </span>
            </div>
          )}

          {/* Title */}
          <h3 className="font-[var(--font-bebas)] text-4xl tracking-tight mb-4 group-hover:text-accent transition-colors duration-300 line-clamp-2">
            {article.title}
          </h3>

          {/* Divider line */}
          <div className="w-12 h-px bg-accent/60 mb-6 group-hover:w-full transition-all duration-500" />

          {/* Description */}
          <p className="font-mono text-xs text-muted-foreground leading-relaxed line-clamp-3">
            {article.excerpt}
          </p>

          {/* Read time */}
          {article.readTime && (
            <div className="mt-4 pt-4 border-t border-border/30">
              <span className="font-mono text-[10px] text-muted-foreground/60">
                {article.readTime}
              </span>
            </div>
          )}

          {/* Bottom right corner fold effect */}
          <div className="absolute bottom-0 right-0 w-6 h-6 overflow-hidden">
            <div className="absolute bottom-0 right-0 w-8 h-8 bg-background rotate-45 translate-x-4 translate-y-4 border-t border-l border-border/30" />
          </div>
        </div>

        {/* Shadow/depth layer */}
        <div className="absolute inset-0 -z-10 translate-x-1 translate-y-1 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </article>
    </Link>
  );
}
