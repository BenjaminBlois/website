'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#313d46] text-white py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Logo and Badges */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center mb-4">
              <Image
                src="/logo.png"
                alt="Numeriq Tax and Accounting"
                width={150}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
            <div className="flex gap-4">
              <Image
                src="/qb-elite-badge.png"
                alt="QuickBooks ProAdvisor Elite"
                width={80}
                height={80}
                className="w-16 h-16 object-contain"
              />
              <Image
                src="/qb-level-two-badge.png"
                alt="QuickBooks Level 2 ProAdvisor"
                width={80}
                height={80}
                className="w-16 h-16 object-contain"
              />
            </div>
          </div>
          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services#bookkeeping" className="text-gray-300 hover:text-white transition-colors">
                  Accounting & Bookkeeping
                </Link>
              </li>
              <li>
                <Link href="/services#cfo" className="text-gray-300 hover:text-white transition-colors">
                  Fractional CFOs
                </Link>
              </li>
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="font-semibold mb-4">Industries</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/industries" className="text-gray-300 hover:text-white transition-colors">
                  Private Equity Backed Firms
                </Link>
              </li>
              <li>
                <Link href="/industries" className="text-gray-300 hover:text-white transition-colors">
                  Construction Companies
                </Link>
              </li>
              <li>
                <Link href="/industries" className="text-gray-300 hover:text-white transition-colors">
                  Consulting Firms
                </Link>
              </li>
              <li>
                <Link href="/industries" className="text-gray-300 hover:text-white transition-colors">
                  Craft Breweries
                </Link>
              </li>
              <li>
                <Link href="/industries" className="text-gray-300 hover:text-white transition-colors">
                  Distributors
                </Link>
              </li>
              <li>
                <Link href="/industries" className="text-gray-300 hover:text-white transition-colors">
                  Ecommerce Businesses
                </Link>
              </li>
              <li>
                <Link href="/industries" className="text-gray-300 hover:text-white transition-colors">
                  Manufacturers
                </Link>
              </li>
              <li>
                <Link href="/industries" className="text-gray-300 hover:text-white transition-colors">
                  Marketing Agencies
                </Link>
              </li>
              <li>
                <Link href="/industries" className="text-gray-300 hover:text-white transition-colors">
                  Nonprofits
                </Link>
              </li>
              <li>
                <Link href="/industries" className="text-gray-300 hover:text-white transition-colors">
                  Service Businesses
                </Link>
              </li>
              <li>
                <Link href="/industries" className="text-gray-300 hover:text-white transition-colors">
                  Software Companies
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  How We Work
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  Our Mission
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-gray-300 hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-gray-300 hover:text-white transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  Fractional Accounting Teams
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  Frequently Asked Questions
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="mailto:info@numeriqtaxandaccounting.com" className="hover:text-white transition-colors">
                  info@numeriqtaxandaccounting.com
                </Link>
              </li>
              <li>
                <Link href="tel:855-537-8776" className="hover:text-white transition-colors">
                  855-537-8776
                </Link>
              </li>
              <li>
                <Link href="https://goo.gl/maps/VfdgHdbfd41Hn9f19" className="hover:text-white transition-colors">
                  600 B Street<br />Suite 300<br />San Diego, CA 92101
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-600 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-300 text-sm">
              © 2026 Numeriq Tax and Accounting
            </p>
            <div className="flex items-center gap-6 flex-wrap">
              <Link href="/privacy" className="text-gray-300 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-300 hover:text-white text-sm transition-colors">
                Terms Of Service
              </Link>
              <div className="relative group">
                <button className="text-gray-300 hover:text-white text-sm transition-colors flex items-center gap-1">
                  Cities
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
