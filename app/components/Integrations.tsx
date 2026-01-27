'use client';

import Image from 'next/image';

export default function Integrations() {
  const integrations = [
    { name: 'QuickBooks', image: '/Intuit_QuickBooks.png' },
    { name: 'Asset Accountant', image: '/asset-accountant.png' },
    { name: 'Bill.com', image: '/bill.png' },
    { name: 'Expensify', image: '/ExpensifyApproved_Badge.png' },
    { name: 'Gusto', image: '/gusto.png' },
    { name: 'Shopify', image: '/shopify.png' },
    { name: 'Zapier', image: '/zapier.png' },
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16">
          {integrations.map((integration, index) => (
            <div
              key={index}
              className="opacity-60 hover:opacity-100 transition-opacity"
            >
              <Image
                src={integration.image}
                alt={integration.name}
                width={120}
                height={60}
                className="h-12 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
