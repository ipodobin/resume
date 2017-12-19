import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { User } from '../shared/user.model';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  // user: Observable<User>;
  user: User;

  constructor(private userService: UserService) { }

  ngOnInit() {
    // this.user = this.userService.getUserObservable();
    this.userService.getUserObservable().subscribe(
      (user) => {
        debugger;
        this.user = user;
      }
    );
  }

}
