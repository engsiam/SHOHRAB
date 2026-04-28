'use client';

import { useEffect, useRef } from 'react';
import { gsap } from '@/lib/animations/gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Server, FileCode, Globe, Brain, Atom } from 'lucide-react';
import { useGlobalStore } from '@/lib/store/useGlobalStore';

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const floatingRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!textRef.current) return;
    const tl = gsap.timeline({ delay: 0.5 });
    tl.fromTo(
      textRef.current.querySelectorAll('.hero-text-item'),
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.15, duration: 0.8 }
    );
  }, []);

  useEffect(() => {
    floatingRefs.current.forEach((ref, index) => {
      if (!ref) return;
      gsap.to(ref, {
        y: 'random(-20, 20)',
        x: 'random(-15, 15)',
        rotation: 'random(-10, 10)',
        duration: 'random(3, 5)',
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: index * 0.3,
      });
    });
  }, []);

  useEffect(() => {
    if (!imageRef.current || !heroRef.current) return;
    ScrollTrigger.create({
      trigger: heroRef.current,
      start: 'top top',
      end: 'bottom top',
      scrub: true,
      onUpdate: (self) => {
        gsap.to(imageRef.current, { y: self.progress * 100, duration: 0.1 });
      },
    });
  }, []);

  return (
    <section ref={heroRef} className="min-h-screen flex flex-col items-center justify-center pt-32 px-gutter relative overflow-hidden" id="home">
      <div className="absolute inset-0 z-0 hero-bg-animated bg-[radial-gradient(circle_at_50%_50%,rgba(0,219,231,0.05),transparent_70%)]"></div>
      
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-12 items-center relative z-10">
        <div ref={textRef} className="md:col-span-7">
          <div className="inline-block px-4 py-1 rounded-full border border-primary-fixed/20 bg-primary-fixed/5 text-primary-fixed text-label-caps mb-6 hero-text-item">
            AVAILABLE FOR NEW OPPORTUNITIES
          </div>

          <h1 className="font-h1 text-h1 text-on-surface mb-6 leading-tight hero-text-item">
            Building Scalable and <br/>
            <span className="gradient-text" style={{ filter: 'drop-shadow(0 0 12px rgba(116, 245, 255, 0.4))' }}>High-Performance</span> <br/>
            Applications
          </h1>

          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mb-10 leading-relaxed hero-text-item">
            Senior Software Engineer specializing in the MERN stack. I design and build mission-critical scalable systems and high-concurrency mobile applications that deliver exceptional user experiences.
          </p>

          <div className="flex flex-wrap gap-6 mb-12 hero-text-item">
            <a className="glow-button bg-secondary-container text-on-secondary-container px-8 py-4 rounded-xl font-bold transition-all hover:scale-105 active:scale-95 hover:border-transparent" href="#projects">View Projects</a>
            <a className="border border-outline-variant text-on-surface px-8 py-4 rounded-xl font-bold transition-all hover:bg-surface-container-low hover:border-0" href="https://drive.google.com/file/d/1pLO0mt9YhpjhNJIq6PWazFzpw9sRUmOt/view?usp=sharing" target="_blank" rel="noopener noreferrer">Download Resume</a>
          </div>

          <div className="flex gap-6 items-center hero-text-item">
            <span className="text-label-caps text-outline uppercase">Connect</span>
            <div className="w-12 h-[1px] bg-outline-variant"></div>
            <a className="text-on-surface hover:text-primary-fixed transition-colors flex items-center gap-2 no-underline" href="https://github.com/engsiam" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5" />
              <span className="text-xs font-bold uppercase tracking-widest">GitHub</span>
            </a>
            <a className="text-on-surface hover:text-primary-fixed transition-colors flex items-center gap-2 no-underline" href="https://https://www.linkedin.com/in/md-shohrab-hossain-14745133/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-5 h-5" />
              <span className="text-xs font-bold uppercase tracking-widest">LinkedIn</span>
            </a>
          </div>
        </div>

        <div ref={imageRef} className="md:col-span-5 relative group">
          <div className="absolute -inset-4 bg-primary-fixed/20 blur-3xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
          <div className="relative rounded-[2.5rem] overflow-hidden border border-primary-fixed/30 aspect-[4/5] shadow-[0_0_50px_-12px_rgba(0,242,255,0.3)] bg-surface-container-low">
            <Image src="https://lh3.googleusercontent.com/aida/ADBb0ujKtXjU7w7PQ4icyxOoOitujaCVniM9WnFR_fPa0ioye0hO9zIfp8JRxYMuotFAYs2J6UkKP71WMjt8ZHi3k6poc6du1O7HQpDM6J780NAJVCT5QUPb-KWANbYpYWOSwbBTmxBKw4uUE4XnhSxc4ZwkMiiNzePjDz7dth32cWpmX9DHOHVKkPvxUaY88YM5sTyxV4lkV1ZUwJjN7QY-KOKzfoL53vxVELBmd-uxDchxi8a-fTr8vW4Q87E_N5KkKQWzsN-0kjO2" alt="Portrait of MD. Shohrab Hossain" fill className="object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700" />
        </div>

          {/* Floating Tech Icons */}
          <div ref={(el) => { floatingRefs.current[0] = el; }} className="absolute -top-6 -right-6 w-14 h-14 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center shadow-lg animate-bounce duration-[3000ms] z-20 floating-icon">
            <span className="material-symbols-outlined text-primary-fixed text-xl">dns</span>
          </div>
          <div ref={(el) => { floatingRefs.current[1] = el; }} className="absolute top-1/2 -left-10 w-12 h-12 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center shadow-lg animate-pulse duration-[4000ms] z-20 floating-icon">
            <span className="material-symbols-outlined text-secondary text-lg">code</span>
          </div>
          <div ref={(el) => { floatingRefs.current[2] = el; }} className="absolute -bottom-4 -left-4 w-16 h-16 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center shadow-lg animate-bounce duration-[3500ms] z-20 floating-icon">
            <span className="material-symbols-outlined text-tertiary-fixed-dim text-2xl">api</span>
          </div>
          <div ref={(el) => { floatingRefs.current[3] = el; }} className="absolute bottom-1/4 -right-8 w-12 h-12 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center shadow-lg animate-pulse duration-[2500ms] z-20 floating-icon">
            <span className="material-symbols-outlined text-primary-container text-lg">psychology</span>
          </div>
        <div ref={(el) => { floatingRefs.current[1] = el; }} className="absolute top-1/2 -left-10 w-12 h-12 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 flex flex-col items-center justify-center shadow-lg animate-pulse duration-[4000ms] z-20">
          <FileCode className="w-5 h-5 text-secondary" />
          <span className="text-[8px] font-bold text-secondary leading-none text-center uppercase tracking-tighter mt-1">TS</span>
        </div>
        <div ref={(el) => { floatingRefs.current[2] = el; }} className="absolute -bottom-4 -left-4 w-16 h-16 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 flex flex-col items-center justify-center shadow-lg animate-bounce duration-[3500ms] z-20">
          <Globe className="w-7 h-7 text-tertiary-fixed-dim" />
          <span className="text-[8px] font-bold text-tertiary-fixed-dim leading-none text-center uppercase tracking-tighter mt-1">GraphQL</span>
        </div>
        <div ref={(el) => { floatingRefs.current[3] = el; }} className="absolute bottom-1/4 -right-8 w-12 h-12 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 flex flex-col items-center justify-center shadow-lg animate-pulse duration-[2500ms] z-20">
          <Brain className="w-5 h-5 text-primary-container" />
          <span className="text-[8px] font-bold text-primary-container leading-none text-center uppercase tracking-tighter mt-1">AI</span>
        </div>
      </div>
      </div>
    </section>
  );
}
