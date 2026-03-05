import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import ReserveLand from "@/components/ReserveLand";
import StorageHub from "@/components/StorageHub";
import Governance from "@/components/Governance";
import Footer from "@/components/Footer";
import StickyMobileCTA from "@/components/StickyMobileCTA";

export const metadata: Metadata = {
  title: "The Common — Dunstan Common",
  description:
    "2.1 hectares of resident-owned reserve land, secure storage compound, workshops, and community facilities. Governed by a resident-owned Incorporated Society.",
};

export default function TheCommonPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          title="Shared Space, Shared Stewardship"
          subtitle="Over two hectares of resident-owned reserve, secure storage, and community facilities"
        />
        <ReserveLand />
        <StorageHub />
        <Governance />
      </main>
      <Footer />
      <StickyMobileCTA />
    </>
  );
}
