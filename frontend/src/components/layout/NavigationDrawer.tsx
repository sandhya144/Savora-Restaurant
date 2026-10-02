import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowUpRight, Compass, Clock, Phone } from 'lucide-react';
import { RESTAURANT_INFO } from '../../data/restaurantData';
import { useSmoothScroll } from '../../context/SmoothScrollContext';

interface NavigationDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenReservation: () => void;
}

const navLinks = [
  { name: 'The Sanctuary', subtitle: 'Atmosphere & Philosophy', href: '#philosophy' },
  { name: 'Tasting Menus', subtitle: 'Nocturne & Solstice', href: '#menu' },
  { name: 'The Odyssey', subtitle: 'Horizontal Craft Exhibition', href: '#gallery' },
  { name: 'Spaces & Salons', subtitle: 'Private Dining & Basalt Vault', href: '#spaces' },
  { name: 'The Chef', subtitle: 'Alexandre Vaneau & Lineage', href: '#chef' },
  { name: 'Accolades', subtitle: 'Press & Michelin Distinction', href: '#accolades' },
  { name: 'Reserve', subtitle: 'Table Inquiries & Salon Inquiries', href: '#reservation' },
];

export const NavigationDrawer: React.FC<NavigationDrawerProps> = ({
  isOpen,
  onClose,
  onOpenReservation,
}) => {
  const { scrollTo } = useSmoothScroll();

  const handleLinkClick = (href: string) => {
    onClose();
    if (href === '#reservation') {
      onOpenReservation();
    } else {
      setTimeout(() => {
        scrollTo(href);
      }, 300);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[90] bg-[#080808]/95 backdrop-blur-2xl flex flex-col justify-between p-6 md:p-14 overflow-y-auto"
        >
          {/* Top header bar */}
          <div className="flex items-center justify-between border-b border-white/10 pb-6">
            <div className="flex items-center space-x-4">
              <span className="font-serif text-2xl tracking-[0.2em] text-[#C5A059] uppercase font-light">
                {RESTAURANT_INFO.name}
              </span>
              <span className="hidden sm:inline-block text-xs uppercase tracking-[0.3em] text-zinc-500 font-mono">
                Atelier Paris
              </span>
            </div>

            <button
              onClick={onClose}
              data-cursor="CLOSE"
              className="group flex items-center space-x-2 text-xs uppercase tracking-[0.2em] text-zinc-400 hover:text-white transition-colors duration-300 px-4 py-2 rounded-full border border-white/10 hover:border-[#C5A059]/50"
            >
              <span className="hidden sm:inline">Close</span>
              <X className="w-4 h-4 transition-transform duration-300 group-hover:rotate-90 text-[#C5A059]" />
            </button>
          </div>

          {/* Center navigation links */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 my-auto py-12">
            <div className="lg:col-span-7 flex flex-col space-y-4 md:space-y-6">
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + idx * 0.06, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="group flex flex-col"
                >
                  <button
                    onClick={() => handleLinkClick(link.href)}
                    className="flex items-baseline space-x-4 text-left w-full focus:outline-none"
                  >
                    <span className="font-mono text-xs text-[#C5A059]/60 group-hover:text-[#C5A059] transition-colors duration-300">
                      0{idx + 1}
                    </span>
                    <span className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-zinc-200 group-hover:text-[#C5A059] group-hover:italic transition-all duration-300 tracking-tight">
                      {link.name}
                    </span>
                    <ArrowUpRight className="w-5 h-5 text-[#C5A059] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                  </button>
                  <span className="text-xs uppercase tracking-[0.2em] text-zinc-500 ml-8 hidden sm:block">
                    {link.subtitle}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Right side editorial details */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="lg:col-span-5 flex flex-col justify-between space-y-8 lg:border-l lg:border-white/10 lg:pl-12"
            >
              <div className="space-y-6">
                <div>
                  <div className="flex items-center space-x-2 text-[#C5A059] mb-2">
                    <Compass className="w-4 h-4" />
                    <span className="text-xs uppercase tracking-[0.25em] font-mono">Location</span>
                  </div>
                  <p className="text-sm font-sans text-zinc-300 leading-relaxed">
                    18 Place Vendôme, 75001 Paris, France
                  </p>
                  <p className="text-xs font-mono text-zinc-500 mt-1">
                    48°51'24.8"N 2°21'07.2"E
                  </p>
                </div>

                <div>
                  <div className="flex items-center space-x-2 text-[#C5A059] mb-2">
                    <Clock className="w-4 h-4" />
                    <span className="text-xs uppercase tracking-[0.25em] font-mono">Hours of Service</span>
                  </div>
                  <p className="text-sm text-zinc-300">
                    Dinner: Tuesday — Saturday, 19:00 — 23:30
                  </p>
                  <p className="text-xs text-zinc-500 mt-1">
                    Private Salon: By advance bespoke curation
                  </p>
                </div>

                <div>
                  <div className="flex items-center space-x-2 text-[#C5A059] mb-2">
                    <Phone className="w-4 h-4" />
                    <span className="text-xs uppercase tracking-[0.25em] font-mono">Concierge</span>
                  </div>
                  <p className="text-sm text-zinc-300 font-mono">
                    +33 (0)1 42 68 18 90
                  </p>
                  <p className="text-xs text-zinc-500">
                    concierge@lecrin-paris.fr
                  </p>
                </div>
              </div>

              <div className="pt-6 border-t border-white/10">
                <button
                  onClick={() => {
                    onClose();
                    onOpenReservation();
                  }}
                  className="w-full py-4 px-6 rounded-full bg-[#C5A059] hover:bg-[#d6b46b] text-[#080808] font-sans text-xs uppercase tracking-[0.25em] font-semibold transition-all duration-300 flex items-center justify-center space-x-2 group"
                >
                  <span>Request Table Reservation</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </button>
              </div>
            </motion.div>
          </div>

          {/* Bottom metadata */}
          <div className="flex flex-col sm:flex-row items-center justify-between border-t border-white/10 pt-6 text-[11px] text-zinc-500 font-mono tracking-wider">
            <span>THREE MICHELIN STARS • 2025</span>
            <span className="mt-2 sm:mt-0">© {new Date().getFullYear()} L'ÉCRIN ATELIER ALL RIGHTS RESERVED</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
