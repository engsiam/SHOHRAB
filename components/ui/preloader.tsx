'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useGlobalStore } from '@/lib/store/useGlobalStore';

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const { setScrollY } = useGlobalStore();

  useEffect(() => {
    // Prevent scrolling while preloader is active
    document.body.style.overflow = 'hidden';
    
    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = 'auto';
    }, 2000); // Show preloader for 2 seconds

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration:0.5 }}
          className="fixed inset-0 z-[9999] bg-[#020617] flex items-center justify-center"
        >
          <div className="text-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-5xl md:text-7xl font-black tracking-tighter uppercase font-['Space_Grotesk'] gradient-text"
              style={{
                filter: 'drop-shadow(0 0 20px rgba(0, 242, 255, 0.5))',
              }}
            >
              SHOHRAB
            </motion.div>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 1.5, delay: 0.5 }}
              className="h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 mt-4 mx-auto max-w-[200px]"
            />
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="text-slate-400 font-label-caps text-xs uppercase tracking-[0.2em] mt-4"
            >
              Loading Portfolio...
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
