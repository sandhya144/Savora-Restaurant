import { useState } from 'react';
import type { FormEvent } from 'react';
import {
  ArrowLeft,
  ArrowUpRight,
  ChefHat,
  Eye,
  EyeOff,
  LockKeyhole,
  Mail,
  UserRound,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import type { AccountRole, AuthAccount } from '../../types';

interface AuthPageProps {
  mode: 'login' | 'signup';
  role: AccountRole;
  onAuthenticated: (account: AuthAccount) => void;
}

const API_BASE_URL = (import.meta.env.VITE_API_URL ?? '/api').replace(/\/$/, '');

export const AuthPage = ({ mode, role, onAuthenticated }: AuthPageProps) => {
  const navigate = useNavigate();
  const isPartner = role === 'foodPartner';
  const rolePath = isPartner ? 'food-partner' : 'user';
  const nameLabel = isPartner ? 'Restaurant or partner name' : 'Full name';
  const switchModePath = `/${rolePath}/${mode === 'login' ? 'register' : 'login'}`;
  const otherRolePath = `/${isPartner ? 'user' : 'food-partner'}/${mode === 'login' ? 'login' : 'register'}`;
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMessage('');
    setIsSubmitting(true);

    try {
      const endpoint = mode === 'login' ? 'login' : 'register';
      const response = await fetch(`${API_BASE_URL}/auth/${rolePath}/${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify(
          mode === 'login'
            ? { email, password }
            : { [isPartner ? 'name' : 'fullName']: fullName, email, password }
        ),
      });
      const data: { message?: string; account?: AuthAccount } = await response.json();

      if (!response.ok) {
        throw new Error(data.message ?? 'Something went wrong. Please try again.');
      }

      if (!data.account) {
        throw new Error('Your account was created, but the session could not be started. Please log in.');
      }

      onAuthenticated(data.account);
      navigate('/', { replace: true });
    } catch (error) {
      setMessage(error instanceof Error ? error.message : 'Unable to connect. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 min-h-screen overflow-y-auto bg-[#080808]"
    >
      <div className="absolute inset-0">
        <img
          src={
            isPartner
              ? 'https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=2200&q=85'
              : 'https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=2200&q=85'
          }
          alt=""
          className={`h-full w-full object-cover ${isPartner ? 'opacity-25' : 'opacity-30'}`}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#080808] via-[#080808]/90 to-[#080808]/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-[#080808]/70" />
      </div>

      <button
        onClick={() => navigate('/')}
        className="absolute left-6 top-6 z-10 flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-zinc-400 transition-colors hover:text-[#C5A059] md:left-12 md:top-10"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Savora
      </button>

      <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-6 py-24 md:px-12">
        <div className="grid w-full items-center gap-12 lg:grid-cols-[1fr_480px] lg:gap-16">
          <section className="hidden max-w-xl lg:block">
            <p className={`mb-6 flex items-center gap-3 text-[10px] uppercase tracking-[0.35em] ${isPartner ? 'text-emerald-300' : 'text-[#C5A059]'}`}>
              <span className={`h-px w-10 ${isPartner ? 'bg-emerald-300' : 'bg-[#C5A059]'}`} />
              {isPartner ? 'Savora Partner Portal' : 'The Dining Atelier'}
            </p>
            <h1 className="font-serif text-7xl font-light leading-[0.9] text-white xl:text-8xl">
              {isPartner ? (
                <>
                  Your kitchen,
                  <span className="gold-gradient-text block italic">in the spotlight.</span>
                </>
              ) : (
                <>
                  A seat at
                  <span className="gold-gradient-text block italic">our table.</span>
                </>
              )}
            </h1>
            <p className="mt-8 max-w-md text-base font-light leading-relaxed text-zinc-400">
              {isPartner
                ? 'A dedicated space for food partners to share their craft and manage their Savora presence.'
                : 'Keep your favourite moments, reservations, and seasonal discoveries together in one place.'}
            </p>
            {isPartner ? (
              <div className="mt-10 grid max-w-md grid-cols-2 gap-3">
                <div className="rounded border border-white/10 bg-white/[0.03] p-4">
                  <ChefHat className="mb-3 h-5 w-5 text-emerald-300" />
                  <span className="text-xs uppercase tracking-wider text-zinc-300">Partner access</span>
                </div>
                <div className="rounded border border-white/10 bg-white/[0.03] p-4">
                  <ArrowUpRight className="mb-3 h-5 w-5 text-emerald-300" />
                  <span className="text-xs uppercase tracking-wider text-zinc-300">Your food stories</span>
                </div>
              </div>
            ) : (
              <div className="mt-10 h-px w-24 bg-[#C5A059]/60" />
            )}
          </section>

          <section
            className={`mx-auto w-full max-w-[480px] border p-7 shadow-2xl backdrop-blur-xl sm:p-10 ${
              isPartner
                ? 'border-emerald-200/20 bg-[#101412]/90'
                : 'border-white/10 bg-[#111113]/85'
            }`}
          >
            <div className="mb-8">
              <p className={`mb-3 font-mono text-[10px] uppercase tracking-[0.3em] ${isPartner ? 'text-emerald-300' : 'text-[#C5A059]'}`}>
                {isPartner ? 'Food partner access' : 'Savora guest access'}
              </p>
              <h2 className="font-serif text-4xl font-light text-white">
                {mode === 'login'
                  ? isPartner ? 'Welcome back, partner.' : 'Welcome back.'
                  : isPartner ? 'Join as a partner.' : 'Join the table.'}
              </h2>
              <p className="mt-3 text-sm text-zinc-500">
                {mode === 'login'
                  ? isPartner
                    ? 'Sign in to continue to your food partner space.'
                    : 'Enter your details to continue your evening.'
                  : isPartner
                    ? 'Create a partner account to bring your food to Savora.'
                    : 'Create an account for a more personal Savora experience.'}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {mode === 'signup' && (
                <label className="block">
                  <span className="mb-2 block text-[10px] uppercase tracking-[0.2em] text-zinc-500">
                    {nameLabel}
                  </span>
                  <span className="relative block">
                    <UserRound className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500" />
                    <input
                      required
                      autoComplete="name"
                      value={fullName}
                      onChange={(event) => setFullName(event.target.value)}
                      className="w-full border border-white/10 bg-white/[0.03] py-3.5 pl-11 pr-4 text-sm text-white outline-none transition-colors placeholder:text-zinc-600 focus:border-[#C5A059]/70"
                      placeholder={isPartner ? 'Restaurant or partner name' : 'Your name'}
                    />
                  </span>
                </label>
              )}

              <label className="block">
                <span className="mb-2 block text-[10px] uppercase tracking-[0.2em] text-zinc-500">
                  Email address
                </span>
                <span className="relative block">
                  <Mail className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500" />
                  <input
                    required
                    type="email"
                    autoComplete="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    className="w-full border border-white/10 bg-white/[0.03] py-3.5 pl-11 pr-4 text-sm text-white outline-none transition-colors placeholder:text-zinc-600 focus:border-[#C5A059]/70"
                    placeholder="you@example.com"
                  />
                </span>
              </label>

              <label className="block">
                <span className="mb-2 block text-[10px] uppercase tracking-[0.2em] text-zinc-500">
                  Password
                </span>
                <span className="relative block">
                  <LockKeyhole className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500" />
                  <input
                    required
                    minLength={6}
                    type={showPassword ? 'text' : 'password'}
                    autoComplete={mode === 'login' ? 'current-password' : 'new-password'}
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    className="w-full border border-white/10 bg-white/[0.03] py-3.5 pl-11 pr-12 text-sm text-white outline-none transition-colors placeholder:text-zinc-600 focus:border-[#C5A059]/70"
                    placeholder="At least 6 characters"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((visible) => !visible)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500 transition-colors hover:text-zinc-200"
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </span>
              </label>

              {message && <p className="text-sm text-red-300">{message}</p>}

              <button
                type="submit"
                disabled={isSubmitting}
                className={`flex w-full items-center justify-center gap-2 py-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#080808] transition-colors disabled:cursor-not-allowed disabled:opacity-60 ${
                  isPartner
                    ? 'bg-emerald-300 hover:bg-emerald-200'
                    : 'bg-[#C5A059] hover:bg-[#d6b46b]'
                }`}
              >
                {isSubmitting
                  ? 'Please wait...'
                  : mode === 'login'
                    ? isPartner ? 'Enter partner portal' : 'Enter Savora'
                    : isPartner ? 'Create partner account' : 'Create guest account'}
                <ArrowUpRight className="h-4 w-4" />
              </button>
            </form>

            <div className="mt-7 space-y-4 text-center">
              <p className="text-xs text-zinc-500">
                {mode === 'login' ? 'New to Savora?' : 'Already have an account?'}{' '}
                <button
                  type="button"
                  onClick={() => navigate(switchModePath)}
                  className={`font-medium transition-colors ${isPartner ? 'text-emerald-300 hover:text-emerald-200' : 'text-[#C5A059] hover:text-[#d6b46b]'}`}
                >
                  {mode === 'login' ? 'Create an account' : 'Sign in'}
                </button>
              </p>
              <button
                type="button"
                onClick={() => navigate(otherRolePath)}
                className="text-[10px] uppercase tracking-[0.15em] text-zinc-600 transition-colors hover:text-zinc-300"
              >
                {isPartner
                  ? mode === 'login' ? 'Looking to dine? Guest sign in' : 'Looking to dine? Create a guest account'
                  : mode === 'login' ? 'Are you a food partner? Partner sign in' : 'Are you a food partner? Create a partner account'}
              </button>
            </div>
          </section>
        </div>
      </div>
    </motion.div>
  );
};
