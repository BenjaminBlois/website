'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative bg-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/BG-desktop.png"
          alt=""
          fill
          className="object-cover hidden md:block"
          priority
        />
        <Image
          src="/BG-mobile.png"
          alt=""
          fill
          className="object-cover md:hidden"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-32">
        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#313d46] mb-6 leading-tight">
            Better books begin here.
          </h1>
          <p className="text-lg md:text-xl text-[#393f41] mb-8 leading-relaxed">
            Get complete, accurate, on-time financial statements from U.S.-based bookkeeping experts.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#50a744] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#45993d] transition-colors"
          >
            Book an Appointment
          </Link>
        </div>
      </div>
    </section>
  );
}
