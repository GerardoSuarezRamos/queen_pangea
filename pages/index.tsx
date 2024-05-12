import Image from 'next/image';

import SearchInput from '@/components/searchInput/SearchInput';
import Logo from '@/public/logo.svg';
import Doctor from '@/interfaces/doctor.interface';
import { doctorService } from '@/services/doctorService';
import List from '@/components/listDoctors/List';

function Home({ doctors }: { doctors: Doctor[] }) {
  return (
    <main className="max-h-full h-full w-full space-y-4 transition-all duration-1000 p-8">
      <div className="h-full w-full flex flex-col items-center space-y-10 justify-center">
        <Image alt="logo" height={500} src={Logo} width={500} />
        <SearchInput />
      </div>
      <List doctors={doctors} />
    </main>
  );
}

export async function getServerSideProps() {
  const doctors = await doctorService.getAllDoctors();

  return {
    props: {
      doctors,
    },
  };
}

export default Home;
