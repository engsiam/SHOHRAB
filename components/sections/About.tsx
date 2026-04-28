'use client';

import { motion } from 'framer-motion';
import { gsap } from '@/lib/animations/gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef, useEffect } from 'react';

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    gsap.fromTo(
      sectionRef.current.querySelectorAll('.about-item'),
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 1,
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
      }
    );
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-section-gap bg-surface-container-lowest">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="about-item">
            <span className="font-label-caps text-primary-fixed uppercase tracking-[0.2em] mb-4 block">Background</span>
            <h2 className="font-h2 text-h2 text-white mb-8 leading-tight">Driven by Engineering Excellence</h2>
            <div className="space-y-6 text-on-surface-variant font-body-md text-body-lg">
              <p>I am a Software Engineer based in Bangladesh with a relentless drive for building high-performance web and mobile applications. My journey started with a fascination for computer architecture, evolving into a career dedicated to the MERN stack.</p>
              <p>Specializing in Node.js and React, I have successfully engineered scalable architectures for fintech, e-commerce, and enterprise SaaS platforms. I thrive on solving complex concurrency problems and optimizing system latency.</p>
              <p>Beyond the code, I am passionate about creating user-centric designs that make complex systems feel intuitive. My experience with React Native allows me to bridge the gap between web and mobile seamlessly.</p>
            </div>
          </div>
          <div className="about-item grid grid-cols-2 gap-6">
            <div className="glass-card p-8 rounded-2xl text-center">
              <div className="text-primary-fixed text-h2 font-h1 mb-2">4+</div>
              <div className="font-label-caps text-outline uppercase text-xs">Years Professional Experience</div>
            </div>
            <div className="glass-card p-8 rounded-2xl text-center">
              <div className="text-primary-fixed text-h2 font-h1 mb-2">20+</div>
              <div className="font-label-caps text-outline uppercase text-xs">Complex Projects Delivered</div>
            </div>
            <div className="glass-card p-8 rounded-2xl text-center">
              <div className="text-primary-fixed text-h2 font-h1 mb-2">MERN</div>
              <div className="font-label-caps text-outline uppercase text-xs">Core Specialization</div>
            </div>
            <div className="glass-card p-8 rounded-2xl text-center">
              <div className="text-primary-fixed text-h2 font-h1 mb-2">99%</div>
              <div className="font-label-caps text-outline uppercase text-xs">Code Quality & Stability</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
