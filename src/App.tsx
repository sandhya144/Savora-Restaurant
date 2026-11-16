import { useState } from 'react';
import { SmoothScrollProvider } from './components/layout/SmoothScroll';
import { Footer } from './components/layout/Footer';
import { Navbar } from './components/layout/Navbar';
import { NoiseOverlay } from './components/common/NoiseOverlay';
import { CustomCursor } from './components/common/CustomCursor';
import { Accolades } from './components/sections/Accolades';
import { Atmosphere } from './components/sections/Atmosphere';
import { ChefSection } from './components/sections/ChefSection';
import { Hero } from './components/sections/Hero';
import { HorizontalScroll } from './components/sections/HorizontalScroll';
import { MenuShowcase } from './components/sections/MenuShowcase';
import { Philosophy } from './components/sections/Philosophy';
import { Preloader } from './components/sections/Preloader';
import { Reservation } from './components/sections/Reservation';
import { NavigationDrawer} from './components/layout/NavigationDrawer';

function App() {
  const [preloaderComplete, setPreloaderComplete] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const scrollToReservation = () => {
    document.querySelector('#reservation')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <SmoothScrollProvider>
      <div className="relative min-h-screen bg-[#080808] font-sans text-[#F4F4F5] selection:bg-[#C5A059] selection:text-black">
        <NoiseOverlay />
        <CustomCursor />

        {!preloaderComplete && <Preloader onComplete={() => setPreloaderComplete(true)} />}

        <Navbar onOpenDrawer={() => setIsDrawerOpen(true)} />

        <main>
          <Hero onOpenReservation={scrollToReservation} />
          <Philosophy />
          <MenuShowcase onOpenReservation={scrollToReservation} />
          <HorizontalScroll />
          <Atmosphere onOpenReservation={scrollToReservation} />
          <ChefSection />
          <Accolades />
          <Reservation /> 
        </main>
        <NavigationDrawer
          isOpen={isDrawerOpen}
          onClose={() => setIsDrawerOpen(false)}
        />
        <Footer />
      </div>
    </SmoothScrollProvider>
  );
}

export default App;
