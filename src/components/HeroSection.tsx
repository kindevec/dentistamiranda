import React, { useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import {
  Calendar,
  ArrowRight,
  Clock,
  MapPin,
  CreditCard
} from 'lucide-react';
import { OrganicDentalRibbon } from './OrganicDentalRibbon';

interface HeroSectionProps {
  onOpenBooking?: () => void;
  onOpenEmergency: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenBooking: _onOpenBooking,
  onOpenEmergency: _onOpenEmergency,
}) => {
  // 3D Parallax Tilt Physics using Motion Values
  const [isHovered, setIsHovered] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 180 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  // 3D Rotation angles based on cursor position (-12deg to +12deg)
  const rotateX = useTransform(smoothMouseY, [-0.5, 0.5], ['12deg', '-12deg']);
  const rotateY = useTransform(smoothMouseX, [-0.5, 0.5], ['-12deg', '12deg']);
  const glowX = useTransform(smoothMouseX, [-0.5, 0.5], ['-25px', '25px']);
  const glowY = useTransform(smoothMouseY, [-0.5, 0.5], ['-25px', '25px']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" as const },
    },
  };

  return (
    <section
      id="inicio"
      className="relative overflow-hidden pt-24 sm:pt-28 lg:pt-32 pb-10 sm:pb-14 lg:pb-16 bg-gradient-to-b from-[#FDFCF8] via-[#FAF9F5] to-[#FAF9F5]"
    >
      {/* ============================================================== */}
      {/* LAYER 0: Subtle Organic Golden Dental Ribbons (Atmospheric Background) */}
      {/* ============================================================== */}
      <OrganicDentalRibbon className="-top-12 -left-16 w-[32rem] opacity-25" variant="gold" />
      <OrganicDentalRibbon className="top-1/4 -right-20 w-[28rem] opacity-20" variant="champagne" />

      {/* Main Canvas - Open Space adhering strictly to Kindev Elite Standard */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* ============================================================== */}
          {/* LEFT COLUMN: Clean Typography, Proposition & Direct CTAs       */}
          {/* ============================================================== */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="lg:col-span-7 space-y-4 text-center lg:text-left"
          >
            {/* H1 Main Heading */}
            <motion.h1
              variants={itemVariants}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.2rem] font-black text-[#0D0D0D] tracking-tight leading-[1.14]"
            >
              El arte de{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5A059] via-[#D4AF37] to-[#84631E]">
                sonreír con confianza
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={itemVariants}
              className="text-sm sm:text-base text-stone-600 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal text-justify"
            >
              Dar el paso hacia una nueva sonrisa es fácil cuando estás con el experto indicado. El Dr. Gabriel Miranda te guiará con maestría clínica y empatía hacia resultados naturales y duraderos. Descubre una odontología pensada exclusivamente para ti.
            </motion.p>

            {/* 3D Tooth (4x más grande, a la izquierda) + CTAs & Clinical Info (A la derecha) */}
            <motion.div
              variants={itemVariants}
              className="pt-2 flex flex-col sm:flex-row items-center sm:items-center gap-5 sm:gap-6 lg:gap-8"
            >
              {/* Foto del Diente 3D (4 veces más grande, a la izquierda) */}
              <div className="shrink-0 w-48 sm:w-56 md:w-64 lg:w-72 aspect-square flex items-center justify-center relative">
                {/* Halo dorado sutil detrás del diente */}
                <div className="absolute inset-4 bg-gradient-to-tr from-[#D4AF37]/20 via-[#F3E5AB]/10 to-transparent rounded-full blur-2xl pointer-events-none -z-10" />
                <motion.div
                  animate={{
                    y: [-5, 5, -5],
                  }}
                  transition={{
                    y: { duration: 3.5, repeat: Infinity, ease: 'easeInOut' },
                  }}
                  whileHover={{ scale: 1.05 }}
                  className="w-full h-full flex items-center justify-center relative z-10 transform-gpu cursor-pointer"
                >
                  <img
                    alt="Escultura dental 3D de alta estética"
                    width={560}
                    height={560}
                    loading="eager"
                    fetchPriority="high"
                    decoding="async"
                    className="w-full h-full object-contain filter contrast-[1.03] drop-shadow-[0_25px_45px_rgba(180,140,50,0.25)] transition-transform duration-300"
                    src="/hero-3d-tooth.webp"
                  />
                </motion.div>
              </div>

              {/* Botones de Acción y Datos Clínicos (A la derecha del diente) */}
              <div className="flex-1 flex flex-col items-center sm:items-start text-center sm:text-left space-y-3 w-full min-w-0">
                {/* Botones de Acción */}
                <div className="flex flex-col gap-2.5 w-full sm:max-w-[260px] lg:max-w-[280px]">
                  <motion.a
                    whileHover={{ scale: 1.02, y: -1 }}
                    whileTap={{ scale: 0.98 }}
                    href="https://wa.me/593982315408?text=Hola%20Dr.%20Gabriel%20Miranda%2C%20deseo%20agendar%20una%20cita%20en%20Miranda%20Dental%20Studio.%20%C2%BFQu%C3%A9%20d%C3%ADas%20y%20horarios%20tiene%20disponibilidad%3F"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full px-5 py-3 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#C5A059] hover:from-[#C5A059] hover:to-[#84631E] text-[#0B0B0B] font-black text-xs uppercase tracking-wider shadow-md shadow-amber-950/15 flex items-center justify-center gap-2 group cursor-pointer transition-all duration-300 border border-[#D4AF37]/50 whitespace-nowrap"
                  >
                    <Calendar className="w-4 h-4 text-[#0B0B0B] group-hover:scale-110 transition-transform shrink-0" />
                    <span>Agendar Cita</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#0B0B0B] group-hover:translate-x-0.5 transition-transform shrink-0" />
                  </motion.a>

                  <motion.a
                    whileHover={{ scale: 1.02, y: -1 }}
                    whileTap={{ scale: 0.98 }}
                    href="https://wa.me/593982315408?text=Hola%20Dr.%20Gabriel%20Miranda%2C%20quisiera%20informaci%C3%B3n%20sobre%20las%20formas%20de%20pago%20y%20el%20Cr%C3%A9dito%20Directo%20Dental."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full px-4 py-2.5 rounded-full border border-stone-300 text-stone-800 bg-white/95 hover:bg-[#FAF7EE] hover:border-[#D4AF37]/60 font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-2xs flex items-center justify-center gap-2 group cursor-pointer whitespace-nowrap"
                  >
                    <CreditCard className="w-4 h-4 text-[#84631E] group-hover:scale-110 transition-transform shrink-0" />
                    <span>Crédito Directo Dental</span>
                  </motion.a>
                </div>

                {/* Datos de Horarios y Dirección */}
                <div className="space-y-2 pt-1 text-xs text-stone-600 w-full">
                  <div className="flex items-start justify-center sm:justify-start gap-2">
                    <Clock className="w-3.5 h-3.5 text-[#84631E] shrink-0 mt-0.5" />
                    <div className="text-[11px] sm:text-xs leading-snug">
                      <p><span className="font-semibold text-stone-800">Lunes a Sábado:</span> 09:00 AM - 19:00 PM</p>
                      <p><span className="font-semibold text-stone-800">Domingo:</span> 09:00 AM - 14:00 PM</p>
                    </div>
                  </div>
                  <div className="flex items-start justify-center sm:justify-start gap-2">
                    <MapPin className="w-3.5 h-3.5 text-[#84631E] shrink-0 mt-0.5" />
                    <div className="text-[11px] sm:text-xs leading-snug text-stone-700 font-semibold">
                      <span>Av. 19 de Mayo (Ruta E30) y Velasco Ibarra</span>
                      <span className="font-normal text-stone-500 block">Edif. Color Gris, PB (Junto a IntegralMedic) • La Maná, Cotopaxi</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* ============================================================== */}
          {/* RIGHT COLUMN: Retrato de Autor Dr. Gabriel Miranda             */}
          {/* ============================================================== */}
          <div
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="lg:col-span-5 relative flex items-center justify-center py-4 sm:py-6 cursor-pointer select-none"
            style={{ perspective: 1000 }}
          >
            {/* 1. Subtle Golden Ring Pulse */}
            <motion.div
              animate={{
                scale: [0.95, 1.05, 0.95],
                opacity: [0.15, 0.35, 0.15],
              }}
              transition={{
                repeat: Infinity,
                duration: 4.5,
                ease: 'easeInOut',
              }}
              className="absolute w-64 sm:w-80 lg:w-96 h-64 sm:h-80 lg:h-96 rounded-full border-2 border-[#D4AF37]/30 pointer-events-none -z-10"
            />

            {/* 2. Interactive Ambient Glowing Halo */}
            <motion.div
              style={{
                x: glowX,
                y: glowY,
              }}
              className="absolute w-72 sm:w-88 lg:w-96 h-72 sm:h-88 lg:h-96 bg-gradient-to-tr from-[#D4AF37]/25 via-[#F3E5AB]/15 to-transparent rounded-full blur-3xl pointer-events-none -z-10"
            />

            {/* 3. Retrato de Autor del Dr. Gabriel Miranda con Cajita Pedestal */}
            <motion.div
              style={{
                rotateX,
                rotateY,
                transformStyle: 'preserve-3d',
              }}
              animate={
                isHovered
                  ? { scale: 1.03 }
                  : {
                      y: [-4, 4, -4],
                      scale: 1,
                    }
              }
              transition={
                isHovered
                  ? { duration: 0.3 }
                  : { repeat: Infinity, duration: 6, ease: 'easeInOut' }
              }
              className="relative z-10 w-full max-w-[340px] sm:max-w-[380px] lg:max-w-[420px] flex flex-col items-center transform-gpu will-change-transform"
            >
              {/* Imagen del Dr. Miranda emergiendo de la base */}
              <div className="relative z-10 w-full flex justify-center -mb-6 sm:-mb-8">
                <img
                  alt="Dr. Gabriel Miranda - Odontólogo Especialista"
                  width={420}
                  height={500}
                  className="w-full h-auto max-h-[440px] sm:max-h-[480px] object-contain object-bottom drop-shadow-[0_20px_35px_rgba(132,99,30,0.18)] transition-transform duration-500 hover:scale-[1.01]"
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  src="/dr-gabriel-miranda.webp"
                />
              </div>

              {/* Cajita de Autor Doradita y Redondeada en la parte inferior */}
              <div className="relative z-20 w-[92%] sm:w-[88%] max-w-[320px] bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#C5A059] border border-[#D4AF37]/70 rounded-3xl sm:rounded-full py-3 px-5 shadow-xl shadow-amber-950/20 text-center">
                <h3 className="text-sm sm:text-base font-black text-[#0B0B0B] tracking-tight leading-tight">
                  Dr. Gabriel Miranda
                </h3>
                <p className="text-[10px] sm:text-[11px] font-bold text-[#42310B] uppercase tracking-wider mt-0.5">
                  Rehabilitación Oral y Estética
                </p>
              </div>
            </motion.div>
          </div>


        </div>
      </div>
    </section>
  );
};
