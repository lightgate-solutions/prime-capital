"use client";

import { useEffect, useState } from "react";
import { SignalsSection } from "./recent-news";
import type { Article } from "@/lib/types/articles";

export function RecentNewsWrapper() {
  const [articles, setArticles] = useState<Article[]>([]);
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
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <section className="py-32 pl-6 md:pl-28">
        <div className="font-mono text-sm text-muted-foreground">
          Loading recent news...
        </div>
      </section>
    );
  }

  return <SignalsSection articles={articles} />;
}
