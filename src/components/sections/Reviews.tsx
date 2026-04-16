"use client";

import React, { useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: 'Rahul Sharma',
    text: 'The best dental experience I have ever had! The clinic is extremely premium, and Dr. Sumit is very gentle. Highly recommended for anyone in Betul.',
    rating: 5,
  },
  {
    name: 'Priya Patel',
    text: 'I was always afraid of dentists, but Delight Dental completely changed my view. The root canal was painless, and the staff is very caring.',
    rating: 5,
  },
  {
    name: 'Amit Verma',
    text: 'State-of-the-art facilities right here in Betul. The hygiene standards are impeccable. Very happy with my teeth whitening treatment.',
    rating: 5,
  },
  {
    name: 'Neha Singh',
    text: 'Excellent service! The doctor took the time to explain the entire procedure. The follow-up care was brilliant.',
    rating: 5,
  },
  {
    name: 'Suresh Kumar',
    text: 'Got my dental implants done here. Fantastic results. It feels totally natural and looks great. The pricing is also very transparent.',
    rating: 5,
  }
];

export function Reviews() {
  const [emblaRef] = useEmblaCarousel({ loop: true, align: 'center' }, [Autoplay({ delay: 4000, stopOnInteraction: false })]);

  return (
    <section id="reviews" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <SectionHeading subtitle="Testimonials" title="What Our Patients Say" />
        
        <div className="mt-16 relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex -ml-4">
              {reviews.map((review, index) => (
                <div 
                  key={index} 
                  className="flex-[0_0_100%] min-w-0 md:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-4"
                >
                  <div className="bg-[var(--color-brand-gray)] rounded-2xl p-8 h-full flex flex-col relative group">
                    <Quote className="absolute top-6 right-6 text-[var(--color-brand-gold)] opacity-20 group-hover:scale-110 transition-transform" size={48} />
                    
                    <div className="flex gap-1 mb-6">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="fill-[var(--color-brand-gold)] text-[var(--color-brand-gold)]" size={18} />
                      ))}
                    </div>
                    
                    <p className="text-gray-600 font-light leading-relaxed mb-8 flex-grow italic">
                      "{review.text}"
                    </p>
                    
                    <div>
                      <h4 className="font-heading font-bold text-[var(--color-brand-black)]">{review.name}</h4>
                      <span className="text-xs text-gray-500 uppercase tracking-widest mt-1 block">Verified Patient</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
