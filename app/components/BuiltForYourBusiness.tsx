'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

interface TabContent {
  id: string;
  label: string;
  title: string;
  description: string;
  mediaType: 'video' | 'image';
  mediaSrc: string;
  iconSrc: string;
}

const tabs: TabContent[] = [
  {
    id: 'bookkeeping',
    label: 'Bookkeeping',
    title: 'Bookkeeping',
    description: 'We handle your day-to-day bookkeeping and monthly close so your financials are accurate, organized, and always up to date — giving you clear visibility into your business at any time.',
    mediaType: 'image',
    mediaSrc: '/Accounting.png',
    iconSrc: '/bookkeeping-icon.png',
  },
  {
    id: 'tax-prep',
    label: 'Individual/Business Tax Prep',
    title: 'Individual/Business Tax Prep',
    description: 'Comprehensive tax preparation for individuals and businesses, ensuring returns are accurate, compliant, and optimized to reduce surprises and allows you to sit back stress-free.',
    mediaType: 'image',
    mediaSrc: '/Accounting.png',
    iconSrc: '/tax-icon.png',
  },
  {
    id: 'cfo',
    label: 'Fractional CFO',
    title: 'Fractional CFO',
    description: 'High-level financial leadership to help you plan for growth, manage cash flow, and make strategic decisions — without the cost of a full-time CFO.',
    mediaType: 'image',
    mediaSrc: '/Accounting.png',
    iconSrc: '/cfo-icon.png',
  },
  {
    id: 'financial-analysis',
    label: 'Financial Analysis & Strategy',
    title: 'Financial Analysis & Strategy',
    description: 'In-depth financial analysis, forecasting, and strategic planning that turns your numbers into clear insights you can use to drive smarter decisions.',
    mediaType: 'image',
    mediaSrc: '/Accounting.png',
    iconSrc: '/financial-analysis-icon.png',
  },
  {
    id: 'entity-setup',
    label: 'Entity Set Up',
    title: 'Entity Set Up',
    description: 'Guidance and execution for selecting and setting up the right business entity, structured correctly from the start to support compliance, tax efficiency, and long-term goals.',
    mediaType: 'image',
    mediaSrc: '/Accounting.png',
    iconSrc: '/entity-icon.png',
  },
];

export default function BuiltForYourBusiness() {
  const [activeTab, setActiveTab] = useState('bookkeeping');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section 
      ref={ref} 
      className="relative w-full py-12 sm:py-16 lg:py-20 bg-white"
      style={{ overflowX: 'hidden' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={{ overflowX: 'hidden', width: '100%' }}>
        <div className="flex flex-col gap-8 sm:gap-12" style={{ width: '100%', maxWidth: '100%' }}>
          {/* Heading */}
          <div className="flex justify-center w-full">
            <h2 
              className="my-0 text-center font-semibold text-[#313d46] w-full"
              style={{
                fontSize: 'clamp(2rem, 5vw, 4.5rem)',
                fontWeight: 600,
                letterSpacing: '-0.88px',
                lineHeight: '1',
                maxWidth: '100%',
                padding: '0 1rem'
              }}
            >
              Built for Your Business
            </h2>
          </div>

          {/* Tab Buttons Container */}
          <div className="flex justify-center pb-6 sm:pb-8 w-full" style={{ overflowX: 'hidden' }}>
            <div 
              className="flex bg-white rounded-[5.6rem] w-full justify-between p-[0.8rem] gap-1 sm:gap-2 flex-wrap sm:flex-nowrap border border-gray-200"
              style={{ 
                maxWidth: '100%',
                boxSizing: 'border-box'
              }}
            >
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative flex flex-col items-center justify-center gap-2 rounded-[40px] border-none px-2 sm:px-3 md:px-4 py-3 font-medium cursor-pointer min-h-[60px] flex-1 text-[10px] xs:text-xs sm:text-sm transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-[#1A3B5D] text-white hover:bg-[#0f2a3f] active:bg-[#0a1f2e]'
                      : 'bg-white text-[#313d46] hover:bg-gray-100 active:bg-gray-200'
                  }`}
                  style={{
                    transition: 'color 0.3s cubic-bezier(0.4, 0, 0.2, 1), background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    minWidth: 0,
                    flexBasis: 0,
                    flexGrow: 1
                  }}
                >
                  <span>{tab.label}</span>
                  <Image
                    src={tab.iconSrc}
                    alt=""
                    width={24}
                    height={24}
                    className="w-6 h-6 flex-shrink-0"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Content - Show only active tab */}
        <div className="w-full mt-6 sm:mt-8" style={{ overflowX: 'hidden', width: '100%', maxWidth: '100%' }}>
          <AnimatePresence mode="wait">
            {tabs.map((tab) => {
              if (tab.id !== activeTab) return null;
              
              return (
                <motion.div
                  key={tab.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="w-full"
                  style={{ width: '100%', maxWidth: '100%', overflowX: 'hidden' }}
                >
                  <div className="w-full mx-auto h-full flex flex-col gap-4 sm:gap-6 md:gap-8 lg:gap-10 items-center pb-4" style={{ width: '100%', maxWidth: '100%', paddingLeft: '0.5rem', paddingRight: '0.5rem' }}>
                    {/* Description */}
                    {tab.description && (
                      <div className="w-full max-w-3xl text-center">
                        <p className="text-base md:text-lg text-[#393f41] leading-relaxed">
                          {tab.description}
                        </p>
                      </div>
                    )}
                    {/* Image/Video */}
                    <div className="w-full overflow-hidden" style={{ aspectRatio: '16/9', maxWidth: '90%', borderRadius: '20px' }}>
                      {tab.mediaType === 'video' ? (
                        <video
                          aria-label={tab.title}
                          playsInline
                          loop
                          autoPlay
                          preload="none"
                          muted
                          className="w-full h-full object-cover"
                          style={{ borderRadius: '20px', width: '100%', height: '100%' }}
                        >
                          <source src={tab.mediaSrc} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      ) : (
                        <div className="overflow-hidden w-full h-full" style={{ borderRadius: '20px', width: '100%', height: '100%' }}>
                          <Image
                            src={tab.mediaSrc}
                            alt={tab.title}
                            width={880}
                            height={600}
                            className="w-full h-full object-cover"
                            priority
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
