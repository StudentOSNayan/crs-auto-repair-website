import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import galleryWide from "@/public/images/gallery-5.jpg";
import galleryBrakes from "@/public/images/gallery-1.jpg";
import galleryEngine from "@/public/images/gallery-2.jpg";
import galleryDiagnostics from "@/public/images/gallery-3.jpg";
import galleryTires from "@/public/images/gallery-4.jpg";

/**
 * CONCEPT IMAGERY — generic automotive photography, not CRS Auto Repair's own
 * photos. Swap the imports (and alt text) for approved shop photography later;
 * the layout itself needs no changes.
 */
const images = [
  {
    src: galleryWide,
    alt: "Interior of a clean, well-organised automotive service shop with vehicle lifts",
    feature: true,
  },
  {
    src: galleryBrakes,
    alt: "Close-up of a brake disc and caliper behind an alloy wheel",
    feature: false,
  },
  {
    src: galleryEngine,
    alt: "Detailed view of a modern vehicle engine bay under workshop lighting",
    feature: false,
  },
  {
    src: galleryDiagnostics,
    alt: "Automotive diagnostic scan tool connected to a vehicle in a dim garage",
    feature: false,
  },
  {
    src: galleryTires,
    alt: "Tire sidewall and alloy wheel detail photographed in low light",
    feature: false,
  },
];

export function Gallery() {
  return (
    <section id="gallery" className="section-y bg-obsidian">
      <div className="page">
        <SectionHeading
          eyebrow="Gallery"
          title="Inside the Shop."
          description="Concept photography shown here is ready to be replaced with real photos of the shop and its work."
        />

        <Reveal variant="mask" delay={60}>
          <ul className="no-scrollbar -mx-5 mt-12 flex snap-x snap-mandatory gap-3 overflow-x-auto px-5 pb-2 md:mx-0 md:mt-16 md:grid md:auto-rows-[10rem] md:grid-cols-4 md:grid-rows-2 md:gap-4 md:overflow-visible md:px-0 lg:auto-rows-[12.5rem]">
            {images.map((image, index) => (
              <li
                key={image.alt}
                className={
                  image.feature
                    ? "relative aspect-[4/5] w-[82%] shrink-0 snap-start overflow-hidden rounded-2xl sm:w-[70%] md:col-span-2 md:row-span-2 md:aspect-auto md:w-auto"
                    : "relative aspect-[4/3] w-[72%] shrink-0 snap-start overflow-hidden rounded-2xl sm:w-[52%] md:aspect-auto md:w-auto"
                }
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes={
                    image.feature
                      ? "(max-width: 768px) 82vw, 50vw"
                      : "(max-width: 768px) 72vw, 25vw"
                  }
                  placeholder="blur"
                  loading="lazy"
                  className="object-cover transition-transform duration-[1200ms] ease-out hover:scale-[1.04]"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10"
                />
                {index === 0 ? (
                  <span className="absolute bottom-4 left-4 rounded-full bg-obsidian/70 px-3 py-1.5 text-[0.6875rem] font-semibold tracking-[0.14em] text-white/75 uppercase backdrop-blur-sm">
                    Concept imagery
                  </span>
                ) : null}
              </li>
            ))}
          </ul>
        </Reveal>

        <p className="mt-6 text-xs text-white/45">
          Placeholder photography for presentation purposes. Real shop photos to be added.
        </p>
      </div>
    </section>
  );
}
