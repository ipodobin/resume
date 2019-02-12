import {Component, OnInit, ViewEncapsulation, Input, Inject, LOCALE_ID} from '@angular/core';
import {Experience} from '../shared/experience.model';
import {UserService} from '../shared/user.service';
import {User} from '../shared/user.model';
import {Observable} from 'rxjs/Observable';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [DatePipe]
})
export class ExperienceComponent implements OnInit {

  // user: Observable<User>;
  // @Input() user: User;
  @Input() experiences: Experience[];
  @Input() title: string;
  months: string[];

  constructor(
    private userService: UserService,
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

  ngOnInit() {
    // this.user = this.userService.getUserObservable();
  }

  getMonth(date: Date) {
    if (this.locale === 'pl-PL') {
      return this.months[new Date(date).getMonth()];
    }
    return this.datePipe.transform(date, 'MMMM');
  }

}
