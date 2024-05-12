'use client';

import { Input } from '@/components/ui/input';

interface Props {
  onSearch: (searchTerm: string) => void;
}

export default function SearchInput({ onSearch }: Props) {
  return (
    <div className="flex justify-center w-full max-w-full items-center space-x-2">
      <Input
        className="rounded-xl w-full md:w-3/5 text-xl"
        placeholder="Busca a tu doctor..."
        type="text"
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
}
