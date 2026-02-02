'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function HowWeWork() {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="bg-[#2AA198] rounded-lg p-8 md:p-12 lg:p-16 text-white">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-6">
              How We Work
            </h2>
            <p className="text-lg md:text-xl mb-8 leading-relaxed">
              Numeriq Tax and Accounting delivers complete outsourced accounting and bookkeeping teams, or we can augment your existing internal capacity. We work with you as an integrated partner, structurally invested in your success, and scalable as you grow.
            </p>
            <Link
              href="/about#how-we-work"
              className="inline-flex items-center gap-2 bg-white text-[#2AA198] px-6 py-3 rounded-[30px] font-semibold hover:bg-gray-100 transition-colors"
            >
              How We Integrate
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
