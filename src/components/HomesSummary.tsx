"use client";

import Link from "next/link";
import AnimateOnScroll from "./AnimateOnScroll";

const features = [
  "2 and 3 bedroom single-level homes",
  "120m² to 180m² including garage",
  "Internal access garaging",
  "Mobility-considered layouts",
  "Generous storage throughout",
  "Low-maintenance landscaping",
  "Central Otago materials",
  "Second WC in every home",
];

export default function HomesSummary() {
  return (
    <section id="homes" className="section-who-we-are overflow-hidden py-20 md:py-28 lg:py-32">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <AnimateOnScroll delay={0.08}>
              <p className="overline-accent mb-5">The Homes</p>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.16}>
              <h2 className="font-hero font-normal leading-[1.15] text-dark-text text-2xl sm:text-3xl md:text-4xl mb-12 md:mb-16 lg:text-[2.75rem]">
                Designed for Long-Term Ease
              </h2>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.24}>
              <p className="mt-4 font-hero text-body-text text-sm leading-relaxed sm:text-base md:text-lg">
                Six villa types designed for comfort, convenience, and long-term
                living. From $995,000.
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.32}>
              <Link
                href="#homes"
                className="mt-16 inline-flex items-center gap-2 rounded-full border border-charcoal bg-white px-6 py-3 text-sm font-medium text-charcoal transition-colors hover:bg-stone group"
              >
                Explore The Homes
                <svg
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </AnimateOnScroll>
          </div>

          <AnimateOnScroll delay={0.16}>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {features.map((feature) => (
                <li key={feature} className="flex items-start gap-2">
                  <svg
                    className="mt-1 h-4 w-4 flex-shrink-0 text-green-DEFAULT"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                  <span className="text-sm text-dark-text font-hero">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
