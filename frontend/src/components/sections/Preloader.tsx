import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles } from 'lucide-react';

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsFinished(true);
            setTimeout(onComplete, 900);
          }, 400);
          return 100;
        }
        // Random increment for organic loading feel
        const diff = Math.floor(Math.random() * 15) + 5;
        return Math.min(prev + diff, 100);
      });
    }, 120);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] bg-[#080808] flex flex-col justify-between p-8 md:p-16 select-none"
        >
          {/* Top coordinates */}
          <div className="flex justify-between items-center text-[10px] font-mono tracking-[0.3em] text-zinc-500 uppercase">
            <span>• SAVORA</span>
            <span>INDIA</span>
          </div>

          {/* Center emblem and title */}
          <div className="flex flex-col items-center justify-center my-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="flex items-center space-x-2 text-[#C5A059] mb-6"
            >
              <Sparkles className="w-3.5 h-3.5 fill-[#C5A059]" />
              <Sparkles className="w-4 h-4 fill-[#C5A059]" />
              <Sparkles className="w-3.5 h-3.5 fill-[#C5A059]" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="overflow-hidden text-center"
            >
              <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-[0.25em] text-white font-light uppercase">
                Savora
              </h1>
              <p className="font-mono text-xs md:text-sm uppercase tracking-[0.4em] text-[#C5A059] mt-4 font-light">
                Where Every Bite Tells a Story.
              </p>
            </motion.div>
          </div>

          {/* Bottom Progress Bar & Percentage */}
          <div className="w-full max-w-md mx-auto flex flex-col space-y-3">
            <div className="flex justify-between text-[11px] font-mono tracking-[0.2em] text-zinc-400">
              <span>PREPARING TASTING ODYSSEY</span>
              <span className="text-[#C5A059]">{progress}%</span>
            </div>
            <div className="w-full h-[1px] bg-white/10 overflow-hidden relative">
              <motion.div
                className="h-full bg-[#C5A059]"
                style={{ width: `${progress}%` }}
                transition={{ ease: 'linear' }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

