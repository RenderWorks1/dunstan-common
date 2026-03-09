const villas = [
  {
    type: "Type 1",
    beds: 3,
    entry: "South entry",
    detail: "Double garage",
    style: "Standalone",
  },
  {
    type: "Type 2",
    beds: 3,
    entry: "Side entry",
    detail: "Single garage",
    style: "Standalone",
  },
  {
    type: "Type 3",
    beds: 2,
    entry: "South entry",
    detail: "Duplex",
    style: "Duplex",
  },
  {
    type: "Type 4",
    beds: 2,
    entry: "North entry",
    detail: "Single garage",
    style: "Standalone",
  },
  {
    type: "Type 5",
    beds: 2,
    entry: "South entry",
    detail: "Single garage",
    style: "Standalone",
  },
  {
    type: "Type 6",
    beds: 2,
    entry: "North entry",
    detail: "Duplex",
    style: "Duplex",
  },
];

export default function VillaTypes() {
  return (
    <section className="bg-amazon-50 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="font-sans text-sm font-semibold uppercase tracking-widest text-slate mb-3">
            Villa Types
          </p>
          <h2 className="font-hero-tagline text-3xl md:text-4xl font-normal text-charcoal">
            Six Home Designs
          </h2>
          <p className="mt-4 text-base text-slate font-sans max-w-2xl mx-auto">
            A mix of 2 and 3 bedroom single-level homes, including standalone
            villas and duplexes. 120m² to 180m² including garage.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {villas.map((villa) => (
            <div
              key={villa.type}
              className="bg-amazon-50 rounded-lg border border-amazon-200 p-6 hover:border-amazon-400 transition-colors"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="font-serif text-xl font-normal text-charcoal">
                  {villa.type}
                </span>
                <span className="inline-flex items-center rounded-full bg-amazon-200 px-3 py-1 text-xs font-semibold text-amazon-700">
                  {villa.beds} Bed
                </span>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-slate">
                  <svg className="h-4 w-4 text-green-DEFAULT" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9" />
                  </svg>
                  {villa.entry}
                </div>
                <div className="flex items-center gap-2 text-sm text-slate">
                  <svg className="h-4 w-4 text-green-DEFAULT" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205 3 1m1.5.5-1.5-.5M6.75 7.364V3h-3v18m3-13.636 10.5-3.819" />
                  </svg>
                  {villa.detail}
                </div>
                <div className="flex items-center gap-2 text-sm text-slate">
                  <svg className="h-4 w-4 text-green-DEFAULT" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                  </svg>
                  {villa.style}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
