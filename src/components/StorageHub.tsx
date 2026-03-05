const facilities = [
  {
    title: "Campervan & Boat Storage",
    description:
      "Secure compound with space for campervans, boats, trailers, and other vehicles.",
  },
  {
    title: "Covered Sheds",
    description:
      "Approximately 1,200m² of covered shed space within the compound.",
  },
  {
    title: "Workshop & Hobby Areas",
    description:
      "Shared workshop space for projects, hobbies, and practical tasks.",
  },
  {
    title: "Gym Space",
    description:
      "On-site exercise facilities for residents to maintain an active lifestyle.",
  },
  {
    title: "Library",
    description:
      "A quiet communal space for reading, conversation, and community gatherings.",
  },
  {
    title: "Community Pavilion",
    description:
      "A shared meeting and events space for the Dunstan Common community.",
  },
];

export default function StorageHub() {
  return (
    <section className="bg-cream py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="font-sans text-sm font-semibold uppercase tracking-widest text-slate mb-3">
            Facilities
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-normal text-charcoal">
            Secure Storage & Community Hub
          </h2>
          <p className="mt-4 text-base text-slate font-sans max-w-2xl mx-auto">
            A 6,900m² compound with covered storage, workshops, and communal
            facilities — designed for the way Central Otago people actually live.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {facilities.map((facility) => (
            <div
              key={facility.title}
              className="bg-offwhite rounded-lg border border-stone p-6"
            >
              <h3 className="font-sans text-base font-semibold text-charcoal">
                {facility.title}
              </h3>
              <p className="mt-2 text-sm text-slate leading-relaxed">
                {facility.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
