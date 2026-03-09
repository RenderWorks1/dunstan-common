"use client";

import Image from "next/image";
import AnimateOnScroll from "./AnimateOnScroll";

export default function Masterplan() {
  return (
    <section className="bg-amazon-50 overflow-hidden py-20 md:py-28 lg:py-32">
      <div className="mx-auto w-full max-w-[1600px] px-5 md:px-10 lg:px-16">
        <div className="text-center mb-12 md:mb-16">
          <AnimateOnScroll delay={0.08}>
            <p className="overline-accent mb-5">Masterplan</p>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.16}>
            <h2 className="font-hero-tagline font-normal leading-[1.15] text-dark-text text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem]">
              The Full Picture
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.24}>
            <p className="mt-4 font-hero text-body-text text-sm leading-relaxed sm:text-base md:text-lg max-w-2xl mx-auto">
              46 residential lots, 8 reserve and facility lots, generous shared
              reserves, and a secure storage compound.
            </p>
          </AnimateOnScroll>
        </div>

        <AnimateOnScroll delay={0} slideOnly>
          <div className="relative rounded-xl overflow-hidden border border-amazon-50 h-[80vh] w-full bg-amazon-50">
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

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="bg-cream rounded-lg p-4 border border-stone">
            <p className="font-hero text-2xl text-dark-text">46</p>
            <p className="text-xs text-body-text mt-1 font-hero">
              Residential Lots
            </p>
          </div>
          <div className="bg-cream rounded-lg p-4 border border-stone">
            <p className="font-hero text-2xl text-dark-text">8</p>
            <p className="text-xs text-body-text mt-1 font-hero">
              Reserve &amp; Facility Lots
            </p>
          </div>
          <div className="bg-cream rounded-lg p-4 border border-stone">
            <p className="font-hero text-2xl text-dark-text">2.1ha</p>
            <p className="text-xs text-body-text mt-1 font-hero">Shared Reserve</p>
          </div>
          <div className="bg-cream rounded-lg p-4 border border-stone">
            <p className="font-hero text-2xl text-dark-text">6,900m²</p>
            <p className="text-xs text-body-text mt-1 font-hero">
              Storage Compound
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
