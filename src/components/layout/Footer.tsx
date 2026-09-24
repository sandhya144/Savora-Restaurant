import React, { useState } from 'react';
import { ArrowUp, Sparkles, Send, Check } from 'lucide-react';
import { RESTAURANT_INFO } from '../../data/restaurantData';
import { Magnetic } from '../common/Magnetic';
import { useSmoothScroll } from '../../context/SmoothScrollContext';

export const Footer: React.FC = () => {
  const { scrollTo } = useSmoothScroll();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 4000);
      setEmail('');
    }
  };

  return (
    <footer className="relative w-full bg-[#050505] text-white pt-24 pb-12 px-6 md:px-16 select-none overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-20">
        {/* Top Grid: Newsletter, Location, Hours, Etiquette */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Column 1: Newsletter */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center space-x-2 text-xs font-mono tracking-[0.25em] text-[#C5A059] uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>THE SOLSTICE EPHEMERA</span>
            </div>
            <h4 className="font-serif text-2xl text-zinc-100 font-light">
              Receive Privileged Seasonal Tasting Dispatches
            </h4>
            <p className="text-zinc-400 text-xs font-sans font-light leading-relaxed">
              We announce seasonal tasting bookings, rare pre-phylloxera cellar tastings, and guest chef residencies four times per annum.
            </p>

            <form onSubmit={handleSubscribe} className="pt-2">
              <div className="relative flex items-center">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full bg-zinc-900 border border-white/10 rounded-full px-5 py-3 text-xs text-white placeholder-zinc-500 focus:border-[#C5A059] focus:outline-none pr-12 font-sans"
                />
                <button
                  type="submit"
                  className="absolute right-1.5 p-2 rounded-full bg-[#C5A059] text-black hover:bg-[#d6b46b] transition-colors"
                  aria-label="Subscribe to newsletter"
                >
                  {subscribed ? <Check className="w-3.5 h-3.5" /> : <Send className="w-3.5 h-3.5" />}
                </button>
              </div>
              {subscribed && (
                <p className="text-[11px] font-mono text-[#C5A059] mt-2">
                  You are now enrolled in our privileged dispatches.
                </p>
              )}
            </form>
          </div>

          {/* Column 2: Hours & Service */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#C5A059] block">
              SERVICE HOURS
            </span>
            <div className="text-sm font-sans space-y-2 text-zinc-300 font-light">
              <p>
                <strong className="text-white font-normal block font-mono text-xs text-zinc-400">DINNER SEATINGS</strong>
                Tuesday — Saturday: 19:00 — 23:30
              </p>
              <p>
                <strong className="text-white font-normal block font-mono text-xs text-zinc-400">SALON L'ALCHIMISTE</strong>
                By Appointment Only
              </p>
              <p>
                <strong className="text-white font-normal block font-mono text-xs text-zinc-400">ANNUAL CLOSURES</strong>
                First two weeks of August & New Year Week
              </p>
            </div>
          </div>

          {/* Column 3: Location & Coordinates */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#C5A059] block">
              THE ATELIER
            </span>
            <div className="text-sm font-sans space-y-2 text-zinc-300 font-light">
              <p>18 Place Vendôme</p>
              <p>75001 Paris, France</p>
              <p className="font-mono text-xs text-[#C5A059]">48°51'24.8"N 2°21'07.2"E</p>
              <p className="font-mono text-xs text-zinc-400 pt-1">+33 (0)1 42 68 18 90</p>
            </div>
          </div>

          {/* Column 4: Etiquette & Protocol */}
          <div className="lg:col-span-2 space-y-3">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#C5A059] block">
              ETIQUETTE
            </span>
            <p className="text-xs font-sans text-zinc-400 font-light leading-relaxed">
              Jackets requested for gentlemen. Photography is kindly discouraged to protect guests' privacy.
            </p>
            <div className="pt-2">
              <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 block">
                VALET PARKING & PRIVATE CAR
              </span>
              <span className="text-xs text-zinc-300">Available upon arrival</span>
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
            <span>© {new Date().getFullYear()} L'ÉCRIN PARIS</span>
            <span>THREE MICHELIN STARS</span>
          </div>

          <Magnetic strength={0.3}>
            <button
              onClick={() => scrollTo('#hero')}
              className="flex items-center space-x-2 text-zinc-400 hover:text-[#C5A059] transition-colors duration-300 px-4 py-2 rounded-full border border-white/10 hover:border-[#C5A059]/40"
            >
              <span>Back to Apex</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </Magnetic>
        </div>
      </div>
    </footer>
  );
};
