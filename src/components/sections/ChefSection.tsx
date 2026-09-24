import React from 'react';
import { Sparkles, Award } from 'lucide-react';
import { RESTAURANT_INFO } from '../../data/restaurantData';

export const ChefSection: React.FC = () => {
  return (
    <section
      id="chef"
      className="relative w-full py-28 md:py-40 px-6 md:px-16 bg-[#0B0B0D] border-b border-white/10 select-none overflow-hidden"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        {/* Left: Chef Portrait with Luxury Matte Frame */}
        <div className="lg:col-span-5 relative">
          <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-zinc-950 aspect-[4/5] max-w-md mx-auto">
            <img
              src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=1200&q=85"
              alt="Executive Chef Alexandre Vaneau"
              className="w-full h-full object-cover object-top filter grayscale contrast-[1.2] brightness-[0.85]"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />

            {/* Inset Badge */}
            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-[#080808]/85 backdrop-blur-md border border-white/10 flex items-center justify-between">
              <div>
                <span className="font-serif text-lg text-white font-medium block">
                  Alexandre Vaneau
                </span>
                <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#C5A059]">
                  Executive Chef & Founder
                </span>
              </div>
              <Award className="w-5 h-5 text-[#C5A059]" />
            </div>
          </div>

          {/* Decorative Corner Accents */}
          <div className="absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 border-[#C5A059]/40 pointer-events-none hidden sm:block" />
          <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-2 border-r-2 border-[#C5A059]/40 pointer-events-none hidden sm:block" />
        </div>

        {/* Right: Editorial Narrative */}
        <div className="lg:col-span-7 space-y-8">
          <div className="flex items-center space-x-2 text-xs font-mono tracking-[0.3em] text-[#C5A059] uppercase">
            <Sparkles className="w-4 h-4" />
            <span>05 — THE ATELIER MASTER</span>
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-white font-light leading-[1.08]">
            Lineage of <span className="italic gold-gradient-text">Uncompromising Fire.</span>
          </h2>

          <div className="space-y-4 text-zinc-300 font-sans text-base md:text-lg leading-relaxed font-light">
            <p>
              Trained across three continents — from the multi-generational kaiseki sanctuaries of Kyoto to three-star seaside kitchens in Menton and Paris — Alexandre Vaneau founded L'ÉCRIN with a singular, radical ethos: to strip away culinary ego and let raw terroir command the senses.
            </p>
            <p>
              His kitchen operates not as a traditional brigade, but as an artisan guild. No gas flames are utilized in the preparation of savory courses; heat is governed purely by Kishu Binchotan oak coals and fragrant French vine clippings.
            </p>
          </div>

          {/* Key Metrics / Guild Numbers */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6 border-t border-white/10">
            <div>
              <div className="font-serif text-3xl md:text-4xl text-white font-light">
                {RESTAURANT_INFO.michelinStars}
              </div>
              <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#C5A059] mt-1">
                Michelin Stars
              </div>
            </div>

            <div>
              <div className="font-serif text-3xl md:text-4xl text-white font-light">
                32
              </div>
              <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-400 mt-1">
                Seats Per Night
              </div>
            </div>

            <div>
              <div className="font-serif text-3xl md:text-4xl text-white font-light">
                1:1
              </div>
              <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-400 mt-1">
                Chef to Guest Ratio
              </div>
            </div>

            <div>
              <div className="font-serif text-3xl md:text-4xl text-white font-light">
                4,200
              </div>
              <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-400 mt-1">
                Cellar References
              </div>
            </div>
          </div>

          {/* Signature Quote */}
          <div className="pt-4">
            <p className="font-serif italic text-xl text-zinc-200">
              "We cook for the memory you will carry into the winter morning after."
            </p>
            <div className="mt-2 text-xs font-mono tracking-widest text-[#C5A059] uppercase">
              — A. Vaneau
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

