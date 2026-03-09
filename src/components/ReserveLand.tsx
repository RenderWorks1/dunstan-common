export default function ReserveLand() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="font-sans text-sm font-semibold uppercase tracking-widest text-slate mb-3">
              Shared Reserve
            </p>
            <h2 className="font-hero-tagline text-3xl md:text-4xl font-normal text-charcoal">
              2.1 Hectares of Resident-Owned Reserve
            </h2>
            <p className="mt-4 text-base text-slate leading-relaxed font-sans">
              The shared reserve at Dunstan Common isn&apos;t owned by an operator or
              management company — it&apos;s owned collectively by all 46 homeowners
              as undivided shares. This protects the space and character of the
              neighbourhood for the long term.
            </p>
            <p className="mt-4 text-base text-slate leading-relaxed font-sans">
              The landscaped reserves provide generous open space, walking paths,
              and a natural buffer between the neighbourhood and surrounding
              roads. It&apos;s green space that belongs to you.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="bg-cream rounded-lg p-4 border border-stone">
                <p className="font-serif text-2xl text-charcoal">8,502m²</p>
                <p className="text-xs text-slate mt-1 font-sans">
                  Central Reserve
                </p>
              </div>
              <div className="bg-cream rounded-lg p-4 border border-stone">
                <p className="font-serif text-2xl text-charcoal">1/46th</p>
                <p className="text-xs text-slate mt-1 font-sans">
                  Share Per Owner
                </p>
              </div>
            </div>
          </div>

          <div className="bg-cream rounded-lg border border-stone p-8 flex items-center justify-center min-h-[350px]">
            <div className="text-center">
              <svg
                className="mx-auto h-16 w-16 text-green-DEFAULT/30"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={1}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5a17.92 17.92 0 0 1-8.716-2.247m0 0A9 9 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
                />
              </svg>
              <p className="mt-4 text-sm text-slate font-sans">
                Reserve imagery coming soon
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
