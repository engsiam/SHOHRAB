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
    const elements = sectionRef.current.querySelectorAll('.contact-item');
    
    // Set initial state for animation
    gsap.set(elements, { y: 40, opacity: 0 });
    
    gsap.to(elements, {
      y: 0,
      opacity: 1,
      stagger: 0.15,
      duration: 0.6,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 85%',
        toggleActions: 'play none none none',
        once: true,
      },
    });
  }, []);

  return (
    <section id="contact" ref={sectionRef} className="py-16 md:py-section-gap px-4 md:px-8 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-[rgba(255,255,255,0.04)]"></div>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="contact-item">
            <span className="font-label-caps text-cyan-400 uppercase tracking-[0.2em] mb-4 block">Let's Connect</span>
            <h2 className="font-h2 text-h2 text-white mb-8 leading-tight">Ready to start your next project?</h2>
            <p className="text-white/80 font-body-lg mb-12">I'm always open to discussing new opportunities, creative ideas, or architectural visions. Reach out and let's build something exceptional.</p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-6 glass-card p-6 rounded-2xl group hover:-translate-x-2 hover:border-cyan-400/20 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400"><span className="material-symbols-outlined">mail</span></div>
                <div><div className="text-[10px] font-bold text-white/60 uppercase tracking-widest mb-1">Email</div><div className="text-white font-bold">shohrab.hossain@gmail.com</div></div>
              </div>
              <div className="flex items-center gap-6 glass-card p-6 rounded-2xl group hover:-translate-x-2 hover:border-blue-400/20 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400"><span className="material-symbols-outlined">call</span></div>
                <div><div className="text-[10px] font-bold text-white/60 uppercase tracking-widest mb-1">Phone</div><div className="text-white font-bold">+880 01742 080475</div></div>
              </div>
              <div className="flex items-center gap-6 glass-card p-6 rounded-2xl group hover:-translate-x-2 hover:border-cyan-300/20 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-cyan-300/10 flex items-center justify-center text-cyan-300"><span className="material-symbols-outlined">location_on</span></div>
                <div><div className="text-[10px] font-bold text-white/60 uppercase tracking-widest mb-1">Location</div><div className="text-white font-bold">Dhaka, Bangladesh</div></div>
              </div>
            </div>
          </div>

          <div className="contact-item glass-card p-10 rounded-3xl border border-[rgba(255,255,255,0.05)] hover:border-cyan-400/20 transition-all duration-300">
            <form className="space-y-6">
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-white/60 uppercase tracking-widest block">Name</label>
                <input className="w-full bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.08)] rounded-xl px-4 py-4 text-white focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/50 transition-all placeholder:text-white/30" placeholder="Your Name" type="text"/>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-white/60 uppercase tracking-widest block">Email</label>
                <input className="w-full bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.08)] rounded-xl px-4 py-4 text-white focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/50 transition-all placeholder:text-white/30" placeholder="your@email.com" type="email"/>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-white/60 uppercase tracking-widest block">Message</label>
                <textarea className="w-full bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.08)] rounded-xl px-4 py-4 text-white focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/50 transition-all placeholder:text-white/30" placeholder="Tell me about your project..." rows={4}></textarea>
              </div>
              <button className="w-full bg-cyan-400 text-black py-4 rounded-xl font-bold uppercase tracking-[0.2em] text-[10px] transition-all hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(0,242,255,0.5)] active:scale-[0.98] duration-300" type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
