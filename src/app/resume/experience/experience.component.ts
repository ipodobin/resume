import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {Experience} from '../shared/experience.model';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [DatePipe]
})
export class ExperienceComponent implements OnInit {

  @Input() experiences: Experience[];
  @Input() title: string;
  months: string[];

  constructor() {
  }

  ngOnInit() {
    this.experiences = this.experiences.sort(Experience.reverse);
  }

}
