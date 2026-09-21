import React, { useState, useRef, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Calendar,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Check,
  Sparkles,
  Sun,
  Sunrise,
  Sunset,
  Stethoscope,
  X
} from 'lucide-react';
import { cn } from '../../lib/utils';

// ============================================================================
// 1. TRATAMIENTO O MOTIVO DE CONSULTA (DROPDOWN DE AUTOR)
// ============================================================================

export interface TreatmentOption {
  id: string;
  title: string;
  subtitle: string;
  category: 'valoracion' | 'basicos' | 'especialidades';
  badge?: string;
  priceTag?: string;
}

export const TREATMENT_OPTIONS: TreatmentOption[] = [
  {
    id: 'consulta-valoracion',
    title: 'Consulta de Valoración Integral',
    subtitle: 'Diagnóstico 3D con Dr. Miranda, fotografías clínicas y radiografías dentales',
    category: 'valoracion',
    badge: 'Recomendada',
  },
  // Servicios Básicos
  {
    id: 'profilaxis-dental',
    title: 'Profilaxis Dental Profunda',
    subtitle: 'Limpieza ultrasónica, retiro minucioso de sarro y pulido dental',
    category: 'basicos',
  },
  {
    id: 'restauraciones',
    title: 'Restauraciones Dentales',
    subtitle: 'Calzas estéticas en resina compuesta de alta densidad biomimética',
    category: 'basicos',
  },
  {
    id: 'extracciones',
    title: 'Extracciones Dentales',
    subtitle: 'Extracción atraumática y segura preservadora de tejidos',
    category: 'basicos',
  },
  {
    id: 'blanqueamientos',
    title: 'Blanqueamientos Dentales',
    subtitle: 'Aclaramiento en 1 sesión protegiendo el esmalte de la sensibilidad',
    category: 'basicos',
  },
  // Especialidades Clínicas de Autor
  {
    id: 'rehabilitacion-oral',
    title: 'Rehabilitación Oral & Prótesis',
    subtitle: 'Prótesis fijas, totales o parciales, coronas e implanto-asistidas',
    category: 'especialidades',
  },
  {
    id: 'estetica-dental',
    title: 'Estética Dental de Alta Gama',
    subtitle: 'Carillas directas e indirectas, lentes cerámicos y microabrasión',
    category: 'especialidades',
  },
  {
    id: 'endodoncia',
    title: 'Endodoncia Especializada',
    subtitle: 'Tratamiento mecanizado de conductos sin dolor para salvar la pieza',
    category: 'especialidades',
  },
  {
    id: 'implantologia',
    title: 'Implantología Dental Avanzada',
    subtitle: 'Reemplazo anatómico de piezas perdidas con implantes de titanio',
    category: 'especialidades',
  },
  {
    id: 'cirugia-oral',
    title: 'Cirugía Oral (Muelas del Juicio)',
    subtitle: 'Extracción quirúrgica especializada de terceros molares / cordales',
    category: 'especialidades',
  },
  {
    id: 'ortodoncia',
    title: 'Ortodoncia Integral',
    subtitle: 'Alineación dental con brackets de autoligado, estéticos y convencionales',
    category: 'especialidades',
  },
  {
    id: 'armonizacion-facial',
    title: 'Armonización Facial Médica',
    subtitle: 'Bichectomía, Ácido Hialurónico labial y aplicación de Botox médico',
    category: 'especialidades',
  },
  {
    id: 'periodoncia',
    title: 'Periodoncia Avanzada',
    subtitle: 'Gingivectomía estética, recorte de encías, raspados y frenectomía',
    category: 'especialidades',
  },
];

interface LuxuryTreatmentSelectProps {
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

export const LuxuryTreatmentSelect: React.FC<LuxuryTreatmentSelectProps> = ({
  value,
  onChange,
  className,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const selectedItem = useMemo(() => {
    return (
      TREATMENT_OPTIONS.find((opt) => opt.id === value) ||
      TREATMENT_OPTIONS[0]
    );
  }, [value]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleSelect = (id: string) => {
    onChange(id);
    setIsOpen(false);
  };

  return (
    <div ref={containerRef} className={cn('relative w-full', className)}>
      {/* Botón Disparador Principal (Gama Alta) */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        className={cn(
          'w-full px-4 py-3 sm:py-3.5 rounded-2xl bg-white border text-left flex items-center justify-between gap-3 transition-all duration-200 outline-none cursor-pointer shadow-xs focus-visible:ring-3 focus-visible:ring-[#D4AF37]/30 focus-visible:border-[#D4AF37]',
          isOpen
            ? 'border-[#D4AF37] ring-3 ring-[#D4AF37]/20 shadow-md'
            : 'border-stone-300 hover:border-[#D4AF37]/70 hover:shadow-sm'
        )}
      >
        <div className="flex items-center gap-3 min-w-0 flex-1">
          <div className="w-9 h-9 rounded-xl bg-[#FAF7EE] border border-[#D4AF37]/40 text-[#84631E] flex items-center justify-center shrink-0 shadow-2xs">
            <Stethoscope className="w-4 h-4 text-[#84631E]" />
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2">
              <span className="text-xs sm:text-sm font-black text-[#0D0D0D] truncate block">
                {selectedItem.title}
              </span>
              {selectedItem.priceTag && (
                <span className="text-[10px] font-black text-[#84631E] bg-[#FAF7EE] border border-[#D4AF37]/40 px-2 py-0.5 rounded-full shrink-0">
                  {selectedItem.priceTag}
                </span>
              )}
            </div>
            <span className="text-[11px] text-stone-500 truncate block">
              {selectedItem.subtitle}
            </span>
          </div>
        </div>

        <div className="shrink-0 pl-1 text-[#84631E]">
          <ChevronDown
            className={cn(
              'w-4 h-4 transition-transform duration-300',
              isOpen ? 'rotate-180 text-[#84631E]' : 'text-stone-400'
            )}
          />
        </div>
      </button>

      {/* Menú Desplegable Flotante */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -6, scale: 0.99 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -4, scale: 0.99 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            role="listbox"
            className="absolute top-full left-0 right-0 mt-2 z-50 rounded-2xl bg-white/98 backdrop-blur-xl border border-[#D4AF37]/45 shadow-[0_18px_40px_-8px_rgba(132,99,30,0.22)] overflow-hidden"
          >
            <div className="max-h-72 sm:max-h-80 overflow-y-auto p-1.5 divide-y divide-stone-100/80">
              
              {/* Sección 1: Consulta de Valoración Destacada */}
              <div className="pb-1.5">
                <div className="px-3 py-1 text-[10px] font-black uppercase tracking-wider text-[#84631E]">
                  Diagnóstico Clínico Principal
                </div>
                {TREATMENT_OPTIONS.filter((o) => o.category === 'valoracion').map((opt) => {
                  const isSelected = opt.id === value;
                  return (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => handleSelect(opt.id)}
                      role="option"
                      aria-selected={isSelected}
                      className={cn(
                        'w-full text-left p-3 rounded-xl transition-all flex items-start justify-between gap-2.5 cursor-pointer my-0.5',
                        isSelected
                          ? 'bg-[#FAF7EE] border border-[#D4AF37]/50 shadow-2xs'
                          : 'hover:bg-amber-50/50 border border-transparent'
                      )}
                    >
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2">
                          <span className="text-xs sm:text-sm font-black text-[#0D0D0D]">
                            {opt.title}
                          </span>
                          <span className="text-[10px] font-black text-[#84631E] bg-[#D4AF37]/15 border border-[#D4AF37]/40 px-2 py-0.5 rounded-full">
                            {opt.badge} • {opt.priceTag}
                          </span>
                        </div>
                        <p className="text-[11px] text-stone-600 mt-0.5 leading-snug">
                          {opt.subtitle}
                        </p>
                      </div>
                      {isSelected && (
                        <div className="w-5 h-5 rounded-full bg-[#D4AF37] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                          <Check className="w-3 h-3 stroke-[3]" />
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Sección 2: Servicios Básicos */}
              <div className="py-1.5">
                <div className="px-3 py-1 text-[10px] font-black uppercase tracking-wider text-stone-400">
                  Servicios Básicos y Preventivos
                </div>
                {TREATMENT_OPTIONS.filter((o) => o.category === 'basicos').map((opt) => {
                  const isSelected = opt.id === value;
                  return (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => handleSelect(opt.id)}
                      role="option"
                      aria-selected={isSelected}
                      className={cn(
                        'w-full text-left p-2.5 rounded-xl transition-all flex items-center justify-between gap-2 cursor-pointer my-0.5',
                        isSelected
                          ? 'bg-[#FAF7EE] border border-[#D4AF37]/45 text-[#84631E] font-bold'
                          : 'hover:bg-[#FAF7EE]/60 text-stone-700 hover:text-[#0D0D0D] border border-transparent'
                      )}
                    >
                      <div className="min-w-0 flex-1">
                        <span className="text-xs sm:text-sm font-extrabold block truncate">
                          {opt.title}
                        </span>
                        <span className="text-[10.5px] text-stone-500 block truncate">
                          {opt.subtitle}
                        </span>
                      </div>
                      {isSelected && (
                        <div className="w-4 h-4 rounded-full bg-[#84631E] text-white flex items-center justify-center shrink-0">
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Sección 3: Especialidades Clínicas */}
              <div className="pt-1.5">
                <div className="px-3 py-1 text-[10px] font-black uppercase tracking-wider text-[#84631E]">
                  Especialidades Clínicas de Autor
                </div>
                {TREATMENT_OPTIONS.filter((o) => o.category === 'especialidades').map((opt) => {
                  const isSelected = opt.id === value;
                  return (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => handleSelect(opt.id)}
                      role="option"
                      aria-selected={isSelected}
                      className={cn(
                        'w-full text-left p-2.5 rounded-xl transition-all flex items-center justify-between gap-2 cursor-pointer my-0.5',
                        isSelected
                          ? 'bg-[#FAF7EE] border border-[#D4AF37]/45 text-[#84631E] font-bold'
                          : 'hover:bg-[#FAF7EE]/60 text-stone-700 hover:text-[#0D0D0D] border border-transparent'
                      )}
                    >
                      <div className="min-w-0 flex-1">
                        <span className="text-xs sm:text-sm font-extrabold block truncate">
                          {opt.title}
                        </span>
                        <span className="text-[10.5px] text-stone-500 block truncate">
                          {opt.subtitle}
                        </span>
                      </div>
                      {isSelected && (
                        <div className="w-4 h-4 rounded-full bg-[#84631E] text-white flex items-center justify-center shrink-0">
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};


// ============================================================================
// 2. HORARIO PREFERIDO (DROPDOWN DE AUTOR)
// ============================================================================

export interface TimeSlotOption {
  id: string;
  label: string;
  timeRange: string;
  note: string;
  icon: React.ComponentType<{ className?: string }>;
  isSpecial?: boolean;
}

export const TIME_SLOT_OPTIONS: TimeSlotOption[] = [
  {
    id: 'Mañana (09:00 - 12:00)',
    label: 'Mañana',
    timeRange: '09:00 AM — 12:00 PM',
    note: 'Turno matutino de alta agilidad',
    icon: Sunrise,
  },
  {
    id: 'Mediodía (12:00 - 15:00)',
    label: 'Mediodía',
    timeRange: '12:00 PM — 03:00 PM',
    note: 'Atención continua al mediodía',
    icon: Sun,
  },
  {
    id: 'Tarde (15:00 - 19:00)',
    label: 'Tarde',
    timeRange: '03:00 PM — 07:00 PM',
    note: 'Horario posterior a jornada laboral',
    icon: Sunset,
  },
  {
    id: 'Domingo (09:00 - 14:00)',
    label: 'Domingo Especial',
    timeRange: '09:00 AM — 02:00 PM',
    note: 'Atención exclusiva de fin de semana',
    icon: Sparkles,
    isSpecial: true,
  },
];

interface LuxuryTimeSelectProps {
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

export const LuxuryTimeSelect: React.FC<LuxuryTimeSelectProps> = ({
  value,
  onChange,
  className,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const selectedSlot = useMemo(() => {
    return (
      TIME_SLOT_OPTIONS.find((slot) => slot.id === value) ||
      TIME_SLOT_OPTIONS[0]
    );
  }, [value]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleSelect = (id: string) => {
    onChange(id);
    setIsOpen(false);
  };

  const IconComponent = selectedSlot.icon;

  return (
    <div ref={containerRef} className={cn('relative w-full', className)}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        className={cn(
          'w-full px-4 py-3 sm:py-3.5 rounded-2xl bg-white border text-left flex items-center justify-between gap-3 transition-all duration-200 outline-none cursor-pointer shadow-xs focus-visible:ring-3 focus-visible:ring-[#D4AF37]/30 focus-visible:border-[#D4AF37]',
          isOpen
            ? 'border-[#D4AF37] ring-3 ring-[#D4AF37]/20 shadow-md'
            : 'border-stone-300 hover:border-[#D4AF37]/70 hover:shadow-sm'
        )}
      >
        <div className="flex items-center gap-3 min-w-0 flex-1">
          <div className="w-9 h-9 rounded-xl bg-[#FAF7EE] border border-[#D4AF37]/40 text-[#84631E] flex items-center justify-center shrink-0 shadow-2xs">
            <IconComponent className="w-4 h-4 text-[#84631E]" />
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2">
              <span className="text-xs sm:text-sm font-black text-[#0D0D0D] truncate block">
                {selectedSlot.label}
              </span>
              {selectedSlot.isSpecial && (
                <span className="text-[10px] font-black text-[#84631E] bg-[#FAF7EE] border border-[#D4AF37]/40 px-2 py-0.5 rounded-full shrink-0">
                  Exclusivo
                </span>
              )}
            </div>
            <span className="text-[11px] text-stone-500 truncate block">
              {selectedSlot.timeRange}
            </span>
          </div>
        </div>

        <div className="shrink-0 pl-1 text-[#84631E]">
          <ChevronDown
            className={cn(
              'w-4 h-4 transition-transform duration-300',
              isOpen ? 'rotate-180 text-[#84631E]' : 'text-stone-400'
            )}
          />
        </div>
      </button>

      {/* Menú Desplegable */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -6, scale: 0.99 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -4, scale: 0.99 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            role="listbox"
            className="absolute top-full left-0 right-0 sm:left-auto sm:right-0 sm:w-[320px] max-w-[calc(100vw-2rem)] mt-2 z-50 rounded-2xl bg-white/98 backdrop-blur-xl border border-[#D4AF37]/45 shadow-[0_18px_40px_-8px_rgba(132,99,30,0.22)] overflow-hidden p-1.5 space-y-1"
          >
            {TIME_SLOT_OPTIONS.map((slot) => {
              const isSelected = slot.id === value;
              const SlotIcon = slot.icon;
              return (
                <button
                  key={slot.id}
                  type="button"
                  onClick={() => handleSelect(slot.id)}
                  role="option"
                  aria-selected={isSelected}
                  className={cn(
                    'w-full text-left p-2.5 rounded-xl transition-all flex items-center justify-between gap-3 cursor-pointer',
                    isSelected
                      ? 'bg-[#FAF7EE] border border-[#D4AF37]/50 text-[#84631E] font-bold shadow-2xs'
                      : 'hover:bg-[#FAF7EE]/60 text-stone-700 hover:text-[#0D0D0D] border border-transparent'
                  )}
                >
                  <div className="flex items-center gap-2.5 min-w-0 flex-1">
                    <div
                      className={cn(
                        'w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-colors',
                        isSelected ? 'bg-[#D4AF37] text-white' : 'bg-stone-100 text-stone-500'
                      )}
                    >
                      <SlotIcon className="w-3.5 h-3.5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-1.5">
                        <span className="text-xs sm:text-sm font-extrabold text-[#0D0D0D]">
                          {slot.label}
                        </span>
                        <span className="text-[11px] font-semibold text-stone-500">
                          ({slot.timeRange})
                        </span>
                      </div>
                      <span className="text-[10.5px] text-stone-400 block truncate">
                        {slot.note}
                      </span>
                    </div>
                  </div>

                  {isSelected && (
                    <div className="w-4 h-4 rounded-full bg-[#84631E] text-white flex items-center justify-center shrink-0">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </div>
                  )}
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};


// ============================================================================
// 3. FECHA DESEADA (SELECTOR DESPLEGABLE MINI-CALENDARIO DE ALTA GAMA)
// ============================================================================

const DAYS_SHORT_ES = ['Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sá', 'Do'];
const MONTHS_ES = [
  'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
  'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
];
const DAYS_FULL_ES = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];

interface LuxuryDatePickerProps {
  value: string; // formato YYYY-MM-DD
  onChange: (value: string) => void;
  className?: string;
}

export const LuxuryDatePicker: React.FC<LuxuryDatePickerProps> = ({
  value,
  onChange,
  className,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Fecha actual de referencia
  const today = useMemo(() => new Date(), []);
  const todayYear = today.getFullYear();
  const todayMonth = today.getMonth();
  const todayDay = today.getDate();
  const todayStr = `${todayYear}-${String(todayMonth + 1).padStart(2, '0')}-${String(todayDay).padStart(2, '0')}`;

  // Estado del mes visualizado en el calendario
  const [viewYear, setViewYear] = useState(() => {
    if (value) {
      const parts = value.split('-');
      if (parts.length === 3) return parseInt(parts[0], 10);
    }
    return todayYear;
  });

  const [viewMonth, setViewMonth] = useState(() => {
    if (value) {
      const parts = value.split('-');
      if (parts.length === 3) return parseInt(parts[1], 10) - 1;
    }
    return todayMonth;
  });

  // Texto legible de la fecha seleccionada
  const formattedDisplay = useMemo(() => {
    if (!value) return '';
    const parts = value.split('-');
    if (parts.length !== 3) return value;
    const y = parseInt(parts[0], 10);
    const m = parseInt(parts[1], 10) - 1;
    const d = parseInt(parts[2], 10);
    const dateObj = new Date(y, m, d);
    const dayOfWeek = DAYS_FULL_ES[dateObj.getDay()];
    const monthName = MONTHS_ES[m];
    return `${dayOfWeek}, ${d} de ${monthName}`;
  }, [value]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Navegación de meses
  const canGoPrev = viewYear > todayYear || (viewYear === todayYear && viewMonth > todayMonth);

  const handlePrevMonth = () => {
    if (!canGoPrev) return;
    if (viewMonth === 0) {
      setViewMonth(11);
      setViewYear(viewYear - 1);
    } else {
      setViewMonth(viewMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (viewMonth === 11) {
      setViewMonth(0);
      setViewYear(viewYear + 1);
    } else {
      setViewMonth(viewMonth + 1);
    }
  };

  // Cálculo de la cuadrícula de días
  const calendarDays = useMemo(() => {
    // Primer día del mes (0 = Domingo, 1 = Lunes, ...)
    const firstDayIndex = new Date(viewYear, viewMonth, 1).getDay();
    // Ajuste para comenzar en Lunes (Lu = 0 ... Do = 6)
    const startOffset = (firstDayIndex + 6) % 7;

    const totalDaysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();

    const days = [];
    for (let i = 0; i < startOffset; i++) {
      days.push(null);
    }
    for (let d = 1; d <= totalDaysInMonth; d++) {
      const dateStr = `${viewYear}-${String(viewMonth + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
      const isPast = dateStr < todayStr;
      const isToday = dateStr === todayStr;
      const isSelected = dateStr === value;
      const dayOfWeek = new Date(viewYear, viewMonth, d).getDay();
      const isSunday = dayOfWeek === 0;

      days.push({
        day: d,
        dateStr,
        isPast,
        isToday,
        isSelected,
        isSunday,
      });
    }
    return days;
  }, [viewYear, viewMonth, todayStr, value]);

  const handleSelectDate = (dateStr: string) => {
    onChange(dateStr);
    setIsOpen(false);
  };

  // Accesos rápidos
  const selectQuickDate = (type: 'today' | 'tomorrow' | 'nextSunday') => {
    const target = new Date();
    if (type === 'tomorrow') {
      target.setDate(target.getDate() + 1);
    } else if (type === 'nextSunday') {
      const day = target.getDay();
      const diff = day === 0 ? 7 : (7 - day);
      target.setDate(target.getDate() + diff);
    }
    const y = target.getFullYear();
    const m = target.getMonth();
    const d = target.getDate();
    const dateStr = `${y}-${String(m + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
    setViewYear(y);
    setViewMonth(m);
    onChange(dateStr);
    setIsOpen(false);
  };

  return (
    <div ref={containerRef} className={cn('relative w-full', className)}>
      {/* Botón Disparador Principal */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-haspopup="dialog"
        aria-expanded={isOpen}
        className={cn(
          'w-full px-4 py-3 sm:py-3.5 rounded-2xl bg-white border text-left flex items-center justify-between gap-3 transition-all duration-200 outline-none cursor-pointer shadow-xs focus-visible:ring-3 focus-visible:ring-[#D4AF37]/30 focus-visible:border-[#D4AF37]',
          isOpen
            ? 'border-[#D4AF37] ring-3 ring-[#D4AF37]/20 shadow-md'
            : 'border-stone-300 hover:border-[#D4AF37]/70 hover:shadow-sm'
        )}
      >
        <div className="flex items-center gap-3 min-w-0 flex-1">
          <div className="w-9 h-9 rounded-xl bg-[#FAF7EE] border border-[#D4AF37]/40 text-[#84631E] flex items-center justify-center shrink-0 shadow-2xs">
            <Calendar className="w-4 h-4 text-[#84631E]" />
          </div>
          <div className="min-w-0 flex-1">
            {value ? (
              <>
                <span className="text-xs sm:text-sm font-black text-[#0D0D0D] truncate block">
                  {formattedDisplay}
                </span>
                <span className="text-[11px] font-semibold text-[#84631E] truncate block">
                  Fecha seleccionada para tu valoración
                </span>
              </>
            ) : (
              <>
                <span className="text-xs sm:text-sm font-semibold text-stone-400 truncate block">
                  Selecciona la fecha deseada...
                </span>
                <span className="text-[11px] text-stone-400 truncate block">
                  Atención de Lunes a Domingo
                </span>
              </>
            )}
          </div>
        </div>

        <div className="flex items-center gap-1.5 shrink-0 text-[#84631E]">
          {value && (
            <span
              role="button"
              tabIndex={0}
              onClick={(e) => {
                e.stopPropagation();
                onChange('');
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.stopPropagation();
                  onChange('');
                }
              }}
              title="Borrar fecha"
              className="p-1 rounded-full hover:bg-stone-100 text-stone-400 hover:text-stone-700 transition-colors"
            >
              <X className="w-3.5 h-3.5" />
            </span>
          )}
          <ChevronDown
            className={cn(
              'w-4 h-4 transition-transform duration-300',
              isOpen ? 'rotate-180 text-[#84631E]' : 'text-stone-400'
            )}
          />
        </div>
      </button>

      {/* Desplegable Mini-Calendario */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -6, scale: 0.99 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -4, scale: 0.99 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            className="absolute top-full left-0 right-0 sm:right-auto sm:w-[340px] max-w-[calc(100vw-2rem)] mt-2 z-50 rounded-2xl bg-white/98 backdrop-blur-xl border border-[#D4AF37]/45 shadow-[0_18px_40px_-8px_rgba(132,99,30,0.22)] p-3.5 space-y-3"
          >
            {/* Cabecera del Mes y Navegación */}
            <div className="flex items-center justify-between px-1">
              <button
                type="button"
                onClick={handlePrevMonth}
                disabled={!canGoPrev}
                className={cn(
                  'w-8 h-8 rounded-xl border flex items-center justify-center transition-all cursor-pointer',
                  canGoPrev
                    ? 'border-stone-200 hover:border-[#D4AF37] hover:bg-[#FAF7EE] text-stone-700 hover:text-[#84631E]'
                    : 'border-transparent text-stone-300 cursor-not-allowed'
                )}
                aria-label="Mes anterior"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <div className="text-center">
                <span className="text-sm font-black text-[#0D0D0D] capitalize block">
                  {MONTHS_ES[viewMonth]} {viewYear}
                </span>
                <span className="text-[10px] font-bold text-[#84631E] uppercase tracking-wider">
                  Miranda Dental Studio
                </span>
              </div>

              <button
                type="button"
                onClick={handleNextMonth}
                className="w-8 h-8 rounded-xl border border-stone-200 hover:border-[#D4AF37] hover:bg-[#FAF7EE] text-stone-700 hover:text-[#84631E] flex items-center justify-center transition-all cursor-pointer"
                aria-label="Mes siguiente"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Días de la Semana */}
            <div className="grid grid-cols-7 gap-1 text-center">
              {DAYS_SHORT_ES.map((d, i) => (
                <span
                  key={d}
                  className={cn(
                    'text-[10.5px] font-black uppercase py-1',
                    i === 6 ? 'text-[#84631E]' : 'text-stone-400'
                  )}
                >
                  {d}
                </span>
              ))}
            </div>

            {/* Cuadrícula de Días */}
            <div className="grid grid-cols-7 gap-1">
              {calendarDays.map((item, idx) => {
                if (!item) {
                  return <div key={`empty-${idx}`} className="w-8 h-8" />;
                }

                const { day, dateStr, isPast, isToday, isSelected, isSunday } = item;

                if (isPast) {
                  return (
                    <div
                      key={dateStr}
                      className="w-full h-8 flex items-center justify-center text-xs text-stone-300 font-medium cursor-not-allowed select-none"
                    >
                      {day}
                    </div>
                  );
                }

                return (
                  <button
                    key={dateStr}
                    type="button"
                    onClick={() => handleSelectDate(dateStr)}
                    className={cn(
                      'w-full h-8.5 rounded-xl text-xs font-bold transition-all flex flex-col items-center justify-center relative cursor-pointer',
                      isSelected
                        ? 'bg-gradient-to-br from-[#D4AF37] via-[#AA7C11] to-[#84631E] text-white shadow-xs font-black'
                        : isSunday
                        ? 'bg-[#FAF7EE]/70 hover:bg-[#FAF7EE] text-[#84631E] font-black border border-[#D4AF37]/30 hover:border-[#D4AF37]'
                        : isToday
                        ? 'bg-amber-50 hover:bg-amber-100/70 text-[#0D0D0D] border border-[#D4AF37]/40'
                        : 'text-stone-700 hover:bg-[#FAF7EE] hover:text-[#84631E]'
                    )}
                  >
                    <span>{day}</span>
                    {isSunday && !isSelected && (
                      <span className="w-1 h-1 rounded-full bg-[#D4AF37] -mt-0.5" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Accesos Rápidos de Elección */}
            <div className="pt-2 border-t border-stone-100 flex flex-wrap items-center justify-between gap-1.5 text-[10.5px]">
              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={() => selectQuickDate('today')}
                  className="px-2 py-1 rounded-lg bg-stone-100 hover:bg-[#FAF7EE] hover:text-[#84631E] text-stone-600 font-bold transition-colors cursor-pointer"
                >
                  Hoy
                </button>
                <button
                  type="button"
                  onClick={() => selectQuickDate('tomorrow')}
                  className="px-2 py-1 rounded-lg bg-stone-100 hover:bg-[#FAF7EE] hover:text-[#84631E] text-stone-600 font-bold transition-colors cursor-pointer"
                >
                  Mañana
                </button>
                <button
                  type="button"
                  onClick={() => selectQuickDate('nextSunday')}
                  className="px-2 py-1 rounded-lg bg-[#FAF7EE] hover:bg-[#F3E8CE] text-[#84631E] border border-[#D4AF37]/40 font-black transition-colors cursor-pointer flex items-center gap-1"
                >
                  <Sparkles className="w-2.5 h-2.5" />
                  <span>Domingo</span>
                </button>
              </div>

              {value && (
                <button
                  type="button"
                  onClick={() => {
                    onChange('');
                    setIsOpen(false);
                  }}
                  className="text-stone-400 hover:text-rose-600 font-medium transition-colors cursor-pointer"
                >
                  Borrar
                </button>
              )}
            </div>

            {/* Aviso Sutil de Domingos */}
            <div className="text-[10px] text-center text-stone-500 bg-[#FAF7EE]/50 py-1 px-2 rounded-lg border border-[#D4AF37]/20">
              ⚡ Atención de Lunes a Sábado hasta las 19:00 | Domingos 09:00 a 14:00
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
