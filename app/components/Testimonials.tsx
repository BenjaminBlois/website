'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Testimonials() {
  const testimonials = [
    {
      quote: 'Working with kept.pro while we launched our business was an incredible value for two reasons. One, we knew things were getting set up right, so we wouldn\'t have to go back in the future to fix things. Two, the team was really helpful in teaching our team all the important components of our accounting, so we felt confident running that side of the business. I highly recommend kept.pro!!',
      author: 'Kate N.',
    },
    {
      quote: 'kept.pro has been a tremendous asset to my business. When we first partnered, they quickly straightened out and simplified our books to align with our unique needs. The team at kept.pro is extremely friendly and knowledgeable. My lack of finance background never diminishes the effort they put towards helping me find solutions to the challenges I bring to them. Whether it\'s helping us stay tax compliant, sending 1099s, or supporting us to find ways to leverage our finance apps to better align with our shifting needs, kept.pro has become a reliable partner that I\'m confident will meet us at every step for many years to come.',
      author: 'Isaac H.',
    },
    {
      quote: 'James and his team have been great for us. We finally committed to having a team with bookkeeping, controller, and CFO services. The first go around with another firm did not go so well (my fault for going with the lower price.) Since hiring kept.pro, we have revamped most of our accounting methods, and they have helped us with many key improvements in our processes. They have also made quite a few good introductions. I appreciate the fact that they spend a lot of time educating myself and my team, increasing our financial knowledge.',
      author: 'Gabe C.',
    },
    {
      quote: 'I have had the pleasure of working with kept.Pro for over a year now. Their team is very knowledgeable and always professional, responsive, and kind. I am very happy with how our financials are presented and how smooth our processes have been since we have been working together. With their guidance, we have also implemented new systems to create efficiencies within our business and are very pleased with the results!',
      author: 'Monique C.',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#313d46] mb-4">
            What Our Customers Are Saying
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-8 md:p-12 rounded-lg shadow-lg relative">
            {/* Navigation Arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[#50a744] hover:text-[#45993d] transition-colors"
              aria-label="Previous testimonial"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-[#50a744] hover:text-[#45993d] transition-colors"
              aria-label="Next testimonial"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Testimonial Content */}
            <div className="px-12">
              <p className="text-lg md:text-xl text-[#393f41] mb-6 leading-relaxed">
                &ldquo;{testimonials[currentIndex].quote}&rdquo;
              </p>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <div>
                  <p className="text-[#313d46] font-semibold text-lg">
                    {testimonials[currentIndex].author}
                  </p>
                  <div className="flex items-center gap-2 mt-1">
                    <Image src="/Google.png" alt="Google" width={20} height={20} className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-[#50a744]' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
