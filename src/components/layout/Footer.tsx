"use client";

import React from 'react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-[#050505] pt-20 pb-10 text-gray-400 border-t border-[var(--color-brand-gold)]/20">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <span className="font-heading font-bold text-2xl text-white block leading-none">Delight Dental</span>
              <span className="text-xs uppercase tracking-[0.2em] text-[var(--color-brand-gold)] mt-2 block">Premium Care</span>
            </Link>
            <p className="text-sm font-light leading-relaxed mb-6">
              Betul's most trusted, premium dental clinic providing state-of-the-art treatments with compassionate care.
            </p>
          </div>

          <div>
            <h4 className="text-white font-heading font-bold mb-6 text-lg tracking-wide">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="#home" className="hover:text-[var(--color-brand-gold)] transition-colors">Home</Link></li>
              <li><Link href="#doctor" className="hover:text-[var(--color-brand-gold)] transition-colors">About Dr. Sumit</Link></li>
              <li><Link href="#services" className="hover:text-[var(--color-brand-gold)] transition-colors">Treatments</Link></li>
              <li><Link href="#reviews" className="hover:text-[var(--color-brand-gold)] transition-colors">Patient Reviews</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-heading font-bold mb-6 text-lg tracking-wide">Services</h4>
            <ul className="space-y-3 text-sm">
              <li className="hover:text-[var(--color-brand-gold)] transition-colors cursor-pointer">Root Canal</li>
              <li className="hover:text-[var(--color-brand-gold)] transition-colors cursor-pointer">Dental Implants</li>
              <li className="hover:text-[var(--color-brand-gold)] transition-colors cursor-pointer">Teeth Whitening</li>
              <li className="hover:text-[var(--color-brand-gold)] transition-colors cursor-pointer">Orthodontics</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-heading font-bold mb-6 text-lg tracking-wide">Visit Us</h4>
            <p className="text-sm leading-relaxed mb-4">
              Link Road, near Madaan Hospital, Betul, Madhya Pradesh 460001
            </p>
            <p className="text-sm">
              <strong className="text-white">Phone:</strong> +91 98765 43210
            </p>
          </div>

        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-light">
          <p>&copy; {new Date().getFullYear()} Delight Dental Care. All rights reserved.</p>
          <div className="flex gap-4">
            <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
