'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface ServiceCard {
  title: string;
  description: string;
  gradient: string;
  icon: string;
}

const services: ServiceCard[] = [
  {
    title: 'Bookkeeping',
    description: 'We handle your day-to-day bookkeeping and monthly close so your financials are accurate, organized, and always up to date — giving you clear visibility into your business at any time.',
    gradient: 'linear-gradient(48deg, #1A3B5D 0%, #2AA198 100%)',
    icon: 'calculator',
  },
  {
    title: 'Individual/Business Tax Prep',
    description: 'Comprehensive tax preparation for individuals and businesses, ensuring returns are accurate, compliant, and optimized to reduce surprises and allows you to sit back stress-free.',
    gradient: 'linear-gradient(48deg, #2AA198 0%, #1A3B5D 100%)',
    icon: 'document',
  },
  {
    title: 'Fractional CFO',
    description: 'High-level financial leadership to help you plan for growth, manage cash flow, and make strategic decisions — without the cost of a full-time CFO.',
    gradient: 'linear-gradient(48deg, #1A3B5D 0%, #35b8ad 100%)',
    icon: 'chart',
  },
  {
    title: 'Financial Analysis & Strategy',
    description: 'In-depth financial analysis, forecasting, and strategic planning that turns your numbers into clear insights you can use to drive smarter decisions.',
    gradient: 'linear-gradient(48deg, #1e4d6b 0%, #2AA198 100%)',
    icon: 'magnify',
  },
  {
    title: 'Entity Set Up',
    description: 'Guidance and execution for selecting and setting up the right business entity, structured correctly from the start to support compliance, tax efficiency, and long-term goals.',
    gradient: 'linear-gradient(48deg, #2AA198 0%, #1e4d6b 100%)',
    icon: 'building',
  },
];

function renderIcon(icon: string) {
  switch (icon) {
    case 'calculator':
      return (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      );
    case 'document':
      return (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      );
    case 'chart':
      return (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      );
    case 'magnify':
      return (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      );
    case 'building':
      return (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      );
    default:
      return null;
  }
}

function ServiceCardComponent({ service, index }: { service: ServiceCard; index: number }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="w-full relative overflow-hidden"
      style={{
        background: service.gradient,
        borderRadius: '40px',
        padding: '60px 48px',
      }}
    >
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col items-center text-center">
          <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center text-white mb-6">
            {renderIcon(service.icon)}
          </div>
          <h2
            className="mb-4 text-2xl sm:text-3xl lg:text-4xl font-semibold text-white"
            style={{
              letterSpacing: '-0.02em',
              lineHeight: '1.2',
              fontWeight: 600,
            }}
          >
            {service.title}
          </h2>
          <p
            className="text-base sm:text-lg lg:text-xl text-white max-w-2xl"
            style={{
              lineHeight: '1.6',
              opacity: 0.95,
            }}
          >
            {service.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function BuiltForYourBusiness() {
  return (
    <section className="w-full bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-8 lg:px-16">
      <h2
        className="text-center font-semibold text-[#313d46] mb-12"
        style={{
          fontSize: 'clamp(2rem, 5vw, 3.5rem)',
          fontWeight: 600,
          letterSpacing: '-0.02em',
          lineHeight: '1.1',
        }}
      >
        Services
      </h2>
      <div className="max-w-5xl mx-auto flex flex-col gap-10">
        {services.map((service, index) => (
          <ServiceCardComponent key={index} service={service} index={index} />
        ))}
      </div>
    </section>
  );
}
