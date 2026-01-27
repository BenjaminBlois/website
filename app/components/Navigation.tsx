'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/Logo.svg"
              alt="Numeriq Tax and Accounting"
              width={150}
              height={40}
              className="h-8 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <div className="relative group">
              <Link href="/services" className="text-[#313d46] hover:text-[#50a744] font-semibold transition-colors text-sm xl:text-base flex items-center gap-1">
                Services
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
            </div>
            <div className="relative group">
              <Link href="/industries" className="text-[#313d46] hover:text-[#50a744] font-semibold transition-colors text-sm xl:text-base flex items-center gap-1">
                Industries
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
            </div>
            <div className="relative group">
              <Link href="/about" className="text-[#313d46] hover:text-[#50a744] font-semibold transition-colors text-sm xl:text-base flex items-center gap-1">
                About
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
            </div>
            <Link href="/pricing" className="text-[#313d46] hover:text-[#50a744] font-semibold transition-colors text-sm xl:text-base">
              Pricing
            </Link>
            <Link href="/blog" className="text-[#313d46] hover:text-[#50a744] font-semibold transition-colors text-sm xl:text-base">
              Blog
            </Link>
            <Link
              href="/contact"
              className="bg-[#50a744] text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-[#45993d] transition-colors text-sm xl:text-base"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-gray-700"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 space-y-4">
            <Link href="/services" className="block text-gray-700 hover:text-[#50a744] font-semibold">
              Services
            </Link>
            <Link href="/industries" className="block text-gray-700 hover:text-[#50a744] font-semibold">
              Industries
            </Link>
            <Link href="/pricing" className="block text-gray-700 hover:text-[#50a744] font-semibold">
              Pricing
            </Link>
            <Link href="/about" className="block text-gray-700 hover:text-[#50a744] font-semibold">
              About
            </Link>
            <Link href="/blog" className="block text-gray-700 hover:text-[#50a744] font-semibold">
              Blog
            </Link>
            <Link
              href="/contact"
              className="block bg-[#50a744] text-white px-6 py-2.5 rounded-lg font-semibold text-center hover:bg-[#45993d] transition-colors"
            >
              Get Started
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
