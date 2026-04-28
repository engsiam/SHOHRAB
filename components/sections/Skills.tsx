'use client';

import { motion } from 'framer-motion';
import { gsap } from '@/lib/animations/gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef, useEffect } from 'react';

export default function Skills() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    gsap.fromTo(
      sectionRef.current.querySelectorAll('.skill-card'),
      { y: 60, opacity: 0, scale: 0.9 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        stagger: 0.15,
        duration: 0.8,
        scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
      }
    );
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="py-section-gap px-8 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-[rgba(255,255,255,0.05)]"></div>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 skill-card">
          <span className="font-label-caps text-primary-fixed uppercase tracking-[0.2em] mb-4 block">Technical Expertise</span>
          <h2 className="font-h2 text-h2 text-white">Full-Stack Capabilities</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Frontend */}
          <div className="glass-card p-8 rounded-3xl skill-group border-t-2 border-primary-fixed/30 skill-card">
            <div className="mb-6 flex items-center justify-between">
              <span className="material-symbols-outlined text-3xl text-primary-fixed">desktop_windows</span>
              <span className="font-label-caps text-xs text-primary-fixed">Frontend</span>
            </div>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-2 text-xs font-bold text-white uppercase tracking-wider"><span>React / Next.js</span><span>95%</span></div>
                <div className="h-1.5 w-full bg-surface-container-highest rounded-full overflow-hidden"><div className="h-full bg-primary-container progress-bar-fill w-[95%]"></div></div>
              </div>
              <div>
                <div className="flex justify-between mb-2 text-xs font-bold text-white uppercase tracking-wider"><span>Tailwind CSS</span><span>98%</span></div>
                <div className="h-1.5 w-full bg-surface-container-highest rounded-full overflow-hidden"><div className="h-full bg-primary-container progress-bar-fill w-[98%]"></div></div>
              </div>
              <div>
                <div className="flex justify-between mb-2 text-xs font-bold text-white uppercase tracking-wider"><span>TypeScript</span><span>90%</span></div>
                <div className="h-1.5 w-full bg-surface-container-highest rounded-full overflow-hidden"><div className="h-full bg-primary-container progress-bar-fill w-[90%]"></div></div>
              </div>
            </div>
          </div>

          {/* Backend */}
          <div className="glass-card p-8 rounded-3xl skill-group border-t-2 border-secondary-container/30 skill-card">
            <div className="mb-6 flex items-center justify-between">
              <span className="material-symbols-outlined text-3xl text-secondary">terminal</span>
              <span className="font-label-caps text-xs text-secondary">Backend</span>
            </div>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-2 text-xs font-bold text-white uppercase tracking-wider"><span>Node / Express</span><span>92%</span></div>
                <div className="h-1.5 w-full bg-surface-container-highest rounded-full overflow-hidden"><div className="h-full bg-secondary-container progress-bar-fill w-[92%]"></div></div>
              </div>
              <div>
                <div className="flex justify-between mb-2 text-xs font-bold text-white uppercase tracking-wider"><span>GraphQL / Apollo</span><span>85%</span></div>
                <div className="h-1.5 w-full bg-surface-container-highest rounded-full overflow-hidden"><div className="h-full bg-secondary-container progress-bar-fill w-[85%]"></div></div>
              </div>
              <div>
                <div className="flex justify-between mb-2 text-xs font-bold text-white uppercase tracking-wider"><span>REST APIs</span><span>95%</span></div>
                <div className="h-1.5 w-full bg-surface-container-highest rounded-full overflow-hidden"><div className="h-full bg-secondary-container progress-bar-fill w-[95%]"></div></div>
              </div>
            </div>
          </div>

          {/* Database */}
          <div className="glass-card p-8 rounded-3xl skill-group border-t-2 border-tertiary-fixed/30 skill-card">
            <div className="mb-6 flex items-center justify-between">
              <span className="material-symbols-outlined text-3xl text-tertiary-fixed-dim">database</span>
              <span className="font-label-caps text-xs text-tertiary-fixed-dim">Database</span>
            </div>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-2 text-xs font-bold text-white uppercase tracking-wider"><span>MongoDB</span><span>90%</span></div>
                <div className="h-1.5 w-full bg-surface-container-highest rounded-full overflow-hidden"><div className="h-full bg-tertiary-container progress-bar-fill w-[90%]"></div></div>
              </div>
              <div>
                <div className="flex justify-between mb-2 text-xs font-bold text-white uppercase tracking-wider"><span>PostgreSQL</span><span>80%</span></div>
                <div className="h-1.5 w-full bg-surface-container-highest rounded-full overflow-hidden"><div className="h-full bg-tertiary-container progress-bar-fill w-[80%]"></div></div>
              </div>
              <div>
                <div className="flex justify-between mb-2 text-xs font-bold text-white uppercase tracking-wider"><span>Redis Cache</span><span>75%</span></div>
                <div className="h-1.5 w-full bg-surface-container-highest rounded-full overflow-hidden"><div className="h-full bg-tertiary-container progress-bar-fill w-[75%]"></div></div>
              </div>
            </div>
          </div>

          {/* Tools */}
          <div className="glass-card p-8 rounded-3xl skill-group border-t-2 border-primary-fixed-dim/30 skill-card">
            <div className="mb-6 flex items-center justify-between">
              <span className="material-symbols-outlined text-3xl text-primary-fixed-dim">settings</span>
              <span className="font-label-caps text-xs text-primary-fixed-dim">Tools</span>
            </div>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-2 text-xs font-bold text-white uppercase tracking-wider"><span>Docker / AWS</span><span>75%</span></div>
                <div className="h-1.5 w-full bg-surface-container-highest rounded-full overflow-hidden"><div className="h-full bg-primary-fixed-dim progress-bar-fill w-[75%]"></div></div>
              </div>
              <div>
                <div className="flex justify-between mb-2 text-xs font-bold text-white uppercase tracking-wider"><span>Firebase / GCP</span><span>88%</span></div>
                <div className="h-1.5 w-full bg-surface-container-highest rounded-full overflow-hidden"><div className="h-full bg-primary-fixed-dim progress-bar-fill w-[88%]"></div></div>
              </div>
              <div>
                <div className="flex justify-between mb-2 text-xs font-bold text-white uppercase tracking-wider"><span>CI/CD Pipelines</span><span>82%</span></div>
                <div className="h-1.5 w-full bg-surface-container-highest rounded-full overflow-hidden"><div className="h-full bg-primary-fixed-dim progress-bar-fill w-[82%]"></div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
