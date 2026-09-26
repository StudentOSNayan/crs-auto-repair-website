import Image from "next/image";
import { business, maps } from "@/lib/business";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { PinIcon } from "@/components/icons";
import aboutImage from "@/public/images/crs/IMG_20260926_171334.jpg";

export function About() {
  return (
    <section id="about" className="section-y bg-bone text-ink">
      <div className="page grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Copy */}
        <div>
          <Reveal>
            <p className="text-eyebrow flex items-center gap-2.5 text-muted">
              <span className="bg-accent inline-block size-1.5 rounded-full" aria-hidden="true" />
              About
            </p>
            <h2 className="text-h2 mt-4 text-balance">Your Local Auto Repair Shop</h2>
            <p className="text-lead mt-6 max-w-xl text-ink-soft">
              Keeping your vehicle running properly matters. CRS Auto Repair serves drivers in
              San Gabriel with automotive repair and maintenance services.
            </p>

            <div className="mt-8">
              <Button href={maps.directions} external variant="outlineDark" size="lg" withArrow>
                <PinIcon className="size-4" />
                Get Directions
              </Button>
            </div>
          </Reveal>
        </div>

        {/* Image + location card */}
        <Reveal className="relative" delay={80}>
          <div className="relative overflow-hidden rounded-2xl">
            <Image
              src={aboutImage}
              alt="A technician inspecting a vehicle raised on a lift in the service bay while a customer watches"
              width={720}
              height={529}
              sizes="(max-width: 1024px) 100vw, 50vw"
              placeholder="blur"
              loading="lazy"
              className="aspect-[4/3] w-full object-cover object-center sm:aspect-[4/3] lg:aspect-[4/3]"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-obsidian/50 via-transparent to-transparent"
            />
          </div>

          <div className="mt-4 rounded-2xl border border-ink/10 bg-white p-6 shadow-[0_24px_60px_-40px_rgba(20,21,26,0.45)] lg:absolute lg:right-5 lg:bottom-5 lg:mt-0 lg:w-[min(22rem,80%)] lg:border-white/10 lg:bg-obsidian/90 lg:p-6 lg:backdrop-blur-md">
            <p className="text-eyebrow text-accent">Location</p>
            <p className="mt-3 text-lg font-bold tracking-tight text-ink lg:text-bone">
              {business.name}
            </p>
            <address className="mt-1.5 text-sm not-italic leading-relaxed text-ink-soft lg:text-white/60">
              {business.address.street}
              <br />
              {business.address.city}, {business.address.region} {business.address.postalCode}
            </address>
            <a
              href={maps.directions}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-visible:outline-accent-bright mt-5 inline-flex items-center gap-2 rounded-sm text-sm font-semibold text-ink underline decoration-ink/25 underline-offset-4 transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 lg:text-bone lg:decoration-white/30 lg:hover:text-accent-bright"
            >
              <PinIcon className="size-4" />
              Get Directions
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
