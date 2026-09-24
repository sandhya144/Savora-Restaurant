import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { GALLERY_ITEMS } from '../../data/restaurantData';
import { Camera, ArrowRight } from 'lucide-react';

export const HorizontalScroll: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only enable GSAP ScrollTrigger pinning on desktop (screen width >= 1024px)
    const mm = gsap.matchMedia();

    mm.add('(min-width: 1024px)', () => {
      const track = trackRef.current;
      const section = sectionRef.current;
      if (!track || !section) return;

      const totalScrollWidth = track.scrollWidth - window.innerWidth + 120;

      const tween = gsap.to(track, {
        x: -totalScrollWidth,
        ease: 'none',
        scrollTrigger: {
          trigger: triggerRef.current,
          pin: true,
          scrub: 1,
          start: 'top top',
          end: () => `+=${totalScrollWidth}`,
          invalidateOnRefresh: true,
        },
      });

      return () => {
        tween.kill();
      };
    });

    return () => mm.revert();
  }, []);

  return (
    <section
      id="gallery"
      ref={sectionRef}
      className="relative w-full bg-[#080808] border-b border-white/10 select-none overflow-hidden"
    >
      <div ref={triggerRef} className="relative w-full min-h-[100svh] flex flex-col justify-center py-20">
        {/* Gallery Intro Bar */}
        <div className="max-w-7xl mx-auto px-6 md:px-16 w-full mb-10 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div>
            <div className="flex items-center space-x-2 text-xs font-mono tracking-[0.3em] text-[#C5A059] uppercase mb-2">
              <Camera className="w-4 h-4" />
              <span>03 — THE CULINARY ODYSSEY</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-white font-light">
              Moments of <span className="italic gold-gradient-text">Elemental Alchemy.</span>
            </h2>
          </div>

          <div className="hidden lg:flex items-center space-x-3 text-xs font-mono text-zinc-400">
            <span>SCROLL DOWN TO TRAVERSE</span>
            <ArrowRight className="w-4 h-4 text-[#C5A059] animate-pulse" />
          </div>
        </div>

        {/* Horizontal Track Container */}
        <div
          ref={trackRef}
          className="flex flex-nowrap gap-8 md:gap-12 px-6 md:px-16 overflow-x-auto lg:overflow-x-visible no-scrollbar pb-6 lg:pb-0"
        >
          {GALLERY_ITEMS.map((item, index) => (
            <div
              key={item.id}
              data-cursor="EXPAND"
              className="relative shrink-0 w-[85vw] sm:w-[480px] md:w-[560px] lg:w-[620px] group rounded-3xl overflow-hidden bg-zinc-950 border border-white/10 hover:border-[#C5A059]/40 transition-all duration-500"
            >
              {/* Image Container with subtle hover zoom */}
              <div className="relative aspect-[16/11] w-full overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center filter brightness-[0.82] contrast-[1.1] transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-90" />

                <div className="absolute top-5 left-5 px-3 py-1 rounded-full bg-[#080808]/80 backdrop-blur-md border border-white/10 text-[10px] font-mono text-[#C5A059] uppercase tracking-widest">
                  {item.category} • 0{index + 1}
                </div>
              </div>

              {/* Caption & Metadata */}
              <div className="p-6 md:p-8 space-y-3">
                <h3 className="font-serif text-2xl sm:text-3xl text-white font-normal group-hover:text-[#C5A059] transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-zinc-400 font-sans text-xs sm:text-sm leading-relaxed font-light">
                  {item.caption}
                </p>
                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                  <span>ATELIER ARCHIVE</span>
                  <span className="text-[#C5A059]">VOL. VI NOCTURNE</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

