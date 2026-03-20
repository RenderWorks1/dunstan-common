import type { Metadata } from "next";
import Link from "next/link";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PlanCard from "@/components/PlanCard";
import { plans } from "@/data/plans";

export const metadata: Metadata = {
  title: "Home Plans — Dunstan Common",
  description:
    "Explore the thoughtfully designed villa plans available at Dunstan Common, with floorplans, key specifications, and downloadable information.",
};

export default function PlansPage() {
  return (
    <>
      <Navbar />
      <main className="bg-[#f8f6f1]">
        <section className="px-4 pt-32 pb-18 sm:px-6 lg:px-8 lg:pt-40 lg:pb-24">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="font-hero-tagline text-4xl tracking-tight text-neutral-900 sm:text-5xl lg:text-6xl">
              Home Designs
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-neutral-600 sm:text-lg">
              Explore the thoughtfully designed villas available at Dunstan
              Common. Each home has been designed for comfort, efficiency, and
              easy living.
            </p>
            <div className="mx-auto mt-10 h-px w-24 bg-neutral-300" />
          </div>
        </section>

        <section className="px-4 pb-20 sm:px-6 lg:px-8 lg:pb-24">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {plans.map((plan) => (
                <PlanCard key={plan.name} plan={plan} />
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 pb-24 sm:px-6 lg:px-8 lg:pb-28">
          <div className="mx-auto max-w-5xl rounded-2xl bg-neutral-100 px-8 py-16 text-center sm:px-12">
            <h2 className="font-hero-tagline text-3xl tracking-tight text-neutral-900 sm:text-4xl">
              Request the Full Information Pack
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-neutral-600">
              Download full floorplans, pricing, and availability for Dunstan
              Common.
            </p>
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-neutral-900 px-8 py-3 text-sm font-medium text-white transition hover:bg-neutral-800"
              >
                Request Info Pack
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer className="bg-[#f8f6f1]" />
    </>
  );
}
