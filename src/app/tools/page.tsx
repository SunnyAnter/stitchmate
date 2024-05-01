'use client';

import { useState } from "react"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { ChevronDown } from 'lucide-react';

type Size = {
  metric: string,
  uk: string,
  us: string
}

const sizeMapping: Size[] = [
    { metric: "1.5mm", uk: "1ply", us: "Laceweight" },
    { metric: "1.75mm", uk: "2ply", us: "Laceweight " },
    { metric: "2mm", uk: "2ply ", us: "Laceweight  " },
    { metric: "2.25mm", uk: "3ply", us: "Fingering" },
    { metric: "2.5mm", uk: "3ply ", us: "Fingering " },
    { metric: "2.75mm", uk: "4ply", us: "Sock" },
    { metric: "3mm", uk: "4ply ", us: "Sock " },
    { metric: "3.25mm", uk: "DK", us: "Sport" },
    { metric: "3.5mm", uk: "DK ", us: "Sport " },
    { metric: "3.75mm", uk: "DK  ", us: "Light Worsted" },
    { metric: "4mm", uk: "Aran", us: "Light Worsted " },
    { metric: "4.5mm", uk: "Aran ", us: "Light Worsted  " },
    { metric: "5mm", uk: "Aran  ", us: "Worsted" },
    { metric: "5.5mm", uk: "Chunky", us: "Worsted " },
    { metric: "6mm", uk: "Chunky ", us: "Worsted  " },
    { metric: "6.5mm", uk: "Super Chunky", us: "Bulky" },
    { metric: "7mm", uk: "Super Chunky ", us: "Bulky " },
    { metric: "8mm", uk: "Super Chunky  ", us: "Super Bulky" },
    { metric: "9mm", uk: "Super Chunky  ", us: "Super Bulky " },
    { metric: "10mm", uk: "Super Chunky   ", us: "Super Bulky  " }
];

export default function Page(): JSX.Element {
  const [size, setSize] = useState<string[]>(sizeMapping.map(size => size.uk));
  const [from, setFrom] = useState<string>('uk')
  const [to, setTo] = useState<string>('uk');
  const [calc, setCalc] = useState<string>('None');
  
  const handleUnitSelectFrom = (value: keyof Size) => {
    setFrom(value)
    setSize(sizeMapping.map((size:Size) => size[value]));
  }
  const handleUnitSelectTo = (value: string) => {
    setTo(value)
  }
  const selectValueChange = (value: keyof Size) => {
    const res: Size[] = sizeMapping.filter((size: Size) => size[from as keyof Size] === value)
    setCalc(res[0][to as keyof Size])
  }
  
  return (
    <div className="mt-6 h-full w-full flex gap-4 flex-col justify-start items-center">
      <h1 className="mb-3">Unit Converter</h1>
      <Card className="w-72 h-48 flex flex-col justify-start items-center gap-8">
        <RadioGroup onValueChange={handleUnitSelectFrom} defaultValue="uk" className="grid-flow-col pt-12">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="uk" id="r4" />
            <Label htmlFor="r4">UK</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="us" id="r5" />
            <Label htmlFor="r5">US</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="metric" id="r6" />
            <Label htmlFor="r6">Metric</Label>
          </div>
        </RadioGroup>
        <Select onValueChange={selectValueChange}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select size" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>{from}</SelectLabel>
              {size.map((size,i) => <SelectItem key={i} value={size}>{size}</SelectItem>)}
            </SelectGroup>
          </SelectContent>
        </Select>
      </Card>
      <ChevronDown color="sienna"/>
      <Card className="w-72 h-48 flex flex-col justify-start items-center gap-8">
        <RadioGroup onValueChange={handleUnitSelectTo} defaultValue="us" className="grid-flow-col pt-12">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="uk" id="r1" />
            <Label htmlFor="r1">UK</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="us" id="r2" />
            <Label htmlFor="r2">US</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="metric" id="r3" />
            <Label htmlFor="r3">Metric</Label>
          </div>
        </RadioGroup>
        <Input disabled className="w-[180px]" value={calc}/>
      </Card>
    </div>
  )
};
