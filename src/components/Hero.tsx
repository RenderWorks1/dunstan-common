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
        <source src="/newherobg.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-charcoal/40" />

      <div className="relative z-10 mx-auto w-full max-w-[1600px] px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center min-h-screen pt-24">
        <h1 className="hero-title text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal tracking-wide drop-shadow-[0_2px_20px_rgba(0,0,0,0.5)]">
          Dunstan Common
        </h1>

        <p className="hero-subtitle mt-8 text-base sm:text-xl md:text-2xl lg:text-3xl font-extralight tracking-wide text-white drop-shadow-[0_1px_10px_rgba(0,0,0,0.4)]">
          Independent Retirement Living
        </p>

        <Link
          href="/register"
          className="mt-36 inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 text-base font-semibold tracking-wide text-green-dark transition-colors hover:bg-white/90"
        >
          Register Your Interest
        </Link>
      </div>
    </section>
  );
}
