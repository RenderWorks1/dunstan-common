import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import FAQAccordion from "@/components/FAQAccordion";
import Footer from "@/components/Footer";
export const metadata: Metadata = {
  title: "FAQ — Dunstan Common",
  description:
    "Frequently asked questions about Dunstan Common. Freehold ownership, governance, storage, location, and more.",
};

export default function FAQPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about Dunstan Common"
        />
        <FAQAccordion />
      </main>
      <Footer />
    </>
  );
}
