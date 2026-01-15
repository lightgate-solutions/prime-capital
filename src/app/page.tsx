import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  TrendingUp,
  Shield,
  Users,
  BarChart3,
  Award,
  Clock,
  MapPin,
  Phone,
} from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  const services = [
    {
      icon: TrendingUp,
      title: "Brokerage Services",
      description:
        "Access to Nigerian and international markets with competitive rates and expert execution.",
    },
    {
      icon: BarChart3,
      title: "Investment Advisory",
      description:
        "Personalized investment strategies tailored to your financial goals and risk profile.",
    },
    {
      icon: Shield,
      title: "Asset Management",
      description:
        "Professional portfolio management with a focus on long-term wealth preservation and growth.",
    },
  ];

  const stats = [
    { value: "₦50B+", label: "Assets Under Management" },
    { value: "5,000+", label: "Active Clients" },
    { value: "15+", label: "Years Experience" },
    { value: "98%", label: "Client Satisfaction" },
  ];

  const whyChooseUs = [
    {
      icon: Shield,
      title: "Regulatory Compliance",
      description:
        "Fully registered and regulated by the Nigerian SEC with strict adherence to compliance standards.",
    },
    {
      icon: Users,
      title: "Expert Team",
      description:
        "Seasoned professionals with deep knowledge of Nigerian and global markets.",
    },
    {
      icon: Award,
      title: "Proven Track Record",
      description:
        "Consistent performance and award-winning service over 15 years.",
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description:
        "Dedicated client support team available whenever you need assistance.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-28 pb-12 md:pt-36 md:pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-background to-muted">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-sm font-medium px-4 py-2 rounded-full mb-6">
                <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                SEC Registered & Regulated
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
                Building Wealth Through{" "}
                <span className="text-primary">Strategic Investments</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 text-pretty leading-relaxed">
                PrimeCapital offers comprehensive financial services including
                brokerage, investment advisory, and asset management. Partner
                with us to achieve your financial goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90"
                  asChild
                >
                  <Link href="/contact">
                    Get Started <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/services">Our Services</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-3xl blur-3xl" />
              <img
                src="/professional-financial-graphs-and-charts-on-modern.jpg"
                alt="Financial Analytics Dashboard"
                className="relative rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-secondary text-secondary-foreground">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base text-secondary-foreground/80">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
              Our Core Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Comprehensive financial solutions designed to meet the diverse
              needs of retail and institutional investors.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card
                  key={index}
                  className="group hover:shadow-lg transition-shadow"
                >
                  <CardContent className="pt-6">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <Link
                      href="/services"
                      className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                    >
                      Learn more <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
              Why Choose PrimeCapital
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              We combine expertise, integrity, and innovation to deliver
              exceptional value to our clients.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="text-center">
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Recent News Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
                Latest News & Insights
              </h2>
              <p className="text-lg text-muted-foreground text-pretty">
                Stay updated with the latest from PrimeCapital
              </p>
            </div>
            <Button variant="outline" asChild className="hidden sm:flex">
              <Link href="/news">
                View More News <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {[
              {
                category: "Company News",
                title:
                  "PrimeCapital Achieves ₦50 Billion Assets Under Management Milestone",
                excerpt:
                  "We are proud to announce that PrimeCapital has reached a significant milestone of ₦50 billion in assets under management.",
                date: "January 10, 2026",
                readTime: "3 min read",
              },
              {
                category: "Market Insights",
                title: "Nigerian Equities Market Outlook for Q1 2026",
                excerpt:
                  "Our research team provides comprehensive analysis and outlook for the Nigerian Stock Exchange in the first quarter of 2026.",
                date: "January 5, 2026",
                readTime: "5 min read",
              },
              {
                category: "Investment Advisory",
                title: "Diversification Strategies for Nigerian Investors in 2026",
                excerpt:
                  "Learn effective portfolio diversification strategies to manage risk and optimize returns in the current market environment.",
                date: "December 28, 2025",
                readTime: "4 min read",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-shadow h-full flex flex-col"
              >
                <div className="h-40 bg-gradient-to-br from-primary/20 to-muted" />
                <CardContent className="pt-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-medium text-primary px-2 py-1 rounded bg-primary/10">
                      {item.category}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {item.readTime}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors text-balance">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                    {item.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">
                      {item.date}
                    </span>
                    <Link
                      href="/news"
                      className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                    >
                      Read more <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center sm:hidden">
            <Button variant="outline" asChild>
              <Link href="/news">
                View More News <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-secondary text-secondary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            Ready to Start Your Investment Journey?
          </h2>
          <p className="text-lg mb-8 text-secondary-foreground/80 text-pretty">
            Join thousands of satisfied clients who trust PrimeCapital with
            their financial future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90"
              asChild
            >
              <Link href="/contact">
                Open an Account <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white/10"
              asChild
            >
              <Link href="/about">Learn About Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
              Visit Our Office
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Located in the heart of Victoria Island, Lagos. We welcome you to
              visit us during business hours.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <Card className="overflow-hidden">
              <div className="h-96 bg-gradient-to-br from-primary/20 to-muted flex items-center justify-center relative">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgZmlsbD0iI2Y5ZmFmYSIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMjQiIGZpbGw9IiM2YjcyODAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5NYXAgV2lsbCBCZSBEaXNwbGF5ZWQgSGVyZTwvdGV4dD48L3N2Zz4=')] bg-cover bg-center opacity-30" />
                <div className="text-center relative z-10">
                  <MapPin className="h-16 w-16 text-primary mx-auto mb-4" />
                  <p className="text-lg font-semibold mb-2">
                    123 Investment Plaza, 5th Floor
                  </p>
                  <p className="text-muted-foreground">
                    Victoria Island, Lagos 101241, Nigeria
                  </p>
                </div>
              </div>
            </Card>
            <div className="space-y-6">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Address</p>
                        <p className="text-sm text-muted-foreground">
                          123 Investment Plaza, 5th Floor<br />
                          Victoria Island, Lagos 101241<br />
                          Nigeria
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Phone className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Phone</p>
                        <p className="text-sm text-muted-foreground">
                          +234 (1) 234-5678<br />
                          +234 (1) 234-5679 (Hotline)
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Business Hours</p>
                        <p className="text-sm text-muted-foreground">
                          Monday - Friday: 8:00 AM - 5:00 PM<br />
                          Saturday: 9:00 AM - 1:00 PM<br />
                          Sunday: Closed
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs text-muted-foreground text-center leading-relaxed">
            <strong>Disclaimer:</strong> PrimeCapital is registered with the
            Nigerian Securities and Exchange Commission (SEC). All investments
            carry risk, and past performance is not indicative of future
            results. Please read our risk disclosure statement carefully before
            investing. This website does not constitute investment advice.
            Always consult with a qualified financial advisor before making
            investment decisions.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
