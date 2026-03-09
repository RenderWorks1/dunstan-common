"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, type ReactNode } from "react";

import type { Plan } from "@/data/plans";

const PLACEHOLDER_FLOORPLAN = "/images/floorplans/placeholder.svg";

type PlanCardProps = {
  plan: Plan;
};

type SpecItemProps = {
  icon: ReactNode;
  label: string;
};

function SpecItem({ icon, label }: SpecItemProps) {
  return (
    <li className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-neutral-50 px-3 py-2 text-sm text-neutral-600">
      <span className="text-neutral-800">{icon}</span>
      <span>{label}</span>
    </li>
  );
}

function BedIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        d="M3 10.5V19m0-5h18m0 0v5m0-8.5V19M7 10.5V8.75A1.75 1.75 0 0 1 8.75 7h2.5A1.75 1.75 0 0 1 13 8.75v1.75m-6 0h12a2 2 0 0 1 2 2V14H3v-1.5a2 2 0 0 1 2-2Z"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
}

function BathIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        d="M4 12.5h16m-13-4V7.25A2.25 2.25 0 0 1 9.25 5h1.5A2.25 2.25 0 0 1 13 7.25V8.5m-9 4v1.25A4.25 4.25 0 0 0 8.25 18h7.5A4.25 4.25 0 0 0 20 13.75V12.5m-1 5.5v1.5M5 18v1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
}

function GarageIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        d="m3.75 10.5 8.25-6 8.25 6V20a.75.75 0 0 1-.75.75h-15A.75.75 0 0 1 3.75 20v-9.5Zm4.5 10.25v-5.5h7.5v5.5m-7.5-7.75h7.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
}

export default function PlanCard({ plan }: PlanCardProps) {
  const [imageSrc, setImageSrc] = useState(plan.floorplan);

  const specs = [
    plan.beds
      ? { key: "beds", label: `${plan.beds} ${plan.beds === 1 ? "Bed" : "Beds"}`, icon: <BedIcon /> }
      : null,
    plan.baths
      ? {
          key: "baths",
          label: `${plan.baths} ${plan.baths === 1 ? "Bath" : "Baths"}`,
          icon: <BathIcon />,
        }
      : null,
    plan.garage
      ? { key: "garage", label: `${plan.garage} Garage`, icon: <GarageIcon /> }
      : null,
  ].filter(Boolean) as Array<{ key: string; label: string; icon: ReactNode }>;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative aspect-[4/3] overflow-hidden border-b border-neutral-200 bg-neutral-100">
        <Image
          src={imageSrc}
          alt={`Floorplan for ${plan.name}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition duration-500 group-hover:scale-[1.02]"
          onError={() => {
            if (imageSrc !== PLACEHOLDER_FLOORPLAN) {
              setImageSrc(PLACEHOLDER_FLOORPLAN);
            }
          }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-white/10" />
        <span className="absolute right-4 top-4 rounded-full border border-white/70 bg-white/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-neutral-700 shadow-sm backdrop-blur">
          {plan.name}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div>
          <h3 className="font-hero-tagline text-2xl tracking-tight text-neutral-900">
            {plan.name}
          </h3>

          {specs.length > 0 && (
            <ul className="mt-5 flex flex-wrap gap-3">
              {specs.map((spec) => (
                <SpecItem key={spec.key} icon={spec.icon} label={spec.label} />
              ))}
            </ul>
          )}

          {plan.features.length > 0 && (
            <ul className="mt-6 space-y-2 text-sm leading-6 text-neutral-600">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-neutral-400" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="mt-8 grid grid-cols-2 gap-3">
          <Link
            href={plan.floorplan}
            className="inline-flex items-center justify-center rounded-full bg-neutral-900 px-4 py-3 text-sm font-medium text-white transition hover:bg-neutral-800"
          >
            View Floorplan
          </Link>
          <Link
            href={plan.pdf}
            className="inline-flex items-center justify-center rounded-full border border-neutral-300 bg-white px-4 py-3 text-sm font-medium text-neutral-700 transition hover:border-neutral-400 hover:bg-neutral-50"
          >
            Download PDF
          </Link>
        </div>
      </div>
    </article>
  );
}
