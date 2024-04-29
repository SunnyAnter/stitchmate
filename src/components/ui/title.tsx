
import {useStore} from '@/app/store';

import {cn} from "@/lib/utils";
import {cva, type VariantProps} from "class-variance-authority";
import {forwardRef} from 'react';

const inputVariants = cva(
  'font-semibold text-slate-800 text-xl',
  {
    variants: {
      variant: {
        default: 'text-left',
        center: 'text-xl text-center',
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);


const Title = forwardRef(
  ({className, variant, children}:{className?: string, variant?: any, children: React.ReactNode},ref:any) => {
    return (
      <h2
        className={cn(inputVariants({variant, className}))}
        ref={ref}
      >
        {children}
      </h2 >
    );
  });
Title.displayName = "Title";



export function CounterTitle ({className}:{className: string}) {

  const {title} = useStore();
  return <Title variant='center' className={className}>{title}</Title>;

}


export {Title};