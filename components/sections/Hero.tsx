import Image from "next/image";
import { business, maps } from "@/lib/business";
import { Button } from "@/components/ui/Button";
import { PinIcon, PhoneIcon } from "@/components/icons";
import heroImage from "@/public/images/crs/IMG_20260926_171748.jpg";

export function Hero() {
  return (
    <section id="home" className="relative isolate bg-obsidian">
      <div className="page relative grid gap-8 pt-24 pb-14 sm:gap-10 lg:min-h-[92svh] lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16 lg:py-28">
        {/* Photo — real storefront at golden hour */}
        <div className="order-1 lg:order-2">
          <div className="relative overflow-hidden rounded-2xl ring-1 ring-white/15 shadow-[0_40px_80px_-60px_rgba(0,0,0,0.9)]">
            <Image
              src={heroImage}
              alt="CRS Auto Repair at sunset, red sign above the blue service canopy on Del Mar Avenue in San Gabriel"
              fill
              priority
              fetchPriority="high"
              sizes="(max-width: 1024px) 100vw, 46vw"
              placeholder="blur"
              className="aspect-[16/9] w-full object-cover object-[center_32%] lg:aspect-[4/5]"
            />
            <div
              aria-hidden="true"
              className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-obsidian/70 to-transparent"
            />
          </div>
        </div>

        {/* Copy */}
        <div className="order-2 max-w-2xl lg:order-1">
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
