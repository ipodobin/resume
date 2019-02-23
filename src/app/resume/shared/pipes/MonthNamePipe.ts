import {Inject, LOCALE_ID, Pipe, PipeTransform} from '@angular/core';
import {DatePipe} from '@angular/common';
import {TranslateService} from '@ngx-translate/core';


@Pipe({name: 'monthname'})
export class MonthNamePipe implements PipeTransform {

  months: string[];

  constructor(
    private datePipe: DatePipe,
    @Inject(LOCALE_ID) private locale: string,
    private translate: TranslateService
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

  transform(value: any): any {
    if (this.translate.currentLang === 'pl' || this.translate.currentLang === 'pl-PL') {
      return this.months[new Date(value).getMonth()];
    }
    return this.datePipe.transform(value, 'MMMM');
  }
}
