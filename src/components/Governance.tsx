const principles = [
  {
    title: "Resident-Owned",
    description:
      "The Incorporated Society is owned and governed by the homeowners — not an external operator or management company.",
  },
  {
    title: "Transparent Governance",
    description:
      "Clear rules, open decision-making, and shared stewardship of common areas and facilities.",
  },
  {
    title: "Collective Stewardship",
    description:
      "Every homeowner holds a 1/46th undivided share in the common areas, giving each resident equal ownership and voice.",
  },
  {
    title: "Owner-Led Management",
    description:
      "Decisions are made by residents, for residents. No deferred management fees, no external operator taking a cut.",
  },
];

export default function Governance() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="font-sans text-sm font-semibold uppercase tracking-widest text-slate mb-3">
            Governance
          </p>
          <h2 className="font-hero-tagline text-3xl md:text-4xl font-normal text-charcoal">
            An Incorporated Society — Not a Body Corporate
          </h2>
          <p className="mt-4 text-base text-slate font-sans max-w-2xl mx-auto">
            Dunstan Common is governed by a resident-owned Incorporated Society.
            This is not a body corporate, not a licence-to-occupy arrangement,
            and there are no deferred management fees.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {principles.map((principle) => (
            <div key={principle.title} className="flex gap-4">
              <div className="flex-shrink-0 mt-1">
                <div className="h-10 w-10 rounded-full bg-green-DEFAULT flex items-center justify-center">
                  <svg
                    className="h-5 w-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
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
                <h3 className="font-sans text-lg font-semibold text-charcoal">
                  {principle.title}
                </h3>
                <p className="mt-1 text-sm text-slate leading-relaxed">
                  {principle.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
