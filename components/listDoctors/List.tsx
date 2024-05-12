import Doctor from '@/interfaces/doctor.interface';

import Card from './CardList';

interface Props {
  doctors: Doctor[];
}

export default function List({ doctors }: Props) {
  return (
    <div className="p-10 grid xl:grid-cols-6 md:grid-cols-4 lg:grid-cols-4  sm:grid-cols-2 items-center place-content-center justify-center gap-8">
      {doctors.map((it: Doctor) => (
        <Card key={it.id} doctor={it} />
      ))}
    </div>
  );
}
