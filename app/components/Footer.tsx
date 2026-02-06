'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const linkStyle = "text-gray-300 hover:text-white transition-colors text-sm no-underline font-normal";
  
  return (
    <footer className="bg-[#313d46] text-white py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Logo and Badges */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="no-underline mb-4" style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 500, fontSize: '1.5rem', color: '#ffffff', textDecoration: 'none' }}>
              numeriq
            </Link>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4 text-base text-white">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/individual" className={linkStyle}>
                  Personal Tax Services
                </Link>
              </li>
              <li>
                <Link href="/services/business" className={linkStyle}>
                  Business Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4 text-base text-white">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className={linkStyle}>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/pricing" className={linkStyle}>
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4 text-base text-white">Contact</h3>
            <ul className="space-y-2">
              <li>
                <Link href="mailto:info@numeriqtaxandaccounting.com" className={linkStyle}>
                  info@numeriqtaxandaccounting.com
                </Link>
              </li>
              <li>
                <Link href="tel:855-537-8776" className={linkStyle}>
                  855-537-8776
                </Link>
              </li>
              <li>
                <Link href="https://goo.gl/maps/VfdgHdbfd41Hn9f19" className={linkStyle}>
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
              <Link href="/privacy" className={linkStyle}>
                Privacy Policy
              </Link>
              <Link href="/terms" className={linkStyle}>
                Terms Of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
