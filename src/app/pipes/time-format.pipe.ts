import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';
@Pipe({
  name: 'timeFormat'
})
export class TimeFormatPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    console.log(value)
    const taskTime = moment(value).format('LL');
    
    const yesterday = moment().subtract(1, 'days').format('LL');
    const today = moment().format('LL');
    const tomorrow = moment().add(1, 'days').format('LL');
    
    if(taskTime === yesterday){ return "Hier"}
    else if(taskTime === today){ return "Aujourd’hui"}
    else if(taskTime === tomorrow){ return "Demain"}
    else{ return taskTime}
  }
}
