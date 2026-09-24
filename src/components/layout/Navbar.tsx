import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Menu, Sparkles } from 'lucide-react';
import { RESTAURANT_INFO } from '../../data/restaurantData';
import { Magnetic } from '../common/Magnetic';
import { useSmoothScroll } from '../../context/SmoothScrollContext';

interface NavbarProps {
  onOpenDrawer: () => void;
  onOpenReservation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDrawer, onOpenReservation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const audioContextRef = useRef<AudioContext | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);
  const noiseSourceRef = useRef<AudioBufferSourceNode | null>(null);
  const { scrollTo } = useSmoothScroll();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Web Audio API ambient embers & room tone generator
  const toggleAmbientAudio = () => {
    if (isPlayingAudio) {
      // Fade out
      if (gainNodeRef.current && audioContextRef.current) {
        gainNodeRef.current.gain.setTargetAtTime(0, audioContextRef.current.currentTime, 0.5);
        setTimeout(() => {
          if (audioContextRef.current) {
            audioContextRef.current.suspend();
          }
          setIsPlayingAudio(false);
        }, 500);
      }
    } else {
      // Initialize Web Audio Context if not present
      if (!audioContextRef.current) {
        const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        const ctx = new AudioCtx();
        audioContextRef.current = ctx;

        // Generate warm pink noise buffer for cozy fireplace ambience
        const bufferSize = ctx.sampleRate * 2;
        const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
        const output = noiseBuffer.getChannelData(0);
        let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;

        for (let i = 0; i < bufferSize; i++) {
          const white = Math.random() * 2 - 1;
          b0 = 0.99886 * b0 + white * 0.0555179;
          b1 = 0.99332 * b1 + white * 0.0750759;
          b2 = 0.96900 * b2 + white * 0.1538520;
          b3 = 0.86650 * b3 + white * 0.3104856;
          b4 = 0.55000 * b4 + white * 0.5329522;
          b5 = -0.7616 * b5 - white * 0.0168980;
          output[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362) * 0.015;
          b6 = white * 0.115926;
        }

        const whiteNoise = ctx.createBufferSource();
        whiteNoise.buffer = noiseBuffer;
        whiteNoise.loop = true;

        // Warm Low-pass filter
        const filter = ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.value = 450;

        const gainNode = ctx.createGain();
        gainNode.gain.value = 0.08;

        whiteNoise.connect(filter);
        filter.connect(gainNode);
        gainNode.connect(ctx.destination);

        whiteNoise.start(0);
        noiseSourceRef.current = whiteNoise;
        gainNodeRef.current = gainNode;
      } else if (audioContextRef.current.state === 'suspended') {
        audioContextRef.current.resume();
        if (gainNodeRef.current) {
          gainNodeRef.current.gain.setTargetAtTime(0.08, audioContextRef.current.currentTime, 0.5);
        }
      }
      setIsPlayingAudio(true);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#080808]/85 backdrop-blur-md border-b border-white/10 py-4 shadow-2xl'
          : 'bg-transparent py-6 md:py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Left: Navigation Menu Toggle & Sound */}
        <div className="flex items-center space-x-4 md:space-x-6">
          <Magnetic strength={0.25}>
            <button
              onClick={onOpenDrawer}
              data-cursor="MENU"
              className="flex items-center space-x-2 text-xs uppercase tracking-[0.25em] text-zinc-300 hover:text-white px-3 py-2 rounded-full border border-white/10 hover:border-[#C5A059]/60 transition-colors duration-300"
              aria-label="Open Navigation Menu"
            >
              <Menu className="w-4 h-4 text-[#C5A059]" />
              <span className="hidden sm:inline">Menu</span>
            </button>
          </Magnetic>

          {/* Ambient Sound Trigger */}
          <Magnetic strength={0.2}>
            <button
              onClick={toggleAmbientAudio}
              data-cursor="AUDIO"
              className={`flex items-center space-x-2 text-xs uppercase tracking-[0.2em] font-mono px-3 py-2 rounded-full border transition-all duration-300 ${
                isPlayingAudio
                  ? 'border-[#C5A059] text-[#C5A059] bg-[#C5A059]/10'
                  : 'border-white/10 text-zinc-400 hover:text-zinc-200'
              }`}
              title={isPlayingAudio ? 'Mute ambient sound' : 'Play ambient sound'}
            >
              {isPlayingAudio ? (
                <>
                  <Volume2 className="w-3.5 h-3.5 animate-pulse text-[#C5A059]" />
                  <span className="hidden lg:inline text-[10px]">Atmosphere On</span>
                </>
              ) : (
                <>
                  <VolumeX className="w-3.5 h-3.5" />
                  <span className="hidden lg:inline text-[10px]">Atmosphere</span>
                </>
              )}
            </button>
          </Magnetic>
        </div>

        {/* Center: Brand Crest */}
        <div className="flex flex-col items-center cursor-pointer group" onClick={() => scrollTo('#hero')}>
          <div className="flex items-center space-x-1 mb-1">
            {[...Array(RESTAURANT_INFO.michelinStars)].map((_, i) => (
              <Sparkles
                key={i}
                className="w-2.5 h-2.5 text-[#C5A059] fill-[#C5A059]/60 transition-transform duration-300 group-hover:scale-125"
              />
            ))}
          </div>
          <span className="font-serif text-2xl md:text-3xl tracking-[0.25em] text-white font-normal uppercase transition-colors duration-300 group-hover:text-[#C5A059]">
            {RESTAURANT_INFO.name}
          </span>
          <span className="text-[9px] uppercase tracking-[0.35em] text-zinc-400 font-mono">
            The Dining Atelier
          </span>
        </div>

        {/* Right: Quick Anchor & Reservation Button */}
        <div className="flex items-center space-x-6">
          <nav className="hidden xl:flex items-center space-x-8 text-xs uppercase tracking-[0.2em] text-zinc-300 font-sans">
            <button
              onClick={() => scrollTo('#philosophy')}
              className="hover:text-[#C5A059] transition-colors duration-300"
            >
              Philosophy
            </button>
            <button
              onClick={() => scrollTo('#menu')}
              className="hover:text-[#C5A059] transition-colors duration-300"
            >
              Menus
            </button>
            <button
              onClick={() => scrollTo('#gallery')}
              className="hover:text-[#C5A059] transition-colors duration-300"
            >
              Odyssey
            </button>
            <button
              onClick={() => scrollTo('#spaces')}
              className="hover:text-[#C5A059] transition-colors duration-300"
            >
              Salons
            </button>
          </nav>

          <Magnetic strength={0.3}>
            <button
              onClick={onOpenReservation}
              data-cursor="BOOK"
              className="relative px-5 py-2.5 rounded-full overflow-hidden bg-[#C5A059] text-[#080808] text-xs uppercase tracking-[0.2em] font-semibold transition-transform duration-300 hover:scale-105 active:scale-95 shadow-lg shadow-[#C5A059]/10"
            >
              <span>Reserve</span>
            </button>
          </Magnetic>
        </div>
      </div>
    </header>
  );
};
