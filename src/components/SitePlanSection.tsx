"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import AnimateOnScroll from "./AnimateOnScroll";
import InteractiveSitePlan from "./InteractiveSitePlan";

export default function SitePlanSection() {
  const router = useRouter();
  return (
    <section className="bg-amazon-50 overflow-hidden py-20 md:py-28 lg:py-32">
      <div className="mx-auto w-full max-w-[1600px] px-4 md:px-10 lg:px-16">
        <div className="mb-8 text-center md:mb-14">
          <AnimateOnScroll delay={0.08}>
            <p className="overline-accent mb-5">Site Plan</p>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.16}>
            <h2 className="font-hero-tagline mb-8 text-2xl font-normal leading-[1.15] text-dark-text sm:text-3xl md:mb-10 md:text-4xl lg:text-[2.75rem]">
              Explore The Neighbourhood Layout
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.24}>
            <p className="mx-auto mt-4 max-w-3xl font-hero text-sm leading-relaxed text-body-text sm:text-base md:text-lg">
              Hover on desktop or tap on mobile to explore each available home
              position within the Dunstan Common masterplan.
            </p>
          </AnimateOnScroll>
        </div>

        <AnimateOnScroll delay={0} slideOnly>
          <div className="mx-auto w-[min(90vw,100%)] max-w-full overflow-hidden">
            <InteractiveSitePlan
              imageSrc="/masterplanwoutboxes.png"
              imageAlt="Interactive Dunstan Common site plan"
              onSelectHotspot={() => router.push("/plans")}
            />
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.2}>
          <div className="mt-10 flex justify-center md:mt-14">
            <Link
              href="/plans"
              className="inline-flex items-center justify-center rounded-full bg-neutral-900 px-8 py-3 text-sm font-medium text-white transition hover:bg-neutral-800"
            >
              View floor plans
            </Link>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
