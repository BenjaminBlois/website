'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function IndustriesPreview() {
  const industries = [
    { name: 'Marketing Agencies', image: '/Marketing Agencies.png' },
    { name: 'Ecommerce Businesses', image: '/Ecommerce Businesses.png' },
    { name: 'Tech Companies', image: '/Tech Companies.png' },
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#313d46] mb-4">
            Growth that fits your industry
          </h2>
          <p className="text-lg text-[#393f41] max-w-3xl mx-auto">
            Whether it's tracking client or project profitability, getting an accurate COGS so you can know your margins, or having the right reporting so you can talk to your investors with confidence—we understand the unique challenges that face your industry and the data you need to succeed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {industries.map((industry, index) => (
            <Link
              key={index}
              href="/industries"
              className="group bg-white rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow"
            >
              <div className="relative h-48 md:h-64">
                <Image
                  src={industry.image}
                  alt={industry.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#313d46] group-hover:text-[#50a744] transition-colors">
                  {industry.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            href="/industries"
            className="inline-block text-[#50a744] font-semibold hover:underline"
          >
            View All Industries →
          </Link>
        </div>
      </div>
    </section>
  );
}
