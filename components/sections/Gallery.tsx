import Image from "next/image";
import { business, maps } from "@/lib/business";
import { cn } from "@/lib/cn";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PinIcon, PhoneIcon } from "@/components/icons";
import exterior from "@/public/images/crs/IMG_20260926_171641.jpg";
import carOnLift from "@/public/images/crs/IMG_20260926_171249.jpg";
import workInProgress from "@/public/images/crs/IMG_20260926_171713.jpg";
import streetCorner from "@/public/images/crs/IMG_20260926_171236.jpg";
import serviceYard from "@/public/images/crs/IMG_20260926_171218.jpg";
import shopFloor from "@/public/images/crs/IMG_20260926_171314.jpg";

/**
 * Real photographs of CRS Auto Repair, supplied in this repository under
 * `public/images/crs/`. Each tile uses the photo's own aspect ratio so crops
 * stay true to the original framing. Swapping a photo later means replacing
 * one import + alt text — the layout needs no changes.
 */
type GalleryImage = {
  src: typeof exterior;
  alt: string;
  aspect: string;
  position?: string;
  badge?: string;
};

const masonryColumns: GalleryImage[][] = [
  [
    {
      src: carOnLift,
      alt: "A white sedan raised on a two-post lift in a service bay, hood open with the engine exposed",
      aspect: "aspect-[3/4]",
      position: "object-center",
    },
    {
      src: streetCorner,
      alt: "The Del Mar Avenue street corner near the shop, with the building visible across the road in San Gabriel",
      aspect: "aspect-[4/3]",
      position: "object-[center_35%]",
    },
  ],
  [
    {
      src: exterior,
      alt: "Exterior of CRS Auto Repair on a clear day, red sign above the blue service canopy with vehicles waiting in the bays",
      aspect: "aspect-[4/3]",
      position: "object-center",
      badge: "1901 Del Mar Ave, San Gabriel",
    },
    {
      src: workInProgress,
      alt: "A technician working at an open engine bay, with another vehicle raised on a lift in the background",
      aspect: "aspect-[3/4]",
      position: "object-[center_38%]",
    },
  ],
  [
    {
      src: serviceYard,
      alt: "The service yard behind the shop, with a customer's car parked and staff moving in the work area",
      aspect: "aspect-[21/10]",
      position: "object-[center_45%]",
    },
    {
      src: shopFloor,
      alt: "The shop floor with a white sedan in the center bay, tool chests and equipment along the walls",
      aspect: "aspect-[4/3]",
      position: "object-center",
    },
  ],
];

/** Mobile carousel order — strongest storefront shot first. */
const mobileOrder = [
  masonryColumns[1][0], // exterior
  masonryColumns[0][0], // car on lift
  masonryColumns[1][1], // work in progress
  masonryColumns[0][1], // street corner
  masonryColumns[2][0], // service yard
  masonryColumns[2][1], // shop floor
];

function GalleryFigure({
  image,
  className,
  sizes,
}: {
  image: GalleryImage;
  className?: string;
  sizes?: string;
}) {
  return (
    <figure
      className={cn(
        "relative overflow-hidden rounded-2xl",
        image.aspect,
        className,
      )}
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes={sizes ?? "(max-width: 768px) 70vw, 33vw"}
        placeholder="blur"
        loading="lazy"
        className={cn(
          "object-cover transition-transform duration-[1200ms] ease-out hover:scale-[1.03]",
          image.position,
        )}
      />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10" />
      {image.badge ? (
        <figcaption className="absolute bottom-4 left-4 rounded-full bg-obsidian/75 px-3.5 py-1.5 text-[0.6875rem] font-semibold tracking-[0.08em] text-white/80 backdrop-blur-sm">
          {image.badge}
        </figcaption>
      ) : null}
    </figure>
  );
}

export function Gallery() {
  return (
    <section id="gallery" className="section-y bg-obsidian">
      <div className="page">
        <SectionHeading
          eyebrow="Gallery"
          title="Inside the Shop."
          description="Photographs of CRS Auto Repair at 1901 Del Mar Avenue — the building, the bays and the work."
        />

        {/* Desktop: curated masonry columns, each photo at its own ratio. */}
        <Reveal variant="mask" delay={60} className="hidden md:block">
          <div className="mt-16 grid grid-cols-3 gap-4">
            {masonryColumns.map((column, columnIndex) => (
              <div key={columnIndex} className="flex flex-col gap-4">
                {column.map((image) => (
                  <GalleryFigure key={image.src.src} image={image} sizes="(max-width: 1280px) 33vw, 30vw" />
                ))}
                {columnIndex === 2 ? (
                  <div className="flex flex-1 flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                    <p className="text-eyebrow flex items-center gap-2 text-white/50">
                      <PinIcon className="size-3.5" />
                      Find Us
                    </p>
                    <address className="mt-3 text-sm not-italic leading-relaxed text-white/65">
                      {business.address.street}
                      <br />
                      {business.address.city}, {business.address.region}{" "}
                      {business.address.postalCode}
                    </address>
                    <a
                      href={business.phone.href}
                      className="focus-visible:outline-accent-bright mt-3 inline-flex items-center gap-2 rounded-sm text-sm font-semibold text-bone transition-colors hover:text-accent-bright focus-visible:outline-2 focus-visible:outline-offset-2"
                    >
                      <PhoneIcon className="size-4" />
                      {business.phone.display}
                    </a>
                    <div className="min-h-6" aria-hidden="true" />
                    <a
                      href={maps.directions}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="focus-visible:outline-accent-bright mt-auto inline-flex h-11 w-fit items-center justify-center gap-2 rounded-full bg-accent px-5 text-sm font-semibold text-white transition-colors hover:bg-accent-bright focus-visible:outline-2 focus-visible:outline-offset-2"
                    >
                      <PinIcon className="size-4" />
                      Directions
                    </a>
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </Reveal>

        {/* Mobile: snap carousel of the same photos. */}
        <Reveal delay={60} className="md:hidden">
          <ul
            aria-label="Photos of CRS Auto Repair"
            className="no-scrollbar -mx-5 mt-12 flex snap-x snap-mandatory gap-3 overflow-x-auto px-5 pb-2"
          >
            {mobileOrder.map((image, index) => (
              <li
                key={image.src.src}
                className={cn(
                  "shrink-0 snap-start",
                  index === 0 ? "w-[82%]" : "w-[62%]",
                )}
              >
                <GalleryFigure
                  image={image}
                  sizes="(max-width: 768px) 82vw, 33vw"
                />
              </li>
            ))}
          </ul>
        </Reveal>

        <p className="mt-6 text-xs text-white/45">
          Photos of the shop and its service area at 1901 Del Mar Ave, San Gabriel, CA.
        </p>
      </div>
    </section>
  );
}
