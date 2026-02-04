'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#313d46] text-white py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Logo and Badges */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="no-underline mb-4">
              <span className="font-['DM_Sans'] font-medium text-2xl text-white">Numeriq</span>
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
            <h3 className="font-semibold mb-4 text-base">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/individual" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Personal Tax Services
                </Link>
              </li>
              <li>
                <Link href="/services/business" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Business Services
                </Link>
              </li>
              <li>
                <Link href="/services/business#bookkeeping" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Bookkeeping
                </Link>
              </li>
              <li>
                <Link href="/services/business#cfo" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Fractional CFO
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4 text-base">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/about#how-we-work" className="text-gray-300 hover:text-white transition-colors text-sm">
                  How We Work
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4 text-base">Contact</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="mailto:info@numeriqtaxandaccounting.com" className="hover:text-white transition-colors text-sm">
                  info@numeriqtaxandaccounting.com
                </Link>
              </li>
              <li>
                <Link href="tel:855-537-8776" className="hover:text-white transition-colors text-sm">
                  855-537-8776
                </Link>
              </li>
              <li>
                <Link href="https://goo.gl/maps/VfdgHdbfd41Hn9f19" className="hover:text-white transition-colors text-sm">
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
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
