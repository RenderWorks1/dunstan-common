import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import VillaTypes from "@/components/VillaTypes";
import DesignFeatures from "@/components/DesignFeatures";
import Masterplan from "@/components/Masterplan";
import Footer from "@/components/Footer";
import StickyMobileCTA from "@/components/StickyMobileCTA";

export const metadata: Metadata = {
  title: "The Homes — Dunstan Common",
  description:
    "Six villa types, 2–3 bedrooms, single-level homes from $995,000. Designed for long-term ease with internal garaging, mobility-considered layouts, and Central Otago materials.",
};

export default function HomesPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          title="Designed for Long-Term Ease"
          subtitle="2 and 3 bedroom single-level freehold homes from $995,000"
        />
        <VillaTypes />
        <DesignFeatures />
        <Masterplan />
      </main>
      <Footer />
      <StickyMobileCTA />
    </>
  );
}
