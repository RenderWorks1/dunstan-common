const features = [
  {
    title: "Internal Access Garaging",
    description:
      "Step from your car directly into your home — no exposed walkways.",
  },
  {
    title: "Generous Storage",
    description:
      "Practical storage built into every home, designed for real life.",
  },
  {
    title: "Second WC",
    description:
      "Every home includes a second toilet for comfort and convenience.",
  },
  {
    title: "Mobility-Considered Layouts",
    description:
      "Single-level, step-free design with wider doorways and accessible bathrooms.",
  },
  {
    title: "Low-Maintenance Landscaping",
    description:
      "Designed to minimise upkeep while maintaining a beautiful streetscape.",
  },
  {
    title: "Central Otago Materials",
    description:
      "Practical, durable materials suited to the local climate and character.",
  },
];

export default function DesignFeatures() {
  return (
    <section className="bg-cream py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="font-sans text-sm font-semibold uppercase tracking-widest text-slate mb-3">
            Design
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-normal text-charcoal">
            Built for Comfort
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="flex gap-4">
              <div className="flex-shrink-0 mt-1">
                <div className="h-8 w-8 rounded-full bg-green-DEFAULT/10 flex items-center justify-center">
                  <svg
                    className="h-4 w-4 text-green-DEFAULT"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="font-sans text-base font-semibold text-charcoal">
                  {feature.title}
                </h3>
                <p className="mt-1 text-sm text-slate leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
