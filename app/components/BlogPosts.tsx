'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function BlogPosts() {
  const posts = [
    {
      title: 'How to Close Out Construction WIP & Retainage Before the Year Ends',
      category: 'Financial Reporting',
      categoryUrl: '/blog/categories/financial-reporting',
      image: '/Rectangle 55.png',
      url: '/how-to-close-out-construction-wip-and-retainage-before-the-year-ends',
    },
    {
      title: 'How Construction Businesses Can Use Year-End Reports to Win Bigger Jobs Next Year',
      category: 'Growth',
      categoryUrl: '/blog/categories/growth',
      image: '/Rectangle 79.png',
      url: '/how-construction-businesses-can-use-year-end-reports-to-win-bigger-jobs-next-year',
    },
    {
      title: 'Don\'t Skip These 5 Steps When Closing Your Nonprofit\'s Books Before Year-End',
      category: 'Accounting & Bookkeeping',
      categoryUrl: '/blog/categories/accounting-and-bookkeeping',
      image: '/Rectangle 55.png',
      url: '/don-t-skip-these-5-steps-when-closing-your-nonprofit-s-books-before-year-end',
    },
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {posts.map((post, index) => (
            <Link
              key={index}
              href={post.url}
              className="group block"
            >
              <div className="relative h-48 md:h-64 mb-4 rounded-lg overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <Link
                href={post.categoryUrl}
                className="text-[#50a744] text-sm font-semibold uppercase tracking-wide mb-2 block hover:underline"
              >
                {post.category}
              </Link>
              <h3 className="text-lg md:text-xl font-semibold text-[#313d46] group-hover:text-[#50a744] transition-colors">
                {post.title}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
