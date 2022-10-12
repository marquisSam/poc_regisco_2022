import { Injectable } from '@angular/core';
import * as moment from 'moment';
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

  private getToday = () : number => new Date().getTime();

  public isLate = (dueTimeTT : number) : boolean => {
    const beforeToday = dueTimeTT < this.getToday();
    return beforeToday && !this.isToday(dueTimeTT);
  }
  private isToday = (dueTimeTT : number) : boolean => {
    const yesterday = moment().format('LL');
    const taskTime = moment(dueTimeTT).format('LL');

    return yesterday === taskTime ? true : false; 
  }
}
