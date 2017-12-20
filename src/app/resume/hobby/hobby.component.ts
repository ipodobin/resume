import { Component, OnInit, Input } from '@angular/core';
import { Hobby } from '../shared/hobby.model';
import { UserService } from '../shared/user.service';
import { User } from '../shared/user.model';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-hobby',
  templateUrl: './hobby.component.html',
  styleUrls: ['./hobby.component.css']
})
export class HobbyComponent implements OnInit {

  // user: Observable<User>;
  @Input()
  user: User;

  constructor(private userService: UserService) { }

  ngOnInit() {
    // this.user = this.userService.getUserObservable();
  }

}
