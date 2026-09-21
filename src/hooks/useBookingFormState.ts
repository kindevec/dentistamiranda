import { useState, useEffect } from 'react';

export interface BookingFormData {
  cedula: string;
  firstName: string;
  lastName: string;
  preferredDate: string;
  preferredTime: string;
}

const STORAGE_KEY = 'miranda_dental_booking_form';

const initialFormData: BookingFormData = {
  cedula: '',
  firstName: '',
  lastName: '',
  preferredDate: '',
  preferredTime: 'Mañana (09:00 - 12:00)',
};

// Module-level shared state cache so data is preserved during unmount/mount when resizing across breakpoints
let sharedBookingState: BookingFormData = (() => {
  if (typeof window === 'undefined') return initialFormData;
  try {
    const saved = sessionStorage.getItem(STORAGE_KEY);
    if (saved) {
      return { ...initialFormData, ...JSON.parse(saved) };
    }
  } catch {
    // Ignore storage errors
  }
  return initialFormData;
})();

const listeners = new Set<() => void>();

function notifyListeners() {
  listeners.forEach((listener) => listener());
}

export function useBookingFormState(_initialSpecialty?: string) {
  const [formData, setFormData] = useState<BookingFormData>(() => sharedBookingState);

  useEffect(() => {
    const handleChange = () => {
      setFormData({ ...sharedBookingState });
    };
    listeners.add(handleChange);
    return () => {
      listeners.delete(handleChange);
    };
  }, []);

  const updateField = <K extends keyof BookingFormData>(field: K, value: BookingFormData[K]) => {
    sharedBookingState = { ...sharedBookingState, [field]: value };
    try {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(sharedBookingState));
    } catch {
      // Ignore storage errors
    }
    notifyListeners();
  };

  const updateForm = (partial: Partial<BookingFormData>) => {
    sharedBookingState = { ...sharedBookingState, ...partial };
    try {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(sharedBookingState));
    } catch {
      // Ignore storage errors
    }
    notifyListeners();
  };

  const resetForm = () => {
    sharedBookingState = { ...initialFormData };
    try {
      sessionStorage.removeItem(STORAGE_KEY);
    } catch {
      // Ignore storage errors
    }
    notifyListeners();
  };

  return {
    formData,
    updateField,
    updateForm,
    resetForm,
  };
}
