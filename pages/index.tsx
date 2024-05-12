import Image from 'next/image';
import { useState } from 'react';
import Head from 'next/head';

import SearchInput from '@/components/searchInput/SearchInput';
import Logo from '@/public/logo.svg';
import Doctor from '@/interfaces/doctor.interface';
import { doctorService } from '@/services/doctorService';
import List from '@/components/listDoctors/List';

function Home({ doctors: initialDoctors }: { doctors: Doctor[] }) {
  const [doctors, setDoctors] = useState(initialDoctors);

  /**
   * Filter the list of doctors based on the search term, this can be a name or speciality.
   * @param {string} searchTerm
   */
  const handleSearch = (searchTerm: string) => {
    const filteredDoctors = initialDoctors.filter(
      (doctor) =>
        doctor.full_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase()),
    );

    setDoctors(filteredDoctors);

    if (searchTerm === '') {
      setDoctors(initialDoctors);
    }
  };

  return (
    <>
      <Head>
        <title>Queen catalina browser</title>
        <meta content={`Find your ideal specialist`} name="description" />
      </Head>
      <main className="max-h-full h-full w-full space-y-4 transition-all duration-1000 p-8">
        <div className="h-full w-full flex flex-col items-center space-y-10 justify-center">
          <Image alt="logo" height={500} src={Logo} width={500} />
          <SearchInput onSearch={handleSearch} />
        </div>
        <List doctors={doctors} />
      </main>
    </>
  );
}

/**
 * Getting all available doctors
 * @returns {props}
 */
export async function getServerSideProps() {
  const doctors = await doctorService.getAllDoctors();

  return {
    props: {
      doctors,
    },
  };
}

export default Home;
