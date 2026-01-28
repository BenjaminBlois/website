import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function PricingPage() {
  const tiers = [
    {
      name: 'Basic',
      price: 'Starting at $1,500/month',
      description: 'Perfect for small businesses getting started',
      features: [
        'Monthly bookkeeping',
        'Basic financial reports',
        'Quarterly reviews',
        'Email support',
      ],
    },
    {
      name: 'Professional',
      price: 'Starting at $3,000/month',
      description: 'Most popular for growing businesses',
      features: [
        'Full-service bookkeeping',
        'Advanced financial reporting',
        'Monthly CFO consultations',
        'Tax preparation included',
        'Priority support',
        'Custom integrations',
      ],
      popular: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom pricing',
      description: 'Complete financial team for established companies',
      features: [
        'Dedicated accounting team',
        'Fractional CFO services',
        'Strategic financial planning',
        'Custom reporting & KPIs',
        '24/7 support',
        'White-glove service',
      ],
    },
  ];

  const faqs = [
    {
      question: 'Can I customize my package?',
      answer: 'Yes, we work with you to create a package that fits your specific needs and budget.',
    },
    {
      question: 'What if I need more hours?',
      answer: 'We offer flexible scaling options. You can add hours or services as your business grows.',
    },
    {
      question: 'Do you offer annual contracts?',
      answer: 'Yes, we offer both monthly and annual contracts with discounts for annual commitments.',
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, ACH transfers, and wire transfers.',
    },
    {
      question: 'Can I upgrade or downgrade my plan?',
      answer: 'Absolutely. You can change your plan at any time with 30 days notice.',
    },
    {
      question: 'What\'s included in tax preparation?',
      answer: 'Tax preparation includes business tax returns, quarterly estimates, and year-end planning.',
    },
  ];

  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-16">
        {/* Intro Section */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#313d46] mb-6">
                Transparent, Value-Based Pricing
              </h1>
              <p className="text-lg text-[#393f41]">
                We believe in transparent pricing with no hidden fees. Our packages are designed to scale with your business, and you only pay for what you need.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Tiers */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {tiers.map((tier, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-lg p-8 border-2 ${
                    tier.popular ? 'border-[#a41a34] shadow-lg' : 'border-gray-200'
                  }`}
                >
                  {tier.popular && (
                    <div className="bg-[#a41a34] text-white text-sm font-semibold px-4 py-1 rounded-full inline-block mb-4">
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-2xl font-semibold text-[#313d46] mb-2">
                    {tier.name}
                  </h3>
                  <p className="text-3xl font-semibold text-[#a41a34] mb-2">
                    {tier.price}
                  </p>
                  <p className="text-[#393f41] mb-6">{tier.description}</p>
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-[#a41a34] mr-3 font-bold">✓</span>
                        <span className="text-[#393f41]">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="/contact"
                    className={`block text-center px-6 py-3 rounded-[30px] font-semibold transition-colors ${
                      tier.popular
                        ? 'bg-[#a41a34] text-white hover:bg-[#8b1528]'
                        : 'bg-gray-100 text-[#313d46] hover:bg-gray-200'
                    }`}
                  >
                    Get Started
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-semibold text-[#313d46] mb-8 text-center">
                Pricing Questions?
              </h2>
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div key={index} className="border-b border-gray-200 pb-6">
                    <h3 className="text-lg font-semibold text-[#313d46] mb-2">
                      {faq.question}
                    </h3>
                    <p className="text-[#393f41]">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
