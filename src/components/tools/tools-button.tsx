import { RefreshCw } from "lucide-react";
import Link from 'next/link';
import { Button } from "../ui/button";

export default function ToolsButton(): JSX.Element {

  
 
  return (
    <Link className='' href="/tools">
      <Button size="icon" className='bg-slate-700 hover:bg-slate-900'>
        <RefreshCw />
      </Button>
    </Link>
  );
}
