"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About Us" },
    { href: "/news", label: "News" },
    { href: "/careers", label: "Careers" },
  ];

  return (
    <nav className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4 sm:px-6 lg:px-8">
      {/* Glassmorphic Pill-Shaped Navbar Container */}
      <div
        className="w-full max-w-6xl rounded-full px-6 py-3 sm:px-8 sm:py-4 backdrop-blur-xl border shadow-lg"
        style={{
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.98) 100%)",
          borderColor: "rgba(212, 175, 55, 0.2)",
          boxShadow: "0 8px 32px rgba(0,0,0,0.08), 0 0 0 1px rgba(212, 175, 55, 0.1)",
        }}
      >
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <Link
            href="/"
            className="flex items-center gap-2 sm:gap-3 flex-shrink-0"
          >
            <div className="relative">
              {/* Icon Grid - Similar to Afrinvest style */}
              <div className="grid grid-cols-3 gap-0.5 w-8 h-8 sm:w-9 sm:h-9">
                {Array.from({ length: 9 }).map((_, i) => {
                  // Skip top-right and bottom-left for visual interest
                  if (i === 2 || i === 6) return null;
                  return (
                    <div
                      key={i}
                      className="bg-primary rounded-sm"
                      style={{
                        backgroundColor:
                          i === 0 || i === 4 || i === 8
                            ? "oklch(0.67 0.15 80)"
                            : "oklch(0.67 0.12 80)",
                      }}
                    />
                  );
                })}
              </div>
            </div>
            <span className="text-lg sm:text-xl font-semibold text-foreground tracking-tight">
              PrimeCapital
            </span>
          </Link>

          {/* Desktop Navigation Links - Centered */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8 flex-1 justify-center">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground/90 hover:text-primary transition-colors duration-200 whitespace-nowrap"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden lg:block flex-shrink-0">
            <Button
              className="rounded-full bg-white text-foreground hover:bg-white/95 px-6 py-2.5 text-sm font-medium shadow-sm transition-all duration-200"
              asChild
            >
              <Link href="/contact">Start Investing</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

          {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pt-4 border-t border-primary/20">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-foreground/90 hover:text-primary transition-colors py-2 px-2 rounded-lg hover:bg-white/5"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Button
                className="rounded-full bg-white text-foreground hover:bg-white/95 mt-2 w-full py-2.5 text-sm font-medium shadow-sm"
                asChild
              >
                <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                  Start Investing
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
