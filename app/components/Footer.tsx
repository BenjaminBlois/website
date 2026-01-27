'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#313d46] text-white py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
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
            <h4 className="font-semibold mb-4">Industries</h4>
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
                  Ecommerce Businesses
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
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
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-300">
              <li>info@numeriqtaxandaccounting.com</li>
              <li>855-537-8776</li>
              <li>600 B Street Suite 300</li>
              <li>San Diego, CA 92101</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-600 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">
              © 2025 Numeriq Tax and Accounting
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-300 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-300 hover:text-white text-sm transition-colors">
                Terms Of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
