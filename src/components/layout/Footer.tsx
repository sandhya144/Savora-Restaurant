import { ArrowUp, Sparkles } from 'lucide-react';
import { RESTAURANT_INFO } from '../../data/restaurantData';
import { Magnetic } from '../common/Magnetic';
import { useSmoothScroll } from '../../context/SmoothScrollContext';

export const Footer = () => {
  const { scrollTo } = useSmoothScroll();

  return (
    <footer className="relative w-full bg-[#050505] text-white pt-24 pb-12 px-6 md:px-16 select-none overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-20">
        {/* Top Grid: Newsletter, Location, Hours, Etiquette */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Column 1: Restaurant introduction */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center space-x-2 text-xs font-mono tracking-[0.25em] text-[#C5A059] uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>A TABLE AT SAVORA</span>
            </div>
            <h4 className="font-serif text-2xl text-zinc-100 font-light">
              An evening shaped by fire and season.
            </h4>
            <p className="text-zinc-400 text-xs font-sans font-light leading-relaxed">
              Discover our seasonal tasting menus, the open-fire kitchen, and intimate private salons.
            </p>
            <button
              onClick={() => scrollTo('#reservation')}
              className="pt-2 text-xs uppercase tracking-[0.2em] text-[#C5A059] transition-colors hover:text-[#e6ca85]"
            >
              Request a table →
            </button>
          </div>

          {/* Column 2: Hours & Service */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#C5A059] block">
              OPENING HOURS
            </span>
            <div className="text-sm font-sans space-y-2 text-zinc-300 font-light">
              <p className='text-xs'>
                <strong className="text-white font-normal block font-mono text-xs text-zinc-400">DINNER</strong>
                Tuesday — Saturday: 7:00 pm – 11:30 pm
              </p>
              <p className='text-xs'>
                <strong className="text-white font-normal block font-mono text-xs text-zinc-400">PRIVATE ROOMS</strong>
                Booking required
              </p>
              <p className='text-xs'>
                <strong className="text-white font-normal block font-mono text-xs text-zinc-400">CLOSED</strong>
                 First two weeks of August and New Year week
              </p>
            </div>
          </div>

          {/* Column 3: Location & Coordinates */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#C5A059] block">
             FIND US
            </span>
            <div className="text-sm font-sans space-y-2 text-zinc-300 font-light">
              <p>18 Place</p>
              <p>Banglore, India</p>
              <p className="font-mono text-xs text-[#C5A059]">48°51'24.8"N 2°21'07.2"E</p>
              <p className="font-mono text-xs text-zinc-400 pt-1">+91 9876543210</p>
            </div>
          </div>

          {/* Column 4: Etiquette & Protocol */}
          <div className="lg:col-span-2 space-y-3">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#C5A059] block">
             GOOD TO KNOW
            </span>
            <p className="text-xs font-sans text-zinc-400 font-light leading-relaxed">
              Smart casual dress is preferred. Please keep photos to your own table so other guests can enjoy their privacy.
            </p>
            <div className="pt-2">
              <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 block">
                PARKING
              </span>
              <span className="text-xs text-zinc-300">Ask our team when you arrive</span>
            </div>
          </div>
        </div>

        {/* Monumental Brand Typography */}
        <div className="relative flex flex-col items-center justify-center py-6 text-center select-none">
          <div className="font-serif text-[18vw] leading-[0.8] text-white/[0.04] uppercase font-light tracking-[0.08em] pointer-events-none absolute -bottom-4 left-1/2 -translate-x-1/2 w-full text-center">
            {RESTAURANT_INFO.name}
          </div>

          <div className="relative z-10 flex flex-col items-center space-y-4">
            <span className="font-serif text-4xl sm:text-5xl md:text-6xl text-white font-light tracking-[0.25em] uppercase">
              {RESTAURANT_INFO.name}
            </span>
            <span className="font-mono text-xs uppercase tracking-[0.4em] text-[#C5A059]">
              {RESTAURANT_INFO.tagline}
            </span>
          </div>
        </div>

        {/* Bottom Bar: Copyright, Back to Top */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-10 border-t border-white/10 text-xs font-mono text-zinc-500 tracking-wider">
          <div className="flex items-center space-x-6">
            <span>© {new Date().getFullYear()} SAVORA</span>
            <span>ALL RIGHTS RESERVED</span>
          </div>

          <Magnetic strength={0.3}>
            <button
              onClick={() => scrollTo('#hero')}
              className="flex items-center space-x-2 text-zinc-400 hover:text-[#C5A059] transition-colors duration-300 px-4 py-2 rounded-full border border-white/10 hover:border-[#C5A059]/40"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </Magnetic>
        </div>
      </div>
    </footer>
  );
};
