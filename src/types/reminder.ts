export type ReminderType = {
    id?: number,
    notification?: boolean,
    title: string,
    type: string,
    note: string,
    repeat: Repeat 
}

export type Repeat = {
  interval?: number,
  times?: number,
  start?: number,
  from?: number,
  until?:number
}