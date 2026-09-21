import React from 'react';
import { motion } from 'motion/react';
import { CreditCard, Clock, ShieldCheck, ArrowRight } from 'lucide-react';
import { DOCTOR_NAME, createWhatsAppLink, GENERAL_WA_MESSAGE } from '../data/clinicData';
import { WhatsAppIcon } from '../components/OfficialSocialLogos';
import { CurvedSectionDivider } from '../components/CurvedSectionDivider';

interface MobileEmergencyProps {
  onOpenEmergency?: () => void;
}

export const MobileEmergency: React.FC<MobileEmergencyProps> = () => {
  return (
    <section id="urgencias" className="bg-[#0D0D0D] relative overflow-hidden py-16 px-4 text-white">
      {/* Top Organic Wave Transition from PC */}
      <div className="absolute top-0 left-0 right-0 z-20 pointer-events-none">
        <CurvedSectionDivider position="top" fillColor="#FFFFFF" variant="wave1" />
      </div>

      {/* Atmospheric Background with Gold Glow & Clinical Photography */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <img
          src="/clinica-miranda.webp"
          alt={`${DOCTOR_NAME} Clínica`}
          className="w-full h-full object-cover opacity-20 brightness-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-[#0D0D0D]/90 to-[#0D0D0D]/75" />
        {/* Gold Atmospheric Radial Glow from PC */}
        <div className="absolute -left-16 top-1/2 -translate-y-1/2 w-64 h-64 bg-[#D4AF37]/15 rounded-full blur-3xl pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-sm mx-auto my-1">
        {/* Title */}
        <h2 className="text-2xl xs:text-3xl font-black text-white tracking-tight leading-tight mb-2">
          Consulta de<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F3E5AB] via-[#D4AF37] to-[#C5A059]">
            Valoración Médica
          </span>
        </h2>
        <p className="text-xs text-stone-300 leading-relaxed mb-6">
          Diagnóstico clínico completo con el <strong className="text-white font-bold">{DOCTOR_NAME}</strong>, fotografías dentales y radiografías. Crédito directo disponible de $400 a $2,000.
        </p>

        {/* Bullet Benefits List */}
        <div className="space-y-2.5 mb-6">
          <div className="flex items-start gap-3 p-3 rounded-2xl bg-white/5 border border-[#D4AF37]/25 backdrop-blur-md">
            <div className="w-9 h-9 rounded-xl bg-[#D4AF37]/15 border border-[#D4AF37]/35 flex items-center justify-center shrink-0 text-[#D4AF37]">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-xs font-black text-[#F3E5AB] leading-tight">
                1. Diagnóstico Integral
              </h3>
              <p className="text-[11px] text-stone-300 leading-tight mt-0.5">
                Clínico, fotos y rayos X de alta definición.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3 rounded-2xl bg-white/5 border border-[#D4AF37]/25 backdrop-blur-md">
            <div className="w-9 h-9 rounded-xl bg-[#D4AF37]/15 border border-[#D4AF37]/35 flex items-center justify-center shrink-0 text-[#D4AF37]">
              <CreditCard className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-xs font-black text-[#F3E5AB] leading-tight">
                2. Crédito Directo
              </h3>
              <p className="text-[11px] text-stone-300 leading-tight mt-0.5">
                Financiamiento directo de $400 a $2,000 sin demoras.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3 rounded-2xl bg-white/5 border border-[#D4AF37]/25 backdrop-blur-md">
            <div className="w-9 h-9 rounded-xl bg-[#D4AF37]/15 border border-[#D4AF37]/35 flex items-center justify-center shrink-0 text-[#D4AF37]">
              <Clock className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-xs font-black text-[#F3E5AB] leading-tight">
                3. Lun a Dom
              </h3>
              <p className="text-[11px] text-stone-300 leading-tight mt-0.5">
                Lun-Sáb: 09:00 - 19:00 | Domingo: 09:00 - 14:00
              </p>
            </div>
          </div>
        </div>

        {/* High Conversion WhatsApp SOS CTA with pulsating glow and PC color shift */}
        <motion.a
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.95 }}
          href={createWhatsAppLink(GENERAL_WA_MESSAGE)}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-4 px-4 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#C5A059] hover:from-[#C5A059] hover:to-[#84631E] text-[#0B0B0B] font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer transition-all duration-300 group shadow-xl shadow-amber-950/30 border border-[#D4AF37]/60"
        >
          <WhatsAppIcon className="w-4 h-4 text-[#0B0B0B]" />
          <span>Reservar Valoración por WhatsApp</span>
          <ArrowRight className="w-3.5 h-3.5 text-[#0B0B0B]" />
        </motion.a>
      </div>

      {/* Bottom Organic Wave Transition into FAQ Section from PC */}
      <div className="absolute bottom-0 left-0 right-0 z-20 pointer-events-none">
        <CurvedSectionDivider position="bottom" fillColor="#FAF9F5" variant="wave1" />
      </div>
    </section>
  );
};
