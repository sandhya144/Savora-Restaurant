import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { Sparkles, ArrowDown } from 'lucide-react';
import { RESTAURANT_INFO } from '../../data/restaurantData';
import { Magnetic } from '../common/Magnetic';
import { useSmoothScroll } from '../../context/SmoothScrollContext';

interface HeroProps {
  onOpenReservation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenReservation }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleLine1Ref = useRef<HTMLHeadingElement>(null);
  const titleLine2Ref = useRef<HTMLHeadingElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const { scrollTo } = useSmoothScroll();

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Split text slide up reveal
      const tl = gsap.timeline({ delay: 0.3 });

      tl.fromTo(
        [titleLine1Ref.current, titleLine2Ref.current],
        { yPercent: 120, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          duration: 1.4,
          stagger: 0.18,
          ease: 'power4.out',
        }
      );

      // Subtle background parallax on scroll
      gsap.to(backgroundRef.current, {
        yPercent: 20,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative w-full h-[100svh] min-h-[700px] flex flex-col justify-between overflow-hidden px-6 md:px-16 pt-32 pb-12 select-none"
    >
      {/* Background Image with Cinematic Parallax & Darkness Vignette */}
      <div
        ref={backgroundRef}
        className="absolute inset-0 -top-[15%] -bottom-[15%] w-full h-[130%] pointer-events-none"
      >
        <img
          src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=2400&q=85"
          alt="Cinematic wood-fired gastronomy"
          className="w-full h-full object-cover object-center filter brightness-[0.38] contrast-[1.15] scale-105 transition-transform duration-1000 ease-out"
        />
        {/* Layered cinematic vignettes */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/40 to-[#080808]/70" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#080808]/60 to-[#080808]" />
      </div>

      {/* Top Eyebrow Metadata */}
      {/* <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex items-center space-x-3 text-xs font-mono tracking-[0.3em] text-[#C5A059] uppercase"
        >
          <div className="flex items-center space-x-1">
            <Sparkles className="w-3 h-3 fill-[#C5A059]" />
            <Sparkles className="w-3.5 h-3.5 fill-[#C5A059]" />
            <Sparkles className="w-3 h-3 fill-[#C5A059]" />
          </div>
          <span>Three Michelin Stars • Guide 2025</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-xs font-mono tracking-[0.25em] text-zinc-400 uppercase hidden md:block"
        >
          <span>18 Place Vendôme, Paris</span>
        </motion.div>
      </div> */}

      {/* Center Monumental Typography */}
      <div className="relative z-10 max-w-6xl my-auto py-8">
        <div className="overflow-hidden">
          <h1
            ref={titleLine1Ref}
            className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[9.5rem] tracking-tight font-light uppercase text-white leading-[0.92]"
          >
            WHERE FIRE
          </h1>
        </div>

        <div className="overflow-hidden mt-1 md:mt-2">
          <h2
            ref={titleLine2Ref}
            className="font-serif italic font-normal text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[8.5rem] tracking-tight gold-gradient-text leading-[0.92]"
          >
            Meets Ephemera.
          </h2>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.9 }}
          className="mt-8 max-w-xl text-base sm:text-lg md:text-xl font-sans text-zinc-300 font-light leading-relaxed"
        >
          {RESTAURANT_INFO.philosophy}
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.1 }}
          className="mt-10 flex flex-wrap items-center gap-5"
        >
          <Magnetic strength={0.3}>
            <button
              onClick={onOpenReservation}
              data-cursor="RESERVE"
              className="px-8 py-4 rounded-full bg-[#C5A059] hover:bg-[#d6b46b] text-[#080808] font-sans text-xs uppercase tracking-[0.25em] font-semibold transition-all duration-300 shadow-xl shadow-[#C5A059]/20"
            >
              Request Reservation
            </button>
          </Magnetic>

          <Magnetic strength={0.2}>
            <button
              onClick={() => scrollTo('#menu')}
              data-cursor="MENU"
              className="px-8 py-4 rounded-full border border-white/20 hover:border-white text-zinc-200 hover:text-white font-sans text-xs uppercase tracking-[0.25em] font-medium transition-all duration-300 backdrop-blur-sm"
            >
              Explore Menus
            </button>
          </Magnetic>
        </motion.div>
      </div>

      {/* Bottom Coordinates, Season, and Scroll Cue */}
      <div className="relative z-10 flex flex-col sm:flex-row sm:items-end justify-between gap-6 pt-6 border-t border-white/10">
        <div className="flex items-center space-x-6 text-[11px] font-mono tracking-[0.25em] text-zinc-400">
          <span className="text-[#C5A059]">VOL. VI</span>
          <span className="hidden sm:inline">•</span>
          <span>NOCTURNE TASTING EDITION</span>
          <span className="hidden md:inline">•</span>
          <span className="hidden md:inline">CHEF ALEXANDRE VANEAU</span>
        </div>

        <button
          onClick={() => scrollTo('#philosophy')}
          className="flex items-center space-x-3 text-xs font-mono uppercase tracking-[0.25em] text-zinc-400 hover:text-[#C5A059] transition-colors duration-300 group focus:outline-none"
        >
          <span>Scroll to Discover</span>
          <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[#C5A059] transition-colors duration-300">
            <ArrowDown className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-y-0.5 text-[#C5A059]" />
          </div>
        </button>
      </div>
    </section>
  );
};
