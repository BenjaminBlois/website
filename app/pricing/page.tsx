'use client';

import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface ServicePricing {
  name: string;
  description: string;
  pricing: string;
  ctaText: string;
  ctaHref: string;
}

const services: ServicePricing[] = [
  {
    name: 'Bookkeeping',
    description: 'Keep your financials organized, up-to-date, and easy to understand.',
    pricing: 'Fixed',
    ctaText: 'Get Your Quote',
    ctaHref: 'https://form.jotform.com/260287243172152',
  },
  {
    name: 'Individual & Business Tax Prep',
    description: 'Accurate, compliant tax preparation with clear guidance to minimize stress.',
    pricing: 'Fixed',
    ctaText: 'Get Your Quote',
    ctaHref: 'https://form.jotform.com/260287243172152',
  },
  {
    name: 'Fractional CFO Services',
    description: 'Strategic financial oversight, forecasting, and guidance without a full-time CFO cost.',
    pricing: 'Fixed',
    ctaText: 'Get Your Quote',
    ctaHref: 'https://form.jotform.com/260287243172152',
  },
  {
    name: 'Financial Analysis & Strategy',
    description: 'Data-driven insights to understand performance and make confident business decisions.',
    pricing: 'Fixed',
    ctaText: 'Get Your Quote',
    ctaHref: 'https://form.jotform.com/260287243172152',
  },
];

export default function PricingPage() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1A3B5D] to-[#2AA198] py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-4">
            Fixed Pricing. Tailored for You.
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
            Every service we offer comes with a clear, fixed price customized to your needs. Know exactly what you're paying—no surprises, no hourly fees.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section ref={ref} className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative bg-white rounded-[20px] border border-gray-200 shadow-md p-6 flex flex-col h-full transition-all duration-300 hover:shadow-xl"
              >
                <h3 className="text-xl sm:text-2xl font-bold text-[#313d46] mb-3 leading-tight">
                  {service.name}
                </h3>
                <p className="text-sm sm:text-base text-[#393f41] mb-6 leading-relaxed flex-grow">
                  {service.description}
                </p>
                <div className="mb-6">
                  <span className="inline-block bg-[#1A3B5D]/10 text-[#1A3B5D] px-4 py-1.5 rounded-full text-sm font-semibold">
                    {service.pricing}
                  </span>
                </div>
                <Link
                  href={service.ctaHref}
                  className="w-full text-center block px-6 py-3 rounded-lg font-semibold text-white bg-[#1A3B5D] hover:bg-[#0f2a3f] transition-all duration-300 shadow-md hover:shadow-lg no-underline"
                >
                  {service.ctaText}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Bottom text */}
          <p className="text-center text-[#393f41] mt-12 text-lg max-w-2xl mx-auto">
            With Numeriq, fixed pricing means transparency, predictability, and peace of mind. You'll always know what you're paying for and why.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 md:py-20 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A3B5D] to-[#2AA198]"></div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 text-white">
            Let&apos;s Simplify Your Finances
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Get the guidance you need to keep your finances organized, accurate, and stress-free.
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
