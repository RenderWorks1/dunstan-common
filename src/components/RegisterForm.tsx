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
      <section className="px-4 py-16 md:py-24 sm:px-6 lg:px-8 lg:pb-28">
        <div className="mx-auto max-w-xl text-center">
          <div className="rounded-2xl bg-neutral-100 px-8 py-16 sm:px-12">
            <div className="flex justify-center mb-4">
              <div className="h-16 w-16 rounded-full bg-neutral-900 flex items-center justify-center">
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
            <h3 className="font-hero-tagline text-3xl tracking-tight text-neutral-900 sm:text-4xl">
              Thank You
            </h3>
            <p className="mt-5 text-base leading-8 text-neutral-600">
              We&apos;ll be in touch with priority access details shortly.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="px-4 pb-24 sm:px-6 lg:px-8 lg:pb-28">
      <div className="mx-auto max-w-xl">
        <form onSubmit={handleSubmit} className="space-y-6 rounded-2xl border border-neutral-200 bg-white p-8 shadow-md sm:p-10">
          {/* Full Name */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-semibold text-neutral-900 mb-1.5"
            >
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-neutral-900 focus:outline-none focus:ring-1 focus:ring-neutral-900"
              placeholder="Your full name"
            />
          </div>

          {/* Phone */}
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-semibold text-neutral-900 mb-1.5"
            >
              Phone <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              className="w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-neutral-900 focus:outline-none focus:ring-1 focus:ring-neutral-900"
              placeholder="Your phone number"
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-neutral-900 mb-1.5"
            >
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-neutral-900 focus:outline-none focus:ring-1 focus:ring-neutral-900"
              placeholder="your@email.com"
            />
          </div>

          {/* Current Location */}
          <div>
            <label
              htmlFor="location"
              className="block text-sm font-semibold text-neutral-900 mb-1.5"
            >
              Current Location
            </label>
            <input
              type="text"
              id="location"
              name="location"
              className="w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-neutral-900 focus:outline-none focus:ring-1 focus:ring-neutral-900"
              placeholder="e.g. Cromwell, Queenstown"
            />
          </div>

          {/* Local to Central Otago */}
          <div>
            <p className="block text-sm font-semibold text-neutral-900 mb-2">
              Are you local to Central Otago?
            </p>
            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => setIsLocal(true)}
                className={`flex-1 rounded-full border px-4 py-3 text-sm font-medium transition-colors ${
                  isLocal === true
                    ? "border-neutral-900 bg-neutral-900 text-white"
                    : "border-neutral-300 bg-white text-neutral-700 hover:border-neutral-400"
                }`}
              >
                Yes
              </button>
              <button
                type="button"
                onClick={() => setIsLocal(false)}
                className={`flex-1 rounded-full border px-4 py-3 text-sm font-medium transition-colors ${
                  isLocal === false
                    ? "border-neutral-900 bg-neutral-900 text-white"
                    : "border-neutral-300 bg-white text-neutral-700 hover:border-neutral-400"
                }`}
              >
                No
              </button>
            </div>
          </div>

          {/* Preferred Home Type */}
          <div>
            <p className="block text-sm font-semibold text-neutral-900 mb-2">
              Preferred Home Type
            </p>
            <div className="flex gap-3">
              {["2 Bedroom", "3 Bedroom", "Unsure"].map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => setHomeType(option)}
                  className={`flex-1 rounded-full border px-4 py-3 text-sm font-medium transition-colors ${
                    homeType === option
                      ? "border-neutral-900 bg-neutral-900 text-white"
                      : "border-neutral-300 bg-white text-neutral-700 hover:border-neutral-400"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          <button
            type="submit"
            className="w-full rounded-full bg-neutral-900 px-8 py-3 text-sm font-medium text-white transition hover:bg-neutral-800"
          >
            Register Your Interest
          </button>

          <p className="text-xs text-neutral-500 text-center">
            Your details will be used to provide you with priority access
            information about Dunstan Common.
          </p>
        </form>
      </div>
    </section>
  );
}
