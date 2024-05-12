'use client';
import { FcSearch } from 'react-icons/fc';
import { useAtom } from 'jotai';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { searchQueryAtom } from '@/store/store';

export default function SearchInput() {
  const [searchQuery, setSearchQuery] = useAtom<string>(searchQueryAtom);

  return (
    <div className="flex justify-center w-full max-w-full items-center space-x-2">
      <Input
        className="rounded-xl w-full md:w-3/5 text-xl"
        placeholder="Busca a tu doctor..."
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      <Button
        className="gap-2"
        type="submit"
        onClick={() => {
          console.log(searchQuery);
        }}
      >
        <FcSearch size={25} />
        Buscar
      </Button>
    </div>
  );
}
