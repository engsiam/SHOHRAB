'use client';

import { motion } from 'framer-motion';
import { gsap } from '@/lib/animations/gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef, useEffect } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { useGlobalStore } from '@/lib/store/useGlobalStore';

const projects = [

  {
  id: '1',
  title: 'Offizonee — Event Management API Platform',
  description: 'A scalable event management backend powering Offizonee, featuring real-time seat tracking, secure payment processing, and high-performance API architecture built with Node.js and MongoDB.',
  techStack: ['Node.js', 'MongoDB', 'Express.js','prisma','Nextjs'],
  image: 'https://i.ibb.co.com/5h4c6nBr/offizone.png',
  liveUrl: 'https://offizonee.vercel.app',
  githubUrl: '#',
  className: 'md:col-span-12'
},
  {
  id: '2',
  title: 'Odyssey — Premium E-Commerce Platform',
  description: 'A modern, scalable e-commerce platform featuring Firebase authentication, dynamic product catalog, protected routes, and Zustand-powered state management. Designed with performance, clean UI, and seamless user experience in mind.',
  techStack: ['Next.js', 'TypeScript', 'Firebase', 'Zustand', 'Framer Motion'],
  image: 'https://i.ibb.co.com/rf0jYRyN/odyss.jpg',
  liveUrl: 'https://odyssey-premium-e-commerce-platform.vercel.app/',
  githubUrl: 'https://github.com/engsiam/Odyssey-Premium-E-Commerce-Platform',
  className: 'md:col-span-6'
},
{
  id: '3',
  title: 'LuxeMart — High-Performance E-Commerce Frontend',
  description: 'A production-grade e-commerce frontend built with Next.js and GSAP, featuring advanced animations, Zustand state management, and a highly optimized, responsive user experience.',
  techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'GSAP', 'Zustand'],
  image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=400&fit=crop',
  liveUrl: '#',
  githubUrl: '#',
  className: 'md:col-span-6'
},
];

export default function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { selectedProject, setSelectedProject, isProjectModalOpen, toggleProjectModal } = useGlobalStore();

  useEffect(() => {
    if (!sectionRef.current) return;
    const elements = sectionRef.current.querySelectorAll('.project-card');
    
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
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="py-section-gap px-8 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-[rgba(255,255,255,0.05)]"></div>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <span className="font-label-caps text-primary-fixed uppercase tracking-[0.2em] mb-4 block">Portfolio</span>
            <h2 className="font-h2 text-h2 text-white">Featured Projects</h2>
          </div>
          <a className="text-primary-fixed hover:text-white transition-colors flex items-center gap-2 group text-xs font-bold tracking-widest uppercase" href="https://github.com/engsiam?tab=repositories" target="_blank" rel="noopener noreferrer">
            VIEW ALL REPOS <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">arrow_right_alt</span>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
  {projects.map((project, index) => {
    const isFeatured = index === 0;

    return (
      <div
        key={project.id}
        className={`glass-card rounded-3xl overflow-hidden group project-card ${
          isFeatured ? 'md:col-span-12' : 'md:col-span-6'
        } hover:border-cyan-400/20`}
        style={{opacity: 1}}
      >
        <div
          className={`grid ${
            isFeatured ? 'md:grid-cols-2' : 'grid-cols-1'
          }`}
        >
          {/* Image */}
         <div className="relative w-full aspect-[16/10] overflow-hidden">
  <Image
    src={project.image}
    alt={project.title}
    fill
    className="object-cover transition-transform duration-700 group-hover:scale-105"
  />
  <div className="absolute inset-0 bg-[rgba(28,32,37,0.3)] group-hover:bg-transparent transition-all duration-500"></div>
</div>

          {/* Content */}
          <div className="p-6 md:p-8 flex flex-col justify-center">
            <div className="flex flex-wrap gap-2 mb-4">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 bg-cyan-400/10 text-cyan-400 rounded-full text-[10px] font-bold"
                >
                  {tech}
                </span>
              ))}
            </div>

            <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
              {project.title}
            </h3>

            <p className="text-white/80 text-sm md:text-base mb-6">
              {project.description}
            </p>

            <div className="flex gap-3">
              <Button
                className="bg-primary-container text-on-primary-container px-5 py-2 rounded-xl text-xs font-bold uppercase tracking-widest transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(0,242,255,0.4)] duration-300"
                onClick={() => {
                  setSelectedProject(project);
                  toggleProjectModal();
                }}
              >
                View Details
              </Button>

              <a
                href={project.liveUrl}
                target="_blank"
                className="px-5 py-2 border border-white/20 rounded-xl hover:bg-white/10 hover:border-white/30 transition-all duration-300"
              >
                <span className="material-symbols-outlined text-sm">
                  launch
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  })}
</div>
      </div>

      <Dialog open={isProjectModalOpen} onOpenChange={toggleProjectModal}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>{selectedProject?.title}</DialogTitle>
            <DialogDescription>{selectedProject?.description}</DialogDescription>
          </DialogHeader>
          {selectedProject && (
            <div className="space-y-4">
              <div className="relative h-64 w-full rounded-lg overflow-hidden">
                <Image src={selectedProject.image} alt={selectedProject.title} fill className="object-cover" />
              </div>
              <div className="flex flex-wrap gap-2">
                {selectedProject.techStack.map((tech) => (
                  <span key={tech} className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <Button asChild>
                  <a href={selectedProject.liveUrl} target="_blank" rel="noopener noreferrer">Live Demo</a>
                </Button>
                <Button variant="outline" asChild>
                  <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer">Source Code</a>
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
