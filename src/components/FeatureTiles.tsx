"use client";

import Image from "next/image";
import AnimateOnScroll from "./AnimateOnScroll";

const features = [
  {
    title: "Freehold Ownership",
    description: "You own your home and land outright — no body corporate, no ongoing fees to a third party.",
    image: "/logos/drone1.jpg",
  },
  {
    title: "2.1 Hectares of Shared Reserve",
    description: "Generous open space owned collectively by residents, with walking tracks, gardens, and room to breathe.",
    image: "/logos/drone2.jpg",
  },
  {
    title: "Secure Storage & Community Hub",
    description: "6,900m² compound with covered campervan and boat storage, workshop and shared facilities.",
    image: "/masterplan.png",
  },
];

export default function FeatureTiles() {
  return (
    <section id="features" className="relative z-10 bg-amazon-100 pt-20 pb-32 md:pt-32 md:pb-48 rounded-b-[3rem]">
      <div className="w-full px-8 sm:px-10 lg:px-16">
        <div className="mb-16 sm:mb-24 md:mb-32">
          <AnimateOnScroll delay={0.08}>
            <p className="overline-accent mb-4 sm:mb-5 text-[0.7rem] sm:text-[0.8125rem]">Key Features</p>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.16}>
            <h2 className="font-hero-tagline font-normal leading-[1.15] text-dark-text text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-3xl 2xl:text-[2.75rem]">
              Why Dunstan Common
            </h2>
          </AnimateOnScroll>
        </div>
        <div className="mx-auto grid w-full max-w-[2000px] grid-cols-1 2xl:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 2xl:gap-20">
          {features.map((feature, index) => (
            <AnimateOnScroll key={feature.title} delay={0.08 + index * 0.08} slideOnly>
              <div className="mx-auto w-full max-w-3xl 2xl:max-w-none rounded-xl overflow-hidden bg-amazon-50 grid grid-cols-1 md:grid-cols-2 md:min-h-[340px] 2xl:min-h-[480px]">
                <div className="flex flex-col justify-start p-5 sm:p-6 md:p-6 lg:p-7 2xl:p-10 order-2 md:order-1">
                  <h3 className="font-hero text-lg sm:text-xl md:text-xl lg:text-2xl 2xl:text-2xl font-normal text-dark-text tracking-tight mb-3 sm:mb-4 md:mb-5 lg:mb-6 2xl:mb-8">
                    {feature.title}
                  </h3>
                  <p className="font-hero text-base text-body-text leading-relaxed">
                    {feature.description}
                  </p>
                </div>
                <div className="p-4 sm:p-5 md:p-5 lg:p-6 2xl:p-8 order-1 md:order-2 min-h-[220px] sm:min-h-[260px] md:min-h-0">
                  <div className="relative w-full h-full min-h-[220px] sm:min-h-[260px] md:min-h-0 md:aspect-[4/5] 2xl:min-h-[400px] rounded-lg overflow-hidden">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 28vw"
                    />
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
