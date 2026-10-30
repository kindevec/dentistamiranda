import React from 'react';
import { motion } from 'motion/react';
import { OrganicDentalRibbon } from '../components/OrganicDentalRibbon';

export interface MobileHeroProps {
  onOpenBooking?: () => void;
  onOpenEmergency?: () => void;
}

export const MobileHero: React.FC<MobileHeroProps> = () => {
  const handleServicesClick = () => {
    const el = document.getElementById('servicios');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="inicio"
      className="relative bg-gradient-to-b from-[#FDFCF8] via-[#FAF9F5] to-[#FAF9F5] overflow-hidden flex flex-col justify-start px-4 pt-3 pb-5"
    >
      {/* Subtle Organic Golden Dental Ribbons from PC */}
      <OrganicDentalRibbon className="-top-10 -left-20 w-80 opacity-25 pointer-events-none" variant="gold" />
      <OrganicDentalRibbon className="top-1/3 -right-24 w-72 opacity-20 pointer-events-none" variant="champagne" />

      {/* Imagen de fondo clínica sutil (textura arquitectónica visible y equilibrada en WebP) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <img
          src="/fondo-mobile.webp"
          alt=""
          aria-hidden="true"
          loading="eager"
          fetchPriority="low"
          decoding="async"
          width={736}
          height={736}
          className="w-full h-full object-cover object-center opacity-[0.22] filter brightness-[1.03] contrast-[1.08] select-none"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#FDFCF8]/60 via-transparent to-[#FAF9F5]/80" />
      </div>

      {/* Ambient Halo Background Lights */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-16 -right-16 w-80 h-80 bg-gradient-to-br from-[#D4AF37]/15 to-transparent rounded-full blur-3xl opacity-60" />
        <div className="absolute top-1/2 -left-20 w-72 h-72 bg-gradient-to-tr from-[#FAF7EE] to-[#D4AF37]/10 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="relative z-10 w-full max-w-sm mx-auto flex flex-col items-center text-center pt-1">
        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="text-[2.25rem] xs:text-[2.5rem] font-black text-[#0D0D0D] tracking-tight leading-[1.12] mb-2.5"
        >
          El arte de<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5A059] via-[#D4AF37] to-[#84631E]">
            sonreír con confianza
          </span>
        </motion.h1>

        {/* Doctor Photo with Golden Halos, Pulsing Ring & Pedestal Box (GPU Accelerated) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative flex flex-col items-center justify-center w-full my-3 max-w-[280px]"
        >
          {/* Subtle Golden Ring Pulse from PC view */}
          <div className="absolute w-56 h-56 rounded-full border-2 border-[#D4AF37]/35 pointer-events-none -z-10 animate-pulse" />

          {/* Ambient Glowing Halo */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#D4AF37]/30 via-[#F3E5AB]/15 to-transparent blur-2xl -z-10" />
          
          {/* Doctor Photo & Pedestal floating smoothly together in GPU */}
          <div className="relative z-10 w-full flex flex-col items-center animate-subtle-float">
            <div className="w-full flex justify-center -mb-5">
              <img
                alt="Dr. Gabriel Miranda - Odontólogo Especialista"
                width={420}
                height={500}
                className="w-full h-auto max-h-[320px] object-contain object-bottom drop-shadow-[0_20px_35px_rgba(132,99,30,0.18)] select-none pointer-events-none"
                loading="eager"
                fetchPriority="high"
                decoding="async"
                src="/dr-gabriel-miranda.webp"
              />
            </div>

            {/* Cajita de Autor Doradita y Redondeada en la parte inferior */}
            <div className="relative z-20 w-[92%] bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#C5A059] border border-[#D4AF37]/70 rounded-3xl sm:rounded-full py-2.5 px-4 shadow-xl shadow-amber-950/20 text-center select-none">
              <h3 className="text-sm font-black text-[#0B0B0B] tracking-tight leading-tight">
                Dr. Gabriel Miranda
              </h3>
              <p className="text-[10px] font-bold text-[#42310B] uppercase tracking-wider mt-0.5">
                Rehabilitación Oral y Estética
              </p>
            </div>
          </div>
        </motion.div>

        {/* Conversion CTA Action Buttons with PC-grade transitions */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="flex flex-col gap-2.5 w-full mt-2"
        >
          <motion.button
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.96 }}
            onClick={handleServicesClick}
            className="w-full py-3.5 px-6 rounded-2xl bg-white/90 hover:bg-[#FAF7EE] hover:border-[#D4AF37]/60 border border-stone-300 text-stone-800 font-bold text-xs uppercase tracking-wider shadow-2xs transition-all duration-300 flex items-center justify-center gap-1.5 cursor-pointer group"
          >
            <span>Explorar Servicios y Especialidades</span>
            <span className="text-base leading-none group-hover:translate-y-0.5 transition-transform">↓</span>
          </motion.button>
        </motion.div>

        {/* Operating hours & location */}
        <div className="space-y-1 text-center text-[11px] text-stone-500 mt-4">
          <p className="leading-snug">
            <span>Lunes a Sábado: 09:00 AM - 19:00 PM</span>
            <br />
            <span>Domingo: 09:00 AM - 14:00 PM</span>
          </p>
          <p className="font-semibold text-stone-700">Av. 19 de Mayo (Ruta E30) y Velasco Ibarra • Edif. Color Gris, PB (Junto a IntegralMedic) • La Maná</p>
        </div>
      </div>
    </section>
  );
};
