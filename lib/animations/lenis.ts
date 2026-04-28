import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

let lenis: Lenis | null = null;

export const initLenis = () => {
  if (lenis) return lenis;

  lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  });

  lenis.on('scroll', () => ScrollTrigger.update());
  gsap.ticker.add(() => lenis?.raf(performance.now()));
  gsap.ticker.lagSmoothing(0);

  return lenis;
};

export const getLenis = () => lenis;
