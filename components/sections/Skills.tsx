'use client';

import { motion } from 'framer-motion';
import { gsap } from '@/lib/animations/gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef, useEffect } from 'react';

export default function Skills() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const elements = sectionRef.current.querySelectorAll('.skill-card');
    
    // Set initial state for animation
    gsap.set(elements, { y: 40, opacity: 0, scale: 0.95 });
    
    gsap.to(elements, {
      y: 0,
      opacity: 1,
      scale: 1,
      stagger: 0.1,
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
    <section id="skills" ref={sectionRef} className="py-16 md:py-section-gap px-4 md:px-8 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-[rgba(255,255,255,0.05)]"></div>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 skill-card">
          <span className="font-label-caps text-primary-fixed uppercase tracking-[0.2em] mb-4 block">Technical Expertise</span>
          <h2 className="font-h2 text-h2 text-white">Full-Stack Capabilities</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Frontend */}
          <div className="glass-card p-8 rounded-3xl skill-group border-t-2 border-cyan-400/20 skill-card hover:border-cyan-400/30" style={{opacity: 1}}>
            <div className="mb-6 flex items-center justify-between">
              <span className="material-symbols-outlined text-3xl text-cyan-400">desktop_windows</span>
              <span className="font-label-caps text-xs text-cyan-400">Frontend</span>
            </div>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-2 text-xs font-bold text-white/90 uppercase tracking-wider"><span>React / Next.js</span><span>95%</span></div>
                <div className="h-1.5 w-full bg-[rgba(255,255,255,0.05)] rounded-full overflow-hidden"><div className="h-full bg-cyan-400 progress-bar-fill w-[95%]"></div></div>
              </div>
              <div>
                <div className="flex justify-between mb-2 text-xs font-bold text-white/90 uppercase tracking-wider"><span>Tailwind CSS</span><span>98%</span></div>
                <div className="h-1.5 w-full bg-[rgba(255,255,255,0.05)] rounded-full overflow-hidden"><div className="h-full bg-cyan-400 progress-bar-fill w-[98%]"></div></div>
              </div>
              <div>
                <div className="flex justify-between mb-2 text-xs font-bold text-white/90 uppercase tracking-wider"><span>TypeScript</span><span>90%</span></div>
                <div className="h-1.5 w-full bg-[rgba(255,255,255,0.05)] rounded-full overflow-hidden"><div className="h-full bg-cyan-400 progress-bar-fill w-[90%]"></div></div>
              </div>
            </div>
          </div>

          {/* Backend */}
          <div className="glass-card p-8 rounded-3xl skill-group border-t-2 border-blue-500/20 skill-card hover:border-blue-500/30" style={{opacity: 1}}>
            <div className="mb-6 flex items-center justify-between">
              <span className="material-symbols-outlined text-3xl text-blue-400">terminal</span>
              <span className="font-label-caps text-xs text-blue-400">Backend</span>
            </div>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-2 text-xs font-bold text-white/90 uppercase tracking-wider"><span>Node / Express</span><span>92%</span></div>
                <div className="h-1.5 w-full bg-[rgba(255,255,255,0.05)] rounded-full overflow-hidden"><div className="h-full bg-blue-500 progress-bar-fill w-[92%]"></div></div>
              </div>
              <div>
                <div className="flex justify-between mb-2 text-xs font-bold text-white/90 uppercase tracking-wider"><span>GraphQL / Apollo</span><span>85%</span></div>
                <div className="h-1.5 w-full bg-[rgba(255,255,255,0.05)] rounded-full overflow-hidden"><div className="h-full bg-blue-500 progress-bar-fill w-[85%]"></div></div>
              </div>
              <div>
                <div className="flex justify-between mb-2 text-xs font-bold text-white/90 uppercase tracking-wider"><span>REST APIs</span><span>95%</span></div>
                <div className="h-1.5 w-full bg-[rgba(255,255,255,0.05)] rounded-full overflow-hidden"><div className="h-full bg-blue-500 progress-bar-fill w-[95%]"></div></div>
              </div>
            </div>
          </div>

          {/* Database */}
          <div className="glass-card p-8 rounded-3xl skill-group border-t-2 border-cyan-300/20 skill-card hover:border-cyan-300/30" style={{opacity: 1}}>
            <div className="mb-6 flex items-center justify-between">
              <span className="material-symbols-outlined text-3xl text-cyan-300">database</span>
              <span className="font-label-caps text-xs text-cyan-300">Database</span>
            </div>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-2 text-xs font-bold text-white/90 uppercase tracking-wider"><span>MongoDB</span><span>90%</span></div>
                <div className="h-1.5 w-full bg-[rgba(255,255,255,0.05)] rounded-full overflow-hidden"><div className="h-full bg-cyan-300 progress-bar-fill w-[90%]"></div></div>
              </div>
              <div>
                <div className="flex justify-between mb-2 text-xs font-bold text-white/90 uppercase tracking-wider"><span>PostgreSQL</span><span>80%</span></div>
                <div className="h-1.5 w-full bg-[rgba(255,255,255,0.05)] rounded-full overflow-hidden"><div className="h-full bg-cyan-300 progress-bar-fill w-[80%]"></div></div>
              </div>
              <div>
                <div className="flex justify-between mb-2 text-xs font-bold text-white/90 uppercase tracking-wider"><span>Redis Cache</span><span>75%</span></div>
                <div className="h-1.5 w-full bg-[rgba(255,255,255,0.05)] rounded-full overflow-hidden"><div className="h-full bg-cyan-300 progress-bar-fill w-[75%]"></div></div>
              </div>
            </div>
          </div>

          {/* Tools */}
          <div className="glass-card p-8 rounded-3xl skill-group border-t-2 border-blue-400/20 skill-card hover:border-blue-400/30" style={{opacity: 1}}>
            <div className="mb-6 flex items-center justify-between">
              <span className="material-symbols-outlined text-3xl text-blue-400">settings</span>
              <span className="font-label-caps text-xs text-blue-400">Tools</span>
            </div>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-2 text-xs font-bold text-white/90 uppercase tracking-wider"><span>Docker / AWS</span><span>75%</span></div>
                <div className="h-1.5 w-full bg-[rgba(255,255,255,0.05)] rounded-full overflow-hidden"><div className="h-full bg-blue-400 progress-bar-fill w-[75%]"></div></div>
              </div>
              <div>
                <div className="flex justify-between mb-2 text-xs font-bold text-white/90 uppercase tracking-wider"><span>Firebase / GCP</span><span>88%</span></div>
                <div className="h-1.5 w-full bg-[rgba(255,255,255,0.05)] rounded-full overflow-hidden"><div className="h-full bg-blue-400 progress-bar-fill w-[88%]"></div></div>
              </div>
              <div>
                <div className="flex justify-between mb-2 text-xs font-bold text-white/90 uppercase tracking-wider"><span>CI/CD Pipelines</span><span>82%</span></div>
                <div className="h-1.5 w-full bg-[rgba(255,255,255,0.05)] rounded-full overflow-hidden"><div className="h-full bg-blue-400 progress-bar-fill w-[82%]"></div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
