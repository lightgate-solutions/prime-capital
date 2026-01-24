import type { Metadata } from "next";
import type React from "react";
import "./globals.css";
import { Outfit, Playfair_Display } from "next/font/google";
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
    "Prime Capital offers brokerage, investment advisory, and asset management services. Regulated by the Nigerian SEC.",
  icons: {
    icon: [
      {
        url: "/icon.png",
        media: "(prefers-color-scheme: light)",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${outfit.variable}`}
      suppressHydrationWarning
    >
      <body className={`antialiased font-body`}>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
