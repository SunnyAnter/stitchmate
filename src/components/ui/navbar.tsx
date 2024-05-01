'use client';

import Logo from '@/components/ui/logo';
import CounterSettings from '@/components/counter/counter-settings';
import CounterProgress from '@/components/counter/counter-progress';
import Menu from '@/components/ui/menu';
import {usePathname} from 'next/navigation';
import {IoIosArrowBack} from "react-icons/io";
import {Button} from './button';
import {cn} from '@/lib/utils';

import Link from 'next/link';

import {useStore} from '@/app/store';

type Props = {
  className?: string
}


export default function Nav ():JSX.Element {

  const {numOfRows} = useStore();
  const isRowNums = numOfRows > 0;

  const pathname = usePathname();
  const isRoot = pathname === '/';

  return (
    <>
      <nav className='flex justify-between px-4 py-3'>
      
        {isRoot ? <Menu/> : <BackButton />}
        <Logo />
        <CounterSettings className={cn(!isRoot && 'invisible')} />
      </nav>
      {isRoot && isRowNums ? <CounterProgress /> : <hr className='border-gray-300' />}

    </>
  );
}

function BackButton (prop:Props): JSX.Element {
  return (
    <Link href='/'>
      <Button size='icon' variant='ghost'><IoIosArrowBack className='fill-slate-800' size={24} /></Button>
    </Link>
  );
}