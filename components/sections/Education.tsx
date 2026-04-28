'use client';

import { motion } from 'framer-motion';
import { gsap } from '@/lib/animations/gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef, useEffect } from 'react';

export default function Education() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const elements = sectionRef.current.querySelectorAll('.edu-item');
    
    // Set initial state for animation
    gsap.set(elements, { y: 40, opacity: 0 });
    
    gsap.to(elements, {
      y: 0,
      opacity: 1,
      stagger: 0.2,
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
    <section id="education" ref={sectionRef} className="py-16 md:py-section-gap relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-[rgba(255,255,255,0.04)]"></div>
      <div className="max-w-7xl mx-auto px-8">
         <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="edu-item">
            <span className="font-label-caps text-cyan-400 uppercase tracking-[0.2em] mb-4 block">Academic</span>
            <h2 className="font-h2 text-h2 text-white mb-8">Education</h2>
            <div className="glass-card p-8 rounded-3xl relative overflow-hidden group hover:border-cyan-400/20 transition-all duration-300">
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <span className="material-symbols-outlined text-6xl text-cyan-400/50">school</span>
              </div>
              <div className="text-cyan-400 font-bold text-xs uppercase tracking-widest mb-2">Graduated</div>
              <h3 className="font-h3 text-2xl text-white mb-2">B.Sc. in Computer Science & Engineering</h3>
              <p className="text-white/80 mb-4">Bangladesh University, Dhaka</p>
              <p className="text-white/60 text-sm">Focused on Algorithm Analysis, Database Management Systems, and Software Design Patterns.</p>
            </div>
          </div>

          <div className="edu-item">
            <span className="font-label-caps text-blue-400 uppercase tracking-[0.2em] mb-4 block">Credentials</span>
            <h2 className="font-h2 text-h2 text-white mb-8">Certifications</h2>
            <div className="space-y-4">
              <div className="glass-card p-6 rounded-2xl flex items-center gap-6 group hover:border-blue-400/20 hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined">workspace_premium</span>
                </div>
                <div>
                  <h4 className="text-white font-bold">MERN Full Stack Development</h4>
                  <p className="text-white/60 text-xs uppercase tracking-widest">Ostad — Professional Certification</p>
                </div>
              </div>
              <div className="glass-card p-6 rounded-2xl flex items-center gap-6 group hover:border-cyan-400/20 hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined">verified</span>
                </div>
                <div>
                  <h4 className="text-white font-bold">Modern JavaScript (ES6+)</h4>
                  <p className="text-white/60 text-xs uppercase tracking-widest">Udemy — Advanced Level</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
