import Link from "next/link";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/logos/herobg3.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-charcoal/40" />

      <div className="relative z-10 mx-auto w-full max-w-[1600px] px-4 sm:px-6 lg:px-8 text-center py-20 mt-16">
        <h1 className="hero-title text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal tracking-wide uppercase drop-shadow-[0_2px_20px_rgba(0,0,0,0.5)]">
          Dunstan Common
        </h1>

        <p className="hero-tagline mt-6 text-lg md:text-xl font-light italic text-white tracking-normal drop-shadow-[0_1px_10px_rgba(0,0,0,0.4)]">
          Own your home. Share the common.
        </p>

        <Link
          href="/register"
          className="mt-20 inline-flex items-center justify-center rounded-xl bg-green-dark/70 px-8 py-4 text-base font-semibold text-white shadow-2xl backdrop-blur-xl transition-colors hover:bg-green-dark/80"
        >
          Register Your Interest
        </Link>
      </div>
    </section>
  );
}
