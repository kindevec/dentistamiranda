import { Specialty, DoctorProfile, SocialNetwork, FaqItem } from '../types';

export const CLINIC_NAME = "Miranda Dental Studio";
export const CLINIC_TAGLINE = "Rehabilitación Oral y Estética";
export const DOCTOR_NAME = "Dr. Gabriel Miranda";
export const DOCTOR_TITLE = "Odontólogo — Rehabilitación Oral y Estética";
export const CLINIC_PHONE_DISPLAY = "+593 98 231 5408";
export const CLINIC_PHONE_RAW = "593982315408";
export const CLINIC_EMAIL = "contacto@mirandadentalstudio.com";
export const CLINIC_ADDRESS = "Av. 19 de Mayo (Ruta E30) y Velasco Ibarra, Edificio Color Gris, Planta Baja (Junto a IntegralMedic)";
export const CLINIC_REFERENCE = "Compartiendo ubicación con IntegralMedic La Maná";
export const CLINIC_CITY = "La Maná, Cotopaxi - Ecuador";
export const CLINIC_LAT = -0.9397;
export const CLINIC_LNG = -79.2244;
export const CLINIC_MAPS_URL = "https://maps.google.com/?q=-0.9397,-79.2244";
export const CLINIC_WAZE_URL = "https://waze.com/ul?ll=-0.9397,-79.2244&navigate=yes";
export const CLINIC_MAP_EMBED_URL = "https://maps.google.com/maps?q=-0.9397,-79.2244&t=&z=18&ie=UTF8&iwloc=&output=embed";
export const CLINIC_HOURS = "Lunes a Sábado: 09:00 AM - 19:00 PM | Domingo: 09:00 AM - 14:00 PM";
export const VALUATION_PRICE = 15;
export const VALUATION_DETAILS = "Incluye diagnóstico integral, fotografías clínicas de alta definición y radiografías dentales.";
export const FINANCING_INFO = "Efectivo, Transferencia, se aceptan todas las tarjetas de crédito y débito. Crédito directo dental desde $400 hasta $2,000.";

export function createWhatsAppLink(message: string): string {
  return `https://wa.me/${CLINIC_PHONE_RAW}?text=${encodeURIComponent(message)}`;
}

export const GENERAL_WA_MESSAGE = `Hola ${DOCTOR_NAME}, deseo agendar una consulta de valoración (incluye diagnóstico, fotografías y radiografías) en Miranda Dental Studio.`;
export const BOOKING_WA_MESSAGE = `Hola ${DOCTOR_NAME}, deseo agendar una cita en Miranda Dental Studio. ¿Qué días y horarios tiene disponibilidad?`;
export const EMERGENCY_WA_MESSAGE = `¡URGENCIA DENTAL! Hola ${DOCTOR_NAME}, presento dolor agudo y requiero atención prioritaria en Miranda Dental Studio.`;

/**
 * SERVICIOS BÁSICOS OFICIALES (Nombrados explícitamente en el PDF del Dr. Gabriel Miranda)
 */
export const SPECIALTIES_DATA: Specialty[] = [
  {
    id: "profilaxis-dental",
    title: "Profilaxis Dental Profunda",
    shortDesc: "Limpieza ultrasónica para remover sarro, placa bacteriana y manchas superficiales.",
    fullDesc: "Higiene clínica con ultrasonido y pulido suave que previene caries y desinflama encías.",
    iconName: "Droplets",
    badge: "Servicio Básico",
    image: "/services/profilaxis.webp",
    features: [
      "Eliminación ultrasónica de sarro y placa",
      "Pulido coronario profiláctico",
      "Diagnóstico preventivo de encías"
    ],
    waMessage: `Hola ${DOCTOR_NAME}, deseo agendar una Profilaxis Dental Profunda.`,
    estimatedTime: "30 a 40 minutos",
    suitableFor: "Mantenimiento preventivo periódico."
  },
  {
    id: "restauraciones",
    title: "Restauraciones Dentales",
    shortDesc: "Calzas estéticas en resina compuesta de alta densidad con el color exacto del diente.",
    fullDesc: "Eliminación de caries y reconstrucción anatómica duradera y biomimética sin metales.",
    iconName: "ShieldCheck",
    badge: "Servicio Básico",
    image: "/services/restauraciones.webp",
    features: [
      "Resinas estéticas del tono dental exacto",
      "Aislamiento para máxima adherencia",
      "Acabado pulido y anatómico natural"
    ],
    waMessage: `Hola ${DOCTOR_NAME}, deseo agendar una cita para Restauraciones Dentales.`,
    estimatedTime: "30 a 45 minutos",
    suitableFor: "Dientes con caries o fracturas leves."
  },
  {
    id: "extracciones",
    title: "Extracciones Dentales",
    shortDesc: "Extracción dental simple y segura bajo técnica atraumática libre de dolor.",
    fullDesc: "Retiro cuidadoso de piezas no restaurables protegiendo el hueso circundante.",
    iconName: "ShieldCheck",
    badge: "Servicio Básico",
    image: "/services/extracciones.webp",
    features: [
      "Anestesia local guiada y confortable",
      "Técnica atraumática preservadora",
      "Recuperación rápida y protocolo postoperatorio"
    ],
    waMessage: `Hola ${DOCTOR_NAME}, solicito una cita para una Extracción Dental.`,
    estimatedTime: "30 minutos",
    suitableFor: "Piezas destruidas no viables."
  },
  {
    id: "blanqueamientos",
    title: "Blanqueamientos Dentales",
    shortDesc: "Aclaramiento dental clínico con gel fotoactivado para una sonrisa radiante.",
    fullDesc: "Aclara varios tonos en una sola sesión protegiendo el esmalte de la sensibilidad.",
    iconName: "Smile",
    badge: "Servicio Básico",
    image: "/services/blanqueamientos.webp",
    features: [
      "Aclaramiento inmediato en 1 sesión",
      "Gel clínico con agente anti-sensibilidad",
      "Protección de encías fotocurada"
    ],
    waMessage: `Hola ${DOCTOR_NAME}, quisiera agendar una sesión de Blanqueamiento Dental.`,
    estimatedTime: "45 minutos",
    suitableFor: "Dientes manchados u oscurecidos."
  }
];

export const DOCTOR_PROFILE: DoctorProfile = {
  name: "Dr. Gabriel Miranda",
  title: "Odontólogo — Especialista en Rehabilitación Oral y Estética",
  role: "Director Clínico y Fundador de Miranda Dental Studio",
  specialty: "Rehabilitación Oral, Prótesis Implanto-Asistida, Estética Dental y Armonización Facial",
  experienceYears: 3,
  image: "/dr-gabriel-miranda.webp",
  bio: "El Dr. Gabriel Miranda (Graduado en 2023, con 3 años de trayectoria clínica) es egresado de la prestigiosa Universidad de los Andes y actualmente cursa su 2do año de Residencia en la especialidad de Rehabilitación Oral y Prótesis implanto asistida en la Universidad de los Hemisferios. Con residencia internacional en la Universidad Cayetano Heredia de Perú, diplomado en Carillas 'Arte en Resinas' (Perú), diplomado en Endodoncia mecanizada en CPO BRASIL y formación continua en congresos internacionales como SMILE & HOF 2026 en Río de Janeiro (Brasil), fusiona la máxima precisión biomecánica con la armonía estética natural.",
  credentials: [
    "Cursando 2do año de Residencia en Rehabilitación Oral y Prótesis Implanto Asistida (Universidad de los Hemisferios)",
    "Graduado en Odontología por la Universidad de los Andes (2023)",
    "Residencia Odontológica en Universidad Cayetano Heredia (Perú)",
    "Diplomado Internacional en Carillas 'Arte en Resinas' (Perú)",
    "Diplomado en Endodoncia Mecanizada en CPO BRASIL",
    "Congreso en Brasil Río de Janeiro 2026 SMILE & HOF",
    "Congreso Internacional Regional Amazónico",
    "Congreso de Odontología Restauradora Estética en Rehabilitación Oral (Quito)"
  ],
  philosophy: "«Brindar una odontología especializada, basada en la excelencia clínica, la tecnología y la atención humana, buscando resultados funcionales, estéticos y naturales. Cada paciente merece un tratamiento personalizado, honesto y pensado para cuidar su salud y transformar su sonrisa y calidad de vida.»",
  schedule: "Lunes a Sábado: 09:00 AM - 19:00 PM | Domingo: 09:00 AM - 14:00 PM"
};

export const FAQ_DATA: FaqItem[] = [
  {
    id: "faq-1",
    question: "¿Qué incluye la primera valoración?",
    answer: "Diagnóstico clínico integral, fotografías 100% profesionales, radiografías digitales y un plan de tratamiento adecuado a tu personalidad.",
    category: "general"
  },
  {
    id: "faq-2",
    question: "¿Los tratamientos causan dolor?",
    answer: "No. Aplicamos técnicas guiadas de mínima invasión para que cada procedimiento sea totalmente cómodo e indoloro.",
    category: "general"
  },
  {
    id: "faq-3",
    question: "¿Cómo garantizan la bioseguridad y la limpieza?",
    answer: "Desinfectamos y esterilizamos todo el instrumental en paquetes individuales sellados que se abren exclusivamente para ti. Cuidamos tu salud en un consultorio 100% limpio, seguro y libre de bacterias.",
    category: "tratamientos"
  },
  {
    id: "faq-4",
    question: "¿Cuánto dura la consulta?",
    answer: "Dura entre 30 y 40 minutos. No requieres traer exámenes previos; realizamos todo en la clínica.",
    category: "general"
  }
];

export const SOCIAL_NETWORKS: SocialNetwork[] = [
  {
    id: "whatsapp",
    name: "WhatsApp Oficial Miranda Dental Studio",
    handle: "+593 98 231 5408",
    iconType: "whatsapp",
    color: "#25D366",
    bgColor: "bg-emerald-50 border-emerald-200 text-[#25D366]",
    description: "Canal de atención directa y agendamiento médico con el Dr. Gabriel Miranda. Reserva tu valoración o consulta sobre tratamientos.",
    actionText: "Chatear por WhatsApp",
    url: createWhatsAppLink("Hola Dr. Gabriel Miranda, deseo agendar una consulta de valoración en Miranda Dental Studio."),
    waMessage: "Hola Dr. Gabriel Miranda, deseo información para una cita.",
    image: "/specialties/rehabilitacion-oral.webp"
  },
  {
    id: "instagram",
    name: "Instagram Oficial",
    handle: "@odontologia_miranda",
    iconType: "instagram",
    color: "#D4AF37",
    bgColor: "bg-amber-50 border-amber-200 text-[#D4AF37]",
    description: "Casos clínicos reales de Rehabilitación Oral, Diseño de Sonrisa y Estética en Miranda Dental Studio.",
    actionText: "Seguir en Instagram",
    url: "https://www.instagram.com/odontologia_miranda/",
    waMessage: "Hola Dr. Gabriel Miranda, vi su Instagram oficial y deseo agendar una valoración.",
    image: "/specialties/estetica-dental.webp"
  },
  {
    id: "facebook",
    name: "Facebook Oficial",
    handle: "Miranda Dental Studio",
    iconType: "facebook",
    color: "#1877F2",
    bgColor: "bg-blue-50 border-blue-200 text-[#1877F2]",
    description: "Comunidad de pacientes y testimonios sobre nuestros tratamientos dentales en La Maná.",
    actionText: "Visitar Facebook",
    url: "https://facebook.com/odontologiagabrielmiranda",
    waMessage: "Hola Dr. Gabriel Miranda, vi su página oficial de Facebook y deseo una cita.",
    image: "/specialties/endodoncia.webp"
  }
];
