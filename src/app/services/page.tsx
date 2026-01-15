import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  TrendingUp,
  BarChart3,
  Shield,
  LineChart,
  DollarSign,
  PieChart,
  Briefcase,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import Link from "next/link";

export default function ServicesPage() {
  const services = [
    {
      icon: TrendingUp,
      title: "Brokerage Services",
      description:
        "Access to Nigerian Stock Exchange (NSE) and international markets with competitive commission rates and professional trade execution.",
      features: [
        "Equities trading on NSE and international markets",
        "Fixed income securities and government bonds",
        "Mutual funds and ETFs",
        "Real-time market data and research",
        "Dedicated relationship managers",
        "Online and mobile trading platforms",
      ],
    },
    {
      icon: BarChart3,
      title: "Investment Advisory",
      description:
        "Personalized investment strategies and financial planning tailored to your unique goals, risk tolerance, and time horizon.",
      features: [
        "Comprehensive financial planning",
        "Portfolio construction and asset allocation",
        "Risk assessment and management",
        "Retirement planning strategies",
        "Tax-efficient investment planning",
        "Regular portfolio reviews and rebalancing",
      ],
    },
    {
      icon: Shield,
      title: "Asset Management",
      description:
        "Professional discretionary portfolio management focused on long-term wealth preservation, growth, and income generation.",
      features: [
        "Discretionary portfolio management",
        "Customized investment mandates",
        "Active risk management",
        "Transparent reporting and performance tracking",
        "Access to exclusive investment opportunities",
        "Dedicated portfolio management team",
      ],
    },
    {
      icon: LineChart,
      title: "Research & Analysis",
      description:
        "In-depth market research, company analysis, and investment insights to support informed decision-making.",
      features: [
        "Daily market commentary and updates",
        "Company-specific research reports",
        "Sector and industry analysis",
        "Economic and policy analysis",
        "Technical analysis and charts",
        "Investment recommendations",
      ],
    },
    {
      icon: DollarSign,
      title: "Corporate Finance",
      description:
        "Comprehensive corporate finance solutions including mergers & acquisitions advisory, capital raising, and restructuring.",
      features: [
        "Mergers and acquisitions advisory",
        "Capital raising (debt and equity)",
        "Corporate restructuring",
        "Valuation services",
        "Financial advisory for IPOs",
        "Strategic financial planning",
      ],
    },
    {
      icon: PieChart,
      title: "Wealth Management",
      description:
        "Holistic wealth management services for high-net-worth individuals and families, including estate planning and legacy strategies.",
      features: [
        "High-net-worth client services",
        "Estate planning and trust services",
        "Multi-generational wealth transfer",
        "Philanthropic advisory",
        "Alternative investments access",
        "Family office services",
      ],
    },
  ];

  const whyChoose = [
    {
      title: "Expert Team",
      description:
        "Seasoned professionals with decades of combined experience in Nigerian and global markets.",
    },
    {
      title: "Regulatory Compliance",
      description:
        "Fully registered and regulated by SEC with strict adherence to all compliance requirements.",
    },
    {
      title: "Competitive Pricing",
      description:
        "Transparent fee structure with competitive rates across all our service offerings.",
    },
    {
      title: "Technology Platform",
      description:
        "Advanced trading and portfolio management platforms accessible 24/7 from any device.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-28 pb-12 md:pt-36 md:pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-background to-muted">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
            Our <span className="text-primary">Services</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Comprehensive financial solutions designed to help you achieve your
            investment goals and secure your financial future.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card
                  key={index}
                  className="group hover:shadow-xl transition-shadow"
                >
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="h-14 w-14 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                        <Icon className="h-7 w-7 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-2">
                          {service.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <h4 className="font-semibold text-sm uppercase tracking-wide text-primary">
                        Key Features
                      </h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2 text-sm text-muted-foreground"
                          >
                            <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
              Why Choose Our Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              We combine expertise, technology, and personalized service to
              deliver exceptional value.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChoose.map((item, index) => (
              <Card key={index}>
                <CardContent className="pt-6 text-center">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Fee Structure */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
              Transparent Fee Structure
            </h2>
            <p className="text-lg text-muted-foreground text-pretty">
              We believe in transparency. Our fees are competitive and clearly
              communicated.
            </p>
          </div>
          <Card className="border-2 border-primary/20">
            <CardContent className="pt-6">
              <div className="space-y-6">
                <div className="flex justify-between items-start pb-4 border-b">
                  <div>
                    <h4 className="font-semibold mb-1">Brokerage Commission</h4>
                    <p className="text-sm text-muted-foreground">
                      On equity trades
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-primary">0.75% - 1.25%</p>
                    <p className="text-xs text-muted-foreground">
                      Volume-based
                    </p>
                  </div>
                </div>
                <div className="flex justify-between items-start pb-4 border-b">
                  <div>
                    <h4 className="font-semibold mb-1">Asset Management Fee</h4>
                    <p className="text-sm text-muted-foreground">
                      Annual management fee
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-primary">1.0% - 2.5%</p>
                    <p className="text-xs text-muted-foreground">
                      Portfolio size-based
                    </p>
                  </div>
                </div>
                <div className="flex justify-between items-start pb-4 border-b">
                  <div>
                    <h4 className="font-semibold mb-1">Investment Advisory</h4>
                    <p className="text-sm text-muted-foreground">
                      Consultation and planning
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-primary">Customized</p>
                    <p className="text-xs text-muted-foreground">
                      Based on scope
                    </p>
                  </div>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-semibold mb-1">Corporate Finance</h4>
                    <p className="text-sm text-muted-foreground">
                      M&A and capital raising
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-primary">Negotiable</p>
                    <p className="text-xs text-muted-foreground">
                      Transaction-based
                    </p>
                  </div>
                </div>
              </div>
              <p className="text-xs text-muted-foreground mt-6 text-center">
                All fees are subject to applicable taxes. Detailed fee schedules
                available upon request.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-secondary text-secondary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            Ready to Get Started?
          </h2>
          <p className="text-lg mb-8 text-secondary-foreground/80 text-pretty">
            Contact us today to learn more about how our services can help you
            achieve your financial goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90"
              asChild
            >
              <Link href="/contact">
                Contact Us <ArrowRight className="ml-2 h-5 w-5" />
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

      <Footer />
    </div>
  );
}
