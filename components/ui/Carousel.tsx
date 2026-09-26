"use client";

import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/cn";
import { ArrowLeftIcon, ArrowRightIcon } from "@/components/icons";

type CarouselProps = {
  children: ReactNode;
  /** Accessible name for the scrollable region. */
  label: string;
  className?: string;
  trackClassName?: string;
};

/**
 * Lightweight snap carousel — no dependency, ~2KB of logic.
 * Native scrolling (touch, keyboard, trackpad) does the work; the buttons are
 * a progressive enhancement and are disabled at each end of the track.
 */
export function Carousel({ children, label, className, trackClassName }: CarouselProps) {
  const trackRef = useRef<HTMLUListElement | null>(null);
  const [edges, setEdges] = useState({ start: true, end: false });

  const syncEdges = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const maxScroll = track.scrollWidth - track.clientWidth;
    setEdges({
      start: track.scrollLeft <= 4,
      end: maxScroll <= 4 || track.scrollLeft >= maxScroll - 4,
    });
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    syncEdges();
    track.addEventListener("scroll", syncEdges, { passive: true });
    window.addEventListener("resize", syncEdges);
    return () => {
      track.removeEventListener("scroll", syncEdges);
      window.removeEventListener("resize", syncEdges);
    };
  }, [syncEdges]);

  const scrollByItem = (direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const item = track.querySelector<HTMLElement>("[data-carousel-item]");
    const gap = parseFloat(getComputedStyle(track).columnGap || "0") || 0;
    const distance = item ? item.offsetWidth + gap : track.clientWidth * 0.8;
    track.scrollBy({ left: direction * distance, behavior: "smooth" });
  };

  const controlClasses =
    "inline-flex size-11 items-center justify-center rounded-full border border-ink/15 bg-white text-ink transition-[background-color,border-color,color,opacity] duration-300 hover:border-ink/40 hover:bg-ink/[0.04] disabled:pointer-events-none disabled:opacity-35 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-bright";

  return (
    <div className={cn("relative", className)}>
      <ul
        ref={trackRef}
        aria-label={label}
        tabIndex={0}
        className={cn(
          "no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-bright",
          trackClassName,
        )}
      >
        {children}
      </ul>

      <div className="mt-6 hidden items-center gap-3 md:flex">
        <button
          type="button"
          onClick={() => scrollByItem(-1)}
          disabled={edges.start}
          aria-label={`Scroll ${label} backwards`}
          className={controlClasses}
        >
          <ArrowLeftIcon className="size-4" />
        </button>
        <button
          type="button"
          onClick={() => scrollByItem(1)}
          disabled={edges.end}
          aria-label={`Scroll ${label} forwards`}
          className={controlClasses}
        >
          <ArrowRightIcon className="size-4" />
        </button>
      </div>
    </div>
  );
}
