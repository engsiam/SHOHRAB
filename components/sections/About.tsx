'use client';

import { motion } from 'framer-motion';
import { gsap, ScrollTrigger } from '@/lib/animations/gsap';
import { useRef, useEffect } from 'react';

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    
    const elements = sectionRef.current.querySelectorAll('.about-item');
    
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

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-16 md:py-section-gap relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-[rgba(255,255,255,0.04)]"></div>
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="about-item">
            <span className="font-label-caps text-primary-fixed uppercase tracking-[0.2em] mb-4 block">Background</span>
            <h2 className="font-h2 text-h2 text-white mb-8 leading-tight">Driven by Engineering Excellence</h2>
            <div className="space-y-6 text-white/80 font-body-md text-body-lg">
              <p>I am a Software Engineer based in Bangladesh with a relentless drive for building high-performance web and mobile applications. My journey started with a fascination for computer architecture, evolving into a career dedicated to the MERN stack.</p>
              <p>Specializing in Node.js and React, I have successfully engineered scalable architectures for fintech, e-commerce, and enterprise SaaS platforms. I thrive on solving complex concurrency problems and optimizing system latency.</p>
              <p>Beyond the code, I am passionate about creating user-centric designs that make complex systems feel intuitive. My experience with React Native allows me to bridge the gap between web and mobile seamlessly.</p>
            </div>
          </div>
          <div className="about-item grid grid-cols-2 gap-6">
            <div className="glass-card p-8 rounded-2xl text-center hover:border-cyan-400/20 transition-all duration-300">
              <div className="text-primary-fixed text-h2 font-h1 mb-2">4+</div>
              <div className="font-label-caps text-white/60 uppercase text-xs">Years Professional Experience</div>
            </div>
            <div className="glass-card p-8 rounded-2xl text-center hover:border-cyan-400/20 transition-all duration-300">
              <div className="text-primary-fixed text-h2 font-h1 mb-2">20+</div>
              <div className="font-label-caps text-white/60 uppercase text-xs">Complex Projects Delivered</div>
            </div>
            <div className="glass-card p-8 rounded-2xl text-center hover:border-cyan-400/20 transition-all duration-300">
              <div className="text-primary-fixed text-h2 font-h1 mb-2">MERN</div>
              <div className="font-label-caps text-white/60 uppercase text-xs">Core Specialization</div>
            </div>
            <div className="glass-card p-8 rounded-2xl text-center hover:border-cyan-400/20 transition-all duration-300">
              <div className="text-primary-fixed text-h2 font-h1 mb-2">99%</div>
              <div className="font-label-caps text-white/60 uppercase text-xs">Code Quality & Stability</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
