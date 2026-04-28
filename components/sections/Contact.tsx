'use client';

import { motion } from 'framer-motion';
import { gsap } from '@/lib/animations/gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    gsap.fromTo(
      sectionRef.current.querySelectorAll('.contact-item'),
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 1,
        scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
      }
    );
  }, []);

  return (
    <section id="contact" ref={sectionRef} className="py-section-gap px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="contact-item">
            <span className="font-label-caps text-primary-fixed uppercase tracking-[0.2em] mb-4 block">Let's Connect</span>
            <h2 className="font-h2 text-h2 text-white mb-8 leading-tight">Ready to start your next project?</h2>
            <p className="text-on-surface-variant font-body-lg mb-12">I'm always open to discussing new opportunities, creative ideas, or architectural visions. Reach out and let's build something exceptional.</p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-6 glass-card p-6 rounded-2xl group hover:-translate-x-2 transition-all">
                <div className="w-12 h-12 rounded-xl bg-primary-fixed/10 flex items-center justify-center text-primary-fixed"><span className="material-symbols-outlined">mail</span></div>
                <div><div className="text-[10px] font-bold text-outline uppercase tracking-widest mb-1">Email</div><div className="text-white font-bold">shohrab.hossain@gmail.com</div></div>
              </div>
              <div className="flex items-center gap-6 glass-card p-6 rounded-2xl group hover:-translate-x-2 transition-all">
                <div className="w-12 h-12 rounded-xl bg-secondary-container/10 flex items-center justify-center text-secondary"><span className="material-symbols-outlined">call</span></div>
                <div><div className="text-[10px] font-bold text-outline uppercase tracking-widest mb-1">Phone</div><div className="text-white font-bold">+880 01742 080475</div></div>
              </div>
              <div className="flex items-center gap-6 glass-card p-6 rounded-2xl group hover:-translate-x-2 transition-all">
                <div className="w-12 h-12 rounded-xl bg-tertiary-fixed/10 flex items-center justify-center text-tertiary-fixed-dim"><span className="material-symbols-outlined">location_on</span></div>
                <div><div className="text-[10px] font-bold text-outline uppercase tracking-widest mb-1">Location</div><div className="text-white font-bold">Dhaka, Bangladesh</div></div>
              </div>
            </div>
          </div>

          <div className="contact-item glass-card p-10 rounded-3xl border border-white/5 bg-surface-container-low/40">
            <form className="space-y-6">
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-outline uppercase tracking-widest block">Name</label>
                <input className="w-full bg-surface-container-high/50 border border-outline-variant rounded-xl px-4 py-4 text-white focus:outline-none focus:border-primary-fixed focus:ring-1 focus:ring-primary-fixed transition-all placeholder:text-slate-600" placeholder="Your Name" type="text"/>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-outline uppercase tracking-widest block">Email</label>
                <input className="w-full bg-surface-container-high/50 border border-outline-variant rounded-xl px-4 py-4 text-white focus:outline-none focus:border-primary-fixed focus:ring-1 focus:ring-primary-fixed transition-all placeholder:text-slate-600" placeholder="your@email.com" type="email"/>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-outline uppercase tracking-widest block">Message</label>
                <textarea className="w-full bg-surface-container-high/50 border border-outline-variant rounded-xl px-4 py-4 text-white focus:outline-none focus:border-primary-fixed focus:ring-1 focus:ring-primary-fixed transition-all placeholder:text-slate-600" placeholder="Tell me about your project..." rows={4}></textarea>
              </div>
              <button className="w-full glow-button bg-primary-container text-on-primary-container py-4 rounded-xl font-bold uppercase tracking-[0.2em] text-[10px] transition-all hover:scale-[1.02] active:scale-[0.98]" type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
