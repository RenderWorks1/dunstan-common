const stats = [
  {
    distance: "5 min",
    label: "Alexandra Township",
    description: "Shopping, cafes, services, and everyday convenience.",
  },
  {
    distance: "5 min",
    label: "Clyde Township",
    description: "Heritage village, wineries, and the Clyde Dam.",
  },
  {
    distance: "5 min",
    label: "Dunstan Hospital",
    description: "Local hospital and medical services close at hand.",
  },
  {
    distance: "Direct",
    label: "Central Otago Rail Trail",
    description: "Trail frontage — walk, cycle, or ride right from your door.",
  },
  {
    distance: "Opposite",
    label: "Alexandra Golf Course",
    description: "The course is directly across Dunstan Road.",
  },
  {
    distance: "30 min",
    label: "Cromwell & Queenstown Access",
    description: "Easy highway access to the wider Central Otago region.",
  },
];

export default function ProximityStats() {
  return (
    <section className="bg-amazon-100 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="font-sans text-sm font-semibold uppercase tracking-widest text-slate mb-3">
            Proximity
          </p>
          <h2 className="font-hero-tagline text-3xl md:text-4xl font-normal text-charcoal">
            Five Minutes to Everything
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-amazon-50 rounded-lg border border-amazon-200 p-6"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="inline-flex items-center justify-center rounded-full bg-green-DEFAULT px-3 py-1 text-xs font-bold text-white">
                  {stat.distance}
                </span>
                <h3 className="font-sans text-base font-semibold text-charcoal">
                  {stat.label}
                </h3>
              </div>
              <p className="text-sm text-slate leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
