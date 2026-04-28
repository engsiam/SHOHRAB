'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import Image from 'next/image';
import { Code, Brain, Globe } from 'lucide-react';
import { gsap } from '@/lib/animations/gsap';

const NodeJsIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0">
    <path d="M12 2L2 7l10 5 10-5-10-5z" fill="#68A063"/>
    <path d="M2 17l10 5 10-5M2 12l10 5 10-5" stroke="#68A063" strokeWidth="2" fill="none"/>
  </svg>
);

const TypeScriptIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <rect x="2" y="2" width="20" height="20" rx="2" fill="#3178C6"/>
    <text x="12" y="16" fontSize="11" fontWeight="bold" fill="white" textAnchor="middle" fontFamily="Arial">TS</text>
  </svg>
);

const ReactIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="2.5" fill="#61DAFB"/>
    <ellipse cx="12" cy="12" rx="11" ry="4.5" stroke="#61DAFB" strokeWidth="1.5" fill="none"/>
    <ellipse cx="12" cy="12" rx="11" ry="4.5" stroke="#61DAFB" strokeWidth="1.5" fill="none" transform="rotate(60 12 12)"/>
    <ellipse cx="12" cy="12" rx="11" ry="4.5" stroke="#61DAFB" strokeWidth="1.5" fill="none" transform="rotate(120 12 12)"/>
  </svg>
);

export default function Hero() {
  const floatingRefs = useRef<(HTMLDivElement | null)[]>([]);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  }, []);

  useEffect(() => {
    floatingRefs.current.forEach((el, i) => {
      if (!el) return;
      
      // Float animation - slower and smoother
      gsap.to(el, {
        y: 'random(-15, 15)',
        x: 'random(-10, 10)',
        duration: 5 + i * 0.8,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });

      // Swing animation - slower pendulum effect
      gsap.to(el, {
        rotation: -10,
        duration: 3 + i * 0.5,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
        transformOrigin: 'top center',
      });
    });
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const particles = Array.from({ length: 150 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 4 + 1,
      speedX: (Math.random() - 0.5) * 0.18,
      speedY: (Math.random() - 0.5) * 0.18,
      opacity: Math.random() * 0.6 + 0.2,
      hue: Math.random() * 60 + 180,
      type: Math.random() > 0.6 ? 'glow' : Math.random() > 0.5 ? 'ring' : 'dot',
      trail: [] as { x: number; y: number }[],
    }));

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.x += p.speedX;
        p.y += p.speedY;

        p.trail.push({ x: p.x, y: p.y });
        if (p.trail.length > 12) p.trail.shift();

        if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
        if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;

        if (p.trail.length > 1) {
          p.trail.forEach((point, i) => {
            const alpha = (i / p.trail.length) * p.opacity * 0.3;
            ctx.beginPath();
            ctx.arc(point.x, point.y, p.size * 0.5, 0, Math.PI * 2);
            ctx.fillStyle = `hsla(${p.hue}, 100%, 60%, ${alpha})`;
            ctx.fill();
          });
        }

        if (p.type === 'glow') {
          const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 4);
          gradient.addColorStop(0, `hsla(${p.hue}, 100%, 70%, ${p.opacity})`);
          gradient.addColorStop(1, `hsla(${p.hue}, 100%, 70%, 0)`);
          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * 4, 0, Math.PI * 2);
          ctx.fill();
        } else if (p.type === 'ring') {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * 1.5, 0, Math.PI * 2);
          ctx.strokeStyle = `hsla(${p.hue}, 100%, 60%, ${p.opacity})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        } else {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fillStyle = `hsla(${p.hue}, 100%, 60%, ${p.opacity})`;
          ctx.fill();
        }
      });
      requestAnimationFrame(animate);
    };
    animate();

    return () => window.removeEventListener('resize', resizeCanvas);
  }, []);

  const floatingIcons = [
    { Icon: Code, style: { top: '-30px', right: '-30px' } },
    { Icon: Brain, style: { left: '-40px', top: '50%', transform: 'translateY(-50%)' } },
    { Icon: Globe, style: { bottom: '-30px', right: '-30px' } },
    { Icon: NodeJsIcon, style: { top: '-40px', left: '-30px' } },
    { Icon: TypeScriptIcon, style: { right: '-40px', top: '50%', transform: 'translateY(-50%)' } },
    { Icon: ReactIcon, style: { bottom: '-40px', left: '-30px' } },
  ];

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#020617] py-20 sm:py-0"
      onMouseMove={handleMouseMove}
    >
      <div className="absolute inset-0 hero-glow" />
      <div className="absolute inset-0 hero-fade" />

       <canvas
         ref={canvasRef}
         className="absolute inset-0 w-full h-full z-0 pointer-events-none"
       />

      <div
        className="absolute pointer-events-none z-10"
        style={{
          left: mousePos.x,
          top: mousePos.y,
          transform: 'translate(-50%, -50%)',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(0,242,255,0.18) 0%, rgba(0,242,255,0) 70%)',
        }}
      />

      <div className="relative z-20 text-center max-w-5xl px-4 sm:px-6">
        <div className="mb-4 sm:mb-6 inline-block px-3 sm:px-4 py-1 rounded-full border border-cyan-400/15 bg-cyan-400/5 text-cyan-400 text-[10px] sm:text-xs tracking-widest uppercase">
          Available for new projects
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2 sm:mb-3">
          MD. Shohrab Hossain
        </h1>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4 sm:mb-6">
          Software Engineer
        </h2>

        <p className="text-white/80 max-w-xl mx-auto mb-8 sm:mb-12 text-sm sm:text-base md:text-lg leading-relaxed px-2 sm:px-0">
          Architecting high-performance scalable systems and intuitive digital experiences
          with a focus on precision and clean engineering.
        </p>

        <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 mx-auto mb-8 sm:mb-12">
          <div className="absolute inset-0 rounded-full bg-cyan-400/15 blur-3xl animate-pulse"></div>
          <div className="absolute inset-0 rounded-full border border-cyan-400/30 shadow-[0_0_40px_rgba(0,242,255,0.4)]"></div>

          <div className="absolute inset-3 rounded-full overflow-hidden border border-white/10">
               <Image
               src="/shohrab.jpg"
               alt="Shohrab"
               fill
               className="object-cover"
             />
          </div>

          {floatingIcons.map(({ Icon, style }, i) => (
             <div
               key={i}
               ref={(el) => { floatingRefs.current[i] = el; }}
               className="absolute w-12 h-12 sm:w-16 sm:h-16 rounded-xl bg-[rgba(255,255,255,0.05)] backdrop-blur border border-cyan-400/20 flex items-center justify-center shadow-lg hover:border-cyan-400/50 hover:-translate-y-1 transition-all duration-300"
               style={style}
             >
               <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-cyan-400" />
             </div>
           ))}
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 pt-4">
          <a href="#projects" className="px-6 sm:px-7 py-3 bg-cyan-400 text-black rounded-xl font-semibold hover:scale-105 hover:shadow-[0_0_30px_rgba(0,242,255,0.5)] transition-all duration-300 text-sm sm:text-base">
            View Projects ↓
          </a>

          <a href="#contact" className="px-6 sm:px-7 py-3 border border-white/20 text-white rounded-xl hover:bg-white/10 hover:border-white/30 transition-all duration-300 text-sm sm:text-base">
            Let's Talk 👋
          </a>
        </div>
      </div>
    </section>
  );
}
