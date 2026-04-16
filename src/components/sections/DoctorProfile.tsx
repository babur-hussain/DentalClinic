"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { CheckCircle2 } from 'lucide-react';

export function DoctorProfile() {
  const stats = [
    { value: 1000, suffix: '+', label: 'Patients Treated' },
    { value: 5.0, suffix: '★', label: 'Rating', decimals: 1 },
    { value: 10, suffix: '+', label: 'Years Experience' },
  ];

  const features = [
    "Expert in advanced dental treatments",
    "Patient-first philosophy",
    "Painless and comfortable procedures",
    "Highly trusted in Betul"
  ];

  return (
    <section id="doctor" className="py-24 bg-white overflow-hidden relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative aspect-[4/5] max-w-md mx-auto rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-brand-gold)]/20 to-transparent z-10" />
              <Image 
                src="/images/Doctor.jpg" 
                alt="Dr. Sumit Gujare" 
                fill 
                className="object-cover object-center"
              />
            </div>
            
            {/* Soft background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[110%] bg-[var(--color-brand-gold)] opacity-5 blur-[100px] -z-10 rounded-full" />
          </motion.div>

          {/* Content Side */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="w-full lg:w-1/2"
          >
            <SectionHeading 
              subtitle="Meet Your Doctor" 
              title="Dr. Sumit Gujare (BDS)" 
              centered={false} 
            />
            
            <p className="text-gray-600 text-lg leading-relaxed mb-8 font-light">
              With over a decade of experience, Dr. Sumit Gujare is dedicated to providing world-class dental care in a relaxing and comforting environment. Known for his meticulous approach and warm personality, he ensures every patient leaves with a confident smile.
            </p>

            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
              {features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <CheckCircle2 className="text-[var(--color-brand-gold)] shrink-0" size={20} />
                  <span className="text-[var(--color-brand-black)] font-medium text-sm">{feature}</span>
                </li>
              ))}
            </ul>

            {/* Animated Counters */}
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 pt-8 border-t border-[var(--color-brand-gray)]">
              {stats.map((stat, idx) => (
                <div key={idx}>
                  <div className="text-3xl lg:text-4xl font-bold font-heading text-[var(--color-brand-gold)] mb-2">
                    <CountUp 
                      end={stat.value} 
                      decimals={stat.decimals || 0}
                      duration={2.5} 
                      enableScrollSpy
                      scrollSpyOnce
                    />
                    {stat.suffix}
                  </div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider font-semibold">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
