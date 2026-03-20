import Link from "next/link";
import Image from "next/image";

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/#intro", label: "Intro" },
  { href: "/#features", label: "Features" },
  { href: "/#location", label: "Location" },
  { href: "/#masterplan", label: "Masterplan" },
  { href: "/homes", label: "Homes" },
  { href: "/#faq", label: "FAQ" },
  { href: "/register", label: "Register Interest" },
];

interface FooterProps {
  className?: string;
}

export default function Footer({ className }: FooterProps) {
  return (
    <section className={`py-16 md:py-20 lg:py-24 ${className ?? "bg-white"}`}>
      <div className="mx-auto w-[95%] max-w-[1800px]">
        <footer className="rounded-2xl bg-green-dark px-8 py-12 md:px-12 md:py-16 lg:px-16 lg:py-20 shadow-[0_4px_24px_rgba(0,0,0,0.06)] border border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            {/* Brand */}
            <div className="text-left">
              <Image
                src="/logos/wordmark-gold.png"
                alt="Dunstan Common"
                width={640}
                height={160}
                unoptimized
                className="h-9 w-auto mb-4 md:h-10 -ml-3"
              />
              <p className="font-hero text-sm text-white/70 leading-relaxed">
                Independent retirement living in Alexandra, Central Otago.
                Freehold homes from $995,000.
              </p>
            </div>

            {/* Quick links */}
            <div>
              <h4 className="font-hero text-xs font-semibold uppercase tracking-widest text-gold-DEFAULT mb-4">
                Quick links
              </h4>
              <ul className="space-y-3">
                {footerLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/70 hover:text-white transition-colors font-hero"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Location / Get in touch */}
            <div>
              <h4 className="font-hero text-xs font-semibold uppercase tracking-widest text-gold-DEFAULT mb-4">
                Get in touch
              </h4>
              <p className="font-hero text-sm text-white/70 leading-relaxed">
                Dunstan Road, Alexandra
                <br />
                Central Otago, New Zealand
              </p>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <p className="font-hero text-xs text-white/50 uppercase tracking-wider">
              Freehold title · Subject to consent · Resource consent lodged
            </p>
            <div className="flex items-center gap-4">
              <p className="font-hero text-xs text-white/50">
                &copy; {new Date().getFullYear()} Dunstan Common. All rights
                reserved.
              </p>
              <Link
                href="/privacy"
                className="font-hero text-xs text-white/50 hover:text-white transition-colors"
              >
                Privacy
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
}
