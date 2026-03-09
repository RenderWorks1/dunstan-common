interface PageHeroProps {
  title: string;
  subtitle?: string;
}

export default function PageHero({ title, subtitle }: PageHeroProps) {
  return (
    <section className="bg-green-DEFAULT pt-28 pb-16 md:pt-32 md:pb-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="font-hero-tagline text-4xl md:text-5xl font-light text-white tracking-wide">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 text-lg text-white/80 font-sans max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
