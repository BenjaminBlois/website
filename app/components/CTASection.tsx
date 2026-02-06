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
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A3B5D]/90 to-[#2AA198]/90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 
          className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold mb-6 md:mb-8 text-white"
        >
          Let&apos;s Simplify Your Finances
        </h2>
        <p className="text-lg md:text-xl lg:text-2xl text-white/90 mb-8 md:mb-10 max-w-3xl mx-auto">
          Get the guidance you need to keep your finances organized, accurate, and stress-free.
        </p>
        <button
          onClick={() => window.location.href = 'https://form.jotform.com/260287243172152'}
          className="inline-flex items-center justify-center gap-2 bg-white text-[#1A3B5D] px-8 py-4 rounded-[30px] font-semibold text-lg hover:bg-gray-100 transition-colors cursor-pointer"
        >
          Book a Call
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  );
}
