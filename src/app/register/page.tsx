import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
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
      <main className="bg-[#f8f6f1]">
        <section className="px-4 pt-32 pb-18 sm:px-6 lg:px-8 lg:pt-40 lg:pb-24">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="font-hero-tagline text-4xl tracking-tight text-neutral-900 sm:text-5xl lg:text-6xl">
              Register for Priority Access
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-neutral-600 sm:text-lg">
              With only 46 homes available, Dunstan Common will be released in
              stages. Register to receive early access to information and first
              selection opportunity.
            </p>
            <div className="mx-auto mt-10 h-px w-24 bg-neutral-300" />
          </div>
        </section>
        <RegisterBenefits />
        <RegisterForm />
      </main>
      <Footer />
    </>
  );
}
