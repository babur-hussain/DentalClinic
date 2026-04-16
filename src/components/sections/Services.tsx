"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Sparkles, Stethoscope, Scissors, ShieldPlus, Smile, Activity } from 'lucide-react';

const services = [
  {
    title: 'Root Canal Treatment',
    description: 'Painless microscopic root canals to save your natural teeth with maximum comfort.',
    icon: Activity,
    image: '/images/service_root_canal.png'
  },
  {
    title: 'Teeth Whitening',
    description: 'Professional, safe whitening treatments for a brighter, more confident smile.',
    icon: Sparkles,
    image: '/images/service_whitening.png'
  },
  {
    title: 'Dental Implants',
    description: 'Permanent, natural-looking replacements for missing teeth that last a lifetime.',
    icon: ShieldPlus,
    image: '/images/service_implants.png'
  },
  {
    title: 'Braces & Aligners',
    description: 'Advanced orthodontic solutions including clear aligners to straighten your teeth.',
    icon: Smile,
    image: '/images/service_aligners.png'
  },
  {
    title: 'Dentures & Prosthetics',
    description: 'High-quality, comfortable complete and partial dentures to restore your smile and chewing function.',
    icon: Smile, // changing to smile instead of scissors
    image: '/images/real_dentures.png' 
  },
  {
    title: 'Cleaning & Scaling',
    description: 'Thorough removal of plaque and tartar for optimal oral hygiene and fresh breath.',
    icon: Stethoscope,
    image: '/images/service_cleaning.png'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export function Services() {
  return (
    <section id="services" className="py-24 bg-[var(--color-brand-gray)] relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <SectionHeading subtitle="What We Offer" title="Premium Dental Services" />
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-16"
        >
          {services.map((service, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 relative overflow-hidden flex flex-col"
            >
              {/* Image Header */}
              <div className="relative w-full aspect-video overflow-hidden">
                <Image 
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
                <div className="absolute bottom-4 left-4 z-20 bg-white/90 backdrop-blur-sm p-2 rounded-xl text-[var(--color-brand-black)]">
                  <service.icon size={24} className="text-[var(--color-brand-gold)]" />
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10 p-6 md:p-8 flex-grow">
                <h3 className="text-xl font-heading font-bold text-[var(--color-brand-black)] mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 font-light leading-relaxed text-sm">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
