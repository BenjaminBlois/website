'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function AnimatedCard({ children, index, className, style }: { children: React.ReactNode; index: number; className?: string; style?: React.CSSProperties }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{ duration: 0.5, delay: index * 0.12, ease: 'easeOut' }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}

export default function ServicesPreview() {
  const services = [
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
      description: "We don't just file and forget — we anticipate issues, offer guidance, and help you stay ahead with planning, strategy, and financial clarity.",
      icon: 'arrow',
    },
  ];

  const renderIcon = (icon: string) => {
    switch (icon) {
      case 'checkmark':
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      case 'chat':
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        );
      case 'dollar':
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      case 'arrow':
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        );
      default:
        return null;
    }
  };

  const iconColors = ['#306BAC', '#6F9CEE', '#918EF4', '#141B41'];

  return (
    <section className="py-16 md:py-20 lg:py-28 relative overflow-hidden">
      {/* Radial gradient background — visible color orbs */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle 600px at 10% 20%, rgba(48,107,172,0.18) 0%, transparent 60%), radial-gradient(circle 500px at 90% 70%, rgba(145,142,244,0.16) 0%, transparent 55%), radial-gradient(circle 700px at 50% 100%, rgba(111,156,238,0.14) 0%, transparent 60%), #EDF1FB',
        }}
      />
      {/* Noise grain texture */}
      <div
        className="absolute inset-0 opacity-[0.06] mix-blend-multiply"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: '256px 256px',
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-14"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#141B41]">
              Why People Choose Numeriq
            </h2>
          </motion.div>

          {/* Bento Grid — equal 2x2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {services.map((service, index) => (
              <AnimatedCard
                key={index}
                index={index}
                className="group relative rounded-[20px] p-7 md:p-9 backdrop-blur-md border border-white/60 shadow-sm hover:shadow-lg transition-all duration-300"
                style={{
                  background: 'rgba(255,255,255,0.5)',
                }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center text-white mb-5"
                  style={{ backgroundColor: iconColors[index] }}
                >
                  {renderIcon(service.icon)}
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-[#141B41] mb-2">
                  {service.title}
                </h3>
                <p className="text-[#141B41]/60 text-base leading-relaxed">
                  {service.description}
                </p>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
