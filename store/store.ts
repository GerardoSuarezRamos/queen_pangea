import { atom } from 'jotai';

import Doctor, { WorkingHours } from '@/interfaces/doctor.interface';

/**
 * GLOBAL STATES
 */
const doctorSelectedIdAtom = atom<string>('');
const doctorSelectedInfoAtom = atom<Doctor | null>(null);
const workingHoursDoctorAtom = atom<WorkingHours | null>(null);
const searchQueryAtom = atom<string>('');

export { doctorSelectedIdAtom, doctorSelectedInfoAtom, workingHoursDoctorAtom, searchQueryAtom };
