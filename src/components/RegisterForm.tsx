"use client";

import { useState, FormEvent } from "react";

export default function RegisterForm() {
  const [submitted, setSubmitted] = useState(false);
  const [isLocal, setIsLocal] = useState<boolean | null>(null);
  const [homeType, setHomeType] = useState<string>("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Future: POST to form endpoint / CRM
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <section className="bg-amazon-100 py-16 md:py-24">
        <div className="mx-auto max-w-xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-offwhite rounded-lg border border-stone p-12">
            <div className="flex justify-center mb-4">
              <div className="h-16 w-16 rounded-full bg-green-DEFAULT flex items-center justify-center">
                <svg
                  className="h-8 w-8 text-white"
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
            <h3 className="font-serif text-2xl font-normal text-charcoal">
              Thank You
            </h3>
            <p className="mt-3 text-base text-slate font-sans">
              We&apos;ll be in touch with priority access details shortly.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-amazon-100 py-16 md:py-24">
      <div className="mx-auto max-w-xl px-4 sm:px-6 lg:px-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Full Name */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-semibold text-charcoal mb-1.5"
            >
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full rounded-md border border-stone bg-offwhite px-4 py-3 text-sm text-charcoal placeholder:text-slate/50 focus:border-green-DEFAULT focus:outline-none focus:ring-1 focus:ring-green-DEFAULT"
              placeholder="Your full name"
            />
          </div>

          {/* Phone */}
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-semibold text-charcoal mb-1.5"
            >
              Phone <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              className="w-full rounded-md border border-stone bg-offwhite px-4 py-3 text-sm text-charcoal placeholder:text-slate/50 focus:border-green-DEFAULT focus:outline-none focus:ring-1 focus:ring-green-DEFAULT"
              placeholder="Your phone number"
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-charcoal mb-1.5"
            >
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full rounded-md border border-stone bg-offwhite px-4 py-3 text-sm text-charcoal placeholder:text-slate/50 focus:border-green-DEFAULT focus:outline-none focus:ring-1 focus:ring-green-DEFAULT"
              placeholder="your@email.com"
            />
          </div>

          {/* Current Location */}
          <div>
            <label
              htmlFor="location"
              className="block text-sm font-semibold text-charcoal mb-1.5"
            >
              Current Location
            </label>
            <input
              type="text"
              id="location"
              name="location"
              className="w-full rounded-md border border-stone bg-offwhite px-4 py-3 text-sm text-charcoal placeholder:text-slate/50 focus:border-green-DEFAULT focus:outline-none focus:ring-1 focus:ring-green-DEFAULT"
              placeholder="e.g. Cromwell, Queenstown"
            />
          </div>

          {/* Local to Central Otago */}
          <div>
            <p className="block text-sm font-semibold text-charcoal mb-2">
              Are you local to Central Otago?
            </p>
            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => setIsLocal(true)}
                className={`flex-1 rounded-md border px-4 py-3 text-sm font-medium transition-colors ${
                  isLocal === true
                    ? "border-green-DEFAULT bg-green-DEFAULT text-white"
                    : "border-stone bg-offwhite text-charcoal hover:border-green-DEFAULT/50"
                }`}
              >
                Yes
              </button>
              <button
                type="button"
                onClick={() => setIsLocal(false)}
                className={`flex-1 rounded-md border px-4 py-3 text-sm font-medium transition-colors ${
                  isLocal === false
                    ? "border-green-DEFAULT bg-green-DEFAULT text-white"
                    : "border-stone bg-offwhite text-charcoal hover:border-green-DEFAULT/50"
                }`}
              >
                No
              </button>
            </div>
          </div>

          {/* Preferred Home Type */}
          <div>
            <p className="block text-sm font-semibold text-charcoal mb-2">
              Preferred Home Type
            </p>
            <div className="flex gap-3">
              {["2 Bedroom", "3 Bedroom", "Unsure"].map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => setHomeType(option)}
                  className={`flex-1 rounded-md border px-4 py-3 text-sm font-medium transition-colors ${
                    homeType === option
                      ? "border-green-DEFAULT bg-green-DEFAULT text-white"
                      : "border-stone bg-offwhite text-charcoal hover:border-green-DEFAULT/50"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          <button
            type="submit"
            className="w-full rounded-md bg-green-DEFAULT px-6 py-4 text-base font-semibold text-white transition-colors hover:bg-green-dark"
          >
            Register Your Interest
          </button>

          <p className="text-xs text-slate text-center">
            Your details will be used to provide you with priority access
            information about Dunstan Common.
          </p>
        </form>
      </div>
    </section>
  );
}
