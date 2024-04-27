'use client';

import {useStore} from '@/app/store';

import ReminderAlertDialog from './reminder-alert-dialog';
import AddReminder from './add-reminder';
import { Reminder } from '../../types/reminder'


export default function ReminderList () {
  const {reminders} = useStore();

  return (
    <section className='overflow-x-auto'>
      <div className='flex gap-4'>
        {reminders.map((reminder: Reminder) => <ReminderAlertDialog key={reminder.id} reminder={reminder} isTag={false} />)}
        <AddReminder />
      </div>
    </section>
  );
}