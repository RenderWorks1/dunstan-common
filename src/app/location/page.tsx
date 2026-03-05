import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import ProximityStats from "@/components/ProximityStats";
import LocationMap from "@/components/LocationMap";
import LifestyleContext from "@/components/LifestyleContext";
import Footer from "@/components/Footer";
import StickyMobileCTA from "@/components/StickyMobileCTA";

export const metadata: Metadata = {
  title: "Location — Dunstan Common",
  description:
    "Dunstan Road, Alexandra — Central Otago. 5 minutes to Alexandra, Clyde, and Dunstan Hospital. Rail Trail frontage, golf course opposite. 300+ days of sunshine.",
};

export default function LocationPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          title="Central Otago Living"
          subtitle="Dunstan Road, Alexandra — five minutes to everything that matters"
        />
        <ProximityStats />
        <LocationMap />
        <LifestyleContext />
      </main>
      <Footer />
      <StickyMobileCTA />
    </>
  );
}
