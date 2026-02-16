'use client';

import Image from 'next/image';

export default function CTASection() {
  return (
    <section className="relative pt-16 md:pt-20 lg:pt-24 pb-0 overflow-hidden">
      {/* Gradient fade from testimonials tint into dark */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, rgba(152,185,242,0.15) 0%, #306BAC 30%, #1E2F6A 65%, #141B41 100%)',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center pb-16 md:pb-20 lg:pb-24">
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
          className="inline-flex items-center justify-center gap-2 bg-white text-[#141B41] px-8 py-4 rounded-[30px] font-semibold text-lg hover:bg-white/90 transition-colors cursor-pointer"
        >
          Book a Call
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Bottom bleed — seamless into footer */}
      <div
        className="h-16 md:h-24 relative z-0"
        style={{ backgroundColor: '#141B41' }}
      />
    </section>
  );
}
