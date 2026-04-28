import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';

gsap.registerPlugin(ScrollTrigger, TextPlugin);

export const initGSAP = () => {
  gsap.defaults({ ease: 'power2.out', duration: 0.6 });
  
  // Global ScrollTrigger settings
  ScrollTrigger.defaults({
    start: 'top 85%',
    end: 'bottom 60%',
    invalidateOnRefresh: true,
    once: true,
    toggleActions: 'play none none none',
  });
};

export { gsap, ScrollTrigger };
