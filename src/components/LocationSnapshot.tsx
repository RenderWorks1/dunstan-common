"use client";

import Link from "next/link";
import AnimateOnScroll from "./AnimateOnScroll";

const proximityItems = [
  { label: "Alexandra township", distance: "5 min" },
  { label: "Clyde township", distance: "5 min" },
  { label: "Dunstan Hospital", distance: "5 min" },
  { label: "Rail Trail frontage", distance: "Direct" },
  { label: "Golf course opposite", distance: "Across the road" },
];

export default function LocationSnapshot() {
  return (
    <section id="location" className="section-who-we-are flex min-h-screen items-center overflow-hidden py-20 md:py-28 lg:py-32">
      <div className="mx-auto w-full max-w-[1600px] px-5 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
          {/* Text column */}
          <div className="pl-0 pr-0 lg:pl-8 lg:pr-14">
            <AnimateOnScroll delay={0.08}>
              <p className="overline-accent mb-5">Location</p>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.16}>
              <h2 className="font-hero font-normal leading-[1.15] text-dark-text text-2xl sm:text-3xl md:text-4xl mb-12 md:mb-16 lg:text-[2.75rem]">
                Central Otago Living
              </h2>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.24}>
              <p className="mt-4 font-hero text-body-text text-sm leading-relaxed sm:text-base md:text-lg">
                Dunstan Common sits on Dunstan Road, Alexandra — one of Central
                Otago&apos;s most connected and sunlit locations. 300+ days of
                sunshine annually, flat terrain, and everything you need within
                five minutes.
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.3}>
              <ul className="mt-8 space-y-4">
                {proximityItems.map((item) => (
                  <li key={item.label} className="flex items-center gap-3">
                    <span className="flex-shrink-0 h-8 w-8 rounded-full bg-green-DEFAULT/10 flex items-center justify-center">
                      <svg
                        className="h-4 w-4 text-green-DEFAULT"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                        />
                      </svg>
                    </span>
                    <span className="font-hero text-dark-text text-sm sm:text-base">
                      <strong className="font-semibold">{item.distance}</strong>{" "}
                      — {item.label}
                    </span>
                  </li>
                ))}
              </ul>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.38}>
              <Link
                href="#location"
                className="mt-16 inline-flex items-center gap-2 rounded-full border border-charcoal bg-white px-6 py-3 text-sm font-medium text-charcoal transition-colors hover:bg-stone group"
              >
                Explore Location
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

          {/* Map column */}
          <AnimateOnScroll delay={0} slideOnly>
            <div className="rounded-xl overflow-hidden border border-stone">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5576.897898768!2d169.36!3d-45.265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa82b13c24ac7d09f%3A0x1d4a0d67aab27b1e!2sDunstan%20Rd%2C%20Alexandra%209320%2C%20New%20Zealand!5e0!3m2!1sen!2snz!4v1709000000000"
                width="100%"
                height="680"
                style={{ border: 0, display: "block" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Dunstan Common location map"
              />
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
