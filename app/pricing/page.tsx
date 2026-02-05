'use client';

import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface PricingTier {
  name: string;
  tagline: string;
  description: string;
  ctaText: string;
  ctaHref: string;
  features: string[];
  badge?: string;
}

interface FeatureRow {
  feature: string;
  description?: string;
  personal: 'check' | 'close' | 'addon';
  business: 'check' | 'close' | 'addon';
  enterprise: 'check' | 'close' | 'addon';
}

const pricingTiers: PricingTier[] = [
  {
    name: 'Personal',
    tagline: 'Individuals wanting accurate, stress-free tax filing',
    description: 'What it includes:',
    ctaText: 'Get Your Quote',
    ctaHref: 'https://form.jotform.com/260287243172152',
    features: [
      'Individual tax return preparation (1040)',
      'W-2 and 1099 income reporting',
      'Standard deductions optimization',
      'E-filing with IRS',
      'Year-round support for questions',
    ],
  },
  {
    name: 'Business',
    tagline: 'Owner-operated businesses needing bookkeeping and tax support',
    description: 'Everything in Personal, plus:',
    ctaText: 'Get Your Quote',
    ctaHref: 'https://form.jotform.com/260287243172152',
    features: [
      'Monthly bookkeeping',
      'Business tax returns (1120, 1120S, 1065)',
      'Quarterly estimated tax payments',
      'Payroll processing',
      'Financial statements',
    ],
    badge: 'Most Popular',
  },
  {
    name: 'Enterprise',
    tagline: 'Growing companies needing strategic financial oversight',
    description: 'Everything in Business, plus:',
    ctaText: 'Get Your Quote',
    ctaHref: 'https://form.jotform.com/260287243172152',
    features: [
      'Fractional CFO services',
      'Advanced forecasting',
      'Strategic planning',
      'Multi-entity management',
      'Priority support',
    ],
  },
];

const featureComparison: FeatureRow[] = [
  {
    feature: 'Individual Tax Preparation',
    description: 'Complete preparation and filing of personal tax returns.',
    personal: 'check',
    business: 'check',
    enterprise: 'check',
  },
  {
    feature: 'Deduction Optimization',
    description: 'Maximize your deductions to reduce tax liability.',
    personal: 'check',
    business: 'check',
    enterprise: 'check',
  },
  {
    feature: 'E-Filing',
    description: 'Electronic filing with IRS and state agencies.',
    personal: 'check',
    business: 'check',
    enterprise: 'check',
  },
  {
    feature: 'Year-Round Support',
    description: 'Access to our team for questions throughout the year.',
    personal: 'check',
    business: 'check',
    enterprise: 'check',
  },
  {
    feature: 'Monthly Bookkeeping',
    description: 'Transaction coding, reconciliation, and financial organization.',
    personal: 'close',
    business: 'check',
    enterprise: 'check',
  },
  {
    feature: 'Business Tax Returns',
    description: 'Preparation of 1120, 1120S, 1065, and other business returns.',
    personal: 'close',
    business: 'check',
    enterprise: 'check',
  },
  {
    feature: 'Quarterly Estimates',
    description: 'Calculate and file quarterly estimated tax payments.',
    personal: 'close',
    business: 'check',
    enterprise: 'check',
  },
  {
    feature: 'Payroll Processing',
    description: 'Full payroll services including tax deposits and filings.',
    personal: 'close',
    business: 'check',
    enterprise: 'check',
  },
  {
    feature: 'Financial Statements',
    description: 'Monthly or quarterly P&L, balance sheet, and cash flow.',
    personal: 'close',
    business: 'check',
    enterprise: 'check',
  },
  {
    feature: 'Fractional CFO',
    description: 'Strategic financial leadership without full-time cost.',
    personal: 'close',
    business: 'addon',
    enterprise: 'check',
  },
  {
    feature: 'Advanced Forecasting',
    description: 'Financial projections and scenario planning.',
    personal: 'close',
    business: 'close',
    enterprise: 'check',
  },
  {
    feature: 'Strategic Planning',
    description: 'Long-term financial strategy aligned with business goals.',
    personal: 'close',
    business: 'close',
    enterprise: 'check',
  },
  {
    feature: 'Multi-Entity Management',
    description: 'Consolidated reporting across multiple business entities.',
    personal: 'close',
    business: 'close',
    enterprise: 'check',
  },
  {
    feature: 'Priority Support',
    description: 'Dedicated support with faster response times.',
    personal: 'close',
    business: 'close',
    enterprise: 'check',
  },
];

export default function PricingPage() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const renderFeatureIcon = (status: 'check' | 'close' | 'addon') => {
    if (status === 'check') {
      return (
        <svg className="w-5 h-5 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: '#2AA198' }}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      );
    }
    if (status === 'close') {
      return (
        <svg className="w-5 h-5 mx-auto text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      );
    }
    return <span className="text-sm text-gray-600 font-medium">Add-on</span>;
  };

  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1A3B5D] to-[#2AA198] py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 
            className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-4"
            style={{ textShadow: '0 0 30px rgba(255, 255, 255, 0.4), 0 0 60px rgba(255, 255, 255, 0.2)' }}
          >
            Find the right plan
          </h1>
          <p className="text-2xl md:text-3xl text-white/90 mb-6">for your needs</p>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-4">
            Fixed pricing customized to your situation. Know exactly what you're paying - no surprises, no hourly fees.
          </p>
          <p className="text-base md:text-lg text-white/70 max-w-2xl mx-auto">
            Every plan includes: clear communication, accuracy you can rely on, and year-round support.
          </p>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section ref={ref} className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative bg-white rounded-[20px] ${
                  tier.badge ? 'border-2 shadow-xl' : 'border border-gray-200 shadow-md'
                } p-6 flex flex-col h-full transition-all duration-300 hover:shadow-xl`}
                style={tier.badge ? { borderColor: '#2AA198' } : {}}
              >
                {tier.badge && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                    <span className="text-white px-4 py-1.5 rounded-full text-sm font-bold shadow-md" style={{ backgroundColor: '#2AA198' }}>
                      {tier.badge}
                    </span>
                  </div>
                )}
                <h3 className="text-2xl sm:text-3xl font-bold text-[#313d46] mb-3 leading-tight">{tier.name}</h3>
                <p className="text-base sm:text-lg text-[#393f41] mb-4 leading-relaxed">{tier.tagline}</p>
                <p className="text-sm text-gray-600 mb-6 font-medium">{tier.description}</p>
                <ul className="space-y-3 mb-8 flex-grow">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: '#2AA198' }}>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm sm:text-base text-[#393f41] leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={tier.ctaHref}
                  className={`w-full text-center block px-6 py-3 rounded-lg font-semibold text-white transition-all duration-300 shadow-md hover:shadow-lg no-underline ${
                    tier.badge ? 'bg-[#2AA198] hover:bg-[#238b84]' : 'bg-[#1A3B5D] hover:bg-[#0f2a3f]'
                  }`}
                >
                  {tier.ctaText}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Comparison Table */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-6xl mx-auto"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#313d46] text-center mb-12 leading-tight">
              Compare key features
            </h2>

            {/* Desktop Table */}
            <div className="hidden lg:block overflow-x-auto rounded-2xl border border-gray-200 shadow-md">
              <table className="w-full border-collapse bg-white">
                <thead>
                  <tr className="border-b-2 border-gray-200 bg-[#1A3B5D]">
                    <th className="text-left py-5 px-8 font-semibold text-white text-lg">Feature</th>
                    <th className="text-center py-5 px-8 font-semibold text-white text-lg">Personal</th>
                    <th className="text-center py-5 px-8 font-semibold text-white text-lg">
                      <div className="flex items-center justify-center gap-2">
                        <span className="inline-block bg-[#2AA198] text-white px-3 py-1 rounded-full text-xs font-bold">
                          Most Popular
                        </span>
                        <span>Business</span>
                      </div>
                    </th>
                    <th className="text-center py-5 px-8 font-semibold text-white text-lg">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  {featureComparison.map((row, idx) => (
                    <tr key={idx} className={`border-b border-gray-100 hover:bg-gray-50 transition-colors duration-200 ${idx % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}`}>
                      <td className="py-5 px-8">
                        <div className="font-semibold text-[#313d46] text-base mb-1">{row.feature}</div>
                        {row.description && (
                          <div className="text-sm text-[#393f41] mt-1 leading-relaxed">{row.description}</div>
                        )}
                      </td>
                      <td className="py-5 px-8 text-center">{renderFeatureIcon(row.personal)}</td>
                      <td className="py-5 px-8 text-center">{renderFeatureIcon(row.business)}</td>
                      <td className="py-5 px-8 text-center">{renderFeatureIcon(row.enterprise)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Cards */}
            <div className="lg:hidden space-y-4">
              {featureComparison.map((row, idx) => (
                <div key={idx} className="bg-white rounded-lg p-5 border border-gray-200 shadow-sm">
                  <h4 className="font-semibold text-[#313d46] mb-2 text-base">{row.feature}</h4>
                  {row.description && <p className="text-sm text-[#393f41] mb-5 leading-relaxed">{row.description}</p>}
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="text-xs text-gray-500 mb-2 font-medium">Personal</div>
                      {renderFeatureIcon(row.personal)}
                    </div>
                    <div className="text-center">
                      <div className="text-xs text-gray-500 mb-2 font-medium">Business</div>
                      {renderFeatureIcon(row.business)}
                    </div>
                    <div className="text-center">
                      <div className="text-xs text-gray-500 mb-2 font-medium">Enterprise</div>
                      {renderFeatureIcon(row.enterprise)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

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
          <h2 
            className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 text-white"
            style={{ textShadow: '0 0 20px rgba(255, 255, 255, 0.5), 0 0 40px rgba(255, 255, 255, 0.3)' }}
          >
            Let's Simplify Your Finances
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
