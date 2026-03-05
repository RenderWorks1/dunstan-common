"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import AnimateOnScroll from "./AnimateOnScroll";

export default function Introduction() {
  const imageRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imageRef.current) return;
    const rect = imageRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: Math.max(-8, Math.min(8, x * 16)), y: Math.max(-8, Math.min(8, y * 16)) });
  };

  const handleMouseLeave = () => setTilt({ x: 0, y: 0 });

  return (
    <section id="intro" className="section-who-we-are overflow-hidden py-20 md:py-28 lg:py-32">
      <div className="flex flex-col lg:flex-row lg:min-h-[calc(100vh-5rem)]">
        {/* Left column - image, half screen */}
        <div className="px-12 py-14 md:px-16 md:py-16 lg:px-20 lg:py-24 lg:w-[50vw] lg:shrink-0">
          <AnimateOnScroll delay={0} slideOnly>
            <div
              ref={imageRef}
              className="relative h-[80vh] w-full overflow-hidden rounded-xl"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
            <div
              className="relative h-full w-full transition-transform duration-150 ease-out"
              style={{
                transform: `translate(${tilt.x}px, ${tilt.y}px)`,
              }}
            >
              <Image
                src="/logos/drone1.jpg"
                alt="Aerial view of Dunstan Common site, Alexandra"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
          </AnimateOnScroll>
        </div>

        {/* Right column - text, half screen */}
        <div className="flex-1 lg:min-w-0 flex items-center">
          <div className="w-full px-5 py-12 md:px-10 md:py-16 lg:px-12 lg:py-0 lg:max-w-3xl">
            <AnimateOnScroll delay={0.08}>
              <p className="overline-accent mb-5">
                Freehold homes for independent retirees aged 60+ · From $995,000
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.16}>
              <h2 className="mb-12 font-hero font-normal leading-[1.15] text-dark-text text-2xl sm:text-3xl md:text-4xl md:mb-16 lg:text-[2.75rem]">
                Independent Retirement Living in Alexandra, Central Otago
              </h2>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.24}>
              <div className="space-y-5 font-hero text-body-text text-sm leading-relaxed sm:text-base md:text-lg">
                <p>
                  Dunstan Common is a 46-home freehold neighbourhood on Dunstan
                  Road, Alexandra — opposite the golf course, alongside the
                  Central Otago Rail Trail. Every home comes with a freehold
                  title and a share in over two hectares of landscaped reserve.
                  This is not a retirement village. It&apos;s a neighbourhood
                  built on practical independence.
                </p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.32}>
              <p className="mt-5 text-xs text-slate/70 font-sans">
                Subject to consent. Resource consent lodged and progressing
                towards approval.
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.4}>
              <Link
                href="#homes"
                className="mt-16 inline-flex items-center gap-2 rounded-full border border-charcoal bg-white px-6 py-3 text-sm font-medium text-charcoal transition-colors hover:bg-stone group"
              >
                Explore The Homes
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
        </div>
      </div>
    </section>
  );
}
