import { useState } from 'react';
import toast from 'react-hot-toast';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

import { DatePickerDemo } from '../datePicker/DatePicker';

export function DialogDemo() {
  const [formData, setFormData] = useState({
    name: '',
    country: '',
    email: '',
    phone: '',
    date: new Date(),
  });

  function handleChangeInput(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  }

  function handleChangeDate(newValue: Date | undefined) {
    if (newValue === undefined) return;
    setFormData({ ...formData, date: newValue });
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="text-xl" variant="outline">
          Schedule an appointment
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-center">Schedule an appointment</DialogTitle>
          <DialogDescription className="text-center">
            Schedule an appointment with our doctor
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right" htmlFor="name">
              Name
            </Label>
            <Input
              className="col-span-3"
              name="name"
              placeholder="pedro duare"
              onChange={handleChangeInput}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right" htmlFor="name">
              country
            </Label>
            <Input
              className="col-span-3"
              name="country"
              placeholder="United states..."
              onChange={handleChangeInput}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right" htmlFor="username">
              phone
            </Label>
            <Input
              className="col-span-3"
              name="phone"
              placeholder="+1634990913..."
              onChange={handleChangeInput}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right" htmlFor="username">
              email
            </Label>
            <Input
              className="col-span-3"
              name="email"
              placeholder="prueba@prueba.com..."
              onChange={handleChangeInput}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right" htmlFor="username">
              date
            </Label>
            <DatePickerDemo date={new Date(formData?.date)} setDate={handleChangeDate} />
          </div>
        </div>
        <DialogFooter>
          <div className="grid grid-cols-3 gap-4">
            <DialogTrigger asChild>
              <Button
                className="w-full"
                type="submit"
                onClick={() => {
                  toast.success('Your appointment was successfully scheduled!');
                }}
              >
                Send
              </Button>
            </DialogTrigger>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
