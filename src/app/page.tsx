import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Introduction from "@/components/Introduction";
import FeatureTiles from "@/components/FeatureTiles";
import LocationSnapshot from "@/components/LocationSnapshot";
import MasterplanPreview from "@/components/MasterplanPreview";
import HomesSummary from "@/components/HomesSummary";
import FAQAccordion from "@/components/FAQAccordion";
import Footer from "@/components/Footer";
import StickyMobileCTA from "@/components/StickyMobileCTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Introduction />
        <FeatureTiles />
        <LocationSnapshot />
        <MasterplanPreview />
        <HomesSummary />
        <FAQAccordion
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about Dunstan Common"
        />
      </main>
      <Footer />
      <StickyMobileCTA />
    </>
  );
}
