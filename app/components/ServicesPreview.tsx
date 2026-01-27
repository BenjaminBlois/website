'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function ServicesPreview() {
  const services = [
    {
      title: 'Quality Financials',
      description: 'Get accurate, actionable data that informs your important business decisions.',
      icon: '📊',
    },
    {
      title: 'Financial Credibility',
      description: 'Ensure your bank, investors, and board trust the books.',
      icon: '✅',
    },
    {
      title: 'Informed Growth',
      description: 'Maximize your cash for growth and minimize uncertainty and risk.',
      icon: '📈',
    },
    {
      title: 'Fraud Mitigation',
      description: 'Gain team oversight with a modern cybersecurity infrastructure.',
      icon: '🔒',
    },
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#313d46] mb-4">
            An essential foundation, delivered.
          </h2>
          <p className="text-lg text-[#393f41] max-w-3xl mx-auto">
            kept.pro provides comprehensive bookkeeping and controller services and a network of fractional CFOs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-[#313d46] mb-2">
                {service.title}
              </h3>
              <p className="text-[#393f41]">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
