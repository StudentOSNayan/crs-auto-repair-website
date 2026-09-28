import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Reveal } from "@/components/motion/Reveal";

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  /** `dark` = light text on obsidian, `light` = ink text on warm off-white. */
  tone?: "dark" | "light";
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  tone = "dark",
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <Reveal
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p
          className={cn(
            "text-eyebrow flex items-center gap-2.5",
            tone === "dark" ? "text-white/60" : "text-muted",
            align === "center" && "justify-center",
          )}
        >
          <span className="bg-accent inline-block size-1.5 rounded-full" aria-hidden="true" />
          {eyebrow}
        </p>
      ) : null}

      <h2
        className={cn(
          "text-h2 mt-4 text-balance",
          tone === "dark" ? "text-bone" : "text-ink",
        )}
      >
        {title}
      </h2>

      {description ? (
        <p
          className={cn(
            "text-lead mt-5 max-w-xl",
            tone === "dark" ? "text-white/60" : "text-ink-soft",
            align === "center" && "mx-auto",
          )}
        >
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
