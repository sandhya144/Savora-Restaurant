import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Calendar,
  Clock,
  Sparkles,
  CheckCircle2,
  ShieldCheck,
  X,
} from 'lucide-react';

interface ReservationProps {
  isModal?: boolean;
  onCloseModal?: () => void;
}

const getTodayDate = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
};

const formatDate = (date: string) => {
  if (!date) return '';

  return new Date(`${date}T00:00:00`).toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
};

const formatTime = (time: string) => {
  if (!time) return '';

  return new Date(`2000-01-01T${time}`).toLocaleTimeString('en-IN', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  });
};

export const Reservation: React.FC<ReservationProps> = ({
  isModal = false,
  onCloseModal,
}) => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    experience: 'dining_room',
    guests: 2,
    date: '',
    time: '19:00',
    fullName: '',
    email: '',
    phone: '',
    dietaryNotes: '',
    specialOccasion: '',
  });

  const [reservationCode, setReservationCode] = useState('');

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleGuestSelect = (num: number) => {
    setFormData((prev) => ({
      ...prev,
      guests: num,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const randomCode = `SAV-${Math.floor(1000 + Math.random() * 9000)}-${new Date().getFullYear()}`;

    setReservationCode(randomCode);
    setIsSubmitted(true);
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setStep(1);

    setFormData({
      experience: 'dining_room',
      guests: 2,
      date: '',
      time: '19:00',
      fullName: '',
      email: '',
      phone: '',
      dietaryNotes: '',
      specialOccasion: '',
    });

    if (onCloseModal) onCloseModal();
  };

  const experiences = [
    {
      id: 'dining_room',
      title: 'Main Dining Room',
      desc: 'Enjoy a memorable dining experience with our carefully prepared dishes.',
      badge: '1–4 Guests',
    },
    {
      id: 'chefs_counter',
      title: "Chef's Counter",
      desc: 'Watch our chefs prepare and present your meal right in front of you.',
      badge: '1–2 Guests',
    },
    {
      id: 'private_dining',
      title: 'Private Dining Room',
      desc: 'Enjoy a private space for family gatherings and special occasions.',
      badge: '6–10 Guests',
    },
  ];

  const content = (
    <div className="relative mx-auto w-full max-w-4xl overflow-hidden rounded-3xl border border-white/10 bg-zinc-950/80 p-6 shadow-2xl backdrop-blur-xl sm:p-10 md:p-14">

      {/* Background */}
      <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full bg-[#C5A059]/5 blur-3xl" />

      {/* Close Button */}
      {isModal && onCloseModal && (
        <button
          onClick={onCloseModal}
          className="absolute right-6 top-6 rounded-full border border-white/10 p-2 text-zinc-400 transition-colors hover:border-[#C5A059] hover:text-white"
          aria-label="Close reservation dialog"
        >
          <X className="h-5 w-5" />
        </button>
      )}

      {/* Header */}
      <div className="mb-12 space-y-3 text-center">
        <div className="flex items-center justify-center space-x-2 font-mono text-xs uppercase tracking-[0.3em] text-[#C5A059]">
          <Sparkles className="h-3.5 w-3.5" />
          <span>Table Reservations</span>
        </div>

        <h2 className="font-serif text-3xl font-light text-white sm:text-4xl md:text-5xl">
          Reserve Your <span className="gold-gradient-text italic">Table.</span>
        </h2>

        <p className="mx-auto max-w-lg font-sans text-xs font-light text-zinc-400 sm:text-sm">
          Plan your visit to SAVORA. Choose your dining experience,
          select a date and time, and share your details with us.
        </p>
      </div>

      <AnimatePresence mode="wait">
        {!isSubmitted ? (
          <motion.form
            key="reservation-form"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            onSubmit={handleSubmit}
            className="space-y-8"
          >
            {/* Step Indicators */}
            <div className="mb-8 flex items-center justify-center space-x-4">
              {[1, 2, 3].map((s) => (
                <button
                  type="button"
                  key={s}
                  onClick={() => s < step && setStep(s as 1 | 2 | 3)}
                  className={`flex items-center space-x-2 font-mono text-xs uppercase tracking-widest transition-colors ${
                    step === s
                      ? 'text-[#C5A059]'
                      : step > s
                      ? 'text-zinc-300'
                      : 'text-zinc-600'
                  }`}
                >
                  <span
                    className={`flex h-6 w-6 items-center justify-center rounded-full border text-[10px] ${
                      step === s
                        ? 'border-[#C5A059] bg-[#C5A059]/20 text-[#C5A059]'
                        : step > s
                        ? 'border-zinc-400 text-zinc-300'
                        : 'border-zinc-700 text-zinc-600'
                    }`}
                  >
                    0{s}
                  </span>

                  <span className="hidden sm:inline">
                    {s === 1
                      ? 'Experience'
                      : s === 2
                      ? 'Date & Time'
                      : 'Your Details'}
                  </span>
                </button>
              ))}
            </div>

            {/* STEP 1: Dining Experience */}
            {step === 1 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                  {experiences.map((item) => (
                    <div
                      key={item.id}
                      onClick={() =>
                        setFormData((prev) => ({
                          ...prev,
                          experience: item.id,
                        }))
                      }
                      className={`cursor-pointer rounded-2xl border p-6 transition-all duration-300 ${
                        formData.experience === item.id
                          ? 'border-[#C5A059] bg-[#C5A059]/10'
                          : 'border-white/10 bg-zinc-900/40 hover:border-white/20'
                      }`}
                    >
                      <div className="mb-2 font-mono text-[10px] uppercase tracking-wider text-[#C5A059]">
                        {item.badge}
                      </div>

                      <h4 className="mb-2 font-serif text-xl text-white">
                        {item.title}
                      </h4>

                      <p className="font-sans text-xs font-light leading-relaxed text-zinc-400">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Number of Guests */}
                <div className="pt-4">
                  <label className="mb-3 block font-mono text-xs uppercase tracking-widest text-zinc-400">
                    Number of Guests
                  </label>

                  <div className="flex flex-wrap gap-2">
                    {[1, 2, 3, 4, 5, 6, 8, 10].map((num) => (
                      <button
                        type="button"
                        key={num}
                        onClick={() => handleGuestSelect(num)}
                        className={`h-12 w-12 rounded-xl font-mono text-xs transition-all duration-300 ${
                          formData.guests === num
                            ? 'bg-[#C5A059] font-semibold text-black shadow-lg shadow-[#C5A059]/20'
                            : 'border border-white/10 bg-zinc-900 text-zinc-300 hover:border-[#C5A059]/50'
                        }`}
                      >
                        {num}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex justify-end pt-6">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="rounded-full bg-[#C5A059] px-8 py-3.5 font-mono text-xs font-semibold uppercase tracking-widest text-[#080808] transition-colors hover:bg-[#d6b46b]"
                  >
                    Continue
                  </button>
                </div>
              </motion.div>
            )}

            {/* STEP 2: Date and Time */}
            {step === 2 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block font-mono text-xs uppercase tracking-widest text-zinc-400">
                      Preferred Date
                    </label>

                    <div className="relative">
                      <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleInputChange}
                        min={getTodayDate()}
                        className="w-full rounded-xl border border-white/10 bg-zinc-900 px-4 py-3 font-mono text-sm text-white focus:border-[#C5A059] focus:outline-none"
                        required
                      />

                      <Calendar className="pointer-events-none absolute right-4 top-3.5 h-4 w-4 text-zinc-500" />
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block font-mono text-xs uppercase tracking-widest text-zinc-400">
                      Preferred Time
                    </label>

                    <div className="relative">
                      <select
                        name="time"
                        value={formData.time}
                        onChange={handleInputChange}
                        className="w-full appearance-none rounded-xl border border-white/10 bg-zinc-900 px-4 py-3 font-mono text-sm text-white focus:border-[#C5A059] focus:outline-none"
                      >
                        <option value="19:00">7:00 PM</option>
                        <option value="19:30">7:30 PM</option>
                        <option value="20:00">8:00 PM</option>
                        <option value="20:30">8:30 PM</option>
                        <option value="21:00">9:00 PM</option>
                      </select>

                      <Clock className="pointer-events-none absolute right-4 top-3.5 h-4 w-4 text-zinc-500" />
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-3 rounded-xl border border-white/10 bg-zinc-900/50 p-4 font-mono text-xs text-zinc-400">
                  <ShieldCheck className="h-4 w-4 shrink-0 text-[#C5A059]" />
                  <span>
                    We recommend smart casual or formal clothing for your visit.
                  </span>
                </div>

                <div className="flex justify-between pt-6">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="rounded-full border border-white/10 px-6 py-3 font-mono text-xs uppercase tracking-widest text-zinc-400 hover:text-white"
                  >
                    Back
                  </button>

                  <button
                    type="button"
                    onClick={() => setStep(3)}
                    disabled={!formData.date}
                    className="rounded-full bg-[#C5A059] px-8 py-3.5 font-mono text-xs font-semibold uppercase tracking-widest text-[#080808] transition-colors hover:bg-[#d6b46b] disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    Continue
                  </button>
                </div>
              </motion.div>
            )}

            {/* STEP 3: Guest Details */}
            {step === 3 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block font-mono text-xs uppercase tracking-widest text-zinc-400">
                      Full Name
                    </label>

                    <input
                      type="text"
                      name="fullName"
                      placeholder="Enter your full name"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                      className="w-full rounded-xl border border-white/10 bg-zinc-900 px-4 py-3 text-sm text-white focus:border-[#C5A059] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block font-mono text-xs uppercase tracking-widest text-zinc-400">
                      Email Address
                    </label>

                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your email address"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full rounded-xl border border-white/10 bg-zinc-900 px-4 py-3 text-sm text-white focus:border-[#C5A059] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block font-mono text-xs uppercase tracking-widest text-zinc-400">
                      Phone Number
                    </label>

                    <input
                      type="tel"
                      name="phone"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full rounded-xl border border-white/10 bg-zinc-900 px-4 py-3 font-mono text-sm text-white focus:border-[#C5A059] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block font-mono text-xs uppercase tracking-widest text-zinc-400">
                      Special Occasion (Optional)
                    </label>

                    <input
                      type="text"
                      name="specialOccasion"
                      placeholder="Birthday, anniversary, etc."
                      value={formData.specialOccasion}
                      onChange={handleInputChange}
                      className="w-full rounded-xl border border-white/10 bg-zinc-900 px-4 py-3 text-sm text-white focus:border-[#C5A059] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block font-mono text-xs uppercase tracking-widest text-zinc-400">
                    Dietary Requirements or Allergies
                  </label>

                  <textarea
                    name="dietaryNotes"
                    rows={2}
                    placeholder="Please mention any food allergies or dietary preferences."
                    value={formData.dietaryNotes}
                    onChange={handleInputChange}
                    className="w-full resize-none rounded-xl border border-white/10 bg-zinc-900 px-4 py-3 text-sm text-white focus:border-[#C5A059] focus:outline-none"
                  />
                </div>

                <div className="flex items-center justify-between pt-6">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="rounded-full border border-white/10 px-6 py-3 font-mono text-xs uppercase tracking-widest text-zinc-400 hover:text-white"
                  >
                    Back
                  </button>

                  <button
                    type="submit"
                    className="rounded-full bg-[#C5A059] px-8 py-4 font-mono text-xs font-semibold uppercase tracking-widest text-[#080808] shadow-xl shadow-[#C5A059]/20 transition-all hover:bg-[#d6b46b]"
                  >
                    Submit Reservation Request
                  </button>
                </div>
              </motion.div>
            )}
          </motion.form>
        ) : (
          /* Confirmation */
          <motion.div
            key="confirmation"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="space-y-6 py-6 text-center"
          >
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-[#C5A059] bg-[#C5A059]/20 text-[#C5A059]">
              <CheckCircle2 className="h-8 w-8" />
            </div>

            <div className="space-y-2">
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#C5A059]">
                Request Received
              </span>

              <h3 className="font-serif text-3xl text-white sm:text-4xl">
                Thank You, {formData.fullName || 'Guest'}.
              </h3>

              <p className="mx-auto max-w-md font-sans text-sm font-light text-zinc-400">
                Your reservation request has been recorded on this page.
                The SAVORA team will need to contact you to confirm your booking.
              </p>
            </div>

            {/* Reservation Details */}
            <div className="mx-auto max-w-md space-y-4 rounded-2xl border border-[#C5A059]/40 bg-zinc-900 p-6 text-left font-mono">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="text-xs uppercase tracking-widest text-[#C5A059]">
                  SAVORA
                </span>

                <span className="text-xs text-zinc-400">
                  {reservationCode}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4 text-xs">
                <div>
                  <span className="mb-1 block uppercase text-zinc-500">
                    Date
                  </span>
                  <span className="text-sm text-white">
                    {formatDate(formData.date)}
                  </span>
                </div>

                <div>
                  <span className="mb-1 block uppercase text-zinc-500">
                    Time
                  </span>
                  <span className="text-sm text-white">
                    {formatTime(formData.time)}
                  </span>
                </div>

                <div>
                  <span className="mb-1 block uppercase text-zinc-500">
                    Guests
                  </span>
                  <span className="text-sm text-white">
                    {formData.guests} Guests
                  </span>
                </div>

                <div>
                  <span className="mb-1 block uppercase text-zinc-500">
                    Experience
                  </span>
                  <span className="text-sm capitalize text-white">
                    {experiences.find(
                      (item) => item.id === formData.experience
                    )?.title}
                  </span>
                </div>
              </div>

              <div className="border-t border-white/10 pt-3 text-[10px] text-zinc-500">
                SAVORA • Bengaluru, Karnataka, India
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={resetForm}
                className="rounded-full border border-white/20 px-8 py-3 font-mono text-xs uppercase tracking-widest text-zinc-300 transition-colors hover:border-[#C5A059] hover:text-white"
              >
                Close
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );

  if (isModal) {
    return (
      <div className="fixed inset-0 z-[95] flex items-center justify-center overflow-y-auto bg-[#080808]/90 p-4 backdrop-blur-2xl sm:p-6">
        {content}
      </div>
    );
  }

  return (
    <section
      id="reservation"
      className="relative w-full select-none border-b border-white/10 bg-[#080808] px-6 py-28 md:px-16 md:py-40"
    >
      {content}
    </section>
  );
};
