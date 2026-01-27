'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function CTASection() {
  return (
    <section className="relative py-16 md:py-20 lg:py-24 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/Footer CTA bg-desktop.png"
          alt=""
          fill
          className="object-cover hidden md:block"
        />
        <Image
          src="/Footer CTA bg-mobile.png"
          alt=""
          fill
          className="object-cover md:hidden"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white mb-6">
          Modern solutions for modern business
        </h2>
        <p className="text-lg md:text-xl text-white mb-8 max-w-2xl mx-auto">
          Grow your company to its full potential with Numeriq Tax and Accounting.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-white text-[#50a744] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
        >
          Book a Call
        </Link>
      </div>
    </section>
  );
}
