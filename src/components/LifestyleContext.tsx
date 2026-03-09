export default function LifestyleContext() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="font-sans text-sm font-semibold uppercase tracking-widest text-slate mb-3">
              Lifestyle
            </p>
            <h2 className="font-hero-tagline text-3xl md:text-4xl font-normal text-charcoal">
              300+ Days of Sunshine
            </h2>
            <p className="mt-4 text-base text-slate leading-relaxed font-sans">
              Central Otago is one of New Zealand&apos;s most settled and sunlit
              regions. Alexandra offers flat terrain, clear skies, and a relaxed
              pace of life — with world-class cycling, golf, vineyards, and
              outdoor recreation all within easy reach.
            </p>
            <p className="mt-4 text-base text-slate leading-relaxed font-sans">
              It&apos;s a place where independence and community come naturally. A
              settled retirement destination for people who want to stay active,
              connected, and comfortable.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-amazon-100 rounded-lg p-6 border border-amazon-200 text-center">
              <p className="font-serif text-3xl text-green-DEFAULT">300+</p>
              <p className="text-xs text-slate mt-1 font-sans">
                Days of Sunshine
              </p>
            </div>
            <div className="bg-amazon-100 rounded-lg p-6 border border-amazon-200 text-center">
              <p className="font-serif text-3xl text-green-DEFAULT">Flat</p>
              <p className="text-xs text-slate mt-1 font-sans">Terrain</p>
            </div>
            <div className="bg-amazon-100 rounded-lg p-6 border border-amazon-200 text-center">
              <p className="font-serif text-3xl text-green-DEFAULT">Golf</p>
              <p className="text-xs text-slate mt-1 font-sans">
                Course Opposite
              </p>
            </div>
            <div className="bg-amazon-100 rounded-lg p-6 border border-amazon-200 text-center">
              <p className="font-serif text-3xl text-green-DEFAULT">Rail</p>
              <p className="text-xs text-slate mt-1 font-sans">
                Trail Frontage
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
