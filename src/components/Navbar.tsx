"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

const sectionLinks = [
  { hash: "intro", label: "Intro" },
  { hash: "features", label: "Features" },
  { hash: "location", label: "Location" },
  { hash: "faq", label: "FAQ" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const baseHref = pathname === "/" ? "" : "/";

  return (
    <nav className="fixed top-5 left-0 right-0 z-50 flex justify-center px-4">
        <div className="flex w-fit items-center gap-0 rounded-xl bg-green-dark/70 pl-4 pr-2 py-0.5 shadow-2xl backdrop-blur-xl">
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/logos/logo-color-transparent.png"
            alt="Dunstan Common"
            width={200}
            height={60}
            className="h-12 w-auto"
            priority
          />
        </Link>

        <div className="hidden lg:flex items-center gap-1">
          {sectionLinks.map((link) => (
            <Link
              key={link.hash}
              href={`${baseHref}#${link.hash}`}
              className="rounded-lg px-4 py-1.5 text-[13px] font-medium tracking-wide text-white transition-colors duration-200 hover:bg-white/10"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex items-center pl-5">
          <Link
            href="/register"
            className="inline-flex items-center justify-center rounded-lg bg-white px-4 py-2 text-[13px] font-semibold tracking-wide text-green-dark transition-all duration-200 hover:bg-white/90"
          >
            Register Your Interest
          </Link>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="ml-auto lg:hidden p-2 text-white"
          aria-label="Toggle menu"
        >
          <svg
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {mobileOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <div className="absolute top-full left-4 right-4 mt-2 rounded-xl bg-green-dark/95 px-4 py-4 shadow-2xl backdrop-blur-md lg:hidden">
          <div className="space-y-1">
            {sectionLinks.map((link) => (
              <Link
                key={link.hash}
                href={`${baseHref}#${link.hash}`}
                onClick={() => setMobileOpen(false)}
                className="block rounded-lg px-4 py-2.5 text-[13px] font-medium tracking-wide text-white transition-colors hover:bg-white/10"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/register"
              onClick={() => setMobileOpen(false)}
              className="mt-2 block w-full rounded-lg bg-white px-5 py-2.5 text-center text-[13px] font-semibold tracking-wide text-green-dark transition-all hover:bg-white/90"
            >
              Register Your Interest
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
