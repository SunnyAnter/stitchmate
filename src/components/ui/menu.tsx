"use client";

import {Button} from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import {Title} from './title';
import {
  FaListUl,
  FaMoon,
  FaBarsStaggered,

} from "react-icons/fa6";
import ToolsButton from "../tools/tools-button";

import ToggleSound from './toggle-sound';

const side = "left";

type Props = {
  className?: string
}

export default function Menu (prop:Props): JSX.Element {

  return (
    <div className="flex items-center justify-center">
      <Sheet >
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon">
            <FaBarsStaggered />
          </Button>
        </SheetTrigger>
        <SheetContent side={side}>
          <SheetHeader>
            <Title>Settings</Title>
          </SheetHeader>
          <div className='mt-20 flex flex-col gap-8 items-start justify-center w-full'>
            <div className="flex flex-row gap-4 justify-start items-center">
              <ToggleSound />
              <h4>Toggle Sound</h4>
            </div>
            <div className="flex flex-row gap-4 justify-start items-center">
            <ToolsButton />
              <h4>Unit Converter</h4>
            </div>
          </div>
          <SheetFooter>
            <SheetClose asChild>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div >
  );
}
