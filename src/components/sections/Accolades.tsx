import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ACCOLADES } from '../../data/restaurantData';
import { Award, Sparkles, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export const Accolades: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextQuote = () => {
    setActiveIndex((prev) => (prev + 1) % ACCOLADES.length);
  };

  const prevQuote = () => {
    setActiveIndex((prev) => (prev - 1 + ACCOLADES.length) % ACCOLADES.length);
  };

  return (
    <section
      id="accolades"
      className="relative w-full py-28 md:py-40 px-6 md:px-16 bg-[#080808] border-b border-white/10 select-none overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        {/* Eyebrow */}
        <div className="flex items-center justify-center space-x-2 text-xs font-mono tracking-[0.3em] text-[#C5A059] uppercase mb-12">
          <Award className="w-4 h-4" />
          <span>06 — CRITICAL DISTINCTIONS</span>
        </div>

        {/* Michelin Stars Center Display */}
        <div className="flex flex-col items-center justify-center mb-16 space-y-4">
          <div className="flex items-center space-x-3 text-[#C5A059]">
            <Sparkles className="w-6 h-6 fill-[#C5A059]" />
            <Sparkles className="w-8 h-8 fill-[#C5A059]" />
            <Sparkles className="w-6 h-6 fill-[#C5A059]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-light text-center">
            Three Michelin Stars & Global Acclaim
          </h2>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-zinc-400">
            Guide Michelin France • 2023, 2024, 2025
          </p>
        </div>

        {/* Interactive Quote Stage */}
        <div className="relative min-h-[280px] sm:min-h-[220px] flex items-center justify-center text-center px-4 md:px-16">
          <Quote className="absolute top-0 left-4 md:left-8 w-16 h-16 text-white/[0.04] pointer-events-none" />

          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-6 max-w-4xl"
            >
              <blockquote className="font-serif text-2xl sm:text-3xl md:text-4xl text-zinc-100 font-light leading-snug italic">
                "{ACCOLADES[activeIndex].quote}"
              </blockquote>

              <div className="space-y-1">
                <div className="font-mono text-xs uppercase tracking-[0.25em] text-[#C5A059] font-medium">
                  {ACCOLADES[activeIndex].publication}
                </div>
                <div className="text-[11px] font-mono tracking-wider text-zinc-400">
                  {ACCOLADES[activeIndex].distinction} • {ACCOLADES[activeIndex].year}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Carousel Navigation & Indicators */}
        <div className="flex items-center justify-center space-x-6 mt-14">
          <button
            onClick={prevQuote}
            className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:border-[#C5A059] transition-colors"
            aria-label="Previous quote"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="flex items-center space-x-2">
            {ACCOLADES.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  activeIndex === i ? 'w-8 bg-[#C5A059]' : 'w-2 bg-white/20 hover:bg-white/40'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextQuote}
            className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:border-[#C5A059] transition-colors"
            aria-label="Next quote"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

