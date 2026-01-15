import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Award, Users, CheckCircle2 } from "lucide-react";

export default function AboutPage() {
  const values = [
    {
      icon: CheckCircle2,
      title: "Integrity",
      description:
        "We uphold the highest ethical standards in all our dealings with clients and stakeholders.",
    },
    {
      icon: Award,
      title: "Excellence",
      description:
        "We strive for excellence in service delivery and investment performance.",
    },
    {
      icon: Users,
      title: "Client-Centric",
      description:
        "Our clients' interests always come first in every decision we make.",
    },
    {
      icon: CheckCircle2,
      title: "Innovation",
      description:
        "We embrace technology and innovative solutions to enhance client experience.",
    },
  ];

  const leadership = [
    {
      name: "Adebayo Okonkwo",
      role: "Managing Director/CEO",
      bio: "25+ years of experience in capital markets and investment banking. Former Executive Director at a leading Nigerian bank.",
    },
    {
      name: "Chioma Nwankwo",
      role: "Chief Investment Officer",
      bio: "20+ years in asset management and portfolio strategy. CFA charterholder with proven track record in wealth management.",
    },
    {
      name: "Ibrahim Yusuf",
      role: "Head of Compliance",
      bio: "15+ years in regulatory compliance and risk management. Former SEC compliance examiner.",
    },
    {
      name: "Funke Adeyemi",
      role: "Head of Brokerage",
      bio: "18+ years in securities trading and execution. Expert in Nigerian equities and fixed income markets.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-28 pb-12 md:pt-36 md:pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-background to-muted">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
            About <span className="text-primary">PrimeCapital</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            A trusted partner in wealth creation and financial success for over
            15 years.
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
                Who We Are
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  PrimeCapital is a leading Nigerian financial services firm
                  registered and regulated by the Securities and Exchange
                  Commission (SEC). Since our establishment in 2010, we have
                  been committed to helping individuals and institutions achieve
                  their financial goals through expert guidance and innovative
                  investment solutions.
                </p>
                <p>
                  With over ₦50 billion in assets under management and a client
                  base of 5,000+ satisfied investors, we have established
                  ourselves as a trusted name in Nigeria's financial services
                  industry. Our team of seasoned professionals brings decades of
                  combined experience in capital markets, asset management, and
                  financial advisory.
                </p>
                <p>
                  We serve a diverse clientele including retail investors,
                  high-net-worth individuals, corporate organizations, and
                  institutional investors. Our comprehensive suite of services
                  encompasses brokerage, investment advisory, and asset
                  management, all delivered with the highest standards of
                  professionalism and integrity.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-3xl blur-3xl" />
              <div className="relative bg-secondary rounded-3xl p-8 shadow-xl">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Award className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">
                        SEC Registered
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Fully licensed and regulated by Nigerian Securities and
                        Exchange Commission
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">
                        5,000+ Clients
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Serving retail and institutional investors across
                        Nigeria
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">₦50B+ AUM</h3>
                      <p className="text-sm text-muted-foreground">
                        Managing substantial assets with proven investment
                        strategies
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-2 border-primary/20">
              <CardContent className="pt-6">
                <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <Target className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To empower individuals and institutions to achieve financial
                  success through expert advisory, innovative investment
                  solutions, and unwavering commitment to integrity and
                  excellence.
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 border-primary/20">
              <CardContent className="pt-6">
                <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <Eye className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To be Nigeria's most trusted and innovative financial services
                  firm, recognized for exceptional client service, investment
                  performance, and contribution to the development of Nigeria's
                  capital markets.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
              Our Core Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              The principles that guide everything we do at PrimeCapital.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card
                  key={index}
                  className="group hover:shadow-lg transition-shadow"
                >
                  <CardContent className="pt-6 text-center">
                    <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">
                      {value.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
              Our Leadership Team
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Experienced professionals committed to your financial success.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {leadership.map((leader, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Users className="h-8 w-8 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-1">{leader.name}</h3>
                      <p className="text-sm text-primary font-medium mb-3">
                        {leader.role}
                      </p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {leader.bio}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Regulatory Information */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Card className="border-2 border-primary/20">
            <CardContent className="pt-6">
              <h3 className="text-2xl font-bold mb-4 text-center">
                Regulatory Information
              </h3>
              <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
                <p>
                  <strong>Company Name:</strong> PrimeCapital Securities Limited
                </p>
                <p>
                  <strong>SEC Registration Number:</strong> SEC/BD/000/0000
                  (Sample)
                </p>
                <p>
                  <strong>Registered Office:</strong> 123 Investment Plaza,
                  Victoria Island, Lagos, Nigeria
                </p>
                <p>
                  <strong>Business Activities:</strong> Securities Trading,
                  Investment Advisory, Asset Management, Portfolio Management
                </p>
                <p className="text-xs italic">
                  PrimeCapital Securities Limited is duly registered with and
                  regulated by the Securities and Exchange Commission (SEC) of
                  Nigeria. We adhere strictly to all applicable securities laws
                  and regulations including the Investment and Securities Act
                  (ISA) 2007 and relevant SEC rules and guidelines.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
}
