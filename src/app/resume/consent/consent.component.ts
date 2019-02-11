import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {User} from '../shared/user.model';

@Component({
  selector: 'app-consent',
  templateUrl: './consent.component.html',
  styleUrls: ['./consent.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ConsentComponent implements OnInit {

  @Input()
  user: User;

  constructor() {
  }

  ngOnInit() {
  }

}
