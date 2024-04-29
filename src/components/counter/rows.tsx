import {useStore} from '@/app/store';

export default function Rows ():JSX.Element {

  const {numOfRows}: {numOfRows: number }= useStore();

  return (
    <div>
      <p className="text-4xl text-neutral-400 whitespace-nowrap text-center">{numOfRows ? numOfRows : '--'}</p>
    </div>
  );

}