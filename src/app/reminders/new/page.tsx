'use client';

import {useStore} from '@/app/store';
import ReminderForm from '@/components/reminder/reminder-form';
import {useRouter} from 'next/navigation';
import { ReminderType } from "@/types/reminder";


export default function Page (): JSX.Element {
  const {count, setReminder} = useStore();
  const router = useRouter();
  const reminder: ReminderType = {
    type: 'every',
    title: 'my reminder',
    note: '',
    repeat: {
      interval: 0,
      times: 0,
      start: count
    }
  };

  function handleSubmit (newReminder: ReminderType):void {
    setReminder(newReminder);
    router.push("/");
  }

  return (
    <div className='mx-4 my-3'>
      <h1 className='font-semibold text-lg mb-4'>Create a new Reminder</h1>
      <section className=''>
        <ReminderForm reminder={reminder} handleFormSubmit={handleSubmit} />
      </section>
    </div>

  );

}
