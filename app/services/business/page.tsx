'use client';

import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import Image from 'next/image';

export default function BusinessServicesPage() {
  const businessTypes = [
    { name: 'Owner-operated businesses', icon: 'person' },
    { name: 'Service-based companies', icon: 'handshake' },
    { name: 'E-commerce & product-based brands', icon: 'cart' },
    { name: 'Agencies & consultants', icon: 'chat' },
    { name: 'Construction & trade businesses', icon: 'tools' },
    { name: 'Startups and high-growth companies', icon: 'building' },
  ];

  const services = [
    {
      title: 'Bookkeeping',
      description: 'Accurate, consistent bookkeeping that keeps your financials organized, up to date, and easy to understand.',
      icon: 'calculator',
    },
    {
      title: 'Business Tax Preparation',
      description: 'Timely, compliant tax preparation for businesses of all sizes, with proactive planning to support long-term success.',
      icon: 'document',
    },
    {
      title: 'Fractional CFO Services',
      description: 'Strategic financial oversight, forecasting, and guidance-without the cost of a full-time CFO.',
      icon: 'chart',
    },
    {
      title: 'Financial Analysis & Strategy',
      description: 'Data-driven insights that help you understand performance, plan ahead, and make confident business decisions.',
      icon: 'magnify',
    },
    {
      title: 'Entity Setup & Structuring',
      description: 'Guidance on business formation and structure to ensure your company is set up correctly from day one.',
      icon: 'building',
    },
  ];

  const steps = [
    {
      number: 1,
      title: 'Book Your Free Consultation',
      description: 'Schedule a call so we can learn about your business, goals, and financial needs.',
    },
    {
      number: 2,
      title: 'We Analyze Your Finances',
      description: 'We review your financials to understand your current position and identify the best path forward.',
    },
    {
      number: 3,
      title: 'Receive a Customized Plan',
      description: "You'll receive a fixed, tailored plan designed around your business structure and complexity.",
    },
    {
      number: 4,
      title: 'We Take Care of Everything',
      description: 'From bookkeeping and tax preparation to CFO-level support, we handle the details accurately and efficiently.',
    },
    {
      number: 5,
      title: 'Ongoing Support',
      description: 'We provide continued guidance, clear communication, and proactive insights as your business grows.',
    },
  ];

  const renderIcon = (icon: string) => {
    switch (icon) {
      case 'calculator':
        return (
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
        );
      case 'document':
        return (
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        );
      case 'chart':
        return (
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
          </svg>
        );
      case 'magnify':
        return (
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        );
      case 'building':
        return (
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
        );
      case 'person':
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        );
      case 'handshake':
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
          </svg>
        );
      case 'cart':
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        );
      case 'chat':
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        );
      case 'tools':
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1A3B5D] to-[#2AA198] py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-6">
              Accounting Built for Growing Businesses
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8">
              From bookkeeping to tax preparation and CFO-level guidance, we help businesses stay organized, compliant, and financially confident.
            </p>
            <button
              onClick={() => window.location.href = 'https://form.jotform.com/260287243172152'}
              className="inline-flex items-center gap-2 bg-white text-[#1A3B5D] px-8 py-4 rounded-[30px] font-semibold text-lg hover:bg-gray-100 transition-colors cursor-pointer"
            >
              Book a Call
            </button>
          </div>
        </div>
      </section>

      {/* Who We Work With */}
      <section className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#313d46] mb-4">
              Who We Work With
            </h2>
            <p className="text-lg text-[#393f41] mb-8">
              Our business services support companies at every stage-from new entities to complex, multi-entity organizations.
            </p>
            <p className="text-lg text-[#393f41] mb-6">We commonly work with:</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {businessTypes.map((type, index) => (
                <div key={index} className="flex items-center gap-3 bg-gray-50 rounded-lg p-4">
                  <div className="w-10 h-10 bg-[#1A3B5D] text-white rounded-full flex items-center justify-center flex-shrink-0">
                    {renderIcon(type.icon)}
                  </div>
                  <span className="text-sm md:text-base text-[#313d46] font-medium">{type.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Business Services */}
      <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#313d46] mb-8 text-center">
            Our Business Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                <div className="w-14 h-14 bg-[#1A3B5D] text-white rounded-full flex items-center justify-center mb-4">
                  {renderIcon(service.icon)}
                </div>
                <h3 className="text-xl font-semibold text-[#313d46] mb-3">{service.title}</h3>
                <p className="text-[#393f41] text-sm md:text-base">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#313d46] mb-8">
              How It Works
            </h2>
            <div className="space-y-6">
              {steps.map((step) => (
                <div key={step.number} className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-[#1A3B5D] text-white rounded-full flex items-center justify-center font-semibold text-lg">
                    {step.number}
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold text-[#313d46] mb-1">
                      {step.title}
                    </h3>
                    <p className="text-[#393f41]">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
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
