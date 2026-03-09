"use client";

import Image from "next/image";
import AnimateOnScroll from "./AnimateOnScroll";

export default function MasterplanPreview() {
  return (
    <section id="masterplan" className="bg-amazon-50 overflow-hidden py-8 md:py-28 lg:py-32">
      <div className="mx-auto w-full max-w-[1600px] px-4 md:px-10 lg:px-16">
        <div className="text-center mb-6 md:mb-16">
          <AnimateOnScroll delay={0.08}>
            <p className="overline-accent mb-5">Masterplan</p>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.16}>
            <h2 className="font-hero-tagline font-normal leading-[1.15] text-dark-text text-2xl sm:text-3xl md:text-4xl mb-8 md:mb-16 lg:text-[2.75rem]">
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
          <div className="relative rounded-xl overflow-hidden border border-amazon-50 mb-6 md:mb-24 h-[55vh] md:h-[80vh] w-full bg-amazon-50">
            <Image
              src="/siteplan2.jpg"
              alt="Dunstan Estate concept masterplan showing 54 lots, shared reserves, and community facilities"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
              priority={false}
            />
          </div>
        </AnimateOnScroll>

      </div>
    </section>
  );
}
