import {Component, OnInit, Input, ViewEncapsulation} from '@angular/core';
import {UserService} from '../shared/user.service';
import {User} from '../shared/user.model';
import {Observable} from 'rxjs/Observable';
import {AngularFireStorage} from '@angular/fire/storage';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AboutComponent implements OnInit {

  // user: Observable<User>;
  @Input()
  user: User;
  downloadURL;
  url: string;

  constructor(
    private userService: UserService,
    private storage: AngularFireStorage) {
  }

  ngOnInit() {
    // this.user = this.userService.getUserObservable();
    // this.userService.getUserObservable().subscribe(
    //   (user) => {
    //     debugger;
    //     this.user = user;
    //   }
    // );

    // this.downloadURL = this.storage.ref('images/test.jpg').getDownloadURL();
    // this.downloadURL.subscribe(ref => {
    //   this.url = ref;
    //   this.state = 'maximum';
    // });
  }

}
