import { Component, OnInit } from '@angular/core';
import { Skill } from '../shared/skill.model';
import { UserService } from '../shared/user.service';
import { User } from '../shared/user.model';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  user: Observable<User>;

  constructor(private userService: UserService) {
  }

  ngOnInit() {
  this.user = this.userService.getUserObservable();
  }

}
