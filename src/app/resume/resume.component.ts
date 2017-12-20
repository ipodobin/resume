import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from './shared/user.service';
import { User } from './shared/user.model';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css'],
  providers: [
    UserService
  ]
})
export class ResumeComponent implements OnInit {

  isLoading: boolean = true;
  user: User;

  constructor(
    private userService: UserService,
    private translate: TranslateService,
    private route: ActivatedRoute
  ) {
    // wczytanie usera
    this.userService.getUserObservable().subscribe(
      (user) => {
        this.user = user;
        setTimeout(() => this.isLoading = false, 1000);
        // this.isLoading = false;
      }
    );
  }

  ngOnInit() {
    // // subscribe to route/fragment
    // this.route.fragment.subscribe(fragment => {
    //   try {
    //     document.querySelector('#' + fragment).scrollIntoView({'behavior': 'smooth'});
    //   } catch (e) { }
    // });

    // // this language will be used as a fallback when a translation isn't found in the current language
    // this.translate.setDefaultLang('en');
    // // the lang to use, if the lang isn't available, it will use the current loader to get them
    // this.translate.use('pl');
  }

  ngAfterViewInit(): void {
  }

}
