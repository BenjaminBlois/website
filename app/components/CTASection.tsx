'use client';

import Image from 'next/image';

export default function CTASection() {
  return (
    <section className="relative py-16 md:py-20 lg:py-24 overflow-hidden">
      {/* Background Image with Gradient Overlay */}
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
        <div className="absolute inset-0 bg-gradient-to-r from-[#a41a34]/90 to-[#0f8ea3]/90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold mb-6 md:mb-8 bg-gradient-to-r from-white via-white to-[#0f8ea3] bg-clip-text text-transparent">
          Modern solutions for modern business
        </h2>
        <p className="text-lg md:text-xl lg:text-2xl text-white mb-8 md:mb-10 max-w-3xl mx-auto">
          Grow your company to its full potential with Numeriq Tax and Accounting.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => window.location.href = '/contact'}
            className="inline-flex items-center justify-center gap-2 bg-white text-[#a41a34] px-8 py-4 rounded-[30px] font-semibold text-lg hover:bg-gray-100 transition-colors cursor-pointer"
          >
            Book a Call
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          <button
            onClick={() => window.location.href = '/contact'}
            className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-[30px] font-semibold text-lg hover:bg-white/10 transition-colors cursor-pointer"
          >
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}
