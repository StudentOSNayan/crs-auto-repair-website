import Image from "next/image";
import { business, maps } from "@/lib/business";
import { Button } from "@/components/ui/Button";
import { PinIcon, PhoneIcon } from "@/components/icons";
import heroImage from "@/public/images/hero.jpg";

export function Hero() {
  return (
    <section
      id="home"
      className="relative isolate bg-obsidian md:flex md:min-h-[92svh] md:items-center"
    >
      {/* Image: a bounded block on mobile, full-bleed cinematic frame on desktop */}
      <div className="relative h-[44svh] min-h-[260px] w-full md:absolute md:inset-0 md:h-full">
        <Image
          src={heroImage}
          alt="A vehicle on a lift inside a clean, well-lit automotive service bay"
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          placeholder="blur"
          className="object-cover object-center"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/45 to-obsidian/65 md:bg-gradient-to-r md:from-obsidian md:via-obsidian/75 md:to-obsidian/10"
        />
        {/* Extra scrim so the fixed header always stays legible on wide screens. */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 hidden h-40 bg-gradient-to-b from-obsidian/80 to-transparent md:block"
        />
      </div>

      <div className="page relative z-10 -mt-20 pb-20 md:mt-0 md:py-28">
        <div className="max-w-2xl">
          <p className="text-eyebrow flex items-center gap-3 text-white/60">
            <span className="bg-accent h-px w-8" aria-hidden="true" />
            {business.wordmark}
          </p>

          <h1 className="text-display mt-5 text-bone">
            Reliable Auto Repair
            <br />
            <span className="text-white/70">in San Gabriel</span>
          </h1>

          <p className="text-lead mt-6 max-w-xl text-white/65">
            Professional automotive service for drivers in San Gabriel and the surrounding
            community.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button href={business.phone.href} size="lg" className="w-full sm:w-auto">
              <PhoneIcon className="size-4" />
              Call CRS
            </Button>
            <Button
              href={maps.directions}
              external
              size="lg"
              variant="outline"
              className="w-full sm:w-auto"
            >
              <PinIcon className="size-4" />
              Get Directions
            </Button>
          </div>

          <p className="mt-8 flex items-start gap-2.5 text-sm text-white/60">
            <PinIcon className="text-accent mt-0.5 size-4 shrink-0" />
            <span>
              {business.address.street}
              <br />
              {business.address.city}, {business.address.region} {business.address.postalCode}
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
