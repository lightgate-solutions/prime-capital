import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function NewsPage() {
  const newsItems = [
    {
      category: "Company News",
      title:
        "PrimeCapital Achieves ₦50 Billion Assets Under Management Milestone",
      excerpt:
        "We are proud to announce that PrimeCapital has reached a significant milestone of ₦50 billion in assets under management, reflecting the trust our clients place in us.",
      date: "January 10, 2026",
      readTime: "3 min read",
      featured: true,
    },
    {
      category: "Market Insights",
      title: "Nigerian Equities Market Outlook for Q1 2026",
      excerpt:
        "Our research team provides comprehensive analysis and outlook for the Nigerian Stock Exchange in the first quarter of 2026, highlighting key sectors and investment opportunities.",
      date: "January 5, 2026",
      readTime: "5 min read",
      featured: true,
    },
    {
      category: "Investment Advisory",
      title: "Diversification Strategies for Nigerian Investors in 2026",
      excerpt:
        "Learn effective portfolio diversification strategies to manage risk and optimize returns in the current market environment.",
      date: "December 28, 2025",
      readTime: "4 min read",
      featured: false,
    },
    {
      category: "Company News",
      title: "PrimeCapital Launches New Mobile Trading Platform",
      excerpt:
        "Our enhanced mobile trading platform offers real-time market data, seamless trade execution, and portfolio tracking on the go.",
      date: "December 15, 2025",
      readTime: "2 min read",
      featured: false,
    },
    {
      category: "Regulatory Update",
      title: "SEC Announces New Guidelines for Investment Advisers",
      excerpt:
        "The Securities and Exchange Commission has issued updated guidelines for investment advisers. PrimeCapital remains fully compliant with all regulatory requirements.",
      date: "December 10, 2025",
      readTime: "3 min read",
      featured: false,
    },
    {
      category: "Market Insights",
      title: "Fixed Income Opportunities in Nigerian Government Securities",
      excerpt:
        "Explore attractive yields and safety of Nigerian government bonds and treasury bills in the current interest rate environment.",
      date: "December 1, 2025",
      readTime: "4 min read",
      featured: false,
    },
    {
      category: "Investment Education",
      title: "Understanding Risk-Adjusted Returns: A Beginner's Guide",
      excerpt:
        "Learn how to evaluate investment performance beyond simple returns by considering risk factors and volatility.",
      date: "November 22, 2025",
      readTime: "6 min read",
      featured: false,
    },
    {
      category: "Company News",
      title:
        "PrimeCapital Recognized as Top Investment Firm by Finance Magazine",
      excerpt:
        "We are honored to be recognized as one of Nigeria's top investment firms by Finance Magazine for excellence in client service and investment performance.",
      date: "November 15, 2025",
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
      <section className="pt-28 pb-12 md:pt-36 md:pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-background to-muted">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
            News & <span className="text-primary">Insights</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Stay informed with the latest company updates, market insights, and
            investment perspectives from PrimeCapital.
          </p>
        </div>
      </section>

      {/* Featured News */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">Featured Stories</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredNews.map((item, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-shadow overflow-hidden"
              >
                <div className="h-48 bg-gradient-to-br from-primary/20 to-muted" />
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
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">Recent Updates</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularNews.map((item, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-shadow"
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
          <Card className="border-2 border-primary/20 bg-gradient-to-br from-background to-muted">
            <CardContent className="pt-8 text-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-balance">
                Stay Informed
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto text-pretty">
                Subscribe to our newsletter to receive the latest market
                insights, investment perspectives, and company updates directly
                in your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
                  Subscribe
                </button>
              </div>
              <p className="text-xs text-muted-foreground mt-4">
                By subscribing, you agree to receive marketing communications
                from PrimeCapital. You can unsubscribe at any time.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
}
