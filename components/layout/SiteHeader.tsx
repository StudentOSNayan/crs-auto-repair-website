"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { business, maps } from "@/lib/business";
import { navLinks } from "@/lib/nav";
import { cn } from "@/lib/cn";
import { Button } from "@/components/ui/Button";
import { Wordmark } from "@/components/ui/Wordmark";
import { PhoneIcon, PinIcon, CloseIcon, MenuIcon, ArrowRightIcon } from "@/components/icons";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState<string>("home");
  const toggleRef = useRef<HTMLButtonElement | null>(null);
  const panelRef = useRef<HTMLDivElement | null>(null);

  /* Solidify the bar once the hero starts scrolling away. */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Scroll-spy: highlight the section crossing the middle of the viewport. */
  useEffect(() => {
    const sections = navLinks
      .map(({ id }) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActiveId(visible.target.id);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5, 1] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  /* Lock page scroll while the mobile menu is open. */
  useEffect(() => {
    if (!menuOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [menuOpen]);

  /* Escape closes the menu; focus is moved into the panel and back out. */
  useEffect(() => {
    if (!menuOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        toggleRef.current?.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    panelRef.current?.querySelector<HTMLElement>("a,button")?.focus();

    return () => document.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
    toggleRef.current?.focus();
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-500",
          scrolled
            ? "border-b border-white/10 bg-obsidian/85 backdrop-blur-xl"
            : "border-b border-transparent bg-gradient-to-b from-obsidian/80 via-obsidian/40 to-transparent",
        )}
      >
        <div className="page flex h-16 items-center justify-between gap-6 md:h-20">
          <Wordmark onClick={() => setMenuOpen(false)} />

          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = activeId === link.id;
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setActiveId(link.id)}
                      aria-current={isActive ? "true" : undefined}
                      className={cn(
                        "relative rounded-full px-4 py-2 text-[0.8125rem] font-medium tracking-wide transition-colors duration-300 hover:text-bone focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-bright",
                        isActive ? "text-bone" : "text-white/60",
                      )}
                    >
                      {link.label}
                      <span
                        aria-hidden="true"
                        className={cn(
                          "bg-accent absolute inset-x-4 -bottom-0.5 h-[2px] origin-left rounded-full transition-transform duration-300",
                          isActive ? "scale-x-100" : "scale-x-0",
                        )}
                      />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={business.phone.href}
              className="hidden items-center gap-2 rounded-full px-3 py-2 text-sm font-semibold text-white/70 transition-colors hover:text-bone focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-bright md:inline-flex"
            >
              <PhoneIcon className="size-4" />
              {business.phone.display}
            </a>

            <Button href={business.phone.href} size="md" className="hidden lg:inline-flex">
              <PhoneIcon className="size-4" />
              Call Now
            </Button>

            <button
              ref={toggleRef}
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              className="focus-visible:outline-accent-bright -mr-2 inline-flex size-11 items-center justify-center rounded-full text-bone transition-colors hover:bg-white/[0.06] focus-visible:outline-2 focus-visible:outline-offset-2 lg:hidden"
            >
              {menuOpen ? <CloseIcon className="size-5" /> : <MenuIcon className="size-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* ---------------------------------------------------------------- */}
      {/*  Mobile menu                                                     */}
      {/* ---------------------------------------------------------------- */}
      <div
        ref={panelRef}
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        aria-hidden={!menuOpen}
        className={cn(
          "fixed inset-0 z-40 lg:hidden",
          "transition-[opacity,visibility] duration-300",
          menuOpen ? "visible opacity-100" : "invisible opacity-0",
        )}
      >
        <div
          className="absolute inset-0 bg-obsidian/70 backdrop-blur-sm"
          onClick={closeMenu}
          aria-hidden="true"
        />

        <div
          className={cn(
            "absolute inset-x-0 top-0 max-h-[100dvh] overflow-y-auto border-b border-white/10 bg-obsidian px-5 pt-20 pb-10 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
            menuOpen ? "translate-y-0" : "-translate-y-4",
          )}
        >
          <nav aria-label="Mobile">
            <ul className="divide-y divide-white/[0.07] border-y border-white/[0.07]">
              {navLinks.map((link, index) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => {
                      setActiveId(link.id);
                      setMenuOpen(false);
                    }}
                    style={{ transitionDelay: `${menuOpen ? 60 + index * 35 : 0}ms` }}
                    className={cn(
                      "group flex items-center justify-between py-4 text-2xl font-bold tracking-tight transition-[opacity,transform,color] duration-300",
                      menuOpen ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0",
                      activeId === link.id ? "text-bone" : "text-white/70",
                    )}
                  >
                    {link.label}
                    <ArrowRightIcon
                      className={cn(
                        "size-5 transition-transform duration-300 group-hover:translate-x-1",
                        activeId === link.id ? "text-accent" : "text-white/45",
                      )}
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-8 grid gap-3">
            <Button href={business.phone.href} size="lg" className="w-full">
              <PhoneIcon className="size-4" />
              {business.phone.display}
            </Button>
            <Button
              href={maps.directions}
              external
              size="lg"
              variant="outline"
              className="w-full"
            >
              <PinIcon className="size-4" />
              Get Directions
            </Button>
          </div>

          <div className="mt-8 space-y-1.5 text-sm text-white/50">
            <p>
              {business.address.street}
              <br />
              {business.address.city}, {business.address.region} {business.address.postalCode}
            </p>
            {business.hours.map((entry) => (
              <p key={entry.days} className="flex justify-between gap-4">
                <span>{entry.days}</span>
                <span className="text-white/70">{entry.time}</span>
              </p>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
