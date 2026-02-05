'use client';

import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Link from 'next/link';

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1A3B5D] to-[#2AA198] py-20 md:py-28 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 
            className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-6"
            style={{ textShadow: '0 0 30px rgba(255, 255, 255, 0.4), 0 0 60px rgba(255, 255, 255, 0.2)' }}
          >
            How Can We Help You?
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            Choose the services that fit your needs
          </p>
        </div>
      </section>

      {/* Service Options */}
      <section className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            
            {/* Personal Services Card */}
            <Link 
              href="/services/individual"
              className="group relative bg-white rounded-2xl border-2 border-gray-200 p-8 md:p-10 hover:border-[#1A3B5D] hover:shadow-xl transition-all duration-300 no-underline"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#1A3B5D] to-[#2AA198] text-white rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h2 className="text-2xl md:text-3xl font-semibold text-[#313d46] mb-4 group-hover:text-[#1A3B5D] transition-colors">
                Personal Services
              </h2>
              <p className="text-[#393f41] mb-6">
                Individual tax preparation and planning for W-2 employees, freelancers, investors, and anyone who wants their taxes done right.
              </p>
              <ul className="space-y-2 text-[#393f41] mb-6">
                <li className="flex items-center gap-2">
                  <span className="text-[#2AA198]">✓</span> Individual Tax Preparation
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#2AA198]">✓</span> Tax Planning & Guidance
                </li>
              </ul>
              <span className="inline-flex items-center gap-2 text-[#1A3B5D] font-semibold group-hover:gap-3 transition-all">
                Learn More
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>

            {/* Business Services Card */}
            <Link 
              href="/services/business"
              className="group relative bg-white rounded-2xl border-2 border-gray-200 p-8 md:p-10 hover:border-[#1A3B5D] hover:shadow-xl transition-all duration-300 no-underline"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#1A3B5D] to-[#2AA198] text-white rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h2 className="text-2xl md:text-3xl font-semibold text-[#313d46] mb-4 group-hover:text-[#1A3B5D] transition-colors">
                Business Services
              </h2>
              <p className="text-[#393f41] mb-6">
                Comprehensive accounting, tax preparation, and CFO-level guidance for businesses of all sizes.
              </p>
              <ul className="space-y-2 text-[#393f41] mb-6">
                <li className="flex items-center gap-2">
                  <span className="text-[#2AA198]">✓</span> Bookkeeping
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#2AA198]">✓</span> Business Tax Preparation
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#2AA198]">✓</span> Fractional CFO Services
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#2AA198]">✓</span> Financial Analysis & Strategy
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#2AA198]">✓</span> Entity Setup & Structuring
                </li>
              </ul>
              <span className="inline-flex items-center gap-2 text-[#1A3B5D] font-semibold group-hover:gap-3 transition-all">
                Learn More
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A3B5D] to-[#2AA198]"></div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 
            className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 text-white"
            style={{ textShadow: '0 0 20px rgba(255, 255, 255, 0.5), 0 0 40px rgba(255, 255, 255, 0.3)' }}
          >
            Not Sure Where to Start?
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Book a free consultation and we&apos;ll help you find the right services for your needs.
          </p>
          <button
            onClick={() => window.location.href = 'https://form.jotform.com/260287243172152'}
            className="inline-flex items-center justify-center gap-2 bg-white text-[#1A3B5D] px-8 py-4 rounded-[30px] font-semibold text-lg hover:bg-gray-100 transition-colors cursor-pointer"
          >
            Book a Call
          </button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
