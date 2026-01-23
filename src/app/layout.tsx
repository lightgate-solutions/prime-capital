import type { Metadata } from "next";
import type React from "react";
import "./globals.css";
import { Playfair_Display, Outfit } from "next/font/google";
import { SmoothScroll } from "@/components/smooth-scroll";

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "PrimeCapital - Leading Financial Services in Nigeria",
  description:
    "PrimeCapital offers brokerage, investment advisory, and asset management services. Regulated by the Nigerian SEC.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${outfit.variable}`} suppressHydrationWarning>
      <body className={`antialiased font-body`}>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
