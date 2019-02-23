import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {Education} from '../shared/education.model';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class EducationComponent implements OnInit {

  @Input() educations: Education[];

  constructor() {
  }

  ngOnInit() {
    this.educations = this.educations.sort(Education.reverseBy('to'));
  }

}
