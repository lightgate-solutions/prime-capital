/** biome-ignore-all lint/suspicious/noArrayIndexKey: <> */

import { ArrowRight, Calendar, Clock } from "lucide-react";
import Link from "next/link";
import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export default function NewsPage() {
  const newsItems = [
    {
      category: "Company News",
      title:
        "Prime Capital & Investment Limited Expands Operations with New Abuja Headquarters",
      excerpt:
        "We are pleased to announce the opening of our new flagship office in Maitama, Abuja, further strengthening our commitment to providing premium wealth management services.",
      date: "January 15, 2026",
      readTime: "3 min read",
      featured: true,
    },
    {
      category: "Market Insights",
      title: "The Rise of Ethical & Shari'ah-Compliant Investing in Nigeria",
      excerpt:
        "Our investment team explores the growing demand for ethical financial products and how Prime Capital is leading the way with innovative Shari'ah-compliant solutions.",
      date: "January 10, 2026",
      readTime: "5 min read",
      featured: true,
    },
    {
      category: "Investment Advisory",
      title:
        "Navigating Market Volatility: The Four Pillars of Integrated Risk Management",
      excerpt:
        "Learn how our integrated risk management framework helps protect client capital while capturing growth opportunities in a dynamic economic landscape.",
      date: "January 5, 2026",
      readTime: "4 min read",
      featured: false,
    },
    {
      category: "Company News",
      title: "Mounir Haliru Gwarzo Leads Prime Capital's Strategic Vision",
      excerpt:
        "With over 37 years of capital markets experience, our leadership team is driving the next phase of innovation-led stewardship and excellence.",
      date: "December 20, 2025",
      readTime: "2 min read",
      featured: false,
    },
    {
      category: "Regulatory Update",
      title: "Understanding the Investments & Securities Act (ISA) 2025",
      excerpt:
        "A comprehensive guide to the latest regulatory changes in the Nigerian capital markets and how they impact fund and portfolio management.",
      date: "December 12, 2025",
      readTime: "3 min read",
      featured: false,
    },
    {
      category: "Market Insights",
      title: "Fixed Income Outlook: Opportunities in FGN and Corporate Bonds",
      excerpt:
        "Our research team analyzes the current yield curve and identifies strategic entry points for fixed income investors seeking stable returns.",
      date: "December 5, 2025",
      readTime: "4 min read",
      featured: false,
    },
    {
      category: "Investment Education",
      title: "The Importance of Fiduciary Duty in Wealth Management",
      excerpt:
        "Why choosing an SEC-regulated firm with a clear commitment to stewardship is essential for long-term financial success.",
      date: "November 25, 2025",
      readTime: "6 min read",
      featured: false,
    },
    {
      category: "Company News",
      title: "Prime Capital Recognized for Excellence in Portfolio Management",
      excerpt:
        "We are honored to receive recognition for our disciplined approach to asset allocation and commitment to client-centric partnerships.",
      date: "November 18, 2025",
      readTime: "2 min read",
      featured: false,
    },
  ];

  const featuredNews = newsItems.filter((item) => item.featured);
  const regularNews = newsItems.filter((item) => !item.featured);

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      "Company News": "bg-primary/10 text-primary border-primary/20",
      "Market Insights": "bg-blue-500/10 text-blue-600 border-blue-500/20",
      "Investment Advisory":
        "bg-green-500/10 text-green-600 border-green-500/20",
      "Regulatory Update":
        "bg-orange-500/10 text-orange-600 border-orange-500/20",
      "Investment Education":
        "bg-purple-500/10 text-purple-600 border-purple-500/20",
    };
    return colors[category] || "bg-muted text-muted-foreground";
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-28 pb-12 md:pt-36 md:pb-16 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-background via-background to-primary/5">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 text-balance">
            News & <span className="text-primary">Insights</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Stay informed with the latest company updates, market insights, and
            investment perspectives from Prime Capital.
          </p>
        </div>
      </section>

      {/* Featured News */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-10">Featured Stories</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredNews.map((item, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-300 overflow-hidden border-primary/5 hover:border-primary/20"
              >
                <div className="h-48 bg-linear-to-br from-primary/20 to-muted relative">
                  <div className="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition-colors" />
                </div>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Badge
                      variant="outline"
                      className={getCategoryColor(item.category)}
                    >
                      {item.category}
                    </Badge>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {item.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {item.readTime}
                      </span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors text-balance">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {item.excerpt}
                  </p>
                  <Link
                    href="#"
                    className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                  >
                    Read full story <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All News */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">Recent Updates</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularNews.map((item, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 border-none bg-background"
              >
                <CardContent className="pt-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge
                      variant="outline"
                      className={getCategoryColor(item.category)}
                    >
                      {item.category}
                    </Badge>
                  </div>
                  <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors text-balance">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {item.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {item.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {item.readTime}
                    </span>
                  </div>
                  <Link
                    href="#"
                    className="inline-flex items-center text-sm font-medium text-primary hover:underline mt-4"
                  >
                    Read more <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Card className="border-2 border-primary/20 bg-linear-to-br from-background to-primary/5">
            <CardContent className="pt-10 pb-10 text-center">
              <h3 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
                Stay Informed
              </h3>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
                Subscribe to our newsletter to receive the latest market
                insights, investment perspectives, and company updates directly
                in your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-xl border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                />
                <button
                  type="button"
                  className="px-8 py-3 bg-primary text-primary-foreground rounded-xl font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
                >
                  Subscribe
                </button>
              </div>
              <p className="text-xs text-muted-foreground mt-6">
                By subscribing, you agree to receive marketing communications
                from Prime Capital. You can unsubscribe at any time.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
}
