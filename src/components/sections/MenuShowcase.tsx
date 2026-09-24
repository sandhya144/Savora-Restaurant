import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TASTING_MENUS } from '../../data/restaurantData';
import { Wine, UtensilsCrossed, Sparkles, ChevronDown, ChevronUp } from 'lucide-react';
import { Magnetic } from '../common/Magnetic';

interface MenuShowcaseProps {
  onOpenReservation: () => void;
}

export const MenuShowcase: React.FC<MenuShowcaseProps> = ({ onOpenReservation }) => {
  const [activeMenuId, setActiveMenuId] = useState<string>(TASTING_MENUS[0].id);
  const [hoveredDishIndex, setHoveredDishIndex] = useState<number | null>(null);
  const [expandedMobileCourse, setExpandedMobileCourse] = useState<string | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const currentMenu = TASTING_MENUS.find((m) => m.id === activeMenuId) || TASTING_MENUS[0];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    // Relative to the section
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const toggleMobileCourse = (courseId: string) => {
    setExpandedMobileCourse(expandedMobileCourse === courseId ? null : courseId);
  };

  return (
    <section
      id="menu"
      onMouseMove={handleMouseMove}
      className="relative w-full py-28 md:py-40 px-6 md:px-16 bg-[#0B0B0D] border-b border-white/10 select-none overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-white/10 gap-6">
          <div className="space-y-3">
            <div className="flex items-center space-x-2 text-xs font-mono tracking-[0.3em] text-[#C5A059] uppercase">
              <UtensilsCrossed className="w-4 h-4" />
              <span>02 — CULINARY REPERTOIRE</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-white font-light tracking-tight">
              The Tasting <span className="italic gold-gradient-text">Manifesto.</span>
            </h2>
            <p className="text-zinc-400 font-sans text-sm md:text-base max-w-xl font-light">
              Crafted in rhythmic synchronization with the lunar calendar, forest foraging yields, and the daily catch of our Brittany fishermen.
            </p>
          </div>

          {/* Menu Switcher Tabs */}
          <div className="flex items-center p-1.5 rounded-full bg-zinc-900 border border-white/10 self-start md:self-auto">
            {TASTING_MENUS.map((menu) => (
              <button
                key={menu.id}
                onClick={() => {
                  setActiveMenuId(menu.id);
                  setHoveredDishIndex(null);
                }}
                className={`relative px-5 py-2.5 rounded-full text-xs font-mono uppercase tracking-[0.2em] transition-all duration-300 ${
                  activeMenuId === menu.id
                    ? 'text-[#080808] font-semibold'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                {activeMenuId === menu.id && (
                  <motion.div
                    layoutId="activeMenuTab"
                    className="absolute inset-0 rounded-full bg-[#C5A059]"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{menu.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Menu Overview Info Bar */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between p-8 rounded-3xl bg-zinc-950/60 border border-white/10 mb-14 gap-6">
          <div>
            <h3 className="font-serif text-2xl md:text-3xl text-white font-normal">
              {currentMenu.title}
            </h3>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#C5A059] mt-1">
              {currentMenu.subtitle}
            </p>
            <p className="text-zinc-400 text-sm font-sans mt-2 max-w-2xl font-light">
              {currentMenu.description}
            </p>
          </div>

          <div className="flex items-center space-x-6 shrink-0 pt-4 lg:pt-0 border-t lg:border-t-0 lg:border-l border-white/10 lg:pl-8">
            <div>
              <div className="font-serif text-3xl md:text-4xl text-white font-light">
                {currentMenu.price}
              </div>
              <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-500">
                Per Guest • Service Included
              </div>
            </div>
            <div className="h-8 w-[1px] bg-white/10" />
            <div>
              <div className="font-serif text-xl md:text-2xl text-[#C5A059] font-light">
                {currentMenu.pairingPrice}
              </div>
              <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-500">
                Sommelier Grand Cru Selection
              </div>
            </div>
          </div>
        </div>

        {/* Courses Table / List */}
        <div className="relative divide-y divide-white/10 border-t border-b border-white/10">
          {currentMenu.courses.map((course, idx) => (
            <div
              key={course.id}
              onMouseEnter={() => setHoveredDishIndex(idx)}
              onMouseLeave={() => setHoveredDishIndex(null)}
              data-cursor="DISH"
              className="group relative py-7 md:py-9 px-4 transition-colors duration-300 hover:bg-white/[0.02] cursor-pointer"
              onClick={() => toggleMobileCourse(course.id)}
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-baseline">
                {/* Course Number & French Title */}
                <div className="md:col-span-4 flex items-baseline space-x-4">
                  <span className="font-mono text-sm text-[#C5A059] font-light w-8">
                    {course.courseNumber}
                  </span>
                  <div>
                    <h4 className="font-serif text-2xl sm:text-3xl text-zinc-100 group-hover:text-[#C5A059] transition-colors duration-300 font-normal">
                      {course.name}
                    </h4>
                    {course.frenchName && (
                      <p className="font-serif italic text-xs sm:text-sm text-zinc-500 mt-0.5">
                        {course.frenchName}
                      </p>
                    )}
                  </div>
                </div>

                {/* Description & Provenance */}
                <div className="md:col-span-5 space-y-2">
                  <p className="text-zinc-300 text-sm sm:text-base font-light font-sans leading-relaxed">
                    {course.description}
                  </p>
                  <div className="flex items-center space-x-2 text-[11px] font-mono tracking-wider text-zinc-500">
                    <span className="text-[#C5A059]">•</span>
                    <span>Provenance: {course.provenance}</span>
                  </div>
                </div>

                {/* Sommelier Pairing & Mobile toggle */}
                <div className="md:col-span-3 flex flex-col md:items-end justify-between">
                  <div className="flex items-center space-x-2 text-xs font-mono text-[#C5A059]/90 text-left md:text-right">
                    <Wine className="w-3.5 h-3.5 shrink-0 hidden md:inline" />
                    <span>{course.pairing}</span>
                  </div>
                  <span className="text-[10px] font-mono text-zinc-500 text-left md:text-right mt-1">
                    {course.vintage}
                  </span>

                  {/* Mobile expansion indicator */}
                  <div className="md:hidden mt-3 flex items-center text-xs text-[#C5A059]">
                    <span>{expandedMobileCourse === course.id ? 'Hide Details' : 'View Course Photo'}</span>
                    {expandedMobileCourse === course.id ? (
                      <ChevronUp className="w-4 h-4 ml-1" />
                    ) : (
                      <ChevronDown className="w-4 h-4 ml-1" />
                    )}
                  </div>
                </div>
              </div>

              {/* Mobile Inline Expanded Photo */}
              {expandedMobileCourse === course.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-6 md:hidden rounded-2xl overflow-hidden border border-white/10"
                >
                  <img
                    src={course.image}
                    alt={course.name}
                    className="w-full h-56 object-cover"
                  />
                  <div className="p-4 bg-zinc-950 text-xs font-mono text-zinc-400">
                    {course.provenance} • Paired with {course.vintage}
                  </div>
                </motion.div>
              )}
            </div>
          ))}
        </div>

        {/* Floating Dish Photo on Desktop Cursor Hover */}
        <AnimatePresence>
          {hoveredDishIndex !== null && (
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{
                opacity: 1,
                scale: 1,
                left: mousePos.x + 30,
                top: mousePos.y - 140,
              }}
              exit={{ opacity: 0, scale: 0.85 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="pointer-events-none absolute z-30 hidden md:block w-72 rounded-2xl overflow-hidden shadow-2xl border border-white/20 bg-zinc-950"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <img
                  src={currentMenu.courses[hoveredDishIndex].image}
                  alt={currentMenu.courses[hoveredDishIndex].name}
                  className="w-full h-full object-cover filter brightness-[0.88] contrast-[1.1]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-left">
                  <span className="text-[10px] font-mono tracking-widest text-[#C5A059] uppercase block">
                    Course {currentMenu.courses[hoveredDishIndex].courseNumber}
                  </span>
                  <p className="font-serif text-sm text-white font-medium truncate">
                    {currentMenu.courses[hoveredDishIndex].name}
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Menu Footer CTA & Dietary Notes */}
        <div className="mt-14 flex flex-col sm:flex-row items-center justify-between gap-6 p-8 rounded-3xl bg-zinc-950/40 border border-white/10">
          <div className="space-y-1 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start space-x-2 text-xs font-mono text-[#C5A059] uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Bespoke Dietary Adaptations</span>
            </div>
            <p className="text-xs text-zinc-400 font-sans max-w-xl font-light">
              We gladly accommodate pescatarian, vegetarian, and rare allergen requests with 48 hours advance notice prior to your seating.
            </p>
          </div>

          <Magnetic strength={0.25}>
            <button
              onClick={onOpenReservation}
              data-cursor="RESERVE"
              className="px-8 py-4 rounded-full bg-[#C5A059] hover:bg-[#d6b46b] text-[#080808] font-sans text-xs uppercase tracking-[0.25em] font-semibold transition-all duration-300 shrink-0"
            >
              Reserve This Tasting
            </button>
          </Magnetic>
        </div>
      </div>
    </section>
  );
};

