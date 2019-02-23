import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UserService} from './shared/user.service';
import {User} from './shared/user.model';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css'],
  providers: [
    UserService
  ],
  encapsulation: ViewEncapsulation.None
})
export class ResumeComponent implements OnInit {

  isLoading = true;
  user: User;
  loadingClass = '';
  loadingScreensCount = 3;
  edit = false;
  name: string;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private translate: TranslateService) {


  }

  ngOnInit() {
    this.loadingClass = 'ui-loading-' + Math.round(Math.random() * this.loadingScreensCount + 1);

    // this.route.queryParams.subscribe(params => {
    //   this.mode = params['mode'];
    //   console.log('mode:', this.mode);
    // });

    // this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      // console.log('lang:', event.lang);
      // if (this.name != null) {
      //   return;
      // }
      // this.refreshUser();
    // });

    this.translate.setDefaultLang('en');
    // this.translate.use('pl');
    // this.translate.use(navigator.language);

    this.name = this.route.snapshot.paramMap.get('name');
    // console.log('name:', this.name);
    this.edit = this.route.snapshot.paramMap.get('mode') === 'edit';
    // console.log('edit:', this.edit);
    this.refreshUser();
  }

  refreshUser() {
    // wczytanie usera
    const resume_name = this.name ? this.name : 'default_' + this.translate.currentLang;
    const user$ = this.userService.loadUser(resume_name);
    user$.subscribe(
      (user) => {
        this.user = user;
        this.translate.use(user.lang);
        this.isLoading = false;
      }
    );
  }

  getClasses() {
    const classes = {};
    // classes['hidden']=this.isLoading == false;
    classes['ui-animation-loading-fade-out'] = this.isLoading === false;
    // classes[this.loadingClass] = true;
    classes['ui-loading-3'] = true;
    return classes;
  }

  changeLang(lang: string) {
    this.translate.use(lang);
  }

}
