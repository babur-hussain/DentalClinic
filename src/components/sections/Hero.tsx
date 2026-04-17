"use client";

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/Button';

export function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  // Background slow zoom (parallax feel)
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // Sequential text fade-in variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] as const }
    }
  };

  const openWhatsApp = () => {
    const number = "919876543210"; 
    const message = encodeURIComponent("Hello, I want to book an appointment with Dr. Sumit Gujare.");
    window.location.href = `https://wa.me/${number}?text=${message}`;
  };

  const makeCall = () => {
    window.location.href = "tel:+919876543210";
  };

  return (
    <section ref={ref} id="home" className="relative w-full h-screen min-h-[600px] overflow-hidden flex items-center bg-[var(--color-brand-black)]">

      {/* Cinematic Background */}
      <motion.div
        className="absolute inset-0 z-0 origin-center"
        style={{ scale, y, opacity }}
      >
        <Image
          src="/images/bg.webp"
          alt="Luxury Dental Clinic"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-brand-black)]/90 via-[var(--color-brand-black)]/60 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-brand-black)] via-transparent to-transparent opacity-80"></div>
      </motion.div>

      {/* Content */}
      <div className="container relative z-10 px-6 md:px-12 lg:px-24 mx-auto max-w-7xl">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-2xl text-white"
        >
          <motion.div variants={item} className="mb-4">
            <span className="inline-block py-1.5 px-4 rounded-full glass-dark text-[var(--color-brand-gold)] font-medium text-xs tracking-widest uppercase mb-6 backdrop-blur-md">
              Welcome to Delight Dental Care
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-heading leading-tight mb-6 text-white"
          >
            Experience <br /> Premium Dental <br /> Care in <span className="text-[var(--color-brand-gold)]">Betul</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="text-lg md:text-xl text-gray-300 font-light mb-10 max-w-lg leading-relaxed"
          >
            Trusted by hundreds of happy patients with a 5-star experience. We combine artistry with advanced dentistry.
          </motion.p>

          <motion.div variants={item} className="flex flex-col sm:flex-row gap-4">
            <Button onClick={openWhatsApp} size="lg" className="w-full sm:w-auto text-base">
              Book Appointment on WhatsApp
            </Button>
            <Button onClick={makeCall} variant="outline" size="lg" className="w-full sm:w-auto text-base border-white text-white hover:bg-white hover:text-[var(--color-brand-black)]">
              Call Now
            </Button>
          </motion.div>
        </motion.div>
      </div>

    </section>
  );
}
