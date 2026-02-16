'use client';

import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { RevealBlock, SectionReveal } from '../components/SectionReveal';

export default function AboutPage() {
  const principles = [
    {
      title: 'Accuracy You Can Rely On',
      description: 'We handle your bookkeeping and tax preparation with precision, so your financials are always correct, organized, and ready for confident decision-making.',
      icon: 'checkmark',
    },
    {
      title: 'Clear Communication',
      description: 'We explain your finances in plain language and keep you informed every step of the way, so you never feel lost or overwhelmed.',
      icon: 'chat',
    },
    {
      title: 'Transparent, Upfront Pricing',
      description: 'We offer fixed pricing customized to your needs, built around your specific needs.',
      icon: 'dollar',
    },
    {
      title: 'Proactive, Not Reactive',
      description: "We don't just file and forget - we anticipate issues, offer guidance, and help you stay ahead with planning, strategy, and financial clarity.",
      icon: 'arrow',
    },
  ];

  const renderIcon = (icon: string) => {
    switch (icon) {
      case 'checkmark':
        return (
          <svg className="w-24 h-24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      case 'chat':
        return (
          <svg className="w-24 h-24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        );
      case 'dollar':
        return (
          <svg className="w-24 h-24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      case 'arrow':
        return (
          <svg className="w-24 h-24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section - two-column stagger like homepage */}
      <section className="relative bg-white py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <RevealBlock delay={0}>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 text-[#141B41]">
                Built on Accuracy, Transparency, and Trust.
              </h1>
              <p className="text-lg md:text-xl text-[#141B41]/65">
                Numeriq was founded to give individuals and businesses clear, reliable financial support-without the confusion, stress, or surprise costs.
              </p>
            </RevealBlock>
            <RevealBlock delay={0.15}>
              <div className="relative">
                <Image
                  src="/about-hero.png"
                  alt="Accountant working with client"
                  width={600}
                  height={450}
                  className="rounded-2xl shadow-2xl w-full h-auto"
                />
              </div>
            </RevealBlock>
          </div>
        </div>
      </section>

      {/* Why We Started */}
      <section className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
            <RevealBlock delay={0}>
              <div className="relative">
                <Image
                  src="/about-why-we-started.png"
                  alt="Reviewing financials on laptop"
                  width={500}
                  height={400}
                  className="rounded-2xl shadow-lg w-full h-auto"
                />
              </div>
            </RevealBlock>
            <RevealBlock delay={0.12}>
              <div>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#141B41] mb-6">
                  Why We Started Numeriq
                </h2>
                <div className="space-y-4 text-[#141B41]/65 text-lg leading-relaxed">
                  <p>
                    We started Numeriq after seeing how often individuals and business owners felt left in the dark about their finances. Too many firms overcomplicate the process, communicate poorly, or charge unpredictably.
                  </p>
                  <p>
                    Our goal was simple: provide accurate accounting, clear communication, and fixed pricing-so clients always know where they stand and what they're paying for.
                  </p>
                  <p>
                    Whether you're filing a personal tax return or managing a growing business, we believe financial clarity should be accessible, proactive, and stress-free.
                  </p>
                </div>
              </div>
            </RevealBlock>
          </div>
        </div>
      </section>

      {/* Our Core Principles - header then staggered cards */}
      <section className="py-12 md:py-16 lg:py-20 bg-white px-4 sm:px-8 lg:px-16">
        <SectionReveal
          heading={
            <>
              <h2
                className="text-center font-semibold text-[#141B41]"
                style={{
                  fontSize: 'clamp(1.75rem, 4vw, 3rem)',
                  fontWeight: 600,
                  letterSpacing: '-0.02em',
                  lineHeight: '1.1',
                }}
              >
                Our Core Principles
              </h2>
              <div style={{ height: '6rem', minHeight: '6rem' }} aria-hidden="true" />
            </>
          }
          contentDelay={0.05}
        >
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {principles.map((principle, index) => {
              const cardColors = [
                '#6F9CEE',
                '#918EF4',
                '#306BAC',
                '#141B41',
              ];
              return (
                <PrincipleCard key={index} index={index} cardColors={cardColors} principle={principle} renderIcon={renderIcon} />
              );
            })}
          </div>
        </SectionReveal>
      </section>

      {/* Who We Serve */}
      <section className="py-12 md:py-16 lg:py-20 bg-white">
        <SectionReveal
          heading={
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#141B41] mb-6 text-center">
              Who We Serve
            </h2>
          }
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <p className="text-lg text-[#141B41]/65 mb-4">
                We work with individuals, owner-operated businesses, and growing companies across a wide range of industries.
              </p>
              <p className="text-lg text-[#141B41]/65">
                From simple personal tax returns to multi-entity businesses, our approach adapts to your needs while maintaining the same standard of accuracy and care.
              </p>
            </div>
          </div>
        </SectionReveal>
      </section>

      {/* CTA + Footer gradient wrapper */}
      <div style={{ background: 'linear-gradient(to bottom, #ffffff 0%, #e8eefc 8%, #98B9F2 18%, #6F9CEE 30%, #306BAC 45%, #1E2F6A 60%, #141B41 75%)' }}>
        <section className="py-16 md:py-20 lg:py-24">
          <RevealBlock>
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
          </RevealBlock>
        </section>
        <Footer />
      </div>
    </main>
  );
}

function PrincipleCard({
  principle,
  index,
  cardColors,
  renderIcon,
}: {
  principle: { title: string; description: string; icon: string };
  index: number;
  cardColors: string[];
  renderIcon: (icon: string) => React.ReactNode;
}) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
      className="relative overflow-hidden flex flex-col items-center text-center"
      style={{
        background: cardColors[index],
        borderRadius: '30px',
        padding: '48px 32px',
      }}
    >
      <div className="text-white mb-5">
        {renderIcon(principle.icon)}
      </div>
      <h3
        className="mb-3 text-xl sm:text-2xl font-semibold text-white"
        style={{ letterSpacing: '-0.02em', lineHeight: '1.2', fontWeight: 600 }}
      >
        {principle.title}
      </h3>
      <p
        className="text-sm sm:text-base text-white max-w-sm"
        style={{ lineHeight: '1.6', opacity: 0.95 }}
      >
        {principle.description}
      </p>
    </motion.div>
  );
}
