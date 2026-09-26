import Image from "next/image";
import { business, maps } from "@/lib/business";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { ArrowRightIcon, ClockIcon, PhoneIcon, PinIcon } from "@/components/icons";
import contactImage from "@/public/images/crs/IMG_20260926_171734.jpg";

export function Contact() {
  return (
    <section id="contact" className="relative isolate overflow-hidden bg-obsidian">
      {/* Atmosphere */}
      <Image
        src={contactImage}
        alt="The front of CRS Auto Repair, with the blue service canopy and vehicles in the bays"
        fill
        sizes="100vw"
        placeholder="blur"
        loading="lazy"
        className="object-cover object-center opacity-30"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-obsidian via-obsidian/92 to-obsidian md:bg-gradient-to-r md:from-obsidian md:via-obsidian/95 md:to-obsidian/70"
      />

      <div className="page section-y relative">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          {/* Conversion copy */}
          <div>
            <Reveal>
              <p className="text-eyebrow flex items-center gap-2.5 text-white/60">
                <span className="bg-accent inline-block size-1.5 rounded-full" aria-hidden="true" />
                Contact
              </p>
              <h2 className="text-h2 mt-4">Need Auto Repair?</h2>
              <p className="text-lead mt-5 max-w-md text-white/60">
                Talk to CRS Auto Repair today.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Button href={business.phone.href} size="lg" className="w-full sm:w-auto">
                  <PhoneIcon className="size-4" />
                  Call Now
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
            </Reveal>

            <Reveal delay={90}>
              <dl className="mt-12 grid gap-px overflow-hidden rounded-2xl bg-white/10 sm:grid-cols-2">
                <div className="bg-obsidian/80 p-6 backdrop-blur-sm">
                  <dt className="text-eyebrow flex items-center gap-2 text-white/50">
                    <PinIcon className="size-3.5" />
                    Address
                  </dt>
                  <dd className="mt-3 text-[0.9375rem] leading-relaxed text-bone/90">
                    {business.address.street}
                    <br />
                    {business.address.city}, {business.address.region}{" "}
                    {business.address.postalCode}
                  </dd>
                </div>
                <div className="bg-obsidian/80 p-6 backdrop-blur-sm">
                  <dt className="text-eyebrow flex items-center gap-2 text-white/50">
                    <PhoneIcon className="size-3.5" />
                    Phone
                  </dt>
                  <dd className="mt-3">
                    <a
                      href={business.phone.href}
                      className="focus-visible:outline-accent-bright rounded-sm text-[1.0625rem] font-semibold text-bone transition-colors hover:text-accent-bright focus-visible:outline-2 focus-visible:outline-offset-2"
                    >
                      {business.phone.display}
                    </a>
                  </dd>
                </div>
                <div className="bg-obsidian/80 p-6 backdrop-blur-sm sm:col-span-2">
                  <dt className="text-eyebrow flex items-center gap-2 text-white/50">
                    <ClockIcon className="size-3.5" />
                    Hours
                  </dt>
                  <dd className="mt-3 grid gap-1.5 text-[0.9375rem] text-bone/90 sm:grid-cols-3">
                    {business.hours.map((entry) => (
                      <span key={entry.days} className="flex justify-between gap-4 sm:block">
                        <span className="text-white/50 sm:mr-2">{entry.days}</span>
                        <span className="font-semibold">{entry.time}</span>
                      </span>
                    ))}
                  </dd>
                </div>
              </dl>
            </Reveal>
          </div>

          {/* Map */}
          <Reveal variant="mask" delay={120} className="h-full">
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-graphite shadow-[0_40px_80px_-60px_rgba(0,0,0,0.9)]">
              <div className="relative h-[20rem] lg:h-[32rem]">
                <iframe
                  src={maps.embed}
                  title={`Map showing ${business.address.full}`}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 size-full border-0 grayscale-[0.4] contrast-[1.05]"
                />
              </div>
              <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/10 bg-obsidian px-5 py-4">
                <p className="text-sm text-white/60">
                  {business.address.street}, {business.address.city}, {business.address.region}
                </p>
                <a
                  href={maps.place}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus-visible:outline-accent-bright inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent-bright focus-visible:outline-2 focus-visible:outline-offset-2"
                >
                  Open in Maps
                  <ArrowRightIcon className="size-4" />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
