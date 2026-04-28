'use client';

import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';

const Hero = dynamic(() => import('@/components/sections/Hero'), { ssr: false });
const About = dynamic(() => import('@/components/sections/About'), { ssr: false });
const Skills = dynamic(() => import('@/components/sections/Skills'), { ssr: false });
const Experience = dynamic(() => import('@/components/sections/Experience'), { ssr: false });
const Projects = dynamic(() => import('@/components/sections/Projects'), { ssr: false });
const Education = dynamic(() => import('@/components/sections/Education'), { ssr: false });
const Contact = dynamic(() => import('@/components/sections/Contact'), { ssr: false });

const pageVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

export default function Home() {
  return (
    <motion.div initial="hidden" animate="visible" variants={pageVariants}>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Contact />
    </motion.div>
  );
}
