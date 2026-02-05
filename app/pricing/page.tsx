import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Link from 'next/link';

export default function PricingPage() {
  const services = [
    {
      name: 'Bookkeeping',
      description: 'Keep your financials organized, up-to-date, and easy to understand.',
    },
    {
      name: 'Individual & Business Tax Prep',
      description: 'Accurate, compliant tax preparation with clear guidance to minimize stress.',
    },
    {
      name: 'Fractional CFO Services',
      description: 'Strategic financial oversight, forecasting, and guidance without a full-time CFO cost.',
    },
    {
      name: 'Financial Analysis & Strategy',
      description: 'Data-driven insights to understand performance and make confident business decisions.',
    },
    {
      name: 'Entity Setup & Structuring',
      description: 'Guidance on business formation and structure to ensure your company starts off right.',
    },
  ];

  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1A3B5D] to-[#2AA198] py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 
            className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-6"
            style={{ textShadow: '0 0 30px rgba(255, 255, 255, 0.4), 0 0 60px rgba(255, 255, 255, 0.2)' }}
          >
            Fixed Pricing. Tailored for You.
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
            Every service we offer comes with a clear, fixed price customized to your needs. Know exactly what you're paying—no surprises, no hourly fees.
          </p>
        </div>
      </section>

      {/* Pricing Table */}
      <section className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            {/* Desktop Table */}
            <div className="hidden md:block overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
              <table className="w-full">
                <thead>
                  <tr className="bg-[#1A3B5D] text-white">
                    <th className="text-left px-6 py-4 font-semibold text-lg">Service</th>
                    <th className="text-left px-6 py-4 font-semibold text-lg">Description</th>
                    <th className="text-center px-6 py-4 font-semibold text-lg">Pricing</th>
                    <th className="text-center px-6 py-4 font-semibold text-lg"></th>
                  </tr>
                </thead>
                <tbody>
                  {services.map((service, index) => (
                    <tr 
                      key={index} 
                      className={`border-b border-gray-100 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-gray-100 transition-colors`}
                    >
                      <td className="px-6 py-5">
                        <span className="font-semibold text-[#313d46]">{service.name}</span>
                      </td>
                      <td className="px-6 py-5 text-[#393f41]">{service.description}</td>
                      <td className="px-6 py-5 text-center">
                        <span className="inline-block bg-[#2AA198]/10 text-[#2AA198] font-semibold px-4 py-1 rounded-full text-sm">
                          Fixed
                        </span>
                      </td>
                      <td className="px-6 py-5 text-center">
                        <Link
                          href="https://form.jotform.com/260287243172152"
                          className="inline-flex items-center gap-2 bg-[#1A3B5D] text-white px-5 py-2 rounded-full font-semibold text-sm hover:bg-[#0f2a3f] transition-colors no-underline"
                        >
                          Get Your Quote
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Cards */}
            <div className="md:hidden space-y-4">
              {services.map((service, index) => (
                <div key={index} className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
                  <h3 className="font-semibold text-[#313d46] text-lg mb-2">{service.name}</h3>
                  <p className="text-[#393f41] text-sm mb-4">{service.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="inline-block bg-[#2AA198]/10 text-[#2AA198] font-semibold px-4 py-1 rounded-full text-sm">
                      Fixed
                    </span>
                    <Link
                      href="https://form.jotform.com/260287243172152"
                      className="inline-flex items-center gap-2 bg-[#1A3B5D] text-white px-5 py-2 rounded-full font-semibold text-sm hover:bg-[#0f2a3f] transition-colors no-underline"
                    >
                      Get Your Quote
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom text */}
            <p className="text-center text-[#393f41] mt-10 text-lg max-w-2xl mx-auto">
              With Numeriq, fixed pricing means transparency, predictability, and peace of mind. You'll always know what you're paying for and why.
            </p>
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
