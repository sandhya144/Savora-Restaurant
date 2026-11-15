import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, Calendar } from 'lucide-react';
import { SmoothScrollProvider } from './components/layout/SmoothScroll';
import { NoiseOverlay } from './components/common/NoiseOverlay';
import { CustomCursor } from './components/common/CustomCursor';
import { Navbar } from './components/layout/Navbar';
import { NavigationDrawer } from './components/layout/NavigationDrawer';
import { Preloader } from './components/sections/Preloader';
import { Reservation } from './components/sections/Reservation';
import AppRoutes from './routes/AppRoutes';
import type { AccountRole, AuthAccount } from './types';

const API_BASE_URL = (import.meta.env.VITE_API_URL ?? '/api').replace(/\/$/, '');

interface SessionResponse {
  role: AccountRole;
  account: AuthAccount;
}

function App() {
  const navigate = useNavigate();
  const [preloaderComplete, setPreloaderComplete] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isReservationModalOpen, setIsReservationModalOpen] = useState(false);
  const [showMobileStickyBar, setShowMobileStickyBar] = useState(false);
  const [account, setAccount] = useState<AuthAccount | null>(null);
  const [authError, setAuthError] = useState('');

  useEffect(() => {
    let isCurrent = true;

    fetch(`${API_BASE_URL}/auth/me`, { credentials: 'include' })
      .then(async (response) => {
        if (response.status === 401) return;
        const data = (await response.json()) as SessionResponse & { message?: string };
        if (!response.ok) {
          throw new Error(data.message ?? 'Unable to verify your sign-in.');
        }
        if (isCurrent) setAccount(data.account);
      })
      .catch(() => {
        if (isCurrent) setAuthError('Could not connect to Savora account services. Please try again.');
      });

    return () => {
      isCurrent = false;
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => setShowMobileStickyBar(window.scrollY > 600);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleAuthenticated = (nextAccount: AuthAccount) => {
    setAccount(nextAccount);
    setAuthError('');
  };

  const handleLogout = async () => {
    setAuthError('');
    try {
      const response = await fetch(`${API_BASE_URL}/auth/logout`, {
        method: 'POST',
        credentials: 'include',
      });
      if (!response.ok) {
        throw new Error('Unable to sign out. Please try again.');
      }
      setAccount(null);
      setIsDrawerOpen(false);
      navigate('/');
    } catch (error) {
      setAuthError(error instanceof Error ? error.message : 'Unable to sign out. Please try again.');
    }
  };

  const openReservation = () => {
    if (!account) {
      navigate('/login');
      return;
    }
    setIsReservationModalOpen(true);
  };

  return (
    <SmoothScrollProvider>
      <div className="relative min-h-screen bg-[#080808] font-sans text-[#F4F4F5] selection:bg-[#C5A059] selection:text-black">
        <NoiseOverlay />
        <CustomCursor />

        {!preloaderComplete && (
          <Preloader onComplete={() => setPreloaderComplete(true)} />
        )}

        <Navbar
          isAuthenticated={Boolean(account)}
          accountName={account?.name}
          accountRole={account?.role}
          onOpenDrawer={() => setIsDrawerOpen(true)}
          onOpenReservation={openReservation}
          onOpenAuth={(mode) => navigate(mode === 'signup' ? '/signup' : '/login')}
          onLogout={handleLogout}
        />

        {account && (
          <NavigationDrawer
            isOpen={isDrawerOpen}
            onClose={() => setIsDrawerOpen(false)}
            onOpenReservation={openReservation}
            onOpenAuth={() => navigate('/login')}
          />
        )}

        <main>
          <AppRoutes
            account={account}
            onAuthenticated={handleAuthenticated}
            onOpenReservation={openReservation}
          />
        </main>

        {authError && (
          <p
            role="status"
            className="fixed bottom-6 left-1/2 z-[100] -translate-x-1/2 rounded-full border border-red-300/30 bg-[#171113] px-5 py-3 text-center text-sm text-red-200 shadow-xl"
          >
            {authError}
          </p>
        )}

        <AnimatePresence>
          {isReservationModalOpen && (
            <Reservation
              isModal
              onCloseModal={() => setIsReservationModalOpen(false)}
            />
          )}
        </AnimatePresence>

        <AnimatePresence>
          {account && showMobileStickyBar && (
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
                    <span className="text-xs font-serif text-white block leading-tight">Savora</span>
                    <span className="text-[9px] font-mono text-[#C5A059] uppercase">
                      Where Every Bite Tells a Story.
                    </span>
                  </div>
                </div>

                <button
                  onClick={openReservation}
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
