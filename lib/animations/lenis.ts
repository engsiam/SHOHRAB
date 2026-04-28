import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

let lenis: Lenis | null = null;

export const initLenis = () => {
  if (lenis) return lenis;

  lenis = new Lenis({
    duration: 1.2,
    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  } as any);

  // CRITICAL: ScrollerProxy for Lenis
  ScrollTrigger.scrollerProxy(document.body, {
    scrollTop(value?: number) {
      if (arguments.length && typeof value === 'number') {
        lenis?.scrollTo(value, { immediate: true });
        return;
      }
      return lenis?.scroll || 0;
    },
    getBoundingClientRect() {
      return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
  });

  // Sync Lenis scroll with ScrollTrigger
  lenis.on('scroll', ScrollTrigger.update);
  ScrollTrigger.defaults({ scroller: document.body });

  // Use GSAP ticker for Lenis RAF
  gsap.ticker.add((time, delta, frame) => {
    lenis?.raf(performance.now());
  });
  gsap.ticker.lagSmoothing(0);

  // Refresh ScrollTrigger on Lenis resize
  (lenis as any).on('resize', () => ScrollTrigger.refresh());

  return lenis;
};

export const destroyLenis = () => {
  lenis?.destroy();
  lenis = null;
};

export const getLenis = () => lenis;
