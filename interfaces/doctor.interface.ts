export default interface Doctor {
  id: string;
  full_name: string;
  specialty: string;
  biography: string;
  working_hours: WorkingHours;
  profile_image: string;
}

export type WorkingHours = {
  [K in WorkDays]: {
    from: string;
    to: string;
  };
};

export enum WorkDays {
  MONDAY = 'monday',
  TUESDAY = 'tuesday',
  WEDNESDAY = 'wednesday',
  THURSDAY = 'thursday',
  FRIDAY = 'friday',
  SATURDAY = 'saturday',
  SUNDAY = 'sunday',
}
