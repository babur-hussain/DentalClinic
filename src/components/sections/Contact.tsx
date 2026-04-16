"use client";

import React, { useState } from 'react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    treatment: 'General Consultation'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const number = "919876543210"; // Replace with clinic WhatsApp number
    const message = encodeURIComponent(
      `Hello Delight Dental Care!\n\nI want to book an appointment.\n\n*Name:* ${formData.name}\n*Phone:* ${formData.phone}\n*Treatment:* ${formData.treatment}`
    );
    window.open(`https://wa.me/${number}?text=${message}`, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <SectionHeading subtitle="Book Appointment" title="Get in Touch With Us" />
        
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Form */}
          <div className="bg-[var(--color-brand-gray)] rounded-3xl p-8 md:p-12 shadow-sm">
            <h3 className="text-2xl font-bold font-heading mb-6">Schedule Your Visit</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                <input 
                  type="text" 
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-5 py-3 md:py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-gold)] transition-shadow bg-white"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                <input 
                  type="tel" 
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-5 py-3 md:py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-gold)] transition-shadow bg-white"
                  placeholder="+91 xxxxx xxxxx"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Treatment Required</label>
                <select 
                  name="treatment"
                  value={formData.treatment}
                  onChange={handleChange}
                  className="w-full px-5 py-3 md:py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-gold)] transition-shadow bg-white appearance-none"
                >
                  <option>General Consultation</option>
                  <option>Root Canal Treatment</option>
                  <option>Dental Implants</option>
                  <option>Teeth Whitening</option>
                  <option>Braces / Aligners</option>
                  <option>Other</option>
                </select>
              </div>

              <Button type="submit" size="lg" className="w-full mt-4 text-lg">
                Book on WhatsApp
              </Button>
            </form>
          </div>

          {/* Contact Info & Map */}
          <div className="space-y-8 flex flex-col">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[var(--color-brand-gray)] rounded-full flex items-center justify-center shrink-0">
                  <MapPin className="text-[var(--color-brand-gold)]" size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-[var(--color-brand-black)] mb-1">Clinic Address</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Link Road, near Madaan Hospital, Betul, Madhya Pradesh 460001
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[var(--color-brand-gray)] rounded-full flex items-center justify-center shrink-0">
                  <Phone className="text-[var(--color-brand-gold)]" size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-[var(--color-brand-black)] mb-1">Call Us</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">+91 98765 43210</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[var(--color-brand-gray)] rounded-full flex items-center justify-center shrink-0">
                  <Clock className="text-[var(--color-brand-gold)]" size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-[var(--color-brand-black)] mb-1">Timings</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">Mon - Sat: 10:00 AM - 8:00 PM<br/>Sunday closed</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[var(--color-brand-gray)] rounded-full flex items-center justify-center shrink-0">
                  <Mail className="text-[var(--color-brand-gold)]" size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-[var(--color-brand-black)] mb-1">Email</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">care@delightdental.com</p>
                </div>
              </div>
            </div>
            
            {/* Reception Visual */}
            <div className="w-full h-48 md:h-64 rounded-3xl overflow-hidden relative shadow-sm border border-gray-100">
               <img src="/images/real_waiting_room.jpg" alt="Clinic Reception and Waiting Area" className="w-full h-full object-cover object-center" />
            </div>

            {/* Map Placeholder iframe */}
            <div className="flex-grow w-full rounded-3xl overflow-hidden min-h-[250px] shadow-sm relative">
                <iframe 
                  src="https://maps.google.com/maps?q=Delight+Dental+Care+And+Implant+Center+(dr+sumit+gujare)+Betul&t=&z=17&ie=UTF8&iwloc=&output=embed" 
                  className="absolute inset-0 w-full h-full border-0" 
                  allowFullScreen={false} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
