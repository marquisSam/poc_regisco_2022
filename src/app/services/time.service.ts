import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimeService {

  constructor() { }

  public createTimeStamp = (date : string) : number => {

    const [year , month, day] = date.split("-");
  
    return new Date(
      parseInt(year),
      parseInt(month) - 1,
      parseInt(day),
    ).getTime()
  }
}
