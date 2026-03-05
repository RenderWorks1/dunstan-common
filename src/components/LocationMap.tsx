export default function LocationMap() {
  return (
    <section className="bg-cream flex min-h-screen flex-col justify-center py-16 md:py-24">
      <div className="mx-auto w-full max-w-7xl flex-1 flex flex-col justify-center px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="font-serif text-3xl md:text-4xl font-normal text-charcoal">
            Find Us
          </h2>
          <p className="mt-4 text-base text-slate font-sans max-w-2xl mx-auto">
            Dunstan Road, Alexandra — Central Otago, New Zealand
          </p>
        </div>

        <div className="rounded-lg overflow-hidden border border-stone">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5576.897898768!2d169.36!3d-45.265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa82b13c24ac7d09f%3A0x1d4a0d67aab27b1e!2sDunstan%20Rd%2C%20Alexandra%209320%2C%20New%20Zealand!5e0!3m2!1sen!2snz!4v1709000000000"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Dunstan Common location map"
          />
        </div>
      </div>
    </section>
  );
}
