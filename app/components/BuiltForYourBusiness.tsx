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
}

const tabs: TabContent[] = [
  {
    id: 'strength',
    label: 'Strength',
    title: 'Strength',
    description: '',
    mediaType: 'image',
    mediaSrc: '/Accounting.png',
  },
  {
    id: 'functional-fitness',
    label: 'Functional fitness',
    title: 'Functional fitness',
    description: '',
    mediaType: 'image',
    mediaSrc: '/Accounting.png',
  },
  {
    id: 'hiit',
    label: 'HIIT',
    title: 'HIIT',
    description: '',
    mediaType: 'image',
    mediaSrc: '/Accounting.png',
  },
  {
    id: 'yoga',
    label: 'Yoga',
    title: 'Yoga',
    description: '',
    mediaType: 'image',
    mediaSrc: '/Accounting.png',
  },
  {
    id: 'pilates',
    label: 'Pilates',
    title: 'Pilates',
    description: '',
    mediaType: 'image',
    mediaSrc: '/Accounting.png',
  },
  {
    id: 'spin',
    label: 'Spin cycle',
    title: 'Spin cycle',
    description: '',
    mediaType: 'image',
    mediaSrc: '/Accounting.png',
  },
  {
    id: 'recovery',
    label: 'Recovery',
    title: 'Recovery',
    description: '',
    mediaType: 'image',
    mediaSrc: '/Accounting.png',
  },
  {
    id: 'boxing',
    label: 'Boxing',
    title: 'Boxing',
    description: '',
    mediaType: 'image',
    mediaSrc: '/Accounting.png',
  },
];

export default function BuiltForYourBusiness() {
  const [activeTab, setActiveTab] = useState('strength');
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
                  className={`relative flex flex-row items-center justify-center rounded-[40px] border-none px-2 sm:px-3 md:px-4 py-2 font-medium cursor-pointer min-h-[40px] flex-1 text-[10px] xs:text-xs sm:text-sm transition-all duration-300 ${
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
                  {tab.label}
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
