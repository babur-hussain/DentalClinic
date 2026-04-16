"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, X, PhoneCall } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  
  const { scrollY } = useScroll();
  
  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50 && !scrolled) setScrolled(true);
    else if (latest <= 50 && scrolled) setScrolled(false);
  });

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset' };
  }, [isOpen]);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#doctor' },
    { name: 'Services', href: '#services' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <motion.header
        initial={{ backgroundColor: 'rgba(255,255,255,0)', backdropFilter: 'blur(0px)', padding: '20px 0' }}
        animate={{ 
          backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.85)' : 'rgba(255,255,255,0)',
          backdropFilter: scrolled ? 'blur(16px)' : 'blur(0px)',
          padding: scrolled ? '12px 0' : '20px 0',
          boxShadow: scrolled ? '0 1px 3px 0 rgba(0, 0, 0, 0.05)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(0,0,0,0.05)' : '1px solid rgba(255,255,255,0)'
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="fixed top-0 w-full z-50"
      >
        <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-[var(--color-brand-gold)] rounded-lg flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
              <span className="text-white font-bold text-xl font-heading">D</span>
            </div>
            <motion.div 
              animate={{ color: scrolled ? 'var(--color-brand-black)' : '#ffffff' }}
              transition={{ duration: 0.3 }}
              className="flex flex-col"
            >
              <span className="font-heading font-extrabold text-2xl leading-none tracking-tight">Delight Dental</span>
              <span className="text-xs uppercase tracking-[0.2em] font-bold opacity-90 mt-1">Premium Care</span>
            </motion.div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <motion.div key={link.name}>
                <Link
                  href={link.href}
                  className="text-base font-bold tracking-wide transition-colors"
                >
                  <motion.span
                    animate={{ color: scrolled ? 'var(--color-brand-black)' : 'rgba(255, 255, 255, 0.9)' }}
                    whileHover={{ color: 'var(--color-brand-gold)' }}
                    transition={{ duration: 0.2 }}
                  >
                    {link.name}
                  </motion.span>
                </Link>
              </motion.div>
            ))}
            <motion.div animate={{ opacity: 1 }}>
              <Button variant={scrolled ? 'primary' : 'outline'} className={!scrolled ? 'border-white text-white hover:bg-white hover:text-[var(--color-brand-black)]' : ''}>
                Book Appointment
              </Button>
            </motion.div>
          </nav>

          {/* Mobile Menu Toggle */}
          <motion.button
            animate={{ color: scrolled ? 'var(--color-brand-black)' : '#ffffff' }}
            className="md:hidden p-2 rounded-md"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white pt-24 px-6 pb-6 flex flex-col justify-between md:hidden"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-heading text-[var(--color-brand-black)] border-b border-[var(--color-brand-gray)] pb-4"
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <div className="mb-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-[var(--color-brand-gray)] rounded-full flex items-center justify-center">
                  <PhoneCall size={20} className="text-[var(--color-brand-gold)]" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Call for Emergency</p>
                  <p className="font-bold text-lg">+91 xxxxx xxxxx</p>
                </div>
              </div>
              <Button className="w-full" size="lg">Book Appointment</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
