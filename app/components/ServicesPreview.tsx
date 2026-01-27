'use client';

export default function ServicesPreview() {
  const services = [
    {
      title: 'Quality Financials',
      description: 'Get accurate, actionable data that informs your important business decisions.',
    },
    {
      title: 'Financial Credibility',
      description: 'Ensure your bank, investors, and board trust the books.',
    },
    {
      title: 'Informed Growth',
      description: 'Maximize your cash for growth and minimize uncertainty and risk.',
    },
    {
      title: 'Fraud Mitigation',
      description: 'Gain team oversight with a modern cybersecurity infrastructure.',
    },
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Dark Card Container */}
        <div className="bg-[#313d46] rounded-lg p-8 md:p-12 lg:p-16 relative overflow-hidden">
          {/* Green Accent Line */}
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#50a744]"></div>
          
          <div className="pl-6 md:pl-8">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white mb-2">
              An essential foundation, delivered.
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-8 md:mb-12">
              Numeriq Tax and Accounting provides comprehensive bookkeeping and controller services and a network of fractional CFOs.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {services.map((service, index) => (
                <div key={index} className="text-white">
                  <div className="mb-3">
                    <div className="w-12 h-12 bg-[#50a744] rounded-full flex items-center justify-center mb-3">
                      {index === 0 && (
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                      )}
                      {index === 1 && (
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      )}
                      {index === 2 && (
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                      )}
                      {index === 3 && (
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                      )}
                    </div>
                  </div>
                  <h3 className="text-xl md:text-2xl font-semibold mb-3">
                    {service.title}
                  </h3>
                  <p className="text-white/80 text-sm md:text-base">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
