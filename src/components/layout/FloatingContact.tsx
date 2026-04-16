"use client";

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MessageSquare } from 'lucide-react';

export function FloatingContact() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show floating contact after scrolling down a bit
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openWhatsApp = () => {
    // Replace with real number
    const number = "919876543210"; 
    const message = encodeURIComponent("Hello, I want to book an appointment with Dr. Sumit Gujare.");
    window.open(`https://wa.me/${number}?text=${message}`, '_blank');
  };

  const makeCall = () => {
    window.location.href = "tel:+919876543210";
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          className="fixed bottom-0 left-0 w-full z-50 md:hidden pb-[env(safe-area-inset-bottom)]"
        >
          <div className="glass-dark border-t border-[var(--color-brand-gold)]/20 p-4 flex gap-3 pb-6">
            <button
              onClick={makeCall}
              className="flex-1 bg-[var(--color-brand-black)] border border-[var(--color-brand-gold)]/30 text-white rounded-full py-3.5 flex justify-center items-center gap-2 font-medium active:scale-95 transition-transform shadow-lg"
            >
              <Phone size={18} className="text-[var(--color-brand-gold)]" />
              <span>Call Now</span>
            </button>
            <button
              onClick={openWhatsApp}
              className="flex-[1.5] bg-[var(--color-brand-gold)] text-white rounded-full py-3.5 flex justify-center items-center gap-2 font-medium active:scale-95 transition-transform shadow-[0_4px_14px_0_rgba(201,169,110,0.39)]"
            >
              <MessageSquare size={18} />
              <span>WhatsApp</span>
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
