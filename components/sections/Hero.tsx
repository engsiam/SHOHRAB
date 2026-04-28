'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { Code, Brain, Globe } from 'lucide-react';
import { gsap } from '@/lib/animations/gsap';

export default function Hero() {
  const floatingRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    floatingRefs.current.forEach((el, i) => {
      if (!el) return;

      gsap.to(el, {
        y: 'random(-30,30)',
        x: 'random(-20,20)',
        rotation: 'random(-10,10)',
        duration: 4 + i,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
    });
  }, []);

  return (
    <section className="relative min-h-[110vh] flex items-center justify-center overflow-hidden bg-[#020617]">

      {/* HERO RADIAL GRADIENT - OPTIMIZED */}
      <div className="absolute inset-0 hero-glow" />
      
      {/* FADE TO BLEND */}
      <div className="absolute inset-0 hero-fade" />

      {/* CONTENT */}
      <div className="relative z-10 text-center max-w-5xl px-6">

        {/* Badge */}
        <div className="mb-6 inline-block px-4 py-1 rounded-full border border-cyan-400/15 bg-cyan-400/5 text-cyan-400 text-xs tracking-widest uppercase">
          Available for new projects
        </div>

        {/* Name */}
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-3">
          MD. Shohrab Hossain
        </h1>

        {/* Role */}
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-6">
          Software Engineer
        </h2>

        {/* Description */}
        <p className="text-white/80 max-w-xl mx-auto mb-12 text-lg leading-relaxed">
          Architecting high-performance scalable systems and intuitive digital experiences
          with a focus on precision and clean engineering.
        </p>

        {/* 🔥 BIG AVATAR - INCREASED SIZE */}
        <div className="relative w-96 h-96 md:w-80 md:h-80 mx-auto mb-12">

          {/* glow layers */}
          <div className="absolute inset-0 rounded-full bg-cyan-400/15 blur-3xl animate-pulse"></div>
          <div className="absolute inset-0 rounded-full border border-cyan-400/30 shadow-[0_0_40px_rgba(0,242,255,0.4)]"></div>

          {/* image */}
          <div className="absolute inset-3 rounded-full overflow-hidden border border-white/10">
            <Image
              src="/shohrab.jpg"
              alt="Shohrab"
              fill
              className="object-cover"
            />
          </div>

          {/* 🔥 FLOATING ICONS */}
          {[Code, Brain, Globe].map((Icon, i) => (
            <div
              key={i}
              ref={(el) => { floatingRefs.current[i] = el; }}
              className="absolute w-12 h-12 rounded-xl bg-[rgba(255,255,255,0.02)] backdrop-blur border border-white/5 flex items-center justify-center shadow-lg hover:border-cyan-400/30 hover:-translate-y-1 transition-all duration-300"
              style={{
                top: i === 0 ? '-20px' : i === 1 ? '50%' : 'auto',
                left: i === 1 ? '-30px' : 'auto',
                right: i === 0 ? '-20px' : i === 2 ? '-30px' : 'auto',
                bottom: i === 2 ? '-20px' : 'auto',
              }}
            >
              <Icon className="w-5 h-5 text-cyan-400" />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center gap-6">
          <a href="#projects" className="px-7 py-3 bg-cyan-400 text-black rounded-xl font-semibold hover:scale-105 hover:shadow-[0_0_30px_rgba(0,242,255,0.5)] transition-all duration-300">
            View Projects ↓
          </a>

          <a href="#contact" className="px-7 py-3 border border-white/20 text-white rounded-xl hover:bg-white/10 hover:border-white/30 transition-all duration-300">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
}