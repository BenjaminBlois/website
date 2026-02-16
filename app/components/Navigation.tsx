'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white sticky top-0 z-50" style={{ borderBottom: '2px solid transparent', borderImage: 'linear-gradient(to right, #141B41, #306BAC, #6F9CEE, #98B9F2, #918EF4) 1' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="no-underline" style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 500, fontSize: '1.5rem', color: '#141B41', textDecoration: 'none' }}>
            numeriq
          </Link>

          {/* Desktop Navigation — colors flow L→R through palette */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <div className="relative group">
              <Link href="/services" className="font-semibold transition-opacity hover:opacity-70 text-sm xl:text-base flex items-center gap-1 no-underline" style={{ color: '#141B41' }}>
                Services
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              {/* Dropdown menu */}
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <Link href="/services/individual" className="block px-4 py-3 text-sm text-[#141B41] hover:bg-[#98B9F2]/10 hover:text-[#306BAC] no-underline rounded-t-lg">
                  Personal
                </Link>
                <Link href="/services/business" className="block px-4 py-3 text-sm text-[#141B41] hover:bg-[#98B9F2]/10 hover:text-[#306BAC] no-underline rounded-b-lg">
                  Business
                </Link>
              </div>
            </div>
            <Link href="/about" className="font-semibold transition-opacity hover:opacity-70 text-sm xl:text-base no-underline" style={{ color: '#306BAC' }}>
              About
            </Link>
            <Link href="/pricing" className="font-semibold transition-opacity hover:opacity-70 text-sm xl:text-base no-underline" style={{ color: '#6F9CEE' }}>
              Pricing
            </Link>
            <Link href="/login" className="font-semibold transition-opacity hover:opacity-70 text-sm xl:text-base no-underline" style={{ color: '#918EF4' }}>
              Sign In
            </Link>
            <button
              onClick={() => window.location.href = 'https://form.jotform.com/260287243172152'}
              className="text-white px-6 py-2.5 rounded-[30px] font-semibold hover:opacity-90 transition-opacity text-sm xl:text-base cursor-pointer"
              style={{ background: 'linear-gradient(to right, #141B41, #306BAC, #918EF4)' }}
            >
              Book a Call
            </button>
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
            <div className="space-y-2">
              <p className="text-gray-500 text-sm font-semibold">Services</p>
              <Link href="/services/individual" className="block pl-4 text-gray-700 hover:text-[#306BAC] font-semibold">
                Personal
              </Link>
              <Link href="/services/business" className="block pl-4 text-gray-700 hover:text-[#306BAC] font-semibold">
                Business
              </Link>
            </div>
            <Link href="/about" className="block text-gray-700 hover:text-[#306BAC] font-semibold">
              About
            </Link>
            <Link href="/pricing" className="block text-gray-700 hover:text-[#306BAC] font-semibold">
              Pricing
            </Link>
            <Link href="/login" className="block text-gray-700 hover:text-[#306BAC] font-semibold">
              Sign In
            </Link>
            <button
              onClick={() => window.location.href = 'https://form.jotform.com/260287243172152'}
              className="w-full text-white px-6 py-2.5 rounded-[30px] font-semibold hover:opacity-90 transition-opacity cursor-pointer"
              style={{ background: 'linear-gradient(to right, #141B41, #306BAC, #918EF4)' }}
            >
              Book a Call
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
