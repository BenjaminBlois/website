'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function AnimatedStep({ children, index }: { children: React.ReactNode; index: number }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
      transition={{ duration: 0.45, delay: index * 0.1, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}

export default function HowWeWork() {
  const steps = [
    {
      number: 1,
      title: 'Book Your Free Consultation',
      description: 'Schedule a call so we can understand your personal or business financial needs.',
    },
    {
      number: 2,
      title: 'We Analyze Your Finances',
      description: 'Our team analyzes your finances and identifies the best approach for your goals.',
    },
    {
      number: 3,
      title: 'Receive a Customized Plan',
      description: 'We create a fixed, tailored plan designed specifically for your tax or accounting needs.',
    },
    {
      number: 4,
      title: 'We Take Care of Everything',
      description: 'From bookkeeping to tax prep or CFO-level guidance, we take care of the details accurately and efficiently.',
    },
    {
      number: 5,
      title: 'Ongoing Support',
      description: 'We review results with you, answer questions, and provide proactive guidance so your finances stay organized and optimized.',
    },
  ];

  const numberColors = ['#306BAC', '#6F9CEE', '#918EF4', '#98B9F2', '#141B41'];

  return (
    <section className="py-16 md:py-20 lg:py-28 relative">

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-stretch">
            {/* Left side - Steps */}
            <div className="flex flex-col min-h-0">
              <motion.h2
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#141B41]"
              >
                How It Works
              </motion.h2>
              <div className="space-y-6" style={{ paddingTop: '2rem' }}>
                {steps.map((step, index) => (
                  <AnimatedStep key={step.number} index={index}>
                    <div className="flex gap-4 group">
                      <div
                        className="flex-shrink-0 w-10 h-10 text-white rounded-xl flex items-center justify-center font-semibold text-lg shadow-sm"
                        style={{ backgroundColor: numberColors[index] }}
                      >
                        {step.number}
                      </div>
                      <div>
                        <h3 className="text-base md:text-lg font-semibold text-[#141B41] mb-1">
                          {step.title}
                        </h3>
                        <p className="text-[#141B41]/60 text-sm md:text-base leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </AnimatedStep>
                ))}
              </div>
            </div>

            {/* Right side - 16:9 image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative w-full"
            >
              <div
                className="relative w-full rounded-[24px] overflow-hidden shadow-2xl border border-white/40"
                style={{
                  background: 'rgba(255,255,255,0.3)',
                  backdropFilter: 'blur(8px)',
                  padding: '10px',
                  aspectRatio: '16/9',
                }}
              >
                <Image
                  src="/how-it-works.png"
                  alt="Team consulting with clients"
                  fill
                  className="object-cover rounded-[16px]"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
