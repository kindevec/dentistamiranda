import React from 'react';
import { motion } from 'motion/react';
import {
  createWhatsAppLink,
  GENERAL_WA_MESSAGE,
} from '../data/clinicData';
import {
  OfficialWhatsAppLogo,
  OfficialInstagramLogo,
  OfficialFacebookLogo,
} from './OfficialSocialLogos';

interface FooterProps {
  className?: string;
}

export const Footer: React.FC<FooterProps> = ({ className = '' }) => {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (id: string) => {
    if (id === 'inicio') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -60;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <footer
      id="main-footer"
      className={`relative z-10 border-t border-[#D4AF37]/30 pt-5 sm:pt-6 pb-28 md:pb-6 overflow-hidden text-stone-300 shadow-[0_-8px_30px_rgba(0,0,0,0.5)] bg-[#0D0D0D] ${className}`}
    >
      {/* Sutil aura luminosa dorada de fondo */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-[#D4AF37]/5 blur-3xl pointer-events-none" />
      </div>

      {/* Destellos estelares sutiles */}
      <div className="absolute inset-0 pointer-events-none opacity-20 -z-5">
        <svg viewBox="0 0 1440 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full object-cover">
          <circle cx="200" cy="80" r="1.8" fill="#D4AF37" />
          <circle cx="700" cy="120" r="1.4" fill="#FFFFFF" />
          <circle cx="1200" cy="60" r="2.0" fill="#F3E5AB" />
          <circle cx="1000" cy="220" r="1.6" fill="#D4AF37" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
        {/* ========================================================
            FILA SUPERIOR: Logo Oficial a la izquierda + Redes Sociales arriba a la derecha
           ======================================================== */}
        <div className="flex items-center justify-between gap-3">
          {/* Logo Oficial con Aura y Flotación */}
          <motion.a
            href="#inicio"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('inicio');
            }}
            className="flex items-center gap-2.5 sm:gap-3 group cursor-pointer select-none shrink-0 relative"
            aria-label="Miranda Dental Studio - Volver arriba"
            whileHover={{ scale: 1.04, y: -1 }}
            whileTap={{ scale: 0.96 }}
          >
            <div className="relative flex items-center justify-center">
              <motion.div
                animate={{
                  scale: [1, 1.2, 1.05, 1.15, 1],
                  opacity: [0.35, 0.7, 0.45, 0.65, 0.35],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute -inset-2 rounded-full bg-gradient-to-tr from-[#D4AF37]/60 via-[#F3E5AB]/45 to-[#C5A059]/30 blur-md pointer-events-none"
              />
              <div className="absolute -inset-0.5 rounded-full bg-[#D4AF37]/35 blur-xs group-hover:bg-[#D4AF37]/60 transition-all duration-300 pointer-events-none" />

              <motion.img
                src="/logo-miranda.webp"
                alt="Miranda Dental Studio Símbolo"
                width="36"
                height="36"
                animate={{
                  y: [0, -2.5, 0, 1.5, 0],
                  rotate: [0, 1.5, 0, -1.5, 0],
                  scale: [1, 1.05, 1, 1.03, 1],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="relative z-10 w-8 h-8 sm:w-10 sm:h-10 object-contain rounded-full drop-shadow-[0_0_10px_rgba(212,175,55,0.8)] filter contrast-[1.05] brightness-[1.05]"
              />
            </div>
            <div className="flex flex-col text-left relative z-10 leading-tight">
              <span className="font-serif text-sm sm:text-base lg:text-lg font-black tracking-[0.18em] text-white group-hover:text-[#F3E5AB] transition-colors leading-tight drop-shadow-[0_0_6px_rgba(212,175,55,0.4)]">
                MIRANDA
              </span>
              <span className="text-[9.5px] sm:text-[11px] tracking-[0.24em] font-sans font-black uppercase text-[#D4AF37] drop-shadow-[0_1px_2px_rgba(0,0,0,0.95)] drop-shadow-[0_0_8px_rgba(212,175,55,0.8)] select-none">
                DENTAL STUDIO
              </span>
            </div>
          </motion.a>

          {/* Iconos de Redes Sociales arriba a la derecha */}
          <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
            <motion.a
              href={createWhatsAppLink(GENERAL_WA_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp Oficial"
              whileHover={{ scale: 1.15, y: -1 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center transition-transform cursor-pointer drop-shadow-[0_2px_8px_rgba(37,211,102,0.3)] hover:drop-shadow-[0_0_12px_rgba(37,211,102,0.6)]"
            >
              <OfficialWhatsAppLogo className="w-7 h-7 sm:w-8 sm:h-8" />
            </motion.a>

            <motion.a
              href="https://www.instagram.com/odontologia_miranda/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Oficial"
              whileHover={{ scale: 1.15, y: -1 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center transition-transform cursor-pointer drop-shadow-[0_2px_8px_rgba(225,48,108,0.3)] hover:drop-shadow-[0_0_12px_rgba(225,48,108,0.6)]"
            >
              <OfficialInstagramLogo className="w-7 h-7 sm:w-8 sm:h-8" />
            </motion.a>

            <motion.a
              href="https://facebook.com/odontologiagabrielmiranda"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook Oficial"
              whileHover={{ scale: 1.15, y: -1 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center transition-transform cursor-pointer drop-shadow-[0_2px_8px_rgba(24,119,242,0.3)] hover:drop-shadow-[0_0_12px_rgba(24,119,242,0.6)]"
            >
              <OfficialFacebookLogo className="w-7 h-7 sm:w-8 sm:h-8" />
            </motion.a>
          </div>
        </div>

        {/* ========================================================
            FILA INTERMEDIA: Descripción y Enlaces de Navegación Rápida
           ======================================================== */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left">
          {/* Enlaces de Navegación Rápida */}
          <nav className="flex flex-wrap items-center justify-center gap-x-3.5 sm:gap-x-4.5 gap-y-1.5 text-[11px] sm:text-xs font-medium text-stone-300">
            <button
              type="button"
              onClick={() => handleNavClick('inicio')}
              className="hover:text-[#D4AF37] transition-colors cursor-pointer"
            >
              Inicio
            </button>
            <span className="text-[#D4AF37]/50 text-[9px]">✦</span>
            <button
              type="button"
              onClick={() => handleNavClick('servicios')}
              className="hover:text-[#D4AF37] transition-colors cursor-pointer"
            >
              Servicios
            </button>
            <span className="text-[#D4AF37]/50 text-[9px]">✦</span>
            <button
              type="button"
              onClick={() => handleNavClick('especialidades')}
              className="hover:text-[#D4AF37] transition-colors cursor-pointer"
            >
              Especialidades
            </button>
            <span className="text-[#D4AF37]/50 text-[9px]">✦</span>
            <button
              type="button"
              onClick={() => handleNavClick('nosotros')}
              className="hover:text-[#D4AF37] transition-colors cursor-pointer"
            >
              Dr. Miranda
            </button>
            <span className="text-[#D4AF37]/50 text-[9px]">✦</span>
            <button
              type="button"
              onClick={() => handleNavClick('contacto')}
              className="hover:text-[#D4AF37] transition-colors cursor-pointer"
            >
              Contacto
            </button>
          </nav>
        </div>

        {/* ========================================================
            FILA INFERIOR: Legal y Firma Oficial KINDEV
           ======================================================== */}
        <div className="text-[10.5px] sm:text-xs text-stone-400 flex flex-col sm:flex-row items-center justify-between gap-2.5 font-medium">
          {/* Copyright */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-2.5 gap-y-1 text-center sm:text-left">
            <span>© {currentYear} Miranda Dental Studio. Todos los derechos reservados.</span>
          </div>

          {/* Firma Oficial KINDEV con Aura y Micro-rotación */}
          <div className="flex justify-center">
            <a 
              href="https://www.kindevsas.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:opacity-95 transition-all text-[11px] sm:text-xs flex items-center gap-1.5 sm:gap-2 group"
              title="Desarrollado por KINDEV"
              aria-label="Desarrollado por KINDEV"
            >
              <div className="relative inline-flex items-center justify-center shrink-0">
                <div className="absolute inset-0 rounded-full bg-[#D4AF37]/30 blur-md opacity-70 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500 pointer-events-none" />
                <img 
                  src="/kindev_icon.webp" 
                  alt="KINDEV Logo" 
                  width="24" 
                  height="24" 
                  loading="lazy" 
                  decoding="async" 
                  className="relative z-10 w-5 h-5 sm:w-6 sm:h-6 object-contain drop-shadow-[0_2px_8px_rgba(212,175,55,0.5)] group-hover:scale-110 group-hover:-rotate-6 transition-all duration-300 ease-out inline-block"
                />
              </div>
              <span className="font-serif text-[10.5px] sm:text-xs text-stone-300 group-hover:text-[#D4AF37] transition-colors font-semibold tracking-wide">
                Desarrollado por{" "}
                <span className="font-serif font-bold text-white inline-block">
                  KINDEV
                </span>
              </span>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
