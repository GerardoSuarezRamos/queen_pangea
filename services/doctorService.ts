import { collection, doc, getDoc, getDocs, query, where } from 'firebase/firestore';

import Doctor from '@/interfaces/doctor.interface';
import { db } from '@/firebase/client';

async function getAllDoctors() {
  try {
    const queryAllDoctors = await getDocs(collection(db, 'doctors'));
    const doctorsArray: Doctor[] = [];

    queryAllDoctors.forEach((doc) => {
      doctorsArray.push(doc.data() as Doctor);
    });

    return doctorsArray;
  } catch (e) {
    console.error('Error fetching documents: ', e);

    return []; // return empty array if error
  }
}

async function searchDoctorsByName(name: string) {
  const doctorsRef = collection(db, 'doctors');
  const q = query(doctorsRef, where('full_name', '<=', name + '\uf8ff'));

  try {
    const querySnapshot = await getDocs(q);
    const matchingDoctors: Doctor[] = [];

    querySnapshot.forEach((doc) => {
      matchingDoctors.push(doc.data() as Doctor);
    });

    return matchingDoctors;
  } catch (error) {
    console.error('Error searching doctors by name: ', error);

    return [];
  }
}

async function searchDoctorsBySpeciality(speciality: string) {
  const doctorsRef = collection(db, 'doctors');
  const q = query(doctorsRef, where('speciality', '<=', speciality + '\uf8ff'));

  try {
    const querySnapshot = await getDocs(q);
    const matchingDoctors: Doctor[] = [];

    querySnapshot.forEach((doc) => {
      matchingDoctors.push(doc.data() as Doctor);
    });

    return matchingDoctors;
  } catch (error) {
    console.error('Error searching doctors by name: ', error);

    return [];
  }
}

async function getDoctorById(doctorId: string) {
  const doctorRef = doc(db, 'doctors', doctorId);

  try {
    const doctorSnapshot = await getDoc(doctorRef);

    if (doctorSnapshot.exists()) {
      return doctorSnapshot.data();
    } else {
      console.log('No se encontró ningún doctor con el ID especificado.');

      return null;
    }
  } catch (error) {
    console.error('Error getting doctor by ID: ', error);

    return null;
  }
}

export const doctorService = {
  getAllDoctors,
  searchDoctorsByName,
  searchDoctorsBySpeciality,
  getDoctorById,
};
