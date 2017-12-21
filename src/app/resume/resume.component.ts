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
  loadingClass = '';
  loadingScreensCount: number = 3;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute
  ) {
    // wczytanie usera
    this.userService.getUserObservable().subscribe(
      (user) => {
        this.user = user;
        setTimeout(() => this.isLoading = false, 500);
        // this.isLoading = false;
      }
    );
  }

  ngOnInit() {
    this.loadingClass = 'ui-loading-' + Math.round(Math.random() * this.loadingScreensCount + 1);
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

  getClasses() {
    let classes = {};
    // classes['hidden']=this.isLoading == false;
    classes['ui-animation-loading-fade-out'] = this.isLoading == false;
    classes[this.loadingClass] = true;
    return classes;
  }

}
