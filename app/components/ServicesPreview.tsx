'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface PrincipleCard {
  title: string;
  description: string;
  gradient: string;
  icon: string;
}

const principles: PrincipleCard[] = [
  {
    title: 'Accuracy You Can Rely On',
    description: 'We handle your bookkeeping and tax preparation with precision, so your financials are always correct, organized, and ready for confident decision-making.',
    gradient: 'linear-gradient(48deg, #1A3B5D 0%, #2AA198 100%)',
    icon: 'checkmark',
  },
  {
    title: 'Clear Communication',
    description: 'We explain your finances in plain language and keep you informed every step of the way, so you never feel lost or overwhelmed.',
    gradient: 'linear-gradient(48deg, #2AA198 0%, #1A3B5D 100%)',
    icon: 'chat',
  },
  {
    title: 'Transparent, Upfront Pricing',
    description: 'We offer fixed pricing customized to your needs, built around your specific needs.',
    gradient: 'linear-gradient(48deg, #1A3B5D 0%, #35b8ad 100%)',
    icon: 'dollar',
  },
  {
    title: 'Proactive, Not Reactive',
    description: "We don't just file and forget — we anticipate issues, offer guidance, and help you stay ahead with planning, strategy, and financial clarity.",
    gradient: 'linear-gradient(48deg, #1e4d6b 0%, #2AA198 100%)',
    icon: 'arrow',
  },
];

function renderIcon(icon: string) {
  switch (icon) {
    case 'checkmark':
      return (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      );
    case 'chat':
      return (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      );
    case 'dollar':
      return (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      );
    case 'arrow':
      return (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      );
    default:
      return null;
  }
}

function PrincipleCardComponent({ principle, index }: { principle: PrincipleCard; index: number }) {
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
      className="relative overflow-hidden flex flex-col items-center text-center"
      style={{
        background: principle.gradient,
        borderRadius: '30px',
        padding: '48px 32px',
      }}
    >
      <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center text-white mb-5">
        {renderIcon(principle.icon)}
      </div>
      <h3
        className="mb-3 text-xl sm:text-2xl font-semibold text-white"
        style={{
          letterSpacing: '-0.02em',
          lineHeight: '1.2',
          fontWeight: 600,
        }}
      >
        {principle.title}
      </h3>
      <p
        className="text-sm sm:text-base text-white max-w-sm"
        style={{
          lineHeight: '1.6',
          opacity: 0.95,
        }}
      >
        {principle.description}
      </p>
    </motion.div>
  );
}

export default function ServicesPreview() {
  return (
    <section className="w-full bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-8 lg:px-16">
      <h2
        className="text-center font-semibold text-[#313d46] mb-12"
        style={{
          fontSize: 'clamp(1.75rem, 4vw, 3rem)',
          fontWeight: 600,
          letterSpacing: '-0.02em',
          lineHeight: '1.1',
        }}
      >
        Why People Choose Numeriq
      </h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {principles.map((principle, index) => (
          <PrincipleCardComponent key={index} principle={principle} index={index} />
        ))}
      </div>
    </section>
  );
}
