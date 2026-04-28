'use client';

import { motion } from 'framer-motion';
import { gsap } from '@/lib/animations/gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef, useEffect } from 'react';

export default function Education() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    gsap.fromTo(
      sectionRef.current.querySelectorAll('.edu-item'),
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.3,
        duration: 1,
        scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
      }
    );
  }, []);

  return (
    <section id="education" ref={sectionRef} className="py-section-gap relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-[rgba(255,255,255,0.05)]"></div>
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="edu-item">
            <span className="font-label-caps text-primary-fixed uppercase tracking-[0.2em] mb-4 block">Academic</span>
            <h2 className="font-h2 text-h2 text-white mb-8">Education</h2>
            <div className="glass-card p-8 rounded-3xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <span className="material-symbols-outlined text-6xl">school</span>
              </div>
              <div className="text-primary-container font-bold text-xs uppercase tracking-widest mb-2">Graduated</div>
              <h3 className="font-h3 text-2xl text-white mb-2">B.Sc. in Computer Science & Engineering</h3>
              <p className="text-on-surface-variant mb-4">Bangladesh University, Dhaka</p>
              <p className="text-sm text-outline">Focused on Algorithm Analysis, Database Management Systems, and Software Design Patterns.</p>
            </div>
          </div>

          <div className="edu-item">
            <span className="font-label-caps text-secondary uppercase tracking-[0.2em] mb-4 block">Credentials</span>
            <h2 className="font-h2 text-h2 text-white mb-8">Certifications</h2>
            <div className="space-y-4">
              <div className="glass-card p-6 rounded-2xl flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-xl bg-secondary-container/10 flex items-center justify-center text-secondary group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined">workspace_premium</span>
                </div>
                <div>
                  <h4 className="text-white font-bold">MERN Full Stack Development</h4>
                  <p className="text-xs text-outline uppercase tracking-widest">Ostad — Professional Certification</p>
                </div>
              </div>
              <div className="glass-card p-6 rounded-2xl flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-xl bg-primary-fixed/10 flex items-center justify-center text-primary-fixed group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined">verified</span>
                </div>
                <div>
                  <h4 className="text-white font-bold">Modern JavaScript (ES6+)</h4>
                  <p className="text-xs text-outline uppercase tracking-widest">Udemy — Advanced Level</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
