import Image from 'next/image';
import Head from 'next/head';

import Doctor from '@/interfaces/doctor.interface';
import { doctorService } from '@/services/doctorService';
import { DialogDemo } from '@/components/scheduleModal/ScheduleModal';
import { CalendarViewer } from '@/components/calendarViewer/CalendarViewer';

function DoctorDetail({ doctor }: { doctor: Doctor }) {
  return (
    <>
      <Head>
        <title>{doctor.full_name} - Mi Sitio Web</title>
        <meta content={`Learn more about the doctor ${doctor.full_name}`} name="description" />
        <meta content={`Doctor specialising in ${doctor.specialty}`} name="speciality" />
      </Head>
      <main className="h-full w-full p-10">
        <div className="text-white flex flex-col justify-center items-center">
          <Image alt={doctor?.id} height={300} src={doctor?.profile_image} width={300} />
          <h2 className="text-3xl font-bold">{doctor?.full_name}</h2>
          <h3 className="text-xl">{doctor?.specialty}</h3>
          <p className="text-lg max-w-sm text-center">{doctor?.biography}</p>
        </div>

        <div className="flex flex-col justify-center items-center my-4">
          <CalendarViewer />
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
