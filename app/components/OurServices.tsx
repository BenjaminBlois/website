'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function OurServices() {
  const services = [
    {
      title: 'Bookkeeping',
      description: 'From transaction coding to designing revenue recognition systems, we know what it takes to deliver accurate data. With Numeriq Tax and Accounting you access:',
      features: [
        'Full stack teams: Controller, Senior Bookkeeper, and Bookkeeper(s)',
        'Comprehensive services (AR/AP, Month End, Payroll, Integrations, KPI\'s, Reporting, 1099 Filing, etc.)',
        'US based, Quickbooks Online specialists',
      ],
      image: '/Accounting.png',
      mobileImage: '/Accounting-Mobile.png',
      cta: 'Learn More About Bookkeeping',
      link: '/services#bookkeeping',
    },
    {
      title: 'Tax Preparation',
      description: 'Comprehensive tax services to keep your business compliant and maximize your deductions. Our tax experts handle:',
      features: [
        'Business tax returns (1120, 1120S, 1065, 1040)',
        'Quarterly estimated tax payments',
        'Year-end tax planning',
        'Tax strategy consultation',
        'IRS correspondence and audit support',
        'State and local tax compliance',
      ],
      image: '/Accounting.png',
      mobileImage: '/Accounting-Mobile.png',
      cta: 'Learn More About Tax Preparation',
      link: '/services#tax-preparation',
      reverse: true,
    },
    {
      title: 'Fractional CFO',
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
    },
    {
      title: 'Financial Planning',
      description: 'Strategic financial planning to help you achieve your business goals. Our planning services include:',
      features: [
        'Budget development and monitoring',
        'Cash flow forecasting',
        'Financial modeling',
        'Growth planning and scenario analysis',
        'Capital allocation strategies',
        'Exit planning and business valuation',
      ],
      image: '/Accounting.png',
      mobileImage: '/Accounting-Mobile.png',
      cta: 'Learn More About Financial Planning',
      link: '/services#financial-planning',
      reverse: true,
    },
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#313d46] mb-4">
            Our Services
          </h2>
        </div>

        {services.map((service, index) => (
          <div
            key={index}
            className={`flex flex-col ${service.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-8 md:gap-12 lg:gap-16 mb-20 md:mb-24 last:mb-0`}
          >
            <div className="flex-1 w-full lg:w-auto">
              <Image
                src={service.image}
                alt={service.title}
                width={600}
                height={400}
                className="hidden md:block w-full h-auto rounded-lg shadow-lg"
              />
              <Image
                src={service.mobileImage}
                alt={service.title}
                width={400}
                height={300}
                className="md:hidden w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div className="flex-1 w-full lg:w-auto">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#313d46] mb-4 md:mb-6">
                {service.title}
              </h3>
              <p className="text-base md:text-lg text-[#393f41] mb-6 md:mb-8 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-3 md:space-y-4 mb-8">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-[#a41a34] mr-3 font-bold text-xl flex-shrink-0 mt-0.5">✓</span>
                    <span className="text-[#393f41] text-sm md:text-base">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                href={service.link}
                className="inline-flex items-center gap-2 bg-[#a41a34] text-white px-6 py-3 md:px-8 md:py-4 rounded-[30px] font-semibold text-base md:text-lg hover:bg-[#8b1528] transition-colors"
              >
                {service.cta}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
