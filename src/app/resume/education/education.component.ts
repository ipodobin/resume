import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { Education } from '../shared/education.model';
import { UserService } from '../shared/user.service';
import { User } from '../shared/user.model';
import { Observable } from 'rxjs/Observable';
import {Experience} from '../shared/experience.model';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class EducationComponent implements OnInit {

  // user: Observable<User>;
  // @Input() user: User;
  @Input() educations: Education[];

  constructor(private userService: UserService) { }

  ngOnInit() {
    // this.user = this.userService.getUserObservable();
  }

}
