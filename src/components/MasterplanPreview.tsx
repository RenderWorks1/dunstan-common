"use client";

import Image from "next/image";
import Link from "next/link";
import AnimateOnScroll from "./AnimateOnScroll";

export default function MasterplanPreview() {
  return (
    <section id="masterplan" className="bg-green-DEFAULT/15 overflow-hidden py-20 md:py-28 lg:py-32">
      <div className="mx-auto w-full max-w-[1600px] px-5 md:px-10 lg:px-16">
        <div className="text-center mb-12 md:mb-16">
          <AnimateOnScroll delay={0.08}>
            <p className="overline-accent mb-5">Masterplan</p>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.16}>
            <h2 className="font-hero font-normal leading-[1.15] text-dark-text text-2xl sm:text-3xl md:text-4xl mb-12 md:mb-16 lg:text-[2.75rem]">
              46 Homes. 2.1 Hectares of Shared Reserve.
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.24}>
            <p className="mt-4 font-hero text-body-text text-sm leading-relaxed sm:text-base md:text-lg max-w-2xl mx-auto">
              A carefully planned neighbourhood with generous shared spaces,
              secure storage, and homes designed for long-term ease.
            </p>
          </AnimateOnScroll>
        </div>

        <AnimateOnScroll delay={0} slideOnly>
          <div className="rounded-xl overflow-hidden border border-stone">
            <Image
              src="/masterplan.png"
              alt="Dunstan Estate concept masterplan showing 54 lots, shared reserves, and community facilities"
              width={1600}
              height={1200}
              className="w-full h-auto"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1600px"
              priority={false}
            />
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.32}>
          <div className="text-center mt-12">
            <Link
              href="#homes"
              className="inline-flex items-center gap-2 rounded-full border border-charcoal bg-white px-6 py-3 text-sm font-medium text-charcoal transition-colors hover:bg-stone group"
            >
              View The Homes
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
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
