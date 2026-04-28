'use client';

import { useGlobalStore } from '@/lib/store/useGlobalStore';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTop() {
  const { scrollY } = useGlobalStore();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (scrollY < 300) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className="fixed bottom-8 right-8 z-50"
    >
      <Button
        onClick={handleScrollToTop}
        className="rounded-full w-12 h-12 bg-primary-container text-on-primary-container shadow-lg hover:scale-110 transition-transform"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </Button>
    </motion.div>
  );
}
