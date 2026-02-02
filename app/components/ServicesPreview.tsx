'use client';

export default function ServicesPreview() {
  const services = [
    {
      title: 'Accuracy You Can Rely On',
      description: 'We handle your bookkeeping and tax preparation with precision, so your financials are always correct, organized, and ready for confident decision-making.',
      icon: 'checkmark',
    },
    {
      title: 'Clear Communication',
      description: 'We explain your finances in plain language and keep you informed every step of the way, so you never feel lost or overwhelmed.',
      icon: 'chat',
    },
    {
      title: 'Transparent, Upfront Pricing',
      description: 'We offer fixed pricing customized to your needs, built around your specific needs.',
      icon: 'dollar',
    },
    {
      title: 'Proactive, Not Reactive',
      description: 'We don't just file and forget — we anticipate issues, offer guidance, and help you stay ahead with planning, strategy, and financial clarity.',
      icon: 'arrow',
    },
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Dark Card Container */}
        <div className="bg-[#313d46] rounded-lg p-8 md:p-12 lg:p-16 relative overflow-hidden">
          {/* Green Accent Line */}
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#1A3B5D]"></div>
          
          <div className="pl-6 md:pl-8">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white mb-2">
              Why People Choose Numeriq
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-8 md:mb-12">
              Numeriq Tax and Accounting provides comprehensive bookkeeping and controller services and a network of fractional CFOs.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {services.map((service, index) => (
                <div key={index} className="text-white">
                  <div className="mb-3">
                    <div className="w-12 h-12 bg-[#1A3B5D] rounded-full flex items-center justify-center mb-3">
                      {service.icon === 'checkmark' && (
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      )}
                      {service.icon === 'chat' && (
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                      )}
                      {service.icon === 'dollar' && (
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      )}
                      {service.icon === 'arrow' && (
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
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
