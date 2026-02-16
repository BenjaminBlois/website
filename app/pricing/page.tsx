'use client';

import { useRef } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function AnimatedSection({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.08 });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
      transition={{ duration: 0.55, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}

const QUOTE_FORM_URL = 'https://form.jotform.com/260287243172152';

interface ServicePricing {
  name: string;
  description: string;
  pricing: string;
}

const services: ServicePricing[] = [
  {
    name: 'Bookkeeping',
    description: 'Keep your financials organized, up-to-date, and easy to understand.',
    pricing: 'Fixed',
  },
  {
    name: 'Individual & Business Tax Prep',
    description: 'Accurate, compliant tax preparation with clear guidance to minimize stress.',
    pricing: 'Fixed',
  },
  {
    name: 'Fractional CFO Services',
    description: 'Strategic financial oversight, forecasting, and guidance without a full-time CFO cost.',
    pricing: 'Fixed',
  },
  {
    name: 'Financial Analysis & Strategy',
    description: 'Data-driven insights to understand performance and make confident business decisions.',
    pricing: 'Fixed',
  },
  {
    name: 'Entity Setup & Structuring',
    description: 'Guidance on business formation and structure to ensure your company starts off right.',
    pricing: 'Fixed',
  },
];

const cardColors = ['#98B9F2', '#6F9CEE', '#918EF4', '#306BAC', '#141B41'];

export default function PricingPage() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollPricing = (direction: 'left' | 'right') => {
    const el = sliderRef.current;
    if (!el) return;
    const card = el.querySelector('.pricing-card');
    const cardWidth = card?.getBoundingClientRect().width ?? 320;
    const gap = 24;
    el.scrollBy({ left: (cardWidth + gap) * (direction === 'left' ? -1 : 1), behavior: 'smooth' });
  };

  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-white pt-16 md:pt-20 lg:pt-24 pb-0">
        <AnimatedSection>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#141B41] mb-4">
              Fixed Pricing. Tailored for You.
            </h1>
            <p className="text-lg md:text-xl text-[#141B41]/65 max-w-3xl mx-auto">
              Every service we offer comes with a clear, fixed price customized to your needs. Know exactly what you're paying—no surprises, no hourly fees.
            </p>
          </div>
        </AnimatedSection>
      </section>

      {/* Pricing Cards - horizontal slider, 3 visible */}
      <section ref={ref} className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto relative flex items-center gap-4">
            <button
              type="button"
              onClick={() => scrollPricing('left')}
              className="flex-shrink-0 w-12 h-12 rounded-full bg-white shadow-md border border-gray-200 flex items-center justify-center text-[#306BAC] hover:bg-[#306BAC] hover:text-white transition-colors cursor-pointer"
              aria-label="Scroll left"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <div
              ref={sliderRef}
              className="flex gap-6 overflow-x-auto overflow-y-hidden py-2 scroll-smooth flex-1 max-w-[calc(280px*3+24*2)]"
              style={{ scrollbarWidth: 'thin' }}
            >
              {services.map((service, index) => (
                <motion.div
                  key={service.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  className="pricing-card flex-shrink-0 w-[280px] min-w-[280px] min-h-[320px] flex flex-col rounded-[40px] shadow-md transition-all duration-300 hover:shadow-xl"
                  style={{
                    backgroundColor: cardColors[index],
                    padding: '48px 32px',
                  }}
                >
                  <h3 className="text-xl font-bold text-white mb-3 leading-tight" style={{ textShadow: '0 1px 4px rgba(0,0,0,0.15)' }}>
                    {service.name}
                  </h3>
                  <p className="text-sm text-white/95 leading-relaxed flex-grow mb-6" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.1)' }}>
                    {service.description}
                  </p>
                  <div>
                    <span className="inline-block bg-white/25 text-white px-4 py-1.5 rounded-full text-sm font-semibold">
                      {service.pricing}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
            <button
              type="button"
              onClick={() => scrollPricing('right')}
              className="flex-shrink-0 w-12 h-12 rounded-full bg-white shadow-md border border-gray-200 flex items-center justify-center text-[#306BAC] hover:bg-[#306BAC] hover:text-white transition-colors cursor-pointer"
              aria-label="Scroll right"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          <div className="max-w-6xl mx-auto mt-10 text-center">
            <a
              href={QUOTE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-semibold text-white bg-[#306BAC] hover:bg-[#2759A0] transition-all duration-300 shadow-md hover:shadow-lg no-underline"
            >
              Get Your Quote
            </a>
          </div>

          {/* Bottom text */}
          <p className="text-center text-[#141B41]/65 mt-10 text-lg max-w-2xl mx-auto">
            With Numeriq, fixed pricing means transparency, predictability, and peace of mind. You'll always know what you're paying for and why.
          </p>
        </div>
      </section>

      {/* CTA + Footer gradient wrapper */}
      <div style={{ background: 'linear-gradient(to bottom, #ffffff 0%, #e8eefc 8%, #98B9F2 18%, #6F9CEE 30%, #306BAC 45%, #1E2F6A 60%, #141B41 75%)' }}>
        <section className="py-16 md:py-20 lg:py-24">
          <AnimatedSection>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 text-white">
              Let&apos;s Simplify Your Finances
            </h2>
            <p className="text-lg md:text-xl text-white/85 mb-8 max-w-2xl mx-auto">
              Get the guidance you need to keep your finances organized, accurate, and stress-free.
            </p>
            <button
              onClick={() => window.location.href = 'https://form.jotform.com/260287243172152'}
              className="inline-flex items-center justify-center gap-2 bg-white text-[#141B41] px-8 py-4 rounded-[30px] font-semibold text-lg hover:bg-white/90 transition-colors cursor-pointer"
            >
              Book a Call
            </button>
            </div>
          </AnimatedSection>
        </section>

        <Footer />
      </div>
    </main>
  );
}
