"use client";

import { useEffect, useRef } from "react";

interface OrbitalLogosProps {
  centerLogo?: string;
  orbitingLogos?: string[];
  radius?: number;
  duration?: number;
  centerSize?: number;
  logoSize?: number;
}

export default function OrbitalLogos({
  centerLogo = "🎯",
  orbitingLogos = ["🚀", "💻", "🎨", "🔧", "⚡", "🌟"],
  radius = 150,
  duration = 20,
  centerSize = 80,
  logoSize = 50,
}: OrbitalLogosProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      @keyframes orbit {
        from {
          transform: rotate(0deg) translateX(${radius}px) rotate(0deg);
        }
        to {
          transform: rotate(360deg) translateX(${radius}px) rotate(-360deg);
        }
      }
      
      .orbit-item {
        animation: orbit ${duration}s linear infinite;
        transform-origin: -${radius}px center;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, [radius, duration]);

  return (
    <div
      ref={containerRef}
      className="flex items-center justify-center w-full h-full min-h-screen "
    >
      {/* Orbit circle visualization */}
      <div className="absolute">
        <div
          className="border border-border/30 rounded-full"
          style={{
            width: radius * 2,
            height: radius * 2,
          }}
        />
      </div>

      {/* Center logo */}
      <div
        className="absolute flex items-center justify-center bg-card rounded-full shadow-lg"
        style={{
          width: centerSize,
          height: centerSize,
          fontSize: centerSize * 0.5,
        }}
      >
        {centerLogo}
      </div>

      {/* Orbiting logos */}
      {orbitingLogos.map((logo, index) => (
        <div
          key={index}
          className="orbit-item absolute flex items-center justify-center rounded-lg shadow-md"
          style={{
            width: logoSize,
            height: logoSize,
            fontSize: logoSize * 0.5,
            animationDelay: `${(index / orbitingLogos.length) * duration}s`,
          }}
        >
          {logo}
        </div>
      ))}
    </div>
  );
}
