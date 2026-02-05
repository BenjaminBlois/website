'use client';

import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import Image from 'next/image';

export default function IndividualServicesPage() {
  const steps = [
    {
      number: 1,
      title: 'Book Your Free Consultation',
      description: 'Schedule a call so we can understand your personal tax situation and financial needs.',
    },
    {
      number: 2,
      title: 'We Analyze Your Finances',
      description: 'We review your information and identify the best approach for your tax return.',
    },
    {
      number: 3,
      title: 'Receive a Customized Plan',
      description: "You'll receive a fixed, tailored plan designed specifically for your situation.",
    },
    {
      number: 4,
      title: 'We Take Care of Everything',
      description: 'We prepare and handle your tax return accurately and efficiently.',
    },
    {
      number: 5,
      title: 'Ongoing Support',
      description: "We're available to answer questions and provide guidance beyond filing.",
    },
  ];

  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1A3B5D] to-[#2AA198] py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="text-white">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6">
                Simple, Stress-Free Tax Support
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-8">
                We help individuals file accurate tax returns, understand their finances, and stay compliant—without confusion or last-minute stress.
              </p>
              <button
                onClick={() => window.location.href = 'https://form.jotform.com/260287243172152'}
                className="inline-flex items-center gap-2 bg-white text-[#1A3B5D] px-8 py-4 rounded-[30px] font-semibold text-lg hover:bg-gray-100 transition-colors cursor-pointer"
              >
                Book a Call
              </button>
            </div>
            <div className="relative">
              <Image
                src="/individual-services-hero.png"
                alt="Individual consultation"
                width={600}
                height={450}
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Who We Help */}
      <section className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#313d46] mb-6">
              Who We Help
            </h2>
            <p className="text-lg text-[#393f41] mb-6">
              Our individual services are designed for people who want their taxes done right and explained clearly.
            </p>
            <p className="text-lg text-[#393f41] mb-4">This includes:</p>
            <ul className="space-y-3 text-[#393f41]">
              <li className="flex items-center gap-3">
                <span className="text-[#2AA198] font-bold">✓</span>
                W-2 employees
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#2AA198] font-bold">✓</span>
                Self-employed individuals & freelancers
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#2AA198] font-bold">✓</span>
                Investors & rental property owners
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#2AA198] font-bold">✓</span>
                High-income earners
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#2AA198] font-bold">✓</span>
                Anyone who wants confidence in their tax return
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#313d46] mb-8 text-center">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
            {/* Tax Preparation */}
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="w-14 h-14 bg-[#1A3B5D] text-white rounded-full flex items-center justify-center mb-4">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#313d46] mb-3">Individual Tax Preparation</h3>
              <p className="text-[#393f41]">
                Accurate, compliant tax preparation designed to maximize efficiency and minimize stress. We ensure your return is filed correctly and on time, with clear explanations along the way.
              </p>
            </div>
            
            {/* Tax Planning */}
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="w-14 h-14 bg-[#1A3B5D] text-white rounded-full flex items-center justify-center mb-4">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#313d46] mb-3">Tax Planning & Guidance</h3>
              <p className="text-[#393f41]">
                Proactive guidance to help you understand deductions, credits, and strategies that can reduce tax liability now and in the future.
              </p>
            </div>
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
            Let&apos;s Simplify Your Taxes
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
