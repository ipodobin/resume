import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {UserService} from '../shared/user.service';
import {User} from '../shared/user.model';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('imageLoad', [
      state('none, void', style({
        opacity: '0.0'
      })),
      state('maximum', style({
        opacity: '1.0'
      })),
      transition('none => maximum', animate('300ms'))
    ])
  ]
})
export class HeaderComponent implements OnInit {

  @Input() user: User;
  state = 'none';
  showDetails = true;

  constructor(private userService: UserService) {
  }

  ngOnInit() {
  }

  public animateImage() {
    this.state = 'maximum';
  }

}
