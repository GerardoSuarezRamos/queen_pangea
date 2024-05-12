import Image from 'next/image';

import Doctor from '@/interfaces/doctor.interface';

interface Props {
  doctor: Doctor;
}

export default function Card({ doctor }: Props) {
  return (
    <div
      key={doctor.id}
      className="h-3/4 rounded-lg"
      onClick={() => (window.location.href = `doctor/${doctor.id}`)}
    >
      <div className="">
        <Image
          alt={doctor.full_name}
          className="transition-all duration-500 transform-gpu hover:opacity-30 hover:scale-90 z-10 rounded rounded-t-lg"
          height={450}
          src={doctor.profile_image}
          width={300}
        />
      </div>
      <div className="flex flex-col justify-center">
        <h4 className="text-white text-2xl font-semibold truncate">
          {doctor.full_name} - {doctor.specialty}
        </h4>
        <p className="text-white text-wrap text-ellipsis w-2/3">{doctor.biography}</p>
      </div>
    </div>
  );
}
