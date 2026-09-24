import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { PHILOSOPHY_PILLARS } from '../../data/restaurantData';
import { Compass, Flame, Leaf, Wine } from 'lucide-react';

export const Philosophy: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const leftColumnRef = useRef<HTMLDivElement>(null);

  const getPillarIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Flame className="w-5 h-5 text-[#C5A059]" />;
      case 1:
        return <Leaf className="w-5 h-5 text-[#C5A059]" />;
      case 2:
        return <Wine className="w-5 h-5 text-[#C5A059]" />;
      default:
        return <Flame className="w-5 h-5 text-[#C5A059]" />;
    }
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Subtle scroll reveal on pillars
      gsap.utils.toArray<HTMLElement>('.pillar-card').forEach((card) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="philosophy"
      ref={sectionRef}
      className="relative w-full py-28 md:py-40 px-6 md:px-16 bg-[#080808] border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
        {/* Left Sticky Column */}
        <div
          ref={leftColumnRef}
          className="lg:col-span-5 lg:sticky lg:top-36 space-y-8"
        >
          <div className="flex items-center space-x-3 text-xs font-mono tracking-[0.3em] text-[#C5A059] uppercase">
            <Compass className="w-4 h-4" />
            <span>01 — THE PHILOSOPHY</span>
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-white font-light leading-[1.08] tracking-tight">
            An Atelier Built on <span className="italic gold-gradient-text">Elemental Restraint.</span>
          </h2>

          <p className="text-zinc-300 font-sans text-base md:text-lg leading-relaxed font-light">
            We reject culinary ornamentation in pursuit of visceral truth. At L'ÉCRIN, every ingredient is harvested at the twilight hour, honored through centuries-old charring methods, and served at the apex of its fleeting vitality.
          </p>

          <div className="p-6 rounded-2xl bg-zinc-950/60 border border-white/10 space-y-4">
            <blockquote className="font-serif italic text-lg text-zinc-200 leading-relaxed">
              "We do not bend nature to our technique. We build fires to listen to what the forest and the sea have already decided."
            </blockquote>
            <div className="flex items-center justify-between text-xs font-mono tracking-wider text-zinc-400 pt-2 border-t border-white/10">
              <span className="text-[#C5A059]">Alexandre Vaneau</span>
              <span>Executive Chef & Founder</span>
            </div>
          </div>
        </div>

        {/* Right Pillars Stream */}
        <div className="lg:col-span-7 space-y-16 md:space-y-24">
          {PHILOSOPHY_PILLARS.map((pillar, idx) => (
            <div
              key={pillar.number}
              className="pillar-card group rounded-3xl overflow-hidden bg-zinc-950/40 border border-white/10 hover:border-[#C5A059]/40 transition-colors duration-500 p-6 md:p-10"
            >
              <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full rounded-2xl overflow-hidden mb-8">
                <img
                  src={pillar.image}
                  alt={pillar.title}
                  className="w-full h-full object-cover object-center filter brightness-[0.75] contrast-[1.1] transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-80" />

                <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-[#080808]/80 backdrop-blur-md border border-white/10 flex items-center space-x-2">
                  {getPillarIcon(idx)}
                  <span className="font-mono text-xs text-[#C5A059]">PILLAR {pillar.number}</span>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-baseline space-x-3">
                  <span className="font-mono text-xs tracking-[0.25em] text-[#C5A059] uppercase">
                    {pillar.subtitle}
                  </span>
                </div>
                <h3 className="font-serif text-3xl sm:text-4xl text-white font-normal group-hover:text-[#C5A059] transition-colors duration-300">
                  {pillar.title}
                </h3>
                <p className="text-zinc-300 font-sans text-sm sm:text-base leading-relaxed font-light pt-2">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

