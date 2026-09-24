import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, X, Users, Compass, Maximize2 } from 'lucide-react';

interface SpaceDetail {
  id: string;
  name: string;
  subtitle: string;
  capacity: string;
  description: string;
  features: string[];
  image: string;
}

const spaces: SpaceDetail[] = [
  {
    id: 'main-room',
    name: "The Nocturne Dining Room",
    subtitle: "Acoustic Silence & Volcanic Basalt",
    capacity: "32 Guests Maximum",
    description: "Designed by Studio Liaigre, the main sanctuary features acoustic walls clad in charcoal felt, unpolished Belgian basalt monoliths, and individual pin-spot lighting calibrated to illuminate only the plate.",
    features: ["Acoustic dampening below 38dB", "Direct line of sight to open hearth", "Hand-blown Murano smoked glass"],
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=85"
  },
  {
    id: 'salon-prive',
    name: "Salon L'Alchimiste",
    subtitle: "Exclusive Private Chamber",
    capacity: "Up to 10 Guests",
    description: "A subterranean jewel box enclosed in hand-hammered patinated brass. Features a dedicated live-ember cooking station and private entrance from Place Vendôme.",
    features: ["Dedicated private sommelier", "Customized bespoke multi-course curation", "Subterranean sound insulation"],
    image: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1600&q=85"
  },
  {
    id: 'cellar-crypt',
    name: "The 1782 Limestone Crypt",
    subtitle: "Historic Cellar & Tasting Salon",
    capacity: "Tasting Table for 6",
    description: "Carved three stories below the Paris cobblestones during the pre-revolutionary era. Surrounding you are 4,200 bottles resting in constant 12°C humidity.",
    features: ["Pre-phylloxera museum rarities", "Sommelier-guided horizontal flights", "Artisanal affiné cheese chamber"],
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1600&q=85"
  }
];

export const Atmosphere: React.FC<{ onOpenReservation: () => void }> = ({ onOpenReservation }) => {
  const [selectedSpace, setSelectedSpace] = useState<SpaceDetail | null>(null);

  return (
    <section
      id="spaces"
      className="relative w-full py-28 md:py-40 px-6 md:px-16 bg-[#080808] border-b border-white/10 select-none"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 space-y-3">
          <div className="flex items-center space-x-2 text-xs font-mono tracking-[0.3em] text-[#C5A059] uppercase">
            <Compass className="w-4 h-4" />
            <span>04 — SPATIAL ARCHITECTURE</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-white font-light">
            The <span className="italic gold-gradient-text">Sanctuaries.</span>
          </h2>
          <p className="text-zinc-400 font-sans text-sm sm:text-base max-w-xl font-light">
            Intimacy is our highest luxury. Every table at L'ÉCRIN is partitioned by shadows, distance, and acoustic quietude.
          </p>
        </div>

        {/* Asymmetric Gallery Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Main Featured Chamber (Large) */}
          <div
            onClick={() => setSelectedSpace(spaces[0])}
            data-cursor="EXPAND"
            className="lg:col-span-8 group relative rounded-3xl overflow-hidden bg-zinc-950 border border-white/10 hover:border-[#C5A059]/50 transition-all duration-500 cursor-pointer min-h-[420px] flex flex-col justify-end p-8 md:p-12"
          >
            <div className="absolute inset-0">
              <img
                src={spaces[0].image}
                alt={spaces[0].name}
                className="w-full h-full object-cover object-center filter brightness-[0.6] contrast-[1.1] transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
            </div>

            <div className="relative z-10 space-y-3">
              <div className="flex items-center space-x-3 text-xs font-mono text-[#C5A059]">
                <Users className="w-3.5 h-3.5" />
                <span>{spaces[0].capacity}</span>
              </div>
              <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-normal group-hover:text-[#C5A059] transition-colors duration-300">
                {spaces[0].name}
              </h3>
              <p className="text-zinc-300 font-sans text-sm sm:text-base max-w-2xl font-light">
                {spaces[0].subtitle}
              </p>
              <div className="flex items-center space-x-2 text-xs font-mono text-zinc-400 pt-3">
                <Maximize2 className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>Click to view architectural specifications</span>
              </div>
            </div>
          </div>

          {/* Secondary Stack (2 Chambers) */}
          <div className="lg:col-span-4 flex flex-col gap-8">
            {spaces.slice(1).map((space) => (
              <div
                key={space.id}
                onClick={() => setSelectedSpace(space)}
                data-cursor="EXPAND"
                className="group relative rounded-3xl overflow-hidden bg-zinc-950 border border-white/10 hover:border-[#C5A059]/50 transition-all duration-500 cursor-pointer flex-1 min-h-[260px] flex flex-col justify-end p-6 md:p-8"
              >
                <div className="absolute inset-0">
                  <img
                    src={space.image}
                    alt={space.name}
                    className="w-full h-full object-cover object-center filter brightness-[0.55] contrast-[1.1] transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
                </div>

                <div className="relative z-10 space-y-2">
                  <div className="flex items-center space-x-2 text-xs font-mono text-[#C5A059]">
                    <Users className="w-3 h-3" />
                    <span>{space.capacity}</span>
                  </div>
                  <h4 className="font-serif text-2xl md:text-3xl text-white font-normal group-hover:text-[#C5A059] transition-colors duration-300">
                    {space.name}
                  </h4>
                  <p className="text-zinc-400 text-xs font-sans font-light line-clamp-2">
                    {space.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Specification Modal */}
      <AnimatePresence>
        {selectedSpace && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#080808]/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8 md:p-12"
            onClick={() => setSelectedSpace(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative w-full max-w-4xl rounded-3xl bg-[#121214] border border-white/20 overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedSpace(null)}
                className="absolute top-5 right-5 z-20 w-10 h-10 rounded-full bg-black/60 border border-white/20 flex items-center justify-center text-zinc-300 hover:text-white hover:border-[#C5A059] transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative aspect-[16/9] w-full">
                <img
                  src={selectedSpace.image}
                  alt={selectedSpace.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121214] via-transparent to-transparent" />
              </div>

              <div className="p-6 md:p-10 space-y-6">
                <div>
                  <div className="flex items-center space-x-2 text-xs font-mono text-[#C5A059] uppercase tracking-widest mb-1">
                    <span>{selectedSpace.capacity}</span>
                  </div>
                  <h3 className="font-serif text-3xl md:text-4xl text-white">
                    {selectedSpace.name}
                  </h3>
                  <p className="font-serif italic text-sm text-zinc-400 mt-1">
                    {selectedSpace.subtitle}
                  </p>
                </div>

                <p className="text-zinc-300 text-sm md:text-base font-sans font-light leading-relaxed">
                  {selectedSpace.description}
                </p>

                <div className="space-y-2 pt-2 border-t border-white/10">
                  <span className="text-xs font-mono uppercase tracking-widest text-[#C5A059]">
                    Architectural Features
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    {selectedSpace.features.map((feature, i) => (
                      <div key={i} className="flex items-center space-x-2 text-xs text-zinc-300 font-mono">
                        <Sparkles className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 flex justify-end">
                  <button
                    onClick={() => {
                      setSelectedSpace(null);
                      onOpenReservation();
                    }}
                    className="px-8 py-3.5 rounded-full bg-[#C5A059] text-[#080808] text-xs font-mono uppercase tracking-widest font-semibold hover:bg-[#d6b46b] transition-colors"
                  >
                    Inquire for this Chamber
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
