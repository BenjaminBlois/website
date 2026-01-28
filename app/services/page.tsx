import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Image from 'next/image';
import Link from 'next/link';

export default function ServicesPage() {
  const services = [
    {
      id: 'bookkeeping',
      title: 'Bookkeeping',
      description: 'From transaction coding to designing revenue recognition systems, we know what it takes to deliver accurate data. With Numeriq Tax and Accounting you access:',
      features: [
        'Full stack teams: Controller, Senior Bookkeeper, and Bookkeeper(s)',
        'Comprehensive services (AR/AP, Month End, Payroll, Integrations, KPI\'s, Reporting, 1099 Filing, etc.)',
        'US based, Quickbooks Online specialists',
        'Monthly financial statements',
        'Bank reconciliation',
        'Accounts payable and receivable management',
      ],
      image: '/Accounting.png',
      mobileImage: '/Accounting-Mobile.png',
    },
    {
      id: 'tax-preparation',
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
    },
    {
      id: 'cfo',
      title: 'Fractional CFO',
      description: 'Partner with a fractional CFO to assist with strategic financial decisions and charting a path for growth. You\'ll benefit from:',
      features: [
        'Advanced forecasting',
        'Scenario analysis',
        'Strategic planning',
        'Fundraising support',
        'Oversight of your financial functions (accounting, treasury, financial planning and analysis, and taxes)',
        'Board reporting and investor relations',
      ],
      image: '/Fractional CFO.png',
      mobileImage: '/Fractional CFO-Mobile.png',
      reverse: true,
    },
    {
      id: 'financial-planning',
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
    },
  ];

  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-16">
        {/* Services Overview */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#313d46] mb-4">
                Our Services
              </h1>
              <p className="text-lg text-[#393f41] max-w-3xl mx-auto">
                Comprehensive accounting and financial services tailored to your business needs. From day-to-day bookkeeping to strategic financial planning, we provide the expertise you need to grow.
              </p>
            </div>
          </div>
        </section>

        {/* Individual Service Sections */}
        {services.map((service, index) => (
          <section key={service.id} id={service.id} className={`py-12 md:py-16 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className={`flex flex-col ${service.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-8 md:gap-12 lg:gap-16`}>
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
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#313d46] mb-4 md:mb-6">
                    {service.title}
                  </h2>
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
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-[#a41a34] text-white px-6 py-3 md:px-8 md:py-4 rounded-[30px] font-semibold text-base md:text-lg hover:bg-[#8b1528] transition-colors"
                  >
                    Learn More
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>
      <Footer />
    </main>
  );
}
