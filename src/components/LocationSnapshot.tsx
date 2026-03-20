"use client";

import AnimateOnScroll from "./AnimateOnScroll";

const proximityItems = [
  {
    label: "Alexandra township",
    distance: "5 min",
    icon: (
      <svg
        className="h-5 w-5 text-salomie-300"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 21h18"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5 21V8l7-4 7 4v13"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12h.01M15 12h.01M9 16h.01M15 16h.01"
        />
      </svg>
    ),
  },
  {
    label: "Clyde township",
    distance: "5 min",
    icon: (
      <svg
        className="h-5 w-5 text-salomie-300"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 21h16"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 21V10l6-4 6 4v11"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10 21v-5h4v5"
        />
      </svg>
    ),
  },
  {
    label: "Dunstan Hospital",
    distance: "5 min",
    icon: (
      <svg
        className="h-5 w-5 text-salomie-300"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 5h6v4h4v6h-4v4H9v-4H5V9h4V5Z"
        />
      </svg>
    ),
  },
  {
    label: "Rail Trail frontage",
    distance: "Direct",
    icon: (
      <svg
        className="h-5 w-5 text-salomie-300"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 19 18 5"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M7.5 7.5h3v3M13.5 13.5h3v3"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5 21h14"
        />
      </svg>
    ),
  },
  {
    label: "Golf course opposite",
    distance: "Across the road",
    icon: (
      <svg
        className="h-5 w-5 text-salomie-300"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 21V4"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m6 5 9 3-9 3V5Z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 21h8"
        />
      </svg>
    ),
  },
];

export default function LocationSnapshot() {
  return (
    <section id="location" className="bg-white flex min-h-screen items-center overflow-hidden py-20 md:py-28 lg:py-32">
      <div className="mx-auto w-full max-w-[1600px] px-8 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
          {/* Text column */}
          <div className="pl-0 pr-0 lg:pl-8 lg:pr-14">
            <AnimateOnScroll delay={0.08}>
              <p className="overline-accent mb-5">Location</p>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.16}>
              <h2 className="font-hero-tagline font-normal leading-[1.15] text-dark-text text-2xl sm:text-3xl md:text-4xl mb-12 md:mb-16 lg:text-[2.75rem]">
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
                    <span className="flex-shrink-0 flex items-center justify-center">
                      {item.icon}
                    </span>
                    <span className="font-hero text-dark-text text-sm sm:text-base">
                      <strong className="font-semibold">{item.distance}</strong>{" "}
                      — {item.label}
                    </span>
                  </li>
                ))}
              </ul>
            </AnimateOnScroll>
          </div>

          {/* Map column */}
          <AnimateOnScroll delay={0} slideOnly>
            <div className="rounded-xl overflow-hidden border border-stone h-[280px] md:h-[400px] lg:h-[680px] mb-8 md:mb-0">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5576.897898768!2d169.36!3d-45.265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa82b13c24ac7d09f%3A0x1d4a0d67aab27b1e!2sDunstan%20Rd%2C%20Alexandra%209320%2C%20New%20Zealand!5e0!3m2!1sen!2snz!4v1709000000000"
                width="100%"
                height="100%"
                className="h-full w-full"
                style={{
                  border: 0,
                  display: "block",
                  filter: "grayscale(30%) saturate(75%) hue-rotate(-12deg)",
                }}
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
