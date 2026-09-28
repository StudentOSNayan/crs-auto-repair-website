"use client";

import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";
import { cn } from "@/lib/cn";

type RevealProps = {
  children: ReactNode;
  /** Stagger in milliseconds. */
  delay?: number;
  /** `mask` reveals with a clip-path wipe (good for images), `rise` fades up. */
  variant?: "rise" | "mask";
  className?: string;
  as?: ElementType;
};

/**
 * Scroll-triggered entrance animation.
 *
 * - Uses a single shared IntersectionObserver per instance (cheap, no library).
 * - Unobserves after firing so it never re-runs.
 * - Honours `prefers-reduced-motion` (handled in globals.css) and renders
 *   content normally when JS is unavailable (see the <noscript> fallback).
 */
export function Reveal({
  children,
  delay = 0,
  variant = "rise",
  className,
  as: Tag = "div",
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.12 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      data-reveal={variant}
      data-visible={visible ? "true" : "false"}
      style={delay ? ({ "--reveal-delay": `${delay}ms` } as React.CSSProperties) : undefined}
      className={cn(className)}
    >
      {children}
    </Tag>
  );
}
