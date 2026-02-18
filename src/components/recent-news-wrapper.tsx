"use client";

import { useEffect, useState } from "react";
import { type ArticleSummary, SignalsSection } from "./recent-news";

function SkeletonCard() {
  return (
    <article className="relative flex-shrink-0 w-80 animate-pulse">
      <div className="relative bg-card border border-border/50 md:border-t md:border-l md:border-r-0 md:border-b-0 p-8 h-full">
        <div className="absolute -top-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-border/40 to-transparent" />

        <div className="flex items-baseline justify-between mb-8">
          <div className="h-3 w-16 bg-muted rounded" />
          <div className="h-3 w-20 bg-muted rounded" />
        </div>

        <div className="mb-3">
          <div className="h-5 w-24 bg-muted rounded" />
        </div>

        <div className="mb-4 space-y-2">
          <div className="h-8 w-full bg-muted rounded" />
          <div className="h-8 w-3/4 bg-muted rounded" />
        </div>

        <div className="w-12 h-px bg-muted mb-6" />

        <div className="space-y-2">
          <div className="h-4 w-full bg-muted rounded" />
          <div className="h-4 w-full bg-muted rounded" />
          <div className="h-4 w-2/3 bg-muted rounded" />
        </div>

        <div className="mt-4 pt-4 border-t border-border/30">
          <div className="h-3 w-16 bg-muted rounded" />
        </div>

        <div className="absolute bottom-0 right-0 w-6 h-6 overflow-hidden">
          <div className="absolute bottom-0 right-0 w-8 h-8 bg-background rotate-45 translate-x-4 translate-y-4 border-t border-l border-border/30" />
        </div>
      </div>
      <div className="absolute inset-0 -z-10 translate-x-1 translate-y-1 bg-accent/5" />
    </article>
  );
}

export function RecentNewsWrapper() {
  const [articles, setArticles] = useState<ArticleSummary[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/news/recent")
      .then((res) => res.json())
      .then((data) => {
        setArticles(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching recent news:", error);
        setArticles([]);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <section className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
              Recent News
            </span>

            <h2 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-8 text-[#0A1628] leading-tight">
              LATEST UPDATES
            </h2>
          </div>
          <div className="flex gap-8 overflow-x-auto pb-8 pr-4 scrollbar-hide">
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
          </div>
        </div>
      </section>
    );
  }

  return <SignalsSection articles={articles} />;
}
