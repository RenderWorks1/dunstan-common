import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import RegisterBenefits from "@/components/RegisterBenefits";
import RegisterForm from "@/components/RegisterForm";
import Footer from "@/components/Footer";
export const metadata: Metadata = {
  title: "Register Your Interest — Dunstan Common",
  description:
    "Register for priority access to Dunstan Common. Only 46 freehold homes available in Alexandra, Central Otago. Be first to receive detailed plans and pricing.",
};

export default function RegisterPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          title="Register for Priority Access"
          subtitle="With only 46 homes available, Dunstan Common will be released in stages"
        />
        <RegisterBenefits />
        <RegisterForm />
      </main>
      <Footer />
    </>
  );
}
