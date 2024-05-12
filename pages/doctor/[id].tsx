import Image from 'next/image';
import { useState } from 'react';

import Doctor, { WorkingHours } from '@/interfaces/doctor.interface';
import { doctorService } from '@/services/doctorService';
import { Button } from '@/components/ui/button';

function DoctorDetail({ doctor }: { doctor: Doctor }) {
  const [scheduleModal, setScheduleModal] = useState(false);

  return (
    <main className="h-full w-full p-10">
      <div className="text-white flex flex-col justify-center items-center">
        <Image alt={doctor.id} height={300} src={doctor?.profile_image} width={300} />
        <h2 className="text-3xl font-bold">{doctor?.full_name}</h2>
        <h3 className="text-xl">{doctor?.specialty}</h3>
        <p className="text-lg max-w-sm text-center">{doctor.biography}</p>
      </div>

      <ul className="flex flex-col justify-center items-center">
        <h4 className="text-2xl font-bold p-2 my-4 text-white">Working Hours</h4>
        {Object.keys(doctor.working_hours).map((day) => {
          return (
            <li key={day} className="text-white">
              <span className="font-bold">{day}</span> <br />
              from: {doctor.working_hours[day as keyof WorkingHours].from} to:{' '}
              {doctor.working_hours[day as keyof WorkingHours].to}
            </li>
          );
        })}

        <Button className="text-center mt-10" type="button">
          Agendar una cita
        </Button>
      </ul>
    </main>
  );
}

export async function getStaticProps(context: any) {
  const { id } = context.params;

  console.log(context.params);
  const doctor = await doctorService.getDoctorById(id);

  return {
    props: {
      doctor,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  };
}

export default DoctorDetail;
