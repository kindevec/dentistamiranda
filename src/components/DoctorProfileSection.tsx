import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { DOCTOR_PROFILE, DOCTOR_NAME, createWhatsAppLink, GENERAL_WA_MESSAGE } from '../data/clinicData';
import { Cpu, Shield, Heart, Calendar, CheckCircle2, Quote, ArrowRight, ChevronDown, Award } from 'lucide-react';
import { OrganicDentalRibbon } from './OrganicDentalRibbon';

export const DoctorProfileSection: React.FC = () => {
  const [showCredentials, setShowCredentials] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  return (
    <section id="nosotros" className="py-8 sm:py-12 relative overflow-hidden bg-[#FAF9F5]">
      {/* Subtle Background Texture */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-[#FAF9F5] via-white/80 to-[#FAF9F5]" />
      </div>

      {/* Floating 3D Curved Ribbon in Gold */}
      <OrganicDentalRibbon className="absolute top-1/4 -left-16 w-96 md:w-[32rem] opacity-30" variant="gold" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pb-2">
        
        {/* Section Header with Animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-5 sm:mb-7 space-y-2"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0D0D0D] tracking-tight">
            Conoce al <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5A059] via-[#D4AF37] to-[#84631E]">{DOCTOR_NAME}</span>
          </h2>
          <p className="text-sm sm:text-base text-stone-600 max-w-2xl mx-auto">
            Especialista con formación en rehabilitación oral y estética dental, enfocado en odontología biomimética y conservadora.
          </p>
        </motion.div>

        {/* Doctor Main Profile - Open Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center mb-8 sm:mb-10"
        >
          {/* Left Doctor Photo — Retrato de Autor */}
          <motion.div variants={itemVariants} className="lg:col-span-5 relative flex flex-col items-center justify-center">
            {/* Studio Radial Ambient Aura */}
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 sm:w-96 h-80 sm:h-96 rounded-full bg-gradient-to-tr from-[#D4AF37]/20 via-[#F3E5AB]/10 to-transparent blur-3xl pointer-events-none -z-10" />

            <div className="relative w-full max-w-[340px] sm:max-w-[390px] md:max-w-[420px] flex flex-col items-center">
              {/* Doctor Cutout Image */}
              <div className="relative z-10 w-full flex justify-center">
                <img
                  src={DOCTOR_PROFILE.image}
                  alt={`${DOCTOR_NAME} - Odontólogo Especialista`}
                  width={420}
                  height={500}
                  className="w-full h-auto max-h-[460px] sm:max-h-[500px] object-contain object-bottom drop-shadow-[0_20px_35px_rgba(132,99,30,0.18)] transition-transform duration-500 hover:scale-[1.01]"
                  style={{
                    maskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)',
                    WebkitMaskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)',
                  }}
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* Identificación de Autor del Dr. Gabriel Miranda (Solamente el nombre y cargo abajo) */}
              <div className="mt-4 sm:mt-5 text-center space-y-1 relative z-20 w-full max-w-sm px-2">
                {/* Nombre del Doctor en Tipografía de Autor */}
                <h3 className="text-2xl sm:text-3xl font-black text-[#0D0D0D] tracking-tight leading-tight">
                  {DOCTOR_NAME}
                </h3>

                {/* Título & Especialidad Clínica */}
                <p className="text-xs sm:text-sm font-semibold text-[#84631E]">
                  Director Clínico — Especialista en Rehabilitación Oral y Estética
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Doctor Bio, Credentials & Official Philosophy */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-5">
            <motion.div variants={itemVariants} className="space-y-1.5">
              <span className="text-xs font-black uppercase tracking-wider text-[#84631E]">
                {DOCTOR_PROFILE.role}
              </span>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0D0D0D] tracking-tight">
                Salud, Estética y Armonía Natural
              </h3>
              <p className="text-sm sm:text-base text-stone-600 leading-relaxed pt-1.5 text-justify">
                {DOCTOR_PROFILE.bio}
              </p>
            </motion.div>

            {/* Official Philosophy Card (La Frase Oficial del Dr. Miranda - Se Mantiene) */}
            <motion.div
              variants={itemVariants}
              className="p-4 sm:p-5 rounded-2xl bg-[#FAF7EE] border border-[#D4AF37]/40 relative shadow-2xs"
            >
              <Quote className="w-6 h-6 text-[#D4AF37]/30 absolute top-3 right-4" />
              <p className="text-xs sm:text-sm font-serif italic text-stone-700 leading-relaxed text-justify relative z-10">
                {DOCTOR_PROFILE.philosophy}
              </p>
              <div className="mt-2.5 flex items-center justify-between pt-2 border-t border-[#D4AF37]/20">
                <span className="text-[11px] font-black text-[#84631E] uppercase tracking-wider">
                  — Filosofía de Atención de Miranda Dental Studio
                </span>
              </div>
            </motion.div>

            {/* Collapsible Credentials "Ver más" Toggle */}
            <motion.div variants={itemVariants} className="space-y-3">
              <button
                type="button"
                onClick={() => setShowCredentials(!showCredentials)}
                className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#FAF7EE] hover:bg-[#F4EDD6] border border-[#D4AF37]/40 text-[#84631E] hover:text-[#5C420D] text-xs font-bold transition-all shadow-2xs cursor-pointer group"
                aria-expanded={showCredentials}
              >
                <Award className="w-4 h-4 text-[#D4AF37]" />
                <span className="underline decoration-[#D4AF37]/60 underline-offset-4 group-hover:decoration-[#84631E]">
                  {showCredentials ? 'Ocultar formación académica y credenciales' : 'Ver formación académica, residencias y diplomados (8)'}
                </span>
                <div
                  className={`w-5 h-5 rounded-full bg-white/90 border border-[#D4AF37]/30 flex items-center justify-center text-[#84631E] transition-transform duration-300 ${
                    showCredentials ? 'rotate-180 bg-[#D4AF37] text-white' : ''
                  }`}
                >
                  <ChevronDown className="w-3.5 h-3.5" />
                </div>
              </button>

              <AnimatePresence initial={false}>
                {showCredentials && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.04, 0.62, 0.23, 0.98] }}
                    className="overflow-hidden"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                      {DOCTOR_PROFILE.credentials.map((cred, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-2.5 p-3 rounded-xl bg-white border border-[#D4AF37]/30 shadow-2xs hover:border-[#D4AF37]/60 transition-colors"
                        >
                          <CheckCircle2 className="w-4 h-4 text-[#AA7C11] shrink-0 mt-0.5" />
                          <span className="text-xs text-stone-700 font-medium leading-snug">{cred}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Direct CTA */}
            <motion.div variants={itemVariants} className="pt-1 flex flex-col sm:flex-row gap-3.5">
              <a
                href={createWhatsAppLink(GENERAL_WA_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#C5A059] hover:from-[#C5A059] hover:to-[#84631E] text-[#0B0B0B] font-black text-xs uppercase tracking-wider transition-all shadow-md shadow-amber-950/15 cursor-pointer border border-[#D4AF37]/50 active:scale-98"
              >
                <Calendar className="w-4 h-4 text-[#0B0B0B]" />
                <span>Agendar Cita</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#0B0B0B]" />
              </a>
            </motion.div>
          </div>
        </motion.div>

        {/* Facilities & Infrastructure (Directly on Canvas, No Outer Box-in-Box) */}
        <div className="pt-6 sm:pt-10 border-t border-stone-200/80">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left: Infrastructure Features */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-black tracking-widest text-[#84631E] uppercase mb-1.5 block">
                  Infraestructura, Ubicación & Bioseguridad
                </span>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0D0D0D] tracking-tight">
                  Instalaciones Diseñadas para tu Máxima Tranquilidad
                </h3>
                <p className="text-sm sm:text-base text-stone-600 leading-relaxed text-justify mt-2">
                  Ubicados en Av. 19 de Mayo y Velasco Ibarra (Edificio gris, Planta Baja con parqueadero para pacientes). Ofrecemos un consultorio sereno con diseño acústico relajante y equipamiento de diagnóstico digital 3D.
                </p>
              </div>

              <div className="space-y-3.5 pt-1">
                <motion.div
                  whileHover={{ x: 4 }}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-stone-200/80 shadow-2xs transition-all"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#FAF7EE] border border-[#D4AF37]/40 text-[#84631E] shrink-0 flex items-center justify-center shadow-xs">
                    <Cpu className="w-5 h-5 text-[#84631E]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#0D0D0D]">Diagnóstico Integral & Radiografías</h4>
                    <p className="text-xs text-stone-600 mt-1 text-justify leading-relaxed">
                      Fotografías clínicas de alta definición y radiografías dentales para un diagnóstico certero sin sorpresas.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 4 }}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-stone-200/80 shadow-2xs transition-all"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#FAF7EE] border border-[#D4AF37]/40 text-[#84631E] shrink-0 flex items-center justify-center shadow-xs">
                    <Heart className="w-5 h-5 text-[#84631E]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#0D0D0D]">Odontología de Mínima Invasión</h4>
                    <p className="text-xs text-stone-600 mt-1 text-justify leading-relaxed">
                      Preservamos al máximo el tejido sano y la estructura biológica natural del diente con técnicas biomiméticas.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 4 }}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-stone-200/80 shadow-2xs transition-all"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#FAF7EE] border border-[#D4AF37]/40 text-[#84631E] shrink-0 flex items-center justify-center shadow-xs">
                    <Shield className="w-5 h-5 text-[#84631E]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#0D0D0D]">Bioseguridad & Parqueadero Exclusivo</h4>
                    <p className="text-xs text-stone-600 mt-1 text-justify leading-relaxed">
                      Esterilización certificada de todo el instrumental y parqueadero privado gratuito en planta baja para tu comodidad.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Right: Overlapping Dual-Mask Architectural Composition */}
            <div className="lg:col-span-5 relative flex items-center justify-center pt-4 lg:pt-0">
              {/* Primary Architectural Arch Mask */}
              <div className="relative w-full max-w-md rounded-t-[14rem] rounded-b-[3rem] overflow-hidden shadow-2xl p-1.5 bg-gradient-to-b from-[#D4AF37] via-[#F3E5AB] to-white">
                <div className="relative w-full h-[320px] sm:h-[360px] rounded-t-[13.5rem] rounded-b-[2.6rem] overflow-hidden bg-stone-900 group">
                  <img
                    src="/clinic/consultorio.webp"
                    alt="Consultorio Clínico Miranda Dental Studio"
                    width={800}
                    height={600}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 brightness-95"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B]/80 via-transparent to-transparent pointer-events-none" />
                  
                  <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-2xl bg-white/95 backdrop-blur-md text-[#0D0D0D] text-center border border-[#D4AF37]/30 shadow-lg">
                    <p className="text-xs font-bold text-[#0D0D0D]">Consultorio Dental Ergonómico</p>
                    <p className="text-[11px] text-stone-500">Av. 19 de Mayo y Velasco Ibarra • Planta Baja</p>
                  </div>
                </div>
              </div>

              {/* Secondary Floating Overlapping Window (GPU Accelerated) */}
              <div
                className="absolute -bottom-6 sm:-bottom-8 right-0 sm:-right-4 z-20 w-32 sm:w-44 h-32 sm:h-44 rounded-[2rem] sm:rounded-[2.5rem] rounded-tr-lg p-1.5 bg-gradient-to-br from-white via-[#F3E5AB] to-[#D4AF37] shadow-2xl shadow-amber-950/20 transform-gpu animate-subtle-float"
              >
                <div className="relative w-full h-full rounded-[2.2rem] rounded-tr-md overflow-hidden bg-stone-900 group">
                  <img
                    src="/clinic/bioseguridad.webp"
                    alt="Equipamiento y Bioseguridad en Miranda Dental Studio"
                    width={400}
                    height={400}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-2.5 pointer-events-none">
                    <span className="text-[10px] font-bold text-white uppercase tracking-tight">
                      Bioseguridad
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
