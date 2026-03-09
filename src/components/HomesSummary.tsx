"use client";

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
    <section id="homes" className="bg-amazon-100 overflow-hidden pt-20 md:pt-28 lg:pt-32 pb-28 md:pb-36 lg:pb-40">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <AnimateOnScroll delay={0.08}>
              <p className="overline-accent mb-5">The Homes</p>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.16}>
              <h2 className="font-hero-tagline font-normal leading-[1.15] text-dark-text text-2xl sm:text-3xl md:text-4xl mb-12 md:mb-16 lg:text-[2.75rem]">
                Designed for Long-Term Ease
              </h2>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.24}>
              <p className="mt-4 font-hero text-body-text text-sm leading-relaxed sm:text-base md:text-lg">
                Six villa types designed for comfort, convenience, and long-term
                living. From $995,000.
              </p>
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
