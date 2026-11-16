
// import React from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { X, ArrowUpRight, Compass, Clock, Phone } from 'lucide-react';
// import { RESTAURANT_INFO } from '../../data/restaurantData';
// import { useSmoothScroll } from '../../context/SmoothScrollContext';

// interface NavigationDrawerProps {
//   isOpen: boolean;
//   onClose: () => void;
//   onOpenReservation: () => void;
// }

// const navLinks = [
//   { name: 'Our Story', subtitle: 'Our Philosophy & Passion for Food', href: '#philosophy' },
//   { name: 'Our Menu', subtitle: 'Signature Tasting Experiences', href: '#menu' },
//   { name: 'The Experience', subtitle: 'Food, Ambience & Culinary Craft', href: '#gallery' },
//   { name: 'Dining Spaces', subtitle: 'Private Dining & Special Gatherings', href: '#spaces' },
//   { name: 'Meet Our Chef', subtitle: 'The People Behind Every Dish', href: '#chef' },
//   { name: 'Guest Reviews', subtitle: 'Experiences Shared by Our Guests', href: '#accolades' },
//   { name: 'Reservations', subtitle: 'Book Your Table at SAVORA', href: '#reservation' },
// ];

// export const NavigationDrawer: React.FC<NavigationDrawerProps> = ({
//   isOpen,
//   onClose,
//   onOpenReservation,
// }) => {
//   const { scrollTo } = useSmoothScroll();

//   const handleLinkClick = (href: string) => {
//     onClose();

//     if (href === '#reservation') {
//     //   onOpenReservation();
//         scrollTo('#reservation');
//     } else {
//       setTimeout(() => {
//         scrollTo(href);
//       }, 300);
//     }
//   };

//   return (
//     <AnimatePresence>
//       {isOpen && (
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
//           data-lenis-prevent
//           className="fixed inset-0 z-[90] flex min-h-[100dvh] flex-col overflow-y-auto overscroll-contain bg-[#080808]/95 p-4 backdrop-blur-2xl sm:p-8 md:p-10 lg:p-14"
//         >
//           {/* Header */}
//           <div className="flex items-center justify-between gap-3 border-b border-white/10 pb-5 sm:pb-6">
//             <div className="flex min-w-0 items-center gap-3 sm:gap-4">
//               <span className="font-serif text-lg font-light uppercase tracking-[0.12em] text-[#C5A059] sm:text-2xl sm:tracking-[0.2em]">
//                 {RESTAURANT_INFO.name}
//               </span>

//               <span className="hidden sm:inline-block font-mono text-xs uppercase tracking-[0.3em] text-zinc-500">
//                 • Fine Dining 
//               </span>
//             </div>

//             <button
//               onClick={onClose}
//               aria-label="Close navigation menu"
//               data-cursor="CLOSE"
//               className="group flex shrink-0 items-center space-x-2 rounded-full border border-white/10 px-3 py-2 text-xs uppercase tracking-[0.2em] text-zinc-400 transition-colors duration-300 hover:border-[#C5A059]/50 hover:text-white sm:px-4"
//             >
//               <span className="hidden sm:inline">Close</span>
//               <X className="h-4 w-4 text-[#C5A059] transition-transform duration-300 group-hover:rotate-90" />
//             </button>
//           </div>

//           {/* Navigation Links */}
//           <div className="my-8 grid flex-1 grid-cols-1 gap-8 sm:my-10 lg:my-auto lg:grid-cols-12 lg:gap-10 lg:py-10">
//             <div className="flex flex-col gap-4 sm:gap-5 lg:col-span-7">
//               {navLinks.map((link, idx) => (
//                 <motion.div
//                   key={link.name}
//                   initial={{ opacity: 0, x: -20 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{
//                     delay: 0.1 + idx * 0.06,
//                     duration: 0.5,
//                     ease: [0.16, 1, 0.3, 1],
//                   }}
//                   className="group flex flex-col"
//                 >
//                   <button
//                     onClick={() => handleLinkClick(link.href)}
//                     className="flex w-full items-center gap-3 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C5A059] sm:gap-4"
//                   >
//                     <span className="shrink-0 font-mono text-[10px] text-[#C5A059]/60 transition-colors group-hover:text-[#C5A059] sm:text-xs">
//                       0{idx + 1}
//                     </span>


//                     <span className="font-serif text-xl tracking-tight text-zinc-200 transition-all duration-300 group-hover:italic group-hover:text-[#C5A059] sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl">
//                     {link.name}
//                     </span>

//                     <ArrowUpRight className="h-4 w-4 shrink-0 text-[#C5A059] opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100 sm:h-5 sm:w-5" />
//                   </button>

//                   <span className="ml-7 mt-1 text-[9px] uppercase tracking-[0.15em] text-zinc-500 sm:ml-8 sm:text-[10px] sm:tracking-[0.2em] md:text-xs">
//                     {link.subtitle}
//                   </span>
//                 </motion.div>
//               ))}
//             </div>

//             {/* Restaurant Information */}
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.4, duration: 0.7 }}
//               className="space-y-6 lg:col-span-5 lg:flex lg:flex-col lg:justify-between lg:border-l lg:border-white/10 lg:pl-8 xl:pl-12"
//             >
//               <div className="space-y-5 sm:space-y-6">

//                 {/* Location */}
//                 <div>
//                   <div className="mb-2 flex items-center space-x-2 text-[#C5A059]">
//                     <Compass className="h-4 w-4" />
//                     <span className="font-mono text-xs uppercase tracking-[0.25em]">
//                       Visit Us
//                     </span>
//                   </div>

//                   <p className="text-sm leading-relaxed text-zinc-300">
//                    Bengaluru, Karnataka, India
//                   </p>

//                   <p className="mt-1 font-mono text-xs text-zinc-500">
//                     Experience Exceptional Dining at SAVORA
//                   </p>
//                 </div>

//                 {/* Opening Hours */}
//                 <div>
//                   <div className="mb-2 flex items-center space-x-2 text-[#C5A059]">
//                     <Clock className="h-4 w-4" />
//                     <span className="font-mono text-xs uppercase tracking-[0.25em]">
//                       Opening Hours
//                     </span>
//                   </div>

//                   <p className="text-sm text-zinc-300">
//                     {RESTAURANT_INFO.openingHours}
//                   </p>

//                   <p className="mt-1 text-xs text-zinc-500">
//                     Private Dining: By Advance Reservation
//                   </p>
//                 </div>

//                 {/* Contact */}
//                 <div>
//                   <div className="mb-2 flex items-center space-x-2 text-[#C5A059]">
//                     <Phone className="h-4 w-4" />
//                     <span className="font-mono text-xs uppercase tracking-[0.25em]">
//                       Contact Us
//                     </span>
//                   </div>

//                   <p className="font-mono text-sm text-zinc-300">
//                     +91 98765 43210
//                   </p>

//                   <p className="text-xs text-zinc-500">
//                     reservations@savora.in
//                   </p>
//                 </div>
//               </div>

//               {/* Reservation CTA */}
//               <div className="border-t border-white/10 pt-6">
//                 <button
//                   onClick={() => {
//                     onClose();
//                     onOpenReservation();
//                   }}
//                   className="group flex w-full items-center justify-center space-x-2 rounded-full bg-[#C5A059] px-6 py-4 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-[#080808] transition-all duration-300 hover:bg-[#d6b46b]"
//                 >
//                   <span>Book Your Table</span>
//                   <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
//                 </button>
//               </div>
//             </motion.div>
//           </div>

//           {/* Footer */}
//           <div className="flex shrink-0 flex-col items-center justify-between gap-2 border-t border-white/10 pt-5 text-center font-mono text-[10px] tracking-wider text-zinc-500 sm:flex-row sm:pt-6 sm:text-left sm:text-[11px]">
//             <span>CRAFTED WITH PASSION • SERVED WITH CARE</span>
//             <span>
//               © {new Date().getFullYear()} SAVORA. ALL RIGHTS RESERVED.
//             </span>
//           </div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// };








import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowUpRight, Compass, Clock, Phone } from 'lucide-react';
import { RESTAURANT_INFO } from '../../data/restaurantData';
import { useSmoothScroll } from '../../context/SmoothScrollContext';

interface NavigationDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const navLinks = [
  { name: 'Our Story', subtitle: 'Our Philosophy & Passion for Food', href: '#philosophy' },
  { name: 'Our Menu', subtitle: 'Signature Tasting Experiences', href: '#menu' },
  { name: 'The Experience', subtitle: 'Food, Ambience & Culinary Craft', href: '#gallery' },
  { name: 'Dining Spaces', subtitle: 'Private Dining & Special Gatherings', href: '#spaces' },
  { name: 'Meet Our Chef', subtitle: 'The People Behind Every Dish', href: '#chef' },
  { name: 'Guest Reviews', subtitle: 'Experiences Shared by Our Guests', href: '#accolades' },
  { name: 'Reservations', subtitle: 'Book Your Table at SAVORA', href: '#reservation' },
];

export const NavigationDrawer: React.FC<NavigationDrawerProps> = ({
  isOpen,
  onClose,
}) => {
  const { scrollTo } = useSmoothScroll();

  const handleLinkClick = (href: string) => {
    onClose();

    setTimeout(() => {
      scrollTo(href);
    }, 550);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          data-lenis-prevent
          className="fixed inset-0 z-[90] flex min-h-[100dvh] flex-col overflow-y-auto overscroll-contain bg-[#080808]/95 p-4 backdrop-blur-2xl sm:p-8 md:p-10 lg:p-14"
        >
          {/* Header */}
          <div className="flex items-center justify-between gap-3 border-b border-white/10 pb-5 sm:pb-6">
            <div className="flex min-w-0 items-center gap-3 sm:gap-4">
              <span className="font-serif text-lg font-light uppercase tracking-[0.12em] text-[#C5A059] sm:text-2xl sm:tracking-[0.2em]">
                {RESTAURANT_INFO.name}
              </span>

              <span className="hidden sm:inline-block font-mono text-xs uppercase tracking-[0.3em] text-zinc-500">
                • Fine Dining
              </span>
            </div>

            <button
              onClick={onClose}
              aria-label="Close navigation menu"
              data-cursor="CLOSE"
              className="group flex shrink-0 items-center space-x-2 rounded-full border border-white/10 px-3 py-2 text-xs uppercase tracking-[0.2em] text-zinc-400 transition-colors duration-300 hover:border-[#C5A059]/50 hover:text-white sm:px-4"
            >
              <span className="hidden sm:inline">Close</span>
              <X className="h-4 w-4 text-[#C5A059] transition-transform duration-300 group-hover:rotate-90" />
            </button>
          </div>

          {/* Navigation Links */}
          <div className="my-8 grid flex-1 grid-cols-1 gap-8 sm:my-10 lg:my-auto lg:grid-cols-12 lg:gap-10 lg:py-10">
            <div className="flex flex-col gap-4 sm:gap-5 lg:col-span-7">
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: 0.1 + idx * 0.06,
                    duration: 0.5,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="group flex flex-col"
                >
                  <button
                    onClick={() => handleLinkClick(link.href)}
                    className="flex w-full items-center gap-3 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C5A059] sm:gap-4"
                  >
                    <span className="shrink-0 font-mono text-[10px] text-[#C5A059]/60 transition-colors group-hover:text-[#C5A059] sm:text-xs">
                      0{idx + 1}
                    </span>

                    <span className="font-serif text-xl tracking-tight text-zinc-200 transition-all duration-300 group-hover:italic group-hover:text-[#C5A059] sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl">
                      {link.name}
                    </span>

                    <ArrowUpRight className="h-4 w-4 shrink-0 text-[#C5A059] opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100 sm:h-5 sm:w-5" />
                  </button>

                  <span className="ml-7 mt-1 text-[9px] uppercase tracking-[0.15em] text-zinc-500 sm:ml-8 sm:text-[10px] sm:tracking-[0.2em] md:text-xs">
                    {link.subtitle}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Restaurant Information */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="space-y-6 lg:col-span-5 lg:flex lg:flex-col lg:justify-between lg:border-l lg:border-white/10 lg:pl-8 xl:pl-12"
            >
              <div className="space-y-5 sm:space-y-6">

                {/* Location */}
                <div>
                  <div className="mb-2 flex items-center space-x-2 text-[#C5A059]">
                    <Compass className="h-4 w-4" />
                    <span className="font-mono text-xs uppercase tracking-[0.25em]">
                      Visit Us
                    </span>
                  </div>

                  <p className="text-sm leading-relaxed text-zinc-300">
                    Bengaluru, Karnataka, India
                  </p>

                  <p className="mt-1 font-mono text-xs text-zinc-500">
                    Experience Exceptional Dining at SAVORA
                  </p>
                </div>

                {/* Opening Hours */}
                <div>
                  <div className="mb-2 flex items-center space-x-2 text-[#C5A059]">
                    <Clock className="h-4 w-4" />
                    <span className="font-mono text-xs uppercase tracking-[0.25em]">
                      Opening Hours
                    </span>
                  </div>

                  <p className="text-sm text-zinc-300">
                    {RESTAURANT_INFO.openingHours}
                  </p>

                  <p className="mt-1 text-xs text-zinc-500">
                    Private Dining: By Advance Reservation
                  </p>
                </div>

                {/* Contact */}
                <div>
                  <div className="mb-2 flex items-center space-x-2 text-[#C5A059]">
                    <Phone className="h-4 w-4" />
                    <span className="font-mono text-xs uppercase tracking-[0.25em]">
                      Contact Us
                    </span>
                  </div>

                  <p className="font-mono text-sm text-zinc-300">
                    +91 98765 43210
                  </p>

                  <p className="text-xs text-zinc-500">
                    reservations@savora.in
                  </p>
                </div>
              </div>

              {/* Reservation CTA */}
              <div className="border-t border-white/10 pt-6">
                <button
                  onClick={() => handleLinkClick('#reservation')}
                  className="group flex w-full items-center justify-center space-x-2 rounded-full bg-[#C5A059] px-6 py-4 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-[#080808] transition-all duration-300 hover:bg-[#d6b46b]"
                >
                  <span>Book Your Table</span>
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </button>
              </div>
            </motion.div>
          </div>

          {/* Footer */}
          <div className="flex shrink-0 flex-col items-center justify-between gap-2 border-t border-white/10 pt-5 text-center font-mono text-[10px] tracking-wider text-zinc-500 sm:flex-row sm:pt-6 sm:text-left sm:text-[11px]">
            <span>CRAFTED WITH PASSION • SERVED WITH CARE</span>

            <span>
              © {new Date().getFullYear()} SAVORA. ALL RIGHTS RESERVED.
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
