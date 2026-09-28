import Link from "next/link";
import { cn } from "@/lib/cn";
import { business } from "@/lib/business";

type WordmarkProps = {
  /** `stacked` (two lines) for bars, `inline` for headings/footers. */
  variant?: "stacked" | "inline";
  tone?: "light" | "dark";
  className?: string;
  /** Renders as plain text instead of a link back to the top of the page. */
  asLink?: boolean;
  onClick?: () => void;
};

/**
 * Text-based wordmark treatment — intentionally not a logo.
 * Replace this component with the owner's real logo file when it is supplied.
 */
export function Wordmark({
  variant = "stacked",
  tone = "light",
  className,
  asLink = true,
  onClick,
}: WordmarkProps) {
  const strong = tone === "light" ? "text-bone" : "text-ink";
  const soft = tone === "light" ? "text-white/55" : "text-muted";

  const content =
    variant === "stacked" ? (
      <span className={cn("flex flex-col leading-none", className)}>
        <span className={cn("text-[1.0625rem] font-extrabold tracking-[0.14em]", strong)}>
          CRS
        </span>
        <span className={cn("mt-1.5 text-[0.5rem] font-semibold tracking-[0.3em]", soft)}>
          AUTO REPAIR
        </span>
      </span>
    ) : (
      <span className={cn("flex items-baseline gap-2", className)}>
        <span className={cn("text-base font-extrabold tracking-[0.14em]", strong)}>CRS</span>
        <span className={cn("text-[0.6875rem] font-semibold tracking-[0.26em]", soft)}>
          AUTO REPAIR
        </span>
      </span>
    );

  if (!asLink) return content;

  return (
    <Link
      href="#home"
      onClick={onClick}
      aria-label={`${business.name} — back to top`}
      className="focus-visible:outline-accent-bright inline-flex rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4"
    >
      {content}
    </Link>
  );
}
