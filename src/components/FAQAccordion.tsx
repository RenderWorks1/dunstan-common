"use client";

import { useState } from "react";
import AnimateOnScroll from "./AnimateOnScroll";

const faqs = [
  {
    question: "Is Dunstan Common a retirement village?",
    answer:
      "No. Dunstan Common is a freehold neighbourhood — not a retirement village. There is no operator, no licence-to-occupy arrangement, and no deferred management fees. You own your home and land outright with a freehold title, and you share ownership of the common areas with other residents through an Incorporated Society.",
  },
  {
    question: "Do I own my home?",
    answer:
      "Yes. Every home at Dunstan Common comes with a freehold title (fee simple). You own your home and the land it sits on outright. You also hold a 1/46th undivided share in the common reserve areas. This is genuine ownership — not a licence-to-occupy or leasehold arrangement.",
  },
  {
    question: "Is this a licence-to-occupy model?",
    answer:
      "No. Dunstan Common is entirely freehold. There is no licence-to-occupy, no right-to-occupy, and no leasehold. You purchase your home outright and hold the title. There are no deferred management fees or exit fees.",
  },
  {
    question: "How are the common areas managed?",
    answer:
      "The common areas — including the 2.1 hectares of shared reserve and the storage compound — are managed by a resident-owned Incorporated Society. Every homeowner is a member and has a voice in how the shared spaces are maintained and governed. This is not a body corporate.",
  },
  {
    question: "Will there be ongoing levies?",
    answer:
      "Yes, there will be modest levies to cover the maintenance and upkeep of shared areas and facilities, similar to any well-maintained neighbourhood. The levy amounts will be set by the Incorporated Society — meaning residents decide collectively what is fair and appropriate. There are no deferred management fees.",
  },
  {
    question: "Is the community gated?",
    answer:
      "The storage compound is secure, but the neighbourhood itself is designed as an open, welcoming community — not a gated estate. The reserves and streetscapes are designed to feel connected to the surrounding area, including the Rail Trail and golf course.",
  },
  {
    question: "What is included in the storage compound?",
    answer:
      "The 6,900m² storage compound includes approximately 1,200m² of covered sheds for campervans, boats, trailers, and vehicles. It also includes workshop and hobby areas, gym space, a library, and communal facilities. The compound is secure and available exclusively to Dunstan Common residents.",
  },
  {
    question: "Where is Dunstan Common located?",
    answer:
      "Dunstan Common is located on Dunstan Road in Alexandra, Central Otago, New Zealand. It sits opposite the Alexandra Golf Course and has frontage to the Central Otago Rail Trail. Alexandra township and Clyde are each about 5 minutes away, and Dunstan Hospital is also within a 5-minute drive.",
  },
  {
    question: "When will homes be released for sale?",
    answer:
      "Homes will be released in stages. Resource consent has been lodged and is progressing towards approval. Register your interest now to receive priority access to detailed information, invitations to private site meetings, and the first opportunity to select available homes.",
  },
];

interface FAQAccordionProps {
  title?: string;
  subtitle?: string;
}

export default function FAQAccordion({ title, subtitle }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="section-who-we-are overflow-hidden py-20 md:py-28 lg:py-32">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {(title || subtitle) && (
          <div className="mb-12 text-center">
            <AnimateOnScroll delay={0.08}>
              <p className="overline-accent mb-5">FAQ</p>
            </AnimateOnScroll>
            {title && (
              <AnimateOnScroll delay={0.16}>
                <h2 className="font-hero font-normal leading-[1.15] text-dark-text text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem]">
                  {title}
                </h2>
              </AnimateOnScroll>
            )}
            {subtitle && (
              <AnimateOnScroll delay={0.24}>
                <p className="mt-4 font-hero text-body-text text-sm leading-relaxed sm:text-base md:text-lg">
                  {subtitle}
                </p>
              </AnimateOnScroll>
            )}
          </div>
        )}
        <div className="divide-y divide-stone">
          {faqs.map((faq, index) => (
            <AnimateOnScroll key={index} delay={0.04 + index * 0.03}>
              <div>
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="flex w-full items-center justify-between py-6 text-left"
                >
                  <span className="font-hero text-base font-semibold text-dark-text pr-4">
                    {faq.question}
                  </span>
                  <svg
                    className={`h-5 w-5 flex-shrink-0 text-green-DEFAULT transition-transform duration-200 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m19.5 8.25-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </button>
                {openIndex === index && (
                  <div className="pb-6">
                    <p className="font-hero text-body-text text-sm leading-relaxed sm:text-base">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
