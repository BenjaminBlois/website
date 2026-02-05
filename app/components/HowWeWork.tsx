'use client';

import Image from 'next/image';

export default function HowWeWork() {
  const steps = [
    {
      number: 1,
      title: 'Book Your Free Consultation',
      description: 'Schedule a call so we can understand your personal or business financial needs.',
    },
    {
      number: 2,
      title: 'We Analyze Your Finances',
      description: 'Our team analyzes your finances and identifies the best approach for your goals.',
    },
    {
      number: 3,
      title: 'Receive a Customized Plan',
      description: 'We create a fixed, tailored plan designed specifically for your tax or accounting needs.',
    },
    {
      number: 4,
      title: 'We Take Care of Everything',
      description: 'From bookkeeping to tax prep or CFO-level guidance, we take care of the details accurately and efficiently.',
    },
    {
      number: 5,
      title: 'Ongoing Support',
      description: 'We review results with you, answer questions, and provide proactive guidance so your finances stay organized and optimized.',
    },
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left side - Steps */}
            <div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#313d46] mb-8">
                How It Works
              </h2>
              <div className="space-y-6">
                {steps.map((step) => (
                  <div key={step.number} className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-[#1A3B5D] text-white rounded-full flex items-center justify-center font-semibold text-lg">
                      {step.number}
                    </div>
                    <div>
                      <h3 className="text-base md:text-lg font-semibold text-[#313d46] mb-1">
                        {step.title}
                      </h3>
                      <p className="text-[#393f41] text-sm md:text-base">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right side - Image */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/about-why-we-started.png"
                  alt="Team consulting with clients"
                  width={600}
                  height={500}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
