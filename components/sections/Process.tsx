import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const steps = [
  {
    number: "01",
    title: "Contact Us",
    description: "Call the shop to discuss your vehicle.",
  },
  {
    number: "02",
    title: "Visit the Shop",
    description: "Bring your vehicle to CRS Auto Repair in San Gabriel.",
  },
  {
    number: "03",
    title: "Get Your Vehicle Checked",
    description: "Discuss the issue and recommended service.",
  },
  {
    number: "04",
    title: "Get Back on the Road",
    description: "A simple, clear service experience.",
  },
];

export function Process() {
  return (
    <section id="process" className="section-y bg-bone text-ink">
      <div className="page">
        <SectionHeading
          tone="light"
          eyebrow="How It Works"
          title="Getting Your Car Serviced Is Simple."
          description="Four steps from the first phone call to driving away."
        />

        <ol className="mt-12 grid gap-px overflow-hidden rounded-2xl bg-ink/10 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {steps.map((step, index) => (
            <li key={step.number} className="bg-bone">
              <Reveal delay={index * 70} className="h-full">
                <div className="group relative h-full overflow-hidden px-6 py-8 lg:px-7 lg:py-10">
                  <span
                    aria-hidden="true"
                    className="bg-accent absolute inset-x-0 top-0 h-[2px] origin-left scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100"
                  />
                  <p className="text-[2.75rem] leading-none font-extrabold tracking-tight text-ink/50 transition-colors duration-500 group-hover:text-accent">
                    {step.number}
                  </p>
                  <h3 className="text-h3 mt-6">{step.title}</h3>
                  <p className="mt-3 text-[0.9375rem] leading-relaxed text-ink-soft">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
