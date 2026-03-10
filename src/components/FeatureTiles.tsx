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
        <div className="mb-8 sm:mb-12 md:mb-16">
          <AnimateOnScroll delay={0.08}>
            <h2 className="font-hero-tagline font-normal leading-[1.15] text-dark-text text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem]">
              Key Features
            </h2>
          </AnimateOnScroll>
        </div>
        <div className="mx-auto grid w-full max-w-[2000px] grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8 xl:gap-12 2xl:gap-20 items-stretch">
          {features.map((feature, index) => (
            <AnimateOnScroll key={feature.title} delay={0.08 + index * 0.08} slideOnly className="min-w-0 h-full">
              <div className="min-w-0 w-full h-full rounded-xl overflow-hidden bg-amazon-50 flex flex-col min-h-[200px] sm:min-h-[260px] md:min-h-[320px] lg:min-h-[380px] 2xl:min-h-[480px]">
                <div className="flex-1 flex flex-col justify-start p-5 sm:p-3 md:p-4 lg:p-6 2xl:p-10 order-1">
                  <h3 className="font-hero text-sm md:text-sm lg:text-base 2xl:text-2xl font-normal text-dark-text tracking-tight mb-2 sm:mb-2 md:mb-3 lg:mb-5 2xl:mb-8 leading-tight">
                    {feature.title}
                  </h3>
                  <p className="font-hero text-xs md:text-xs lg:text-sm 2xl:text-base text-body-text leading-relaxed">
                    {feature.description}
                  </p>
                </div>
                <div className="p-5 sm:p-3 md:p-4 lg:p-6 2xl:p-8 order-2 flex-shrink-0">
                  <div className="relative w-full aspect-[16/9] sm:aspect-[16/10] md:aspect-[4/3] rounded-lg overflow-hidden">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      fill
                      className="object-cover"
                      sizes="33vw"
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
