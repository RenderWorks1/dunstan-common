"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const navLinks = [
  { hash: "hero", label: "Home" },
  { path: "/plans", label: "Plans" },
  { hash: "features", label: "Features" },
  { hash: "location", label: "Location" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("hero");
  const pathname = usePathname();
  const baseHref = pathname === "/" ? "" : "/";

  useEffect(() => {
    if (pathname !== "/") return;

    const sections = navLinks
      .filter((link) => link.hash)
      .map((link) => document.getElementById(link.hash!));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -70% 0px", threshold: 0 }
    );

    sections.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);

  return (
    <nav className="fixed top-5 left-0 right-0 z-50 flex justify-center px-4 font-hero">
        <div className="flex w-fit items-center gap-0 rounded-xl bg-green-dark/70 px-4 py-2 shadow-2xl backdrop-blur-xl">
        <Link href="/" className="flex-shrink-0 p-2.5">
          <Image
            src="/logos/favicon-color.png"
            alt="Dunstan Common"
            width={24}
            height={24}
            className="h-6 w-auto"
            priority
          />
        </Link>

        <div className="flex lg:hidden items-center gap-1 pl-2">
          <Link
            href={pathname === "/" ? "#hero" : "/"}
            onClick={() => setMobileOpen(false)}
            className="rounded-lg px-3 py-1.5 text-[13px] font-medium tracking-wide text-white transition-colors duration-200 hover:bg-white/10"
          >
            Home
          </Link>
          <Link
            href="/plans"
            onClick={() => setMobileOpen(false)}
            className="rounded-lg px-3 py-1.5 text-[13px] font-medium tracking-wide text-white transition-colors duration-200 hover:bg-white/10"
          >
            Plans
          </Link>
        </div>

        <div className="hidden lg:flex items-center gap-1 pl-4">
          {navLinks.map((link) => {
            const isActive = link.path
              ? pathname === link.path
              : pathname === "/" && activeSection === link.hash;
            const href = link.path ?? (pathname === "/" ? `#${link.hash}` : `/#${link.hash}`);
            return (
              <Link
                key={link.path ?? link.hash}
                href={href}
                className={`rounded-lg px-4 py-1.5 text-[13px] font-medium tracking-wide transition-colors duration-200 ${
                  isActive ? "bg-white/20 text-white" : "text-white hover:bg-white/10"
                }`}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="ml-auto lg:hidden p-2.5 text-white"
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
            {navLinks.map((link) => {
              const isActive = link.path
                ? pathname === link.path
                : pathname === "/" && activeSection === link.hash;
              const href = link.path ?? (pathname === "/" ? `#${link.hash}` : `/#${link.hash}`);
              return (
                <Link
                  key={link.path ?? link.hash}
                  href={href}
                  onClick={() => setMobileOpen(false)}
                  className={`block rounded-lg px-4 py-2.5 text-[13px] font-medium tracking-wide transition-colors ${
                    isActive ? "bg-white/20 text-white" : "text-white hover:bg-white/10"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}
