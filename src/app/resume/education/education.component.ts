import { Component, OnInit, Input } from '@angular/core';
import { Education } from '../shared/education.model';
import { UserService } from '../shared/user.service';
import { User } from '../shared/user.model';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  // user: Observable<User>;
  @Input()
  user: User;

  constructor(private userService: UserService) { }

  ngOnInit() {
    // this.user = this.userService.getUserObservable();
  }

}
