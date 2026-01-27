'use client';

import { useState } from 'react';

export default function Testimonials() {
  const testimonials = [
    {
      quote: 'Working with Numeriq Tax and Accounting while we launched our business was an incredible value for two reasons. One, we knew things were getting set up right, so we wouldn\'t have to go back in the future to fix things. Two, the team was really helpful in teaching our team all the important components of our accounting, so we felt confident running that side of the business. I highly recommend Numeriq Tax and Accounting!!',
      author: 'Kate N.',
    },
    {
      quote: 'Numeriq Tax and Accounting has been a tremendous asset to my business. When we first partnered, they quickly straightened out and simplified our books to align with our unique needs. The team is extremely friendly and knowledgeable. My lack of finance background never diminishes the effort they put towards helping me find solutions to the challenges I bring to them.',
      author: 'Isaac H.',
    },
    {
      quote: 'The team has been great for us. We finally committed to having a team with bookkeeping, controller, and CFO services. The first go around with another firm did not go so well (my fault for going with the lower price.) Since hiring Numeriq Tax and Accounting, we have revamped most of our accounting methods, and they have helped us with many key improvements in our processes.',
      author: 'Gabe C.',
    },
    {
      quote: 'I have had the pleasure of working with Numeriq Tax and Accounting for over a year now. Their team is very knowledgeable and always professional, responsive, and kind. I am very happy with how our financials are presented and how smooth our processes have been since we have been working together.',
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
              <p className="text-[#313d46] font-semibold text-lg">
                — {testimonials[currentIndex].author}
              </p>
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
