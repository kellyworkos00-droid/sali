"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  animation?: "fade-up" | "fade-left" | "fade-right" | "scale" | "rotate" | "blur";
  delay?: number;
  className?: string;
}

export default function ScrollReveal({
  children,
  animation = "fade-up",
  delay = 0,
  className = "",
}: ScrollRevealProps) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1, triggerOnce: true });

  const animationClass = {
    "fade-up": "scroll-fade-in-up",
    "fade-left": "scroll-fade-in-left",
    "fade-right": "scroll-fade-in-right",
    "scale": "scroll-scale-in",
    "rotate": "scroll-rotate-in",
    "blur": "scroll-slide-blur",
  }[animation];

  return (
    <div
      ref={ref}
      className={`${!isVisible ? "hidden-scroll" : animationClass} ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
