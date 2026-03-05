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
    <section id="features" className="bg-green-DEFAULT/15 py-20 md:py-32">
      <div className="w-full px-8 sm:px-10 lg:px-16">
        <div className="mb-32">
          <AnimateOnScroll delay={0.08}>
            <p className="overline-accent mb-5">Key Features</p>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.16}>
            <h2 className="font-hero font-normal leading-[1.15] text-dark-text text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem]">
              Why Dunstan Common
            </h2>
          </AnimateOnScroll>
        </div>
        <div className="mx-auto grid w-full max-w-[2000px] grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="rounded-xl overflow-hidden bg-offwhite grid grid-cols-1 md:grid-cols-2 md:min-h-[480px]"
            >
              <div className="flex flex-col justify-start p-8 md:p-10 order-2 md:order-1">
                <AnimateOnScroll delay={0.08 + index * 0.1}>
                  <h3 className="font-hero text-2xl md:text-3xl lg:text-4xl font-normal text-dark-text tracking-tight mb-10">
                    {feature.title}
                  </h3>
                </AnimateOnScroll>
                <AnimateOnScroll delay={0.16 + index * 0.1}>
                  <p className="font-hero text-base md:text-lg text-body-text leading-relaxed">
                    {feature.description}
                  </p>
                </AnimateOnScroll>
              </div>
              <div className="p-6 md:p-8 order-1 md:order-2 min-h-[320px] md:min-h-0">
                <AnimateOnScroll delay={index * 0.08} slideOnly>
                  <div className="relative w-full h-full min-h-[320px] md:min-h-[400px] md:aspect-[4/5] rounded-lg overflow-hidden">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 28vw"
                    />
                  </div>
                </AnimateOnScroll>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
