import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Introduction from "@/components/Introduction";
import FeatureTiles from "@/components/FeatureTiles";
import LocationSnapshot from "@/components/LocationSnapshot";
import SitePlanSection from "@/components/SitePlanSection";
import MasterplanPreview from "@/components/MasterplanPreview";
import FAQAccordion from "@/components/FAQAccordion";
import Footer from "@/components/Footer";
import Image from "next/image";
export default function Home() {
  return (
    <>
      <Navbar />
      <main className="landing-page font-hero">
        <Hero />
        <Introduction />
        <SitePlanSection />
        <FeatureTiles />
        <section id="landscape" className="relative w-full h-[85vh] -mt-12">
          <Image
            src="/centralotago2.png"
            alt="Central Otago landscape"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </section>
        <LocationSnapshot />
        <MasterplanPreview />
        <FAQAccordion
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about Dunstan Common"
        />
      </main>
      <Footer />
    </>
  );
}
