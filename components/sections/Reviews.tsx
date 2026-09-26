import { business, maps } from "@/lib/business";
import { Carousel } from "@/components/ui/Carousel";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { QuoteIcon, StarIcon } from "@/components/icons";

/**
 * SAMPLE PLACEHOLDERS ONLY.
 * No reviews are fabricated and no customer names are invented. Replace the
 * `placeholders` array with verified review text once the owner supplies it
 * (and written permission to publish has been obtained).
 */
const placeholders = [
  {
    text: "Sample review placeholder. A verified customer review will be published here once the owner supplies it.",
  },
  {
    text: "This card is reserved for an authentic, verified customer review. No review text has been invented for this concept site.",
  },
  {
    text: "Placeholder card. Real feedback from local drivers replaces these samples before launch.",
  },
];

export function Reviews() {
  const { googleRating } = business;

  return (
    <section id="reviews" className="section-y bg-bone-bright text-ink">
      <div className="page">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            tone="light"
            eyebrow="Reviews"
            title="What Local Drivers Are Saying"
            description="Review samples will be replaced with verified customer feedback once it is supplied."
          />

          <Reveal delay={100} className="lg:shrink-0">
            <div className="rounded-2xl border border-ink/10 bg-white p-6 lg:min-w-[20rem]">
              <p className="flex items-baseline gap-2">
                <span className="text-4xl font-extrabold tracking-tight">
                  {googleRating.score}
                </span>
                <span className="text-sm font-semibold text-muted">
                  / {googleRating.outOf}
                </span>
              </p>

              <div
                className="relative mt-3 flex w-fit items-center gap-1"
                role="img"
                aria-label={`Rated ${googleRating.score} out of ${googleRating.outOf} on Google from ${googleRating.reviewCount} reviews`}
              >
                <div className="flex items-center gap-1 text-ink/20">
                  {[0, 1, 2, 3, 4].map((index) => (
                    <StarIcon key={index} className="size-4" />
                  ))}
                </div>
                <div
                  className="absolute inset-y-0 left-0 flex items-center gap-1 overflow-hidden text-accent"
                  style={{ width: "84%" }}
                  aria-hidden="true"
                >
                  {[0, 1, 2, 3, 4].map((index) => (
                    <StarIcon key={index} className="size-4 shrink-0" />
                  ))}
                </div>
              </div>

              <p className="mt-3 text-sm text-ink-soft">
                <strong className="font-semibold text-ink">
                  {googleRating.reviewCount} reviews
                </strong>{" "}
                · {googleRating.source}
              </p>

              <a
                href={maps.place}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-visible:outline-accent-bright mt-5 inline-flex rounded-sm text-sm font-semibold text-accent underline decoration-accent/30 underline-offset-4 transition-colors hover:text-accent-bright focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                View on Google Maps
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={60}>
          <Carousel
            className="mt-12 lg:mt-16"
            label="Customer reviews"
            trackClassName="-mx-5 px-5 pb-2 md:mx-0 md:px-0"
          >
            {placeholders.map((placeholder) => (
              <li
                key={placeholder.text}
                data-carousel-item
                className="w-[86%] shrink-0 snap-start sm:w-[54%] lg:w-[33%]"
              >
                <article className="flex h-full flex-col rounded-2xl border border-dashed border-ink/20 bg-white p-7">
                  <span className="text-eyebrow inline-flex w-fit items-center gap-2 rounded-full bg-ink/[0.04] px-3 py-1.5 text-muted">
                    Sample placeholder
                  </span>
                  <QuoteIcon className="mt-6 size-7 text-ink/25" />
                  <p className="mt-4 text-[0.9375rem] leading-relaxed text-ink-soft">
                    {placeholder.text}
                  </p>
                  <p className="mt-auto pt-6 text-xs font-medium tracking-wide text-muted">
                    Awaiting a verified review
                  </p>
                </article>
              </li>
            ))}
          </Carousel>
        </Reveal>

        <p className="mt-6 max-w-2xl text-xs leading-relaxed text-muted">
          The {googleRating.score} / {googleRating.outOf} rating and {googleRating.reviewCount}{" "}
          review count above are the publicly listed {googleRating.source} figures for this
          location. Individual review text is shown as clearly marked placeholders only — no
          reviews have been written, invented or attributed to real customers.
        </p>
      </div>
    </section>
  );
}
