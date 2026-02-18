"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isOverHero, setIsOverHero] = useState(true);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      // Only check hero position on home page
      if (isHomePage) {
        const heroHeight = window.innerHeight;
        setIsOverHero(window.scrollY < heroHeight * 0.8);
      } else {
        setIsOverHero(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    // Check on mount
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About Us" },
    { href: "/news", label: "News" },
    { href: "/careers", label: "Careers" },
    { href: "/contact", label: "Contact Us" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "py-4 bg-white/95 backdrop-blur-2xl border-b border-[#0A1628]/10 shadow-lg"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <Image
                src="/logo.jpeg"
                width={50}
                height={50}
                alt="Prime Capital logo"
                className="rounded-full border-2 border-[#D4AF37]/30 group-hover:border-[#D4AF37] transition-all duration-300 shadow-sm"
              />
              <div className="absolute inset-0 rounded-full bg-[#D4AF37]/10 opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-300" />
            </div>
            <div>
              <span
                className={`font-display text-xl font-bold tracking-tight group-hover:text-[#D4AF37] transition-colors duration-300 ${
                  isHomePage && isOverHero ? "text-[#D4AF37]" : "text-[#D4AF37]"
                }`}
              >
                Prime Capital
              </span>
              <p
                className={`text-[10px] uppercase tracking-widest ${
                  isHomePage && isOverHero ? "text-[#D4AF37]" : "text-[#D4AF37]"
                }`}
              >
                & Investment LTD
              </p>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`group relative text-sm font-semibold transition-colors duration-300 ${
                  isHomePage && isOverHero
                    ? "text-white/90 hover:text-[#D4AF37]"
                    : "text-[#0A1628]/70 hover:text-[#D4AF37]"
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300 bg-[#D4AF37]`}
                />
              </Link>
            ))}
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden lg:block">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  className={`group relative px-6 py-3 rounded-full font-bold text-sm hover:scale-105 transition-all duration-300 overflow-hidden shadow-elevated ${
                    isHomePage && isOverHero
                      ? "bg-[#D4AF37] text-[#0A1628] hover:bg-[#D4AF37]/90"
                      : "bg-[#0A1628] text-white hover:bg-[#0A1628]/90"
                  }`}
                  asChild
                >
                  <span className="relative z-10">Open Account</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white">
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <Link
                      href="https://forms.gle/6YLKcR4g3fiPFEZ89"
                      target="_blank"
                    >
                      Individual Account
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>Corporate Account</DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className={`lg:hidden p-2 hover:text-[#D4AF37] transition-colors relative group ${
              isHomePage && isOverHero ? "text-white" : "text-[#0A1628]"
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 relative z-10" />
            ) : (
              <Menu className="h-6 w-6 relative z-10" />
            )}
            <div className="absolute inset-0 bg-[#D4AF37]/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-6 p-6 rounded-2xl bg-white/95 backdrop-blur-2xl border border-[#0A1628]/10 shadow-elevated-lg">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group text-base font-semibold text-[#0A1628]/70 hover:text-[#D4AF37] transition-colors py-3 px-4 rounded-xl hover:bg-[#F5F2ED]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="flex items-center justify-between">
                    {link.label}
                    <span className="h-1.5 w-1.5 rounded-full bg-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity" />
                  </span>
                </Link>
              ))}

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    className="mt-4 w-full bg-[#0A1628] text-white hover:bg-[#0A1628]/90 rounded-full py-4 text-base font-bold shadow-elevated transition-all duration-300"
                    asChild
                  >
                    <span className="relative z-10">Open Account</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-white">
                  <DropdownMenuGroup>
                    <DropdownMenuItem>
                      <Link
                        href="https://forms.gle/6YLKcR4g3fiPFEZ89"
                        target="_blank"
                      >
                        Individual Account
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>Corporate Account</DropdownMenuItem>
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
