"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ShieldCheck, Crosshair, Sparkles, HeartHandshake, BadgeIndianRupee } from 'lucide-react';

const trustFeatures = [
  {
    title: 'Advanced Equipment',
    description: 'We use the latest dental technology for precise diagnosis and effective treatments.',
    icon: Crosshair
  },
  {
    title: 'Experienced Doctor',
    description: '10+ years of dedicated service in advanced dental care and patient comfort.',
    icon: ShieldCheck
  },
  {
    title: '100% Sterilization',
    description: 'We follow a strict 4-step sterilization protocol to ensure a completely hygienic environment.',
    icon: Sparkles
  },
  {
    title: 'Friendly Care',
    description: 'Our compassionate approach ensures you feel relaxed and safe during any procedure.',
    icon: HeartHandshake
  },
  {
    title: 'Transparent Pricing',
    description: 'Honest assessments with no hidden charges. Premium care at accessible rates.',
    icon: BadgeIndianRupee
  }
];

export function TrustCore() {
  return (
    <section className="py-24 bg-[var(--color-brand-gray)] text-[var(--color-brand-black)] relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <SectionHeading 
          subtitle="Our Standards" 
          title="Why Choose Delight Dental Care" 
        />
        
        <div className="mt-12 md:mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          <div className="space-y-6 md:space-y-8 order-2 lg:order-1">
            {trustFeatures.map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex gap-4 md:gap-5"
              >
                <div className="w-12 h-12 rounded-full border border-[var(--color-brand-gold)]/30 flex items-center justify-center bg-[var(--color-brand-gold)]/10 shrink-0">
                  <feature.icon className="text-[var(--color-brand-gold)]" size={24} />
                </div>
                <div>
                  <h4 className="text-lg md:text-xl font-heading font-bold mb-1 md:mb-2">{feature.title}</h4>
                  <p className="text-gray-600 font-light text-sm leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Visual Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2 w-full aspect-square md:aspect-[4/3] lg:aspect-auto lg:h-[600px] relative rounded-3xl overflow-hidden shadow-2xl border border-white"
          >
              <Image 
                src="/images/real_doctor_working.jpg"
                alt="Dr. Sumit Gujare performing a procedure"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-brand-black)]/60 to-transparent" />
              
              <div className="absolute bottom-6 md:bottom-8 left-6 md:left-8 right-6 md:right-8 bg-white/90 backdrop-blur-md p-4 md:p-6 rounded-2xl flex items-center gap-4">
                <ShieldCheck size={40} className="text-[var(--color-brand-gold)] shrink-0" />
                <div>
                  <h3 className="text-lg md:text-xl font-heading font-bold text-[var(--color-brand-black)]">ISO Certified Care</h3>
                  <p className="text-gray-500 text-xs md:text-sm">Adhering to global safety standards.</p>
                </div>
              </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
