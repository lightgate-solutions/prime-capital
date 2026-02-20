"use client";

import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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
      { label: "Financial Advisory", href: "/services" },
      { label: "Equity Investment", href: "/services" },
    ],
    legal: [{ label: "Terms of Use", href: "/terms" }],
  };

  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Facebook, href: "#", label: "Facebook" },
  ];

  return (
    <footer className="bg-[#0A1628] text-white border-t border-white/5">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              <div className="relative">
                <Image
                  src="/logo.jpeg"
                  width={50}
                  height={50}
                  alt="Prime Capital logo"
                  className="rounded-full border-2 border-[#D4AF37]/30 group-hover:border-[#D4AF37] transition-all duration-300"
                />
                <div className="absolute inset-0 rounded-full bg-[#D4AF37]/20 opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-300" />
              </div>
              <div>
                <span className="font-display text-xl font-bold text-[#D4AF37] tracking-tight group-hover:text-[#D4AF37] transition-colors duration-300">
                  Prime Capital
                </span>
                <p className="text-[10px] text-[#D4AF37] uppercase tracking-widest">
                  Wealth Management
                </p>
              </div>
            </Link>
            <p className="text-sm text-white/70 mb-6 leading-relaxed">
              A financial services firm offering comprehensive investment
              product for wealth creation and preservation.
            </p>
            <div className="flex flex-col gap-3 text-sm">
              <div className="flex items-center gap-3 text-white/70 hover:text-[#D4AF37] transition-colors group">
                <MapPin className="h-4 w-4 shrink-0" />
                <span>
                  No. 3, Sankuru Close, Off Rima Street, Maitama, Abuja
                </span>
              </div>
              <div className="flex items-center gap-3 text-white/70 hover:text-[#D4AF37] transition-colors group">
                <Phone className="h-4 w-4 shrink-0" />
                <span>+234 (0) 811 183 7348</span>
              </div>
              <div className="flex items-center gap-3 text-white/70 hover:text-[#D4AF37] transition-colors group">
                <Mail className="h-4 w-4 shrink-0" />
                <span>info@primecapital.ng</span>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-display font-bold text-white mb-6">Company</h3>
            <ul className="flex flex-col gap-3 text-sm">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group text-white/70 hover:text-[#D4AF37] transition-colors flex items-center gap-2"
                  >
                    <span className="h-1 w-1 rounded-full bg-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="font-display font-bold text-white mb-6">Services</h3>
            <ul className="flex flex-col gap-3 text-sm">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group text-white/70 hover:text-[#D4AF37] transition-colors flex items-center gap-2"
                  >
                    <span className="h-1 w-1 rounded-full bg-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-display font-bold text-white mb-6">Legal</h3>
            <ul className="flex flex-col gap-3 text-sm">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group text-white/70 hover:text-[#D4AF37] transition-colors flex items-center gap-2"
                  >
                    <span className="h-1 w-1 rounded-full bg-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-col md:flex-row items-center gap-6 text-sm text-white/50">
              <p>
                © {new Date().getFullYear()} Prime Capital & Investment Limited.
                All rights reserved.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="group relative h-10 w-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:border-[#D4AF37] transition-all duration-300"
                  >
                    <Icon className="h-4 w-4 text-white/70 group-hover:text-[#D4AF37] transition-colors duration-300" />
                    <div className="absolute inset-0 bg-[#D4AF37]/20 rounded-full opacity-0 group-hover:opacity-100 blur transition-opacity duration-300" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Regulatory Disclaimer */}
          <div className="mt-6 text-xs text-white/40 text-center md:text-left leading-relaxed">
            Prime Capital & Investment Limited is registered and regulated by
            the Nigerian Securities and Exchange Commission (SEC). Investments
            are subject to market risks. Past performance is not indicative of
            future results.
          </div>
        </div>
      </div>

      {/* Decorative Bottom Border */}
      <div className="h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
    </footer>
  );
}
