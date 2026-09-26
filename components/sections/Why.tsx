import type { SVGProps } from "react";
import { business } from "@/lib/business";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ChatIcon, ClipboardCheckIcon, PhoneIcon, PinIcon } from "@/components/icons";

/**
 * Benefit themes — deliberately free of factual claims about the business
 * (no certifications, no years in business, no warranties, no guarantees).
 */
const benefits: Array<{
  title: string;
  description: string;
  Icon: (props: SVGProps<SVGSVGElement>) => React.ReactElement;
}> = [
  {
    title: "Straightforward Service",
    description:
      "A clear, uncomplicated approach to discussing your vehicle and the work it may need.",
    Icon: ClipboardCheckIcon,
  },
  {
    title: "Local Convenience",
    description: `Easy to reach on ${business.address.streetName} for drivers in San Gabriel and nearby neighborhoods.`,
    Icon: PinIcon,
  },
  {
    title: "Clear Communication",
    description:
      "Talk directly with the shop about what you're experiencing before deciding on next steps.",
    Icon: ChatIcon,
  },
  {
    title: "Easy to Contact",
    description: `Reach the shop by phone at ${business.phone.display} during listed hours, or stop by in person.`,
    Icon: PhoneIcon,
  },
];

export function Why() {
  return (
    <section id="why" className="section-y bg-obsidian">
      <div className="page">
        <SectionHeading
          eyebrow="Why CRS"
          title="Service You Can Feel Good About."
          description="A local shop experience built around clear communication and convenient service."
        />

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {benefits.map((benefit, index) => (
            <li key={benefit.title}>
              <Reveal delay={index * 70} className="h-full">
                <article className="group h-full rounded-2xl border border-white/[0.08] bg-white/[0.02] p-7 transition-[transform,background-color,border-color] duration-500 ease-out hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.05]">
                  <span className="inline-flex size-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] text-bone transition-colors duration-500 group-hover:border-accent/50 group-hover:text-accent-bright">
                    <benefit.Icon className="size-5" />
                  </span>
                  <h3 className="text-h3 mt-6 text-bone">{benefit.title}</h3>
                  <p className="mt-3 text-[0.9375rem] leading-relaxed text-white/60">
                    {benefit.description}
                  </p>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
