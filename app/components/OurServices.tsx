'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function OurServices() {
  const services = [
    {
      title: 'Clean Up, Catch Up & Configure Your Books',
      description: 'From transaction coding to designing revenue recognition systems, we know what it takes to deliver accurate data. With kept.pro you access:',
      features: [
        'Full stack teams: Controller, Senior Bookkeeper, and Bookkeeper(s)',
        'Comprehensive services (AR/AP, Month End, Payroll, Integrations, KPI\'s, Reporting, 1099 Filing, etc.)',
        'US based, Quickbooks Online specialists',
      ],
      image: '/Accounting.png',
      mobileImage: '/Accounting-Mobile.png',
      cta: 'Accounting & Booking Services',
      link: '/services#bookkeeping',
    },
    {
      title: 'Get Expert Oversight With Fractional CFO Services',
      description: 'Partner with a fractional CFO to assist with strategic financial decisions and charting a path for growth. You\'ll benefit from:',
      features: [
        'Advanced forecasting',
        'Scenario analysis',
        'Strategic planning',
        'Fundraising',
        'Oversight of your financial functions (such as accounting, treasury, financial planning and analysis, and taxes)',
      ],
      image: '/Fractional CFO.png',
      mobileImage: '/Fractional CFO-Mobile.png',
      cta: 'Connect with a CFO',
      link: '/services#cfo',
      reverse: true,
    },
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#313d46] mb-4">
            Our Services
          </h2>
        </div>

        {services.map((service, index) => (
          <div
            key={index}
            className={`flex flex-col ${service.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-8 md:gap-12 mb-16 last:mb-0`}
          >
            <div className="flex-1 w-full">
              <Image
                src={service.image}
                alt={service.title}
                width={600}
                height={400}
                className="hidden md:block w-full h-auto rounded-lg"
              />
              <Image
                src={service.mobileImage}
                alt={service.title}
                width={400}
                height={300}
                className="md:hidden w-full h-auto rounded-lg"
              />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl md:text-3xl font-semibold text-[#313d46] mb-4">
                {service.title}
              </h3>
              <p className="text-[#393f41] mb-6">
                {service.description}
              </p>
              <ul className="space-y-3 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-[#50a744] mr-3 font-bold">✓</span>
                    <span className="text-[#393f41]">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                href={service.link}
                className="inline-block bg-[#50a744] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#45993d] transition-colors"
              >
                {service.cta}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
