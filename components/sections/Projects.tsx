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
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBq3WQKOBSV8veVEzVC3w24XE-_YlNlZsT6SXiNlxUwRyvWKcb5ZpbP0je5_Oi6z3Mblt90QSQR2XSVgmpi6RWhCbSLJAsjnRG2pcY0Biwgp9rCEkox7gGEXo84zPxe6noTiLe2FA1y0wV9gAt2YbJwRWkIiI7hq7BQolq3HLkfB5lVXhP8jB20MnY8IuV2_AUoT15d-YYx6RQJPX5nld5uqEGvuj2leVDOiFGT2CuO3cfPfSsV4ch3xGfsr_YQAMpCGWw0N-D_Og',
    liveUrl: '#',
    githubUrl: '#',
    className: 'md:col-span-12'
  },
  {
    id: '2',
    title: 'Backend Blog Platform',
    description: 'High-performance blogging engine with Redis caching, advanced search capabilities, and automated content moderation.',
    techStack: ['TYPESCRIPT', 'REDIS'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBr9UBQvIBrE_LdHGMS1RVl6SaPV1a29CQwqx9TBn63oPnnEpnZTLpvNt84AgnprzAt_5Ga6mCiNSWLG6iRc3_2_-mJ49ym_vnVxyNVLP3IrOPHdtUPg3vum4PnY0UrBRjILLC798TtUy0_bZH6m8AxAtW8m8xziZTew03mPQbAV0vdsyFNlBM5XlQRM9FPrq0sZx_U743RX_E0v5dV7qcraCVY6QVjLrRWXX1kBVE9lniXSx-ou1uxjY0F16UrE60ozCZo72JN8mo',
    liveUrl: '#',
    githubUrl: '#',
    className: 'md:col-span-6'
  },
  {
    id: '3',
    title: 'Inventory Control Dashboard',
    description: 'Complex state-managed dashboard for inventory logistics with real-time data visualization and offline support.',
    techStack: ['REACT', 'REDUX'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBlTqmSgk6-KqvGA4cfE-ND3psrnRaI10OfQvOQP0ipgtflpiCLu28RgR5UYBNViUD971HhqWv8PF5FYdbRDv8vxUR-v6kgGFYh1rHFJ9k-HSYItSrDO3dutszYWHXRdkXb1ekYzmYhWAXviGXvi9SMGMa4d5fUMsAQnElb03_A2dYmxU9NqO3YUh9UhVzxYHjpiEc1dihexxkUaEvcoSFmX5F_x-m3AU6CUHDBYBJOKAoA1Orwqv-gQEqAIAfKj0TzjL0TSLVOwLU',
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
    <section id="projects" ref={sectionRef} className="py-section-gap px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <span className="font-label-caps text-primary-fixed uppercase tracking-[0.2em] mb-4 block">Portfolio</span>
            <h2 className="font-h2 text-h2 text-white">Featured Projects</h2>
          </div>
          <a className="text-primary-fixed hover:text-white transition-colors flex items-center gap-2 group text-xs font-bold tracking-widest uppercase" href="#">
            VIEW ALL REPOS <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">arrow_right_alt</span>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {projects.map((project) => (
            <div key={project.id} className={`${project.className} glass-card rounded-3xl overflow-hidden group project-card`}>
              <div className={project.id === '1' ? 'grid grid-cols-1 md:grid-cols-2' : ''}>
                <div className={project.id === '1' ? 'h-[350px] overflow-hidden relative' : 'h-60 overflow-hidden'}>
                  <Image src={project.image} alt={project.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-transparent transition-colors"></div>
                </div>
                <div className={project.id === '1' ? 'p-10 flex flex-col justify-center' : 'p-8'}>
                  <div className="flex gap-2 mb-6">
                    {project.techStack.map((tech) => (
                      <span key={tech} className="px-2 py-0.5 bg-primary-fixed/10 text-primary-fixed rounded-full text-[10px] font-bold">{tech}</span>
                    ))}
                  </div>
                  <h3 className="font-h3 text-2xl text-white mb-4">{project.title}</h3>
                  <p className="text-on-surface-variant font-body-md mb-8">{project.description}</p>
                  <div className="flex gap-4">
                    <Button
                      className="bg-primary-container text-on-primary-container px-6 py-2.5 rounded-xl font-bold text-xs uppercase tracking-widest transition-all hover:shadow-[0_0_20px_rgba(0,242,255,0.4)]"
                      onClick={() => { setSelectedProject(project); toggleProjectModal(); }}
                    >
                      View Details
                    </Button>
                    <button className="p-2.5 border border-outline-variant rounded-xl hover:bg-surface-container-high transition-colors">
                      <span className="material-symbols-outlined text-sm">launch</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
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
