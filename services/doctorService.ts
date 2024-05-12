import { collection, doc, getDoc, getDocs } from 'firebase/firestore';

import { db } from '@/firebase/client';

/**
 * THIS FUNCITON ALLOW FETCHING ALL DOCTORS AVIABLE IN DATABASE
 * @returns {Doctor[]}
 */
async function getAllDoctors() {
  try {
    const queryAllDoctors = await getDocs(collection(db, 'doctors'));
    const doctorsArray: any[] = [];

    queryAllDoctors.forEach((doc) => {
      doctorsArray.push({ ...doc.data(), id: doc.id });
    });

    return doctorsArray.slice(0, 120);
  } catch (e) {
    console.error('Error fetching documents: ', e);

    return []; // return empty array if error
  }
}

/**
 * THIS FUNCTION ALLOW FETCHING A DOCTOR BY ID
 * @param {string} doctorId
 * @returns  {Doctor}
 */
async function getDoctorById(doctorId: string) {
  const doctorRef = doc(db, 'doctors', doctorId);

  try {
    const doctorSnapshot = await getDoc(doctorRef);

    if (doctorSnapshot.exists()) {
      return doctorSnapshot.data();
      console.log(doctorSnapshot);
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
  getDoctorById,
};
