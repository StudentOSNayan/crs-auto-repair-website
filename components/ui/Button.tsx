import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "outline" | "outlineDark" | "light" | "ghost";
type Size = "md" | "lg";

const base =
  "group relative inline-flex select-none items-center justify-center gap-2.5 rounded-full font-semibold tracking-[0.01em] whitespace-nowrap transition-[background-color,border-color,color,transform,box-shadow] duration-300 ease-out active:translate-y-0 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-accent-bright";

const variants: Record<Variant, string> = {
  primary:
    "bg-accent text-white shadow-[0_12px_30px_-12px_rgba(193,54,44,0.75)] hover:bg-accent-bright hover:shadow-[0_18px_40px_-14px_rgba(193,54,44,0.9)] hover:-translate-y-0.5 active:translate-y-0",
  outline:
    "border border-white/20 bg-white/[0.02] text-bone hover:border-white/45 hover:bg-white/[0.07] hover:-translate-y-0.5",
  outlineDark:
    "border border-ink/15 bg-transparent text-ink hover:border-ink/40 hover:bg-ink/[0.04] hover:-translate-y-0.5",
  light:
    "bg-bone text-ink hover:bg-bone-bright hover:-translate-y-0.5 shadow-[0_12px_30px_-18px_rgba(0,0,0,0.6)]",
  ghost: "text-bone/75 hover:text-bone",
};

const sizes: Record<Size, string> = {
  md: "h-12 px-6 text-[0.9375rem]",
  lg: "h-14 px-8 text-base",
};

const arrowMotion = "[&>svg:last-child]:transition-transform [&>svg:last-child]:duration-300 group-hover:[&>svg:last-child]:translate-x-1";

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
  /** Renders a trailing arrow that nudges on hover. */
  withArrow?: boolean;
};

type AnchorProps = CommonProps &
  Omit<ComponentPropsWithoutRef<typeof Link>, "href" | "className" | "children"> & {
    href: string;
    external?: boolean;
  };

type ButtonElProps = CommonProps &
  Omit<ComponentPropsWithoutRef<"button">, "className" | "children"> & {
    href?: undefined;
  };

type Props = AnchorProps | ButtonElProps;

/** Single call/contact action used across the site. */
export function Button(props: Props) {
  const {
    variant = "primary",
    size = "md",
    className,
    children,
    withArrow = false,
    ...rest
  } = props as CommonProps & Record<string, unknown>;

  const classes = cn(base, variants[variant], sizes[size], withArrow && arrowMotion, className);

  const content = (
    <>
      {children}
      {withArrow ? (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="size-4"
          aria-hidden="true"
        >
          <path d="M4.5 12h15M13 5.5l6.5 6.5L13 18.5" />
        </svg>
      ) : null}
    </>
  );

  if (typeof (rest as { href?: string }).href === "string") {
    const { href, external, ...anchorRest } = rest as AnchorProps;
    // Only in-page / internal routes go through next/link. Everything else
    // (tel:, mailto:, https:) is a plain anchor so mobile browsers can hand
    // the URL to the right app.
    const isInternal = !external && href.startsWith("/");

    if (!isInternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
          {...(anchorRest as ComponentPropsWithoutRef<"a">)}
        >
          {content}
        </a>
      );
    }

    return (
      <Link href={href} className={classes} {...(anchorRest as ComponentPropsWithoutRef<"a">)}>
        {content}
      </Link>
    );
  }

  const buttonRest = rest as ComponentPropsWithoutRef<"button">;
  return (
    <button type="button" className={classes} {...buttonRest}>
      {content}
    </button>
  );
}
