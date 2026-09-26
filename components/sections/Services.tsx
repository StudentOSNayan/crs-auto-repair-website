import type { SVGProps } from "react";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  BrakeIcon,
  DiagnosticsIcon,
  ElectricalIcon,
  EngineIcon,
  GaugeIcon,
  ToolIcon,
} from "@/components/icons";

/**
 * DEMO SERVICE CATEGORIES — not verified with CRS Auto Repair.
 * Copy is intentionally category-level (no specific procedures, pricing,
 * turnaround times or guarantees). Confirm the real service list with the
 * owner, then edit this array and remove the `pendingConfirmation` note.
 */
const services: Array<{
  title: string;
  description: string;
  Icon: (props: SVGProps<SVGSVGElement>) => React.ReactElement;
}> = [
  {
    title: "Routine Maintenance",
    description:
      "Scheduled maintenance and routine vehicle care based on your vehicle's needs.",
    Icon: GaugeIcon,
  },
  {
    title: "Brake Service",
    description: "Brake inspections and brake system service for everyday driving.",
    Icon: BrakeIcon,
  },
  {
    title: "Vehicle Diagnostics",
    description: "Diagnostic checks to help identify the source of a vehicle issue.",
    Icon: DiagnosticsIcon,
  },
  {
    title: "Engine & Mechanical",
    description: "Engine and mechanical repair work carried out by the shop.",
    Icon: EngineIcon,
  },
  {
    title: "Electrical",
    description: "Electrical system checks and repairs for modern vehicles.",
    Icon: ElectricalIcon,
  },
  {
    title: "General Auto Repair",
    description: "General automotive repair covering a range of everyday vehicle needs.",
    Icon: ToolIcon,
  },
];

export function Services() {
  return (
    <section id="services" className="section-y bg-bone-bright text-ink">
      <div className="page">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            tone="light"
            eyebrow="Services"
            title="Auto Care, Made Simple."
            description="Clear, professional automotive service for everyday vehicle needs."
          />

          <Reveal delay={100}>
            <p className="inline-flex items-center gap-2 rounded-full border border-ink/12 bg-ink/[0.03] px-4 py-2 text-xs font-medium text-muted">
              <span className="bg-accent/70 size-1.5 rounded-full" aria-hidden="true" />
              Demo categories — pending owner confirmation
            </p>
          </Reveal>
        </div>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {services.map((service, index) => (
            <li key={service.title}>
              <Reveal delay={index * 60} className="h-full">
                <article className="group relative h-full overflow-hidden rounded-2xl border border-ink/10 bg-white p-7 transition-[transform,border-color,box-shadow] duration-500 ease-out hover:-translate-y-1 hover:border-ink/25 hover:shadow-[0_30px_60px_-45px_rgba(20,21,26,0.55)]">
                  <span
                    aria-hidden="true"
                    className="bg-accent absolute inset-x-0 top-0 h-[2px] origin-left scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100"
                  />

                  <span className="inline-flex size-12 items-center justify-center rounded-xl border border-ink/10 bg-ink/[0.03] text-ink transition-colors duration-500 group-hover:border-accent/30 group-hover:bg-accent/[0.06] group-hover:text-accent">
                    <service.Icon className="size-6" />
                  </span>

                  <h3 className="text-h3 mt-6">{service.title}</h3>
                  <p className="mt-3 text-[0.9375rem] leading-relaxed text-ink-soft">
                    {service.description}
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
