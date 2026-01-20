/** biome-ignore-all lint/suspicious/noArrayIndexKey: <> */
import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { Logo } from "./logo";

export function Footer() {
  const footerLinks = {
    company: [
      { label: "About Us", href: "/about" },
      { label: "Our Team", href: "/about#team" },
      { label: "Careers", href: "/careers" },
      { label: "News", href: "/news" },
    ],
    services: [
      { label: "Money Market", href: "/services" },
      { label: "Fixed Income", href: "/services" },
      { label: "Multi-Asset", href: "/services" },
      { label: "Ethical Products", href: "/services" },
    ],
    legal: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Regulatory Compliance", href: "/compliance" },
      { label: "Risk Disclosure", href: "/risk-disclosure" },
    ],
  };

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <Logo />
            <p className="text-sm text-secondary-foreground/80 mb-4">
              Leading financial services firm offering comprehensive investment
              solutions.
            </p>
            <div className="flex flex-col gap-2 text-sm">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Maitama, Abuja</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <span>+234 (0) 9 123 4567</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <span>info@primecapital.ng</span>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="flex flex-col gap-2 text-sm">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-secondary-foreground/80 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="flex flex-col gap-2 text-sm">
              {footerLinks.services.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="text-secondary-foreground/80 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="flex flex-col gap-2 text-sm">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-secondary-foreground/80 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-secondary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-secondary-foreground/60">
            <p>
              © {new Date().getFullYear()} Prime Capital. All rights reserved.
            </p>
            <p className="text-xs max-w-2xl text-center md:text-right">
              Prime Capital & Investment Limited is registered and regulated by
              the Nigerian Securities and Exchange Commission (SEC). Investments
              are subject to market risks. Past performance is not indicative of
              future results.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
