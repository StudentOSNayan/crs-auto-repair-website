"use client";

import { useState, type ReactNode } from "react";
import { business, maps, UNVERIFIED_ANSWER } from "@/lib/business";
import { cn } from "@/lib/cn";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ChevronDownIcon } from "@/components/icons";

type FaqItem = { question: string; answer: ReactNode };

/**
 * Answers marked with `UNVERIFIED_ANSWER` are intentionally generic — they must
 * not be replaced with guesses. Update `business.hours` / `business` when the
 * owner confirms anything else.
 */
const faqs: FaqItem[] = [
  {
    question: "Where is CRS Auto Repair located?",
    answer: (
      <>
        {business.name} is located at {business.address.street}, {business.address.city},{" "}
        {business.address.region} {business.address.postalCode}.{" "}
        <a
          href={maps.directions}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-accent underline decoration-accent/30 underline-offset-4 transition-colors hover:text-accent-bright"
        >
          Get Directions
        </a>
        .
      </>
    ),
  },
  {
    question: "How can I contact CRS Auto Repair?",
    answer: (
      <>
        Call the shop at{" "}
        <a
          href={business.phone.href}
          className="font-semibold text-accent underline decoration-accent/30 underline-offset-4 transition-colors hover:text-accent-bright"
        >
          {business.phone.display}
        </a>{" "}
        during listed hours, or visit the shop at {business.address.street}, San Gabriel.
      </>
    ),
  },
  {
    question: "What services does CRS Auto Repair provide?",
    answer: (
      <>
        {business.name} is publicly listed as a local auto repair shop. The service categories
        shown on this concept site are demo categories pending confirmation. {UNVERIFIED_ANSWER}
      </>
    ),
  },
  {
    question: "Do I need an appointment?",
    answer: UNVERIFIED_ANSWER,
  },
  {
    question: "What vehicles do you service?",
    answer: UNVERIFIED_ANSWER,
  },
  {
    question: "What are your hours?",
    answer: (
      <>
        Publicly listed hours are:
        <ul className="mt-3 space-y-1.5">
          {business.hours.map((entry) => (
            <li key={entry.days} className="flex justify-between gap-6">
              <span>{entry.days}</span>
              <span className="font-semibold text-ink">{entry.time}</span>
            </li>
          ))}
        </ul>
        <span className="mt-3 block">
          Hours can change — please confirm directly with the shop.
        </span>
      </>
    ),
  },
];

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section-y bg-bone text-ink">
      <div className="page grid gap-12 lg:grid-cols-[minmax(0,22rem)_1fr] lg:gap-16">
        <SectionHeading
          tone="light"
          eyebrow="FAQ"
          title="Questions, Answered."
          description="Verified contact details and hours. Anything not yet confirmed is marked clearly."
        />

        <Reveal delay={80}>
          <div className="divide-y divide-ink/10 border-y border-ink/10">
            {faqs.map((item, index) => {
              const isOpen = openIndex === index;
              const buttonId = `faq-trigger-${index}`;
              const panelId = `faq-panel-${index}`;

              return (
                <div key={item.question}>
                  <h3>
                    <button
                      id={buttonId}
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      className="focus-visible:outline-accent-bright group flex w-full items-center justify-between gap-6 py-6 text-left focus-visible:outline-2 focus-visible:-outline-offset-2"
                    >
                      <span
                        className={cn(
                          "text-[1.0625rem] font-bold tracking-tight transition-colors duration-300 sm:text-lg",
                          isOpen ? "text-accent" : "text-ink group-hover:text-ink-soft",
                        )}
                      >
                        {item.question}
                      </span>
                      <span
                        className={cn(
                          "flex size-9 shrink-0 items-center justify-center rounded-full border transition-[transform,border-color,background-color,color] duration-500",
                          isOpen
                            ? "border-accent/40 bg-accent/10 text-accent"
                            : "border-ink/12 text-ink-soft group-hover:border-ink/30",
                        )}
                      >
                        <ChevronDownIcon
                          className={cn(
                            "size-4 transition-transform duration-500 ease-out",
                            isOpen && "rotate-180",
                          )}
                        />
                      </span>
                    </button>
                  </h3>

                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    className={cn(
                      "grid transition-[grid-template-rows,opacity] duration-500 ease-out",
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                    )}
                  >
                    <div className="overflow-hidden">
                      <div className="max-w-2xl pb-7 pr-4 text-[0.9375rem] leading-relaxed text-ink-soft">
                        {item.answer}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
