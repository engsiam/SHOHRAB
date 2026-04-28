'use client';

import { motion } from 'framer-motion';
import { gsap } from '@/lib/animations/gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef, useEffect } from 'react';

export default function Experience() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const elements = sectionRef.current.querySelectorAll('.exp-item');
    
    // Set initial state for animation
    gsap.set(elements, { x: -40, opacity: 0 });
    
    gsap.to(elements, {
      x: 0,
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
    <section id="experience" ref={sectionRef} className="py-16 md:py-section-gap relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-[rgba(255,255,255,0.04)]"></div>
      <div className="max-w-5xl mx-auto px-8 relative">
          <div className="text-center mb-20 exp-item">
          <span className="font-label-caps text-cyan-400 uppercase tracking-[0.2em] mb-4 block">Professional Journey</span>
          <h2 className="font-h2 text-h2 text-white">Experience</h2>
        </div>

        <div className="absolute left-1/2 top-[220px] bottom-10 w-[2px] bg-gradient-to-b from-cyan-400 via-cyan-400/50 to-transparent hidden md:block z-10 shadow-[0_0_15px_rgba(0,242,255,0.8)]"></div>

        <div className="space-y-16">
          {/* Infinisoft */}
          <div className="flex flex-col md:flex-row gap-12 items-start relative exp-item" style={{opacity: 1}}>
            <div className="flex-1 md:text-right">
              <div className="inline-block px-4 py-1 rounded-full bg-cyan-400/10 text-cyan-400 text-[10px] font-bold uppercase mb-4">JAN 2022 - PRESENT</div>
              <h3 className="font-h3 text-h3 text-white mb-1">Senior Software Engineer</h3>
              <div className="text-cyan-300 font-bold text-sm mb-6 uppercase tracking-widest">Infinisoft Solutions</div>
              <ul className="text-white/80 font-body-md space-y-2 md:inline-block text-left">
                <li className="flex items-start gap-2"><span className="text-cyan-400 mt-1">•</span> Architected high-performance MERN applications for enterprise clients.</li>
                <li className="flex items-start gap-2"><span className="text-cyan-400 mt-1">•</span> Reduced server latency by 40% through optimized database indexing.</li>
                <li className="flex items-start gap-2"><span className="text-cyan-400 mt-1">•</span> Led a team of 5 developers in implementing mission-critical features.</li>
              </ul>
            </div>
            <div className="absolute left-1/2 top-4 -translate-x-1/2 z-10 hidden md:block">
              <div className="w-4 h-4 rounded-full bg-cyan-400 shadow-[0_0_15px_rgba(0,242,255,0.8)] border-4 border-[#020617]"></div>
            </div>
            <div className="flex-1"></div>
          </div>

          {/* Codethinker */}
          <div className="flex flex-col md:flex-row gap-12 items-start relative exp-item" style={{opacity: 1}}>
            <div className="flex-1"></div>
            <div className="absolute left-1/2 top-4 -translate-x-1/2 z-10 hidden md:block">
              <div className="w-4 h-4 rounded-full bg-slate-700 border-4 border-[#020617]"></div>
            </div>
            <div className="flex-1">
              <div className="inline-block px-4 py-1 rounded-full bg-[rgba(255,255,255,0.05)] text-white/60 text-[10px] font-bold uppercase mb-4">JUNE 2020 - DEC 2021</div>
              <h3 className="font-h3 text-h3 text-white mb-1">Software Developer</h3>
              <div className="text-cyan-300 font-bold text-sm mb-6 uppercase tracking-widest">Codethinker Ltd.</div>
              <ul className="text-white/80 font-body-md space-y-2">
                <li className="flex items-start gap-2"><span className="text-cyan-400 mt-1">•</span> Developed and maintained 10+ web and mobile applications.</li>
                <li className="flex items-start gap-2"><span className="text-cyan-400 mt-1">•</span> Integrated third-party payment gateways and real-time notification systems.</li>
                <li className="flex items-start gap-2"><span className="text-cyan-400 mt-1">•</span> Streamlined development workflows using CI/CD and Docker.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
