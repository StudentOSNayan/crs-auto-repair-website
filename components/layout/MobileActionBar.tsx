import { business, maps } from "@/lib/business";
import { PhoneIcon, PinIcon } from "@/components/icons";

/**
 * Fixed mobile action bar — the primary conversion surface on phones.
 * Hidden from `lg` up, where the header CTA takes over.
 */
export function MobileActionBar() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-30 border-t border-white/10 bg-obsidian/95 backdrop-blur-xl lg:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <nav
        aria-label="Quick actions"
        className="flex items-center gap-2.5 px-4 py-2.5"
      >
        <a
          href={business.phone.href}
          className="flex h-12 flex-1 items-center justify-center gap-2 rounded-full bg-accent text-[0.9375rem] font-bold tracking-[0.08em] text-white shadow-[0_10px_30px_-12px_rgba(193,54,44,0.8)] transition-colors duration-300 active:bg-accent-bright"
        >
          <PhoneIcon className="size-[18px]" />
          Call
        </a>
        <a
          href={maps.directions}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-12 flex-1 items-center justify-center gap-2 rounded-full border border-white/20 bg-white/[0.03] text-[0.9375rem] font-bold tracking-[0.08em] text-bone transition-colors duration-300 active:bg-white/[0.09]"
        >
          <PinIcon className="size-[18px]" />
          Directions
        </a>
      </nav>
    </div>
  );
}
