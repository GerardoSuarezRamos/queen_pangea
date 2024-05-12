import Image from 'next/image';
import Head from 'next/head';

import Doctor, { WorkingHours } from '@/interfaces/doctor.interface';
import { doctorService } from '@/services/doctorService';
import { DialogDemo } from '@/components/scheduleModal/ScheduleModal';

function DoctorDetail({ doctor }: { doctor: Doctor }) {
  return (
    <>
      <Head>
        <title>
          {doctor?.full_name} - {doctor?.specialty}
        </title>
        <meta content={`Learn more about the doctor ${doctor?.full_name}`} name="description" />
        <meta content={`Doctor specialising in ${doctor?.specialty}`} name="speciality" />
      </Head>
      <main className="h-full w-full p-10">
        <div className="text-white flex flex-col justify-center items-center">
          <Image
            alt={doctor?.id}
            className="rounded-xl"
            height={300}
            src={doctor?.profile_image}
            width={300}
          />
          <h2 className="text-3xl font-bold mt-2">{doctor?.full_name}</h2>
          <h3 className="text-xl font-bold my-2">{doctor?.specialty}</h3>
          <p className="text-lg max-w-sm text-justify">{doctor?.biography}</p>
        </div>

        <div className="flex flex-col justify-center items-center my-4">
          <h3 className="text-white text-3xl font-bold my-4">Working hours</h3>
          <ul className="grid grid-cols-3 gap-4">
            {doctor?.working_hours &&
              Object.keys(doctor?.working_hours)?.map((day, index) => {
                return (
                  <li
                    key={`${day}-indx-${index}`}
                    className="text-white text-center mt-2 border border-collapse border-slate-50 p-3 rounded-xl hover:scale-110"
                  >
                    <span className="text-bold text-xl">{day.toUpperCase()}</span>
                    <br />
                    <span>{doctor?.working_hours[day as keyof WorkingHours].from}</span> -{' '}
                    <span>{doctor?.working_hours[day as keyof WorkingHours].to}</span>
                  </li>
                );
              })}
          </ul>
        </div>

        <div className="text-center mt-10">
          <DialogDemo />
        </div>
      </main>
    </>
  );
}

export async function getStaticProps(context: any) {
  const { id } = context.params;

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
