import {Inject, LOCALE_ID, Pipe, PipeTransform} from '@angular/core';
import {DatePipe} from '@angular/common';


@Pipe({name: 'monthname'})
export class MonthNamePipe {

  months: string[];

  constructor(
    private datePipe: DatePipe,
    @Inject(LOCALE_ID) private locale: string
  ) {
    this.months = [
      'styczeń',
      'luty',
      'marzec',
      'kwiecień',
      'maj',
      'czerwiec',
      'lipiec',
      'sierpień',
      'wrzesień',
      'październik',
      'listopad',
      'grudzień'
    ];
  }

  transform(value: any) {
    if (this.locale === 'pl-PL') {
      return this.months[new Date(value).getMonth()];
    }
    return this.datePipe.transform(value, 'MMMM');
  }
}
