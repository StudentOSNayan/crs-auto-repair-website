import { business } from "@/lib/business";
import { Reveal } from "@/components/motion/Reveal";
import { StarIcon } from "@/components/icons";

export function TrustStrip() {
  const { googleRating, address } = business;

  const items = [
    {
      value: googleRating.score,
      suffix: ` / ${googleRating.outOf}`,
      label: "Google rating",
      stars: true,
    },
    {
      value: String(googleRating.reviewCount),
      suffix: "",
      label: "Google reviews",
      stars: false,
    },
    {
      value: address.city,
      suffix: "",
      label: "California",
      stars: false,
    },
    {
      value: "Auto Repair",
      suffix: "",
      label: "Local business",
      stars: false,
    },
  ];

  return (
    <section aria-label="Business snapshot" className="bg-obsidian">
      <div className="page pb-2 md:pb-4">
        <Reveal className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-white/10 md:grid-cols-4">
          {items.map((item) => (
            <div key={item.label} className="bg-obsidian px-5 py-7 md:px-6 md:py-8">
              <p className="flex items-baseline gap-1.5">
                <span className="text-2xl font-extrabold tracking-tight text-bone md:text-3xl">
                  {item.value}
                </span>
                {item.suffix ? (
                  <span className="text-sm font-semibold text-white/50">{item.suffix}</span>
                ) : null}
              </p>
              {item.stars ? (
                <div
                  className="relative mt-3 flex w-fit items-center gap-1"
                  role="img"
                  aria-label={`Rated ${googleRating.score} out of ${googleRating.outOf} on Google`}
                >
                  <div className="flex items-center gap-1 text-white/20">
                    {[0, 1, 2, 3, 4].map((index) => (
                      <StarIcon key={index} className="size-3.5" />
                    ))}
                  </div>
                  <div
                    className="absolute inset-y-0 left-0 flex items-center gap-1 overflow-hidden text-accent"
                    style={{ width: "84%" }}
                    aria-hidden="true"
                  >
                    {[0, 1, 2, 3, 4].map((index) => (
                      <StarIcon key={index} className="size-3.5 shrink-0" />
                    ))}
                  </div>
                </div>
              ) : null}
              <p className="mt-3 text-xs font-medium tracking-[0.02em] text-white/50">
                {item.label}
              </p>
            </div>
          ))}
        </Reveal>
        <p className="mt-3 text-[0.6875rem] text-white/45">
          Rating shown is the publicly listed Google rating for this location. It is not a
          rating across every review platform.
        </p>
      </div>
    </section>
  );
}
