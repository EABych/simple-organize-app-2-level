import { Pipe, PipeTransform } from '@angular/core';
import {DateService} from './date.service';

@Pipe({
  name: 'dayToDbFormat'
})
export class DayToDbFormatPipe implements PipeTransform {

  constructor(
    public dateService: DateService,
  ) {
  }

  transform(day: number): string {
    const dayInNewFormat = this.dateService.date.value.format('YYYYMM') + (day > 9 ? day : ('0' + day));
    return dayInNewFormat;
  }

}
