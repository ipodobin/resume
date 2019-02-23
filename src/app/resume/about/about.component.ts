import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {User} from '../shared/user.model';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AboutComponent implements OnInit {

  @Input()
  user: User;
  url: string;

  constructor(){}

  ngOnInit() {
  }

}
