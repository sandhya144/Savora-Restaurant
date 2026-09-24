import { useState, useEffect } from 'react';
import { SmoothScrollProvider } from './components/layout/SmoothScroll';
import { NoiseOverlay } from './components/common/NoiseOverlay';
import { CustomCursor } from './components/common/CustomCursor';
import { Navbar } from './components/layout/Navbar';
import { NavigationDrawer } from './components/layout/NavigationDrawer';
import { Preloader } from './components/sections/Preloader';
import { Hero } from './components/sections/Hero';
import { Philosophy } from './components/sections/Philosophy';
import { MenuShowcase } from './components/sections/MenuShowcase';
import { HorizontalScroll } from './components/sections/HorizontalScroll';
import { Atmosphere } from './components/sections/Atmosphere';
import { ChefSection } from './components/sections/ChefSection';
import { Accolades } from './components/sections/Accolades';
import { Reservation } from './components/sections/Reservation';
import { Footer } from './components/layout/Footer';
import { Calendar, ArrowUpRight } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

function App() {
  const [preloaderComplete, setPreloaderComplete] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isReservationModalOpen, setIsReservationModalOpen] = useState(false);
  const [showMobileStickyBar, setShowMobileStickyBar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show mobile reservation bar after scrolling past 600px
      if (window.scrollY > 600) {
        setShowMobileStickyBar(true);
      } else {
        setShowMobileStickyBar(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <SmoothScrollProvider>
      <div className="relative min-h-screen bg-[#080808] text-[#F4F4F5] selection:bg-[#C5A059] selection:text-black font-sans">
        {/* Film grain noise overlay */}
        <NoiseOverlay />

        {/* Custom luxury magnetic cursor */}
        <CustomCursor />

        {/* Cinematic entrance preloader */}
        {!preloaderComplete && (
          <Preloader onComplete={() => setPreloaderComplete(true)} />
        )}

        {/* Global Navigation Header */}
        <Navbar
          onOpenDrawer={() => setIsDrawerOpen(true)}
          onOpenReservation={() => setIsReservationModalOpen(true)}
        />

        {/* Fullscreen Navigation Drawer */}
        <NavigationDrawer
          isOpen={isDrawerOpen}
          onClose={() => setIsDrawerOpen(false)}
          onOpenReservation={() => setIsReservationModalOpen(true)}
        />

        {/* Main Content Sections */}
        <main>
          <Hero onOpenReservation={() => setIsReservationModalOpen(true)} />
          <Philosophy />
          <MenuShowcase onOpenReservation={() => setIsReservationModalOpen(true)} />
          <HorizontalScroll />
          <Atmosphere onOpenReservation={() => setIsReservationModalOpen(true)} />
          <ChefSection />
          <Accolades />
          <Reservation />
        </main>

        {/* Monumental Footer */}
        <Footer />

        {/* Dedicated Reservation Modal Popup */}
        <AnimatePresence>
          {isReservationModalOpen && (
            <Reservation
              isModal
              onCloseModal={() => setIsReservationModalOpen(false)}
            />
          )}
        </AnimatePresence>

        {/* Mobile Sticky Reservation Bottom Bar */}
        <AnimatePresence>
          {showMobileStickyBar && (
            <motion.div
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 80, opacity: 0 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="fixed bottom-4 inset-x-4 z-40 md:hidden"
            >
              <div className="bg-[#121214]/90 backdrop-blur-xl border border-white/15 rounded-full p-2 flex items-center justify-between shadow-2xl">
                <div className="flex items-center space-x-3 pl-4">
                  <div className="w-2 h-2 rounded-full bg-[#C5A059] animate-ping" />
                  <div>
                    <span className="text-xs font-serif text-white block leading-tight">
                      Savora
                    </span>
                    <span className="text-[9px] font-mono text-[#C5A059] uppercase">
                      Where Every Bite Tells a Story.
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => setIsReservationModalOpen(true)}
                  className="px-5 py-2.5 rounded-full bg-[#C5A059] text-black font-sans text-xs font-semibold uppercase tracking-wider flex items-center space-x-1.5 shadow-lg"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Reserve</span>
                  <ArrowUpRight className="w-3 h-3" />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </SmoothScrollProvider>
  );
}

export default App;
