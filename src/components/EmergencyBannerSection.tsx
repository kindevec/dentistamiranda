import React from 'react';
import { motion } from 'motion/react';
import { Clock, CreditCard, ArrowRight, ShieldCheck } from 'lucide-react';
import { DOCTOR_NAME, createWhatsAppLink, GENERAL_WA_MESSAGE } from '../data/clinicData';
import { WhatsAppIcon } from './OfficialSocialLogos';
import { OrganicDentalRibbon } from './OrganicDentalRibbon';
import { CurvedSectionDivider } from './CurvedSectionDivider';

interface EmergencyBannerSectionProps {
  onOpenEmergency?: () => void;
}

export const EmergencyBannerSection: React.FC<EmergencyBannerSectionProps> = ({ onOpenEmergency: _onOpenEmergency }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" as const },
    },
  };

  return (
    <section id="urgencias" className="relative overflow-hidden py-16 sm:py-20 lg:py-24 text-white bg-[#0D0D0D]">

      {/* Top Organic Wave Transition from Specialties Section (Masks background & photo) */}
      <div className="absolute top-0 left-0 right-0 z-20 pointer-events-none">
        <CurvedSectionDivider position="top" fillColor="#FAF9F5" variant="wave1" />
      </div>

      {/* Atmospheric Background with Warm Gold Light & Clinical Photography */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-[#0D0D0D]" />

        {/* Right Half Clinical High-Aesthetic Image with Organic Blending */}
        <div className="absolute top-0 bottom-0 right-0 w-full lg:w-7/12 h-full opacity-85 lg:opacity-95">
          <img
            src="/clinica-miranda.webp"
            alt="Miranda Dental Studio — Dr. Gabriel Miranda"
            width={1200}
            height={800}
            className="w-full h-full object-cover object-center brightness-105 contrast-[1.05]"
            loading="lazy"
            decoding="async"
          />
          {/* Mobile Overlay (protects text legibility while keeping photo luminous) */}
          <div className="lg:hidden absolute inset-0 bg-gradient-to-t from-[#0D0D0D]/95 via-[#0D0D0D]/65 to-[#0D0D0D]/25" />
          {/* Desktop Blend */}
          <div className="hidden lg:block absolute inset-y-0 left-0 w-40 xl:w-56 bg-gradient-to-r from-[#0D0D0D] via-[#0D0D0D]/80 via-35% to-transparent" />
        </div>

        {/* Gold Atmospheric Radial Glow */}
        <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-96 h-96 bg-[#D4AF37]/15 rounded-full blur-3xl" />
      </div>

      {/* Floating 3D Curved Ribbon in Gold */}
      <OrganicDentalRibbon className="absolute -top-12 -left-16 w-96 md:w-[32rem] opacity-40" variant="gold" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-2 sm:pb-3">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
        >
          {/* Left Column: Headline & Rapid Triage Steps */}
          <div className="lg:col-span-7 space-y-5 text-center lg:text-left">



            {/* Title */}
            <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
              Consulta de{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F3E5AB] via-[#D4AF37] to-[#C5A059]">
                Valoración Médica
              </span>
            </motion.h2>

            {/* Subtext */}
            <motion.p variants={itemVariants} className="text-sm sm:text-base text-stone-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Diagnóstico clínico completo con el <strong className="text-white font-bold">{DOCTOR_NAME}</strong>, fotografías dentales y radiografías. Crédito directo disponible de $400 a $2,000.
            </motion.p>

            {/* 3 Pillars: Valoración, Crédito Directo, Horarios (Esbeltos, Mismo Tamaño, Cero Espacio Excesivo) */}
            <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 pt-1">
              {/* 1. Diagnóstico */}
              <div className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl bg-white/[0.05] border border-[#D4AF37]/25 backdrop-blur-xs text-left h-full">
                <div className="w-8 h-8 rounded-lg bg-[#D4AF37]/15 border border-[#D4AF37]/35 flex items-center justify-center shrink-0 text-[#D4AF37]">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-xs font-black text-[#F3E5AB] uppercase tracking-wide truncate">
                    1. Diagnóstico Integral
                  </h3>
                  <p className="text-[11px] text-stone-300 leading-snug truncate sm:whitespace-normal">
                    Clínico, fotos y rayos X.
                  </p>
                </div>
              </div>

              {/* 2. Crédito Directo */}
              <div className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl bg-white/[0.05] border border-[#D4AF37]/25 backdrop-blur-xs text-left h-full">
                <div className="w-8 h-8 rounded-lg bg-[#D4AF37]/15 border border-[#D4AF37]/35 flex items-center justify-center shrink-0 text-[#D4AF37]">
                  <CreditCard className="w-4 h-4" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-xs font-black text-[#F3E5AB] uppercase tracking-wide truncate">
                    2. Crédito Directo
                  </h3>
                  <p className="text-[11px] text-stone-300 leading-snug truncate sm:whitespace-normal">
                    Financiamiento $400-$2,000.
                  </p>
                </div>
              </div>

              {/* 3. Lun a Dom */}
              <div className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl bg-white/[0.05] border border-[#D4AF37]/25 backdrop-blur-xs text-left h-full">
                <div className="w-8 h-8 rounded-lg bg-[#D4AF37]/15 border border-[#D4AF37]/35 flex items-center justify-center shrink-0 text-[#D4AF37]">
                  <Clock className="w-4 h-4" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-xs font-black text-[#F3E5AB] uppercase tracking-wide truncate">
                    3. Lun a Dom
                  </h3>
                  <p className="text-[11px] text-stone-300 leading-snug truncate sm:whitespace-normal">
                    Lun-Sáb 9-19h | Dom 9-14h.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* CTA Button */}
            <motion.div variants={itemVariants} className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <motion.a
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                href={createWhatsAppLink(GENERAL_WA_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#C5A059] hover:from-[#C5A059] hover:to-[#84631E] text-[#0B0B0B] font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2.5 transition-all shadow-xl shadow-amber-950/30 cursor-pointer border border-[#D4AF37]/60"
              >
                <WhatsAppIcon className="w-4 h-4 text-[#0B0B0B]" />
                <span>Reservar Valoración por WhatsApp</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#0B0B0B]" />
              </motion.a>
            </motion.div>

          </div>
        </motion.div>
      </div>

      {/* Bottom Organic Wave Transition into FAQ Section (Masks background & photo) */}
      <div className="absolute bottom-0 left-0 right-0 z-20 pointer-events-none">
        <CurvedSectionDivider position="bottom" fillColor="#FFFFFF" variant="wave1" />
      </div>
    </section>
  );
};
