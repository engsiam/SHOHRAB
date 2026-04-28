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
    title: 'Event Management API',
    description: 'A robust backend infrastructure supporting large-scale event registration and management with real-time seat tracking and secure payment processing.',
    techStack: ['NODE.JS', 'MONGODB', 'EXPRESS'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    liveUrl: '#',
    githubUrl: '#',
    className: 'md:col-span-12'
  },
  {
    id: '2',
    title: 'Backend Blog Platform',
    description: 'High-performance blogging engine with Redis caching, advanced search capabilities, and automated content moderation.',
    techStack: ['TYPESCRIPT', 'REDIS', 'NODE.JS'],
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop',
    liveUrl: '#',
    githubUrl: '#',
    className: 'md:col-span-6'
  },
  {
    id: '3',
    title: 'Inventory Control Dashboard',
    description: 'Complex state-managed dashboard for inventory logistics with real-time data visualization and offline support.',
    techStack: ['REACT', 'REDUX', 'TYPESCRIPT'],
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
    gsap.fromTo(
      sectionRef.current.querySelectorAll('.project-card'),
      { y: 80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 1,
        scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
      }
    );
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="py-section-gap px-8 bg-gradient-to-b from-surface-container to-surface-container-lowest">
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
        }`}
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
  <div className="absolute inset-0 bg-slate-950/30 group-hover:bg-transparent transition-all duration-500"></div>
</div>

          {/* Content */}
          <div className="p-6 md:p-8 flex flex-col justify-center">
            <div className="flex flex-wrap gap-2 mb-4">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 bg-primary-fixed/10 text-primary-fixed rounded-full text-[10px] font-bold"
                >
                  {tech}
                </span>
              ))}
            </div>

            <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
              {project.title}
            </h3>

            <p className="text-on-surface-variant text-sm md:text-base mb-6">
              {project.description}
            </p>

            <div className="flex gap-3">
              <Button
                className="bg-primary-container text-on-primary-container px-5 py-2 rounded-xl text-xs font-bold uppercase tracking-widest transition-all hover:shadow-[0_0_20px_rgba(0,242,255,0.4)]"
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
                className="px-5 py-2 border border-outline-variant rounded-xl hover:bg-surface-container-high transition-all"
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
