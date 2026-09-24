import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, Sparkles, CheckCircle2, ShieldCheck, X } from 'lucide-react';


interface ReservationProps {
  isModal?: boolean;
  onCloseModal?: () => void;
}

export const Reservation: React.FC<ReservationProps> = ({ isModal = false, onCloseModal }) => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    experience: 'tasting_menu',
    guests: 2,
    date: '2026-10-15',
    time: '19:30',
    fullName: '',
    email: '',
    phone: '',
    dietaryNotes: '',
    specialOccasion: '',
  });

  const [reservationCode, setReservationCode] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleGuestSelect = (num: number) => {
    setFormData((prev) => ({ ...prev, guests: num }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const randomCode = `ECR-${Math.floor(1000 + Math.random() * 9000)}-${new Date().getFullYear()}`;
    setReservationCode(randomCode);
    setIsSubmitted(true);
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setStep(1);
    if (onCloseModal) onCloseModal();
  };

  const content = (
    <div className="w-full max-w-4xl mx-auto bg-zinc-950/80 rounded-3xl border border-white/10 p-6 sm:p-10 md:p-14 backdrop-blur-xl relative overflow-hidden shadow-2xl">
      {/* Background ambient gold gradient */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C5A059]/5 rounded-full blur-3xl pointer-events-none" />

      {isModal && onCloseModal && (
        <button
          onClick={onCloseModal}
          className="absolute top-6 right-6 p-2 rounded-full border border-white/10 text-zinc-400 hover:text-white hover:border-[#C5A059] transition-colors"
          aria-label="Close reservation dialog"
        >
          <X className="w-5 h-5" />
        </button>
      )}

      {/* Header */}
      <div className="text-center space-y-3 mb-12">
        <div className="flex items-center justify-center space-x-2 text-xs font-mono tracking-[0.3em] text-[#C5A059] uppercase">
          <Sparkles className="w-3.5 h-3.5" />
          <span>BESPOKE SEATING RESERVATION</span>
        </div>
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-light">
          Reserve Your <span className="italic gold-gradient-text">Nocturne Journey.</span>
        </h2>
        <p className="text-zinc-400 font-sans text-xs sm:text-sm max-w-lg mx-auto font-light">
          Seating is limited to 32 guests per evening to preserve acoustic tranquility and gastronomic intimacy.
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
            <div className="flex items-center justify-center space-x-4 mb-8">
              {[1, 2, 3].map((s) => (
                <button
                  type="button"
                  key={s}
                  onClick={() => s < step && setStep(s as 1 | 2 | 3)}
                  className={`flex items-center space-x-2 text-xs font-mono uppercase tracking-widest transition-colors ${
                    step === s
                      ? 'text-[#C5A059]'
                      : step > s
                      ? 'text-zinc-300'
                      : 'text-zinc-600'
                  }`}
                >
                  <span
                    className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] border ${
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
                    {s === 1 ? 'Chamber' : s === 2 ? 'Date & Time' : 'Guest Details'}
                  </span>
                </button>
              ))}
            </div>

            {/* STEP 1: Chamber & Experience */}
            {step === 1 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    {
                      id: 'tasting_menu',
                      title: 'The Dining Room',
                      desc: 'Full 8-course Nocturne tasting amidst volcanic basalt and whisper acoustics.',
                      badge: '1 - 4 Guests',
                    },
                    {
                      id: 'chefs_counter',
                      title: "Chef's Hearth",
                      desc: 'Front-row view of the live Binchotan embers and delicate plating pass.',
                      badge: 'Solo or Pair',
                    },
                    {
                      id: 'private_salon',
                      title: "Salon L'Alchimiste",
                      desc: 'Private subterranean chamber with dedicated sommelier and live hearth.',
                      badge: '6 - 10 Guests',
                    },
                  ].map((item) => (
                    <div
                      key={item.id}
                      onClick={() => setFormData({ ...formData, experience: item.id })}
                      className={`cursor-pointer p-6 rounded-2xl border transition-all duration-300 ${
                        formData.experience === item.id
                          ? 'border-[#C5A059] bg-[#C5A059]/10'
                          : 'border-white/10 bg-zinc-900/40 hover:border-white/20'
                      }`}
                    >
                      <div className="text-[10px] font-mono text-[#C5A059] uppercase tracking-wider mb-2">
                        {item.badge}
                      </div>
                      <h4 className="font-serif text-xl text-white mb-2">{item.title}</h4>
                      <p className="text-zinc-400 text-xs leading-relaxed font-light font-sans">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Party Size Selector */}
                <div className="pt-4">
                  <label className="block text-xs font-mono uppercase tracking-widest text-zinc-400 mb-3">
                    Number of Guests
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {[1, 2, 3, 4, 5, 6, 8, 10].map((num) => (
                      <button
                        type="button"
                        key={num}
                        onClick={() => handleGuestSelect(num)}
                        className={`w-12 h-12 rounded-xl text-xs font-mono transition-all duration-300 ${
                          formData.guests === num
                            ? 'bg-[#C5A059] text-black font-semibold shadow-lg shadow-[#C5A059]/20'
                            : 'bg-zinc-900 text-zinc-300 border border-white/10 hover:border-[#C5A059]/50'
                        }`}
                      >
                        {num}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="pt-6 flex justify-end">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="px-8 py-3.5 rounded-full bg-[#C5A059] text-[#080808] text-xs font-mono uppercase tracking-widest font-semibold hover:bg-[#d6b46b] transition-colors"
                  >
                    Continue to Date & Time
                  </button>
                </div>
              </motion.div>
            )}

            {/* STEP 2: Date & Service Time */}
            {step === 2 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-widest text-zinc-400 mb-2">
                      Preferred Date (Tue – Sat)
                    </label>
                    <div className="relative">
                      <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleInputChange}
                        min="2026-09-17"
                        className="w-full bg-zinc-900 border border-white/10 rounded-xl px-4 py-3 text-sm text-white font-mono focus:border-[#C5A059] focus:outline-none"
                        required
                      />
                      <Calendar className="absolute right-4 top-3.5 w-4 h-4 text-zinc-500 pointer-events-none" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-widest text-zinc-400 mb-2">
                      Seating Service Hour
                    </label>
                    <div className="relative">
                      <select
                        name="time"
                        value={formData.time}
                        onChange={handleInputChange}
                        className="w-full bg-zinc-900 border border-white/10 rounded-xl px-4 py-3 text-sm text-white font-mono focus:border-[#C5A059] focus:outline-none appearance-none"
                      >
                        <option value="19:00">19:00 — First Nocturne Seating</option>
                        <option value="19:30">19:30 — Prime Hearth Seating</option>
                        <option value="20:00">20:00 — Solstice Seating</option>
                        <option value="20:30">20:30 — Twilight Seating</option>
                        <option value="21:00">21:00 — Late Nocturne Seating</option>
                      </select>
                      <Clock className="absolute right-4 top-3.5 w-4 h-4 text-zinc-500 pointer-events-none" />
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-zinc-900/50 border border-white/10 flex items-center space-x-3 text-xs text-zinc-400 font-mono">
                  <ShieldCheck className="w-4 h-4 text-[#C5A059] shrink-0" />
                  <span>
                    Dress Code: Elegant Evening Attire required. Jackets requested for gentlemen.
                  </span>
                </div>

                <div className="pt-6 flex justify-between">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="px-6 py-3 rounded-full border border-white/10 text-xs font-mono uppercase tracking-widest text-zinc-400 hover:text-white"
                  >
                    Back
                  </button>
                  <button
                    type="button"
                    onClick={() => setStep(3)}
                    className="px-8 py-3.5 rounded-full bg-[#C5A059] text-[#080808] text-xs font-mono uppercase tracking-widest font-semibold hover:bg-[#d6b46b] transition-colors"
                  >
                    Proceed to Guest Info
                  </button>
                </div>
              </motion.div>
            )}

            {/* STEP 3: Guest Details & Dietary */}
            {step === 3 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-widest text-zinc-400 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      placeholder="e.g. Lord Julian Sterling"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-zinc-900 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:border-[#C5A059] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-widest text-zinc-400 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="julian@residence.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-zinc-900 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:border-[#C5A059] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-widest text-zinc-400 mb-2">
                      Contact Telephone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="+33 6 12 34 56 78"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-zinc-900 border border-white/10 rounded-xl px-4 py-3 text-sm text-white font-mono focus:border-[#C5A059] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-widest text-zinc-400 mb-2">
                      Special Celebration (Optional)
                    </label>
                    <input
                      type="text"
                      name="specialOccasion"
                      placeholder="Anniversary, Private Celebration"
                      value={formData.specialOccasion}
                      onChange={handleInputChange}
                      className="w-full bg-zinc-900 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:border-[#C5A059] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-widest text-zinc-400 mb-2">
                    Dietary Desires & Allergies
                  </label>
                  <textarea
                    name="dietaryNotes"
                    rows={2}
                    placeholder="E.g., No shellfish, strict pescatarian, truffle allergies..."
                    value={formData.dietaryNotes}
                    onChange={handleInputChange}
                    className="w-full bg-zinc-900 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:border-[#C5A059] focus:outline-none resize-none"
                  />
                </div>

                <div className="pt-6 flex justify-between items-center">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="px-6 py-3 rounded-full border border-white/10 text-xs font-mono uppercase tracking-widest text-zinc-400 hover:text-white"
                  >
                    Back
                  </button>

                  <button
                    type="submit"
                    className="px-10 py-4 rounded-full bg-[#C5A059] text-[#080808] text-xs font-mono uppercase tracking-[0.25em] font-semibold hover:bg-[#d6b46b] transition-all shadow-xl shadow-[#C5A059]/20"
                  >
                    Confirm & Transmit Request
                  </button>
                </div>
              </motion.div>
            )}
          </motion.form>
        ) : (
          /* Confirmation Ticket Card */
          <motion.div
            key="confirmation"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center space-y-6 py-6"
          >
            <div className="w-16 h-16 rounded-full bg-[#C5A059]/20 border border-[#C5A059] flex items-center justify-center mx-auto text-[#C5A059]">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#C5A059]">
                RESERVATION CONFIRMED
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl text-white">
                We Await Your Arrival, {formData.fullName || 'Guest'}.
              </h3>
              <p className="text-zinc-400 font-sans text-sm max-w-md mx-auto font-light">
                An authenticated invitation pass has been dispatched to your email address. Our head concierge will contact you 48 hours prior.
              </p>
            </div>

            {/* Passport / Ticket Card */}
            <div className="max-w-md mx-auto p-6 rounded-2xl bg-zinc-900 border border-[#C5A059]/40 text-left space-y-4 font-mono">
              <div className="flex justify-between items-center border-b border-white/10 pb-3">
                <span className="text-xs text-[#C5A059] uppercase tracking-widest">
                  L'ÉCRIN PARIS
                </span>
                <span className="text-xs text-zinc-400">{reservationCode}</span>
              </div>

              <div className="grid grid-cols-2 gap-4 text-xs">
                <div>
                  <span className="text-zinc-500 block uppercase">Date</span>
                  <span className="text-white text-sm">{formData.date}</span>
                </div>
                <div>
                  <span className="text-zinc-500 block uppercase">Time</span>
                  <span className="text-white text-sm">{formData.time}</span>
                </div>
                <div>
                  <span className="text-zinc-500 block uppercase">Guests</span>
                  <span className="text-white text-sm">{formData.guests} Persons</span>
                </div>
                <div>
                  <span className="text-zinc-500 block uppercase">Experience</span>
                  <span className="text-white text-sm capitalize">
                    {formData.experience.replace('_', ' ')}
                  </span>
                </div>
              </div>

              <div className="pt-2 border-t border-white/10 text-[10px] text-zinc-500">
                18 Place Vendôme, Paris • Tel: +33 (0)1 42 68 18 90
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={resetForm}
                className="px-8 py-3 rounded-full border border-white/20 text-xs font-mono uppercase tracking-widest text-zinc-300 hover:text-white hover:border-[#C5A059] transition-colors"
              >
                Close Reservation Window
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );

  if (isModal) {
    return (
      <div className="fixed inset-0 z-[95] bg-[#080808]/90 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {content}
      </div>
    );
  }

  return (
    <section
      id="reservation"
      className="relative w-full py-28 md:py-40 px-6 md:px-16 bg-[#080808] border-b border-white/10 select-none"
    >
      {content}
    </section>
  );
};
