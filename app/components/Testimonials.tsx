'use client';

export default function Testimonials() {
  const testimonials = [
    {
      quote: 'Working with kept.pro while we launched our business was an incredible value for two reasons. One, we knew things were getting set up right, so we wouldn\'t have to go back in the future to fix things. Two, the team was really helpful in teaching our team all the important components of our accounting, so we felt confident running that side of the business. I highly recommend kept.pro!!',
      author: 'Kate N.',
    },
    {
      quote: 'kept.pro has been a tremendous asset to my business. When we first partnered, they quickly straightened out and simplified our books to align with our unique needs. The team at kept.pro is extremely friendly and knowledgeable. My lack of finance background never diminishes the effort they put towards helping me find solutions to the challenges I bring to them.',
      author: 'Isaac H.',
    },
    {
      quote: 'James and his team have been great for us. We finally committed to having a team with bookkeeping, controller, and CFO services. The first go around with another firm did not go so well (my fault for going with the lower price.) Since hiring kept.pro, we have revamped most of our accounting methods, and they have helped us with many key improvements in our processes.',
      author: 'Gabe C.',
    },
    {
      quote: 'I have had the pleasure of working with kept.Pro for over a year now. Their team is very knowledgeable and always professional, responsive, and kind. I am very happy with how our financials are presented and how smooth our processes have been since we have been working together.',
      author: 'Monique C.',
    },
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#313d46] mb-4">
            What Our Customers Are Saying
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 md:p-8 rounded-lg border border-gray-200"
            >
              <p className="text-[#393f41] mb-4 italic">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <p className="text-[#313d46] font-semibold">
                — {testimonial.author}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
