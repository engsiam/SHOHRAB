'use client';

import { useEffect } from 'react';
import { initGSAP } from '@/lib/animations/gsap';
import { initLenis } from '@/lib/animations/lenis';

export default function AnimationProvider() {
  useEffect(() => {
    initGSAP();
    initLenis();
  }, []);

  return null;
}
