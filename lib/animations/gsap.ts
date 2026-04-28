import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';

gsap.registerPlugin(ScrollTrigger, TextPlugin);

export const initGSAP = () => {
  gsap.defaults({ ease: 'power2.out', duration: 0.8 });
};

export { gsap, ScrollTrigger };
