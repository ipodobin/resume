import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { Experience } from '../shared/experience.model';
import { UserService } from '../shared/user.service';
import { User } from '../shared/user.model';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ExperienceComponent implements OnInit {

  // user: Observable<User>;
  @Input()
  user: User;

  constructor(private userService: UserService) { }

  ngOnInit() {
    // this.user = this.userService.getUserObservable();
  }

}
