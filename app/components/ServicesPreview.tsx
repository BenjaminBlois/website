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
