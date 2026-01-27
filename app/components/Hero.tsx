'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 py-12 md:py-16 lg:py-20">
          {/* Text Content */}
          <div className="flex-1 w-full lg:w-auto">
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-[#313d46] mb-6 leading-tight">
              Better books begin here.
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-[#393f41] mb-8 leading-relaxed">
              Get complete, accurate, on-time financial statements from U.S.-based bookkeeping experts.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#50a744] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#45993d] transition-colors"
            >
              Book an Appointment
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* Hero Image */}
          <div className="flex-1 w-full lg:w-auto">
            <Image
              src="/Hero.png"
              alt="Professional accounting team"
              width={800}
              height={600}
              className="w-full h-auto rounded-lg"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
