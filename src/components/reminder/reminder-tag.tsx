import shortenText from '@/lib/shorten-text';

type TitleType = {
title: string
}


export default function ReminderTag({ title }: TitleType) {
  
  const testId: string = `Title: ${title}`

  return (
    <div className='bg-viridian-800 rounded-full h-fit w-fit py-px px-4' data-testid={testId}>
      <p className='text-neutral-100 font-semibold text-sm leading-loose'>{shortenText(title, 30)}</p>
    </div>
  );
}