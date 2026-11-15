import React, { useEffect, useRef, useState } from 'react';
import { LogOut, Menu, Sparkles, Volume2, VolumeX } from 'lucide-react';
import { RESTAURANT_INFO } from '../../data/restaurantData';
import { Magnetic } from '../common/Magnetic';
import { useSmoothScroll } from '../../context/SmoothScrollContext';
import type { AccountRole } from '../../types';

interface NavbarProps {
  isAuthenticated: boolean;
  accountName?: string;
  accountRole?: AccountRole;
  onOpenDrawer: () => void;
  onOpenReservation: () => void;
  onOpenAuth: (mode: 'login' | 'signup') => void;
  onLogout: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  isAuthenticated,
  accountName,
  accountRole,
  onOpenDrawer,
  onOpenReservation,
  onOpenAuth,
  onLogout,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const audioContextRef = useRef<AudioContext | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);
  const { scrollTo } = useSmoothScroll();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleAmbientAudio = () => {
    if (isPlayingAudio) {
      if (gainNodeRef.current && audioContextRef.current) {
        gainNodeRef.current.gain.setTargetAtTime(0, audioContextRef.current.currentTime, 0.5);
        window.setTimeout(() => {
          void audioContextRef.current?.suspend();
          setIsPlayingAudio(false);
        }, 500);
      }
      return;
    }

    if (!audioContextRef.current) {
      const AudioCtx =
        window.AudioContext ||
        (window as typeof window & { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const context = new AudioCtx();
      audioContextRef.current = context;

      const bufferSize = context.sampleRate * 2;
      const noiseBuffer = context.createBuffer(1, bufferSize, context.sampleRate);
      const output = noiseBuffer.getChannelData(0);
      let b0 = 0;
      let b1 = 0;
      let b2 = 0;
      let b3 = 0;
      let b4 = 0;
      let b5 = 0;
      let b6 = 0;

      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        b0 = 0.99886 * b0 + white * 0.0555179;
        b1 = 0.99332 * b1 + white * 0.0750756;
        b2 = 0.969 * b2 + white * 0.153852;
        b3 = 0.8665 * b3 + white * 0.3104856;
        b4 = 0.55 * b4 + white * 0.532952;
        b5 = -0.7616 * b5 - white * 0.016898;
        output[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362) * 0.015;
        b6 = white * 0.115926;
      }

      const source = context.createBufferSource();
      source.buffer = noiseBuffer;
      source.loop = true;
      const filter = context.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.value = 450;
      const gain = context.createGain();
      gain.gain.value = 0.08;
      source.connect(filter);
      filter.connect(gain);
      gain.connect(context.destination);
      source.start();
      gainNodeRef.current = gain;
    } else if (audioContextRef.current.state === 'suspended') {
      void audioContextRef.current.resume();
      gainNodeRef.current?.gain.setTargetAtTime(0.08, audioContextRef.current.currentTime, 0.5);
    }
    setIsPlayingAudio(true);
  };

  if (!isAuthenticated) {
    return (
      <header className="fixed top-0 left-0 z-40 w-full border-b border-white/10 bg-[#080808]/75 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-5 sm:px-6 md:px-12">
          <a
            href="#hero"
            className="shrink-0 font-serif text-xl uppercase tracking-[0.2em] text-white transition-colors hover:text-[#C5A059] md:text-2xl"
          >
            {RESTAURANT_INFO.name}
          </a>
          <nav aria-label="Main navigation" className="flex items-center gap-3 sm:gap-9">
            <a href="#hero" className="text-[10px] uppercase tracking-[0.12em] text-zinc-300 hover:text-[#C5A059] sm:text-xs sm:tracking-[0.18em]">
              Home
            </a>
            <a href="#menu" className="text-[10px] uppercase tracking-[0.12em] text-zinc-300 hover:text-[#C5A059] sm:text-xs sm:tracking-[0.18em]">
              Menus
            </a>
            <button
              onClick={() => onOpenAuth('signup')}
              className="text-[10px] uppercase tracking-[0.12em] text-zinc-300 hover:text-[#C5A059] sm:text-xs sm:tracking-[0.18em]"
            >
              Sign up
            </button>
            <button
              onClick={() => onOpenAuth('login')}
              className="rounded-full bg-[#C5A059] px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#080808] transition-colors hover:bg-[#d6b46b] sm:px-5 sm:py-2.5 sm:text-xs sm:tracking-[0.18em]"
            >
              Log in
            </button>
          </nav>
        </div>
      </header>
    );
  }

  return (
    <header
      className={`fixed top-0 left-0 z-40 w-full transition-all duration-500 ${
        isScrolled
          ? 'border-b border-white/10 bg-[#080808]/85 py-4 shadow-2xl backdrop-blur-md'
          : 'bg-transparent py-6 md:py-8'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-12">
        <div className="flex items-center space-x-4 md:space-x-6">
          <Magnetic strength={0.25}>
            <button
              onClick={onOpenDrawer}
              className="flex items-center space-x-2 rounded-full border border-white/10 px-3 py-2 text-xs uppercase tracking-[0.25em] text-zinc-300 transition-colors hover:border-[#C5A059]/60 hover:text-white"
              aria-label="Open Navigation Menu"
            >
              <Menu className="h-4 w-4 text-[#C5A059]" />
              <span className="hidden sm:inline">Menu</span>
            </button>
          </Magnetic>

          <Magnetic strength={0.2}>
            <button
              onClick={toggleAmbientAudio}
              className={`flex items-center space-x-2 rounded-full border px-3 py-2 font-mono text-xs uppercase tracking-[0.2em] transition-all ${
                isPlayingAudio
                  ? 'border-[#C5A059] bg-[#C5A059]/10 text-[#C5A059]'
                  : 'border-white/10 text-zinc-400 hover:text-zinc-200'
              }`}
              title={isPlayingAudio ? 'Mute ambient sound' : 'Play ambient sound'}
            >
              {isPlayingAudio ? <Volume2 className="h-3.5 w-3.5" /> : <VolumeX className="h-3.5 w-3.5" />}
              <span className="hidden lg:inline text-[10px]">Atmosphere</span>
            </button>
          </Magnetic>
        </div>

        <a
          href="#hero"
          className="group flex flex-col items-center"
          onClick={(event) => {
            event.preventDefault();
            scrollTo('#hero');
          }}
        >
          <span className="mb-1 flex items-center space-x-1">
            {Array.from({ length: RESTAURANT_INFO.michelinStars }, (_, index) => (
              <Sparkles key={index} className="h-2.5 w-2.5 text-[#C5A059]" />
            ))}
          </span>
          <span className="font-serif text-2xl font-normal uppercase tracking-[0.25em] text-white transition-colors group-hover:text-[#C5A059] md:text-3xl">
            {RESTAURANT_INFO.name}
          </span>
          <span className="font-mono text-[9px] uppercase tracking-[0.35em] text-zinc-400">
            The Dining Atelier
          </span>
        </a>

        <div className="flex items-center space-x-5">
          <nav className="hidden items-center space-x-6 font-sans text-xs uppercase tracking-[0.16em] text-zinc-300 xl:flex">
            <button onClick={() => scrollTo('#philosophy')} className="transition-colors hover:text-[#C5A059]">Story</button>
            <button onClick={() => scrollTo('#menu')} className="transition-colors hover:text-[#C5A059]">Menus</button>
            <button onClick={() => scrollTo('#gallery')} className="transition-colors hover:text-[#C5A059]">Gallery</button>
          </nav>

          <div className="hidden text-right lg:block">
            <span className="block max-w-32 truncate text-[10px] text-zinc-300">{accountName}</span>
            <span className="font-mono text-[9px] uppercase tracking-wider text-[#C5A059]">
              {accountRole === 'foodPartner' ? 'Food partner' : 'Guest'}
            </span>
          </div>

          <Magnetic strength={0.2}>
            <button
              onClick={onLogout}
              aria-label="Sign out"
              className="flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-zinc-300 transition-colors hover:text-[#C5A059]"
            >
              <LogOut className="h-4 w-4" />
              <span className="hidden sm:inline">Sign out</span>
            </button>
          </Magnetic>

          <Magnetic strength={0.3}>
            <button
              onClick={onOpenReservation}
              className="rounded-full bg-[#C5A059] px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#080808] shadow-lg shadow-[#C5A059]/10 transition-transform hover:scale-105 active:scale-95"
            >
              Reserve
            </button>
          </Magnetic>
        </div>
      </div>
    </header>
  );
};
