'use client';
import { addDays } from 'date-fns';
import { useEffect, useState, useMemo } from 'react';

import { Calendar } from '@/components/ui/calendar';

export function CalendarViewer() {
  const today = useMemo(() => new Date(), []);

  const [date, setDate] = useState<Date[] | undefined>();

  useEffect(() => {
    for (let i = 0; i < 4; i++) {
      const nextDay = addDays(today, i);

      setDate((prev) => [...(prev ?? []), nextDay]);
    }
  }, [today]);

  return (
    <Calendar
      className="rounded-md border border-gray-200 p-2 text-white"
      mode="multiple"
      selected={date}
      onSelect={setDate}
    />
  );
}
