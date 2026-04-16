"use client";

import React from 'react';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ChevronRight, ChevronLeft } from 'lucide-react';

const transformations = [
  { 
    label: 'Complete Smile Makeover', 
    desc: 'Restored absolute confidence with premium cosmetic ceramic veneers.',
    image: '/images/before_after_1.png'
  },
  { 
    label: 'Dental Implants', 
    desc: 'Flawlessly replaced missing incisor with a natural-looking permanent implant.',
    image: '/images/before_after_2.png'
  },
  { 
    label: 'Orthodontic Alignment', 
    desc: 'Corrected severe crowding for a perfectly straight, healthy smile.',
    image: '/images/before_after_3.png'
  },
  { 
    label: 'Periodontal Care & Whitening', 
    desc: 'Completely eradicated tartar buildup and restored gum health and bright enamel.',
    image: '/images/before_after_4.png'
  },
];

export function BeforeAfter() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 4000, stopOnInteraction: false })]);

  return (
    <section className="py-24 bg-[var(--color-brand-black)] text-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <SectionHeading 
          subtitle="Real Results" 
          title="Transformations" 
          className="[&_h2]:text-white"
        />
        
        <div className="mt-12 max-w-5xl mx-auto relative group">
          <div className="overflow-hidden rounded-2xl md:rounded-3xl shadow-2xl bg-white/5 border border-white/10" ref={emblaRef}>
            <div className="flex">
              {transformations.map((item, idx) => (
                <div key={idx} className="flex-[0_0_100%] min-w-0 relative aspect-square md:aspect-video flex flex-col justify-center items-center">
                   
                   <Image 
                     src={item.image}
                     alt={item.label}
                     fill
                     className="object-cover"
                   />
                   
                   <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/90 via-black/50 to-transparent p-6 md:p-8 flex flex-col">
                      <h4 className="text-white font-bold font-heading text-xl md:text-2xl mb-2">{item.label}</h4>
                      <p className="text-gray-300 text-sm md:text-base font-light">{item.desc}</p>
                   </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation Controls (Hidden on strictly mobile so it doesn't cover images) */}
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 hidden md:flex items-center justify-between pointer-events-none md:-mx-6">
            <button 
              className="pointer-events-auto w-10 h-10 md:w-14 md:h-14 rounded-full glass border border-white/20 flex items-center justify-center text-white hover:bg-[var(--color-brand-gold)] hover:border-transparent hover:text-white transition-all shadow-lg backdrop-blur-md"
              onClick={() => emblaApi?.scrollPrev()}
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              className="pointer-events-auto w-10 h-10 md:w-14 md:h-14 rounded-full glass border border-white/20 flex items-center justify-center text-white hover:bg-[var(--color-brand-gold)] hover:border-transparent hover:text-white transition-all shadow-lg backdrop-blur-md"
              onClick={() => emblaApi?.scrollNext()}
            >
              <ChevronRight size={24} />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
