import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { WorkingHours } from '@/interfaces/doctor.interface';

interface Props {
  workingHours: WorkingHours;
}

export default function SelectData({ workingHours }: Props) {
  console.log(workingHours);

  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Date and time" />
      </SelectTrigger>
      <SelectContent>
        {workingHours &&
          Object?.keys(workingHours)?.map((day) => (
            <SelectItem key={day} value={day}>
              {day}
            </SelectItem>
          ))}
      </SelectContent>
    </Select>
  );
}
