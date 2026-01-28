import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Image from 'next/image';

export default function AboutPage() {
  const values = [
    {
      title: 'Integrity',
      description: 'Honest, transparent communication in everything we do.',
    },
    {
      title: 'Expertise',
      description: 'Deep knowledge and continuous learning to serve you better.',
    },
    {
      title: 'Personalized Service',
      description: 'Tailored solutions for each client\'s unique needs.',
    },
    {
      title: 'Proactive Approach',
      description: 'Anticipating needs and providing solutions before problems arise.',
    },
    {
      title: 'Long-term Partnership',
      description: 'Growing with your business for lasting success.',
    },
  ];

  const process = [
    {
      step: '1',
      title: 'Initial Consultation',
      description: 'Understanding your needs, goals, and current financial situation.',
    },
    {
      step: '2',
      title: 'Customized Plan',
      description: 'Tailored service package designed specifically for your business.',
    },
    {
      step: '3',
      title: 'Ongoing Support',
      description: 'Regular check-ins, updates, and proactive financial guidance.',
    },
    {
      step: '4',
      title: 'Continuous Improvement',
      description: 'Adapting our services as your business grows and evolves.',
    },
  ];

  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-16">
        {/* Mission Section */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#313d46] mb-6">
                Mission & Philosophy
              </h1>
              <p className="text-lg text-[#393f41] mb-6">
                At Numeriq Tax and Accounting, we believe that accurate financial data is the foundation of business success. Our mission is to provide comprehensive, reliable accounting services that empower businesses to make informed decisions and achieve sustainable growth.
              </p>
              <p className="text-lg text-[#393f41]">
                Our philosophy centers on delivering exceptional value through personalized service, cutting-edge technology, and a deep understanding of your industry's unique challenges. We're not just accountants—we're strategic partners invested in your long-term success.
              </p>
            </div>
          </div>
        </section>

        {/* How We Work */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#313d46] mb-4">
                How We Work
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {process.map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-lg border border-gray-200">
                  <div className="text-4xl font-bold text-[#a41a34] mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold text-[#313d46] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[#393f41]">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#313d46] mb-4">
                Core Values
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
              {values.map((value, index) => (
                <div key={index} className="text-center">
                  <h3 className="text-xl font-semibold text-[#313d46] mb-2">
                    {value.title}
                  </h3>
                  <p className="text-[#393f41]">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
