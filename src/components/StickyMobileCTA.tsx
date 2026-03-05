"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function StickyMobileCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.5);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-green-DEFAULT/95 backdrop-blur-sm border-t border-green-light p-3">
      <Link
        href="/register"
        className="block w-full text-center rounded-md bg-gold-DEFAULT px-6 py-3 text-sm font-semibold text-charcoal hover:bg-gold-dark transition-colors"
      >
        Register Your Interest
      </Link>
    </div>
  );
}
