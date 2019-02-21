import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {User} from './user.model';
import {Skill} from './skill.model';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AngularFireDatabase} from '@angular/fire/database';
import {Observable} from 'rxjs/Observable';
import {TranslateService} from '@ngx-translate/core';
import {SkillGroup} from './skill.group.model';
import {combineLatest} from 'rxjs';

@Injectable()
export class UserService {
  private user: User;
  private userObservable: Observable<User>;


  constructor(
    private http: HttpClient,
    private db: AngularFireDatabase,
    private translate: TranslateService
  ) {
  }

  storeUser(user: User) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.put(
      'https://resume-ipodobin.firebaseio.com/data.json',
      user,
      {headers: headers}
    );
  }

  loadUser(name: string): Observable<User> {
    const observable = new Observable<User>(observer => {
      const skills$ = this.db.object<Skill>('/skills').valueChanges();
      const groups$ = this.db.object<SkillGroup>('/groups').valueChanges();
      const pages$ = this.db.object<SkillGroup>('/webPages').valueChanges();
      const experiences$ = this.db.object<SkillGroup>('/experiences').valueChanges();
      const educations$ = this.db.object<SkillGroup>('/educations').valueChanges();
      const hobbies$ = this.db.object<SkillGroup>('/hobbies').valueChanges();
      const data$ = combineLatest([skills$, groups$, pages$, experiences$, educations$, hobbies$]);
      data$.subscribe(results => {

        let path;
        var default_path = false;
        if (name != null && name !== '') {
          path = '/data/' + name;
        } else {
          default_path = true;
          path = '/default/' + this.translate.currentLang;
        }

        this.db.object<User>(path).valueChanges().subscribe(value => {
          if (value != null) {
            this.resolveUserObserver(value, results, observer);
          } else if (default_path === false) {
            path = '/default/' + this.translate.currentLang;
            this.db.object<User>(path).valueChanges().subscribe(default_value => {
              if (default_value != null) {
                this.resolveUserObserver(default_value, results, observer);
              }
            });
          }
        });
      });

      // this.db.list<User>('/' + name, ref => ref.limitToFirst(1)).valueChanges().subscribe(value => {
      //   console.log('value', value);
      // });


      // const headers = new HttpHeaders({
      //   'Content-Type': 'application/json'
      // });
      // const apiURL = 'https://resume-ipodobin.firebaseio.com/' + name + '.json';
      // this.http.get<User>(apiURL).subscribe(value => observer.next(value));

    });
    return observable;
  }

  resolveUserObserver(value, results, observer) {
    const skills = results[0];
    const groups = results[1];
    const pages = results[2];
    const experiences = results[3];
    const educations = results[4];
    const hobbies = results[5];

    // skills
    const _skills = [];
    for (const key in value.skills) {
      if (value.skills.hasOwnProperty(key)) {
        const skill = skills[key];
        if (skill == null) {
          continue;
        }
        skill.group = groups[skill.group];
        _skills.push(skill);
      }
    }
    value.skills = _skills;
    // webpages
    const _pages = [];
    for (const key in value.webPages) {
      if (value.webPages.hasOwnProperty(key)) {
        const page = pages[key];
        _pages.push(page);
      }
    }
    value.webPages = _pages;
    // experiences
    const _experiences = [];
    for (const key in value.experiences) {
      if (value.experiences.hasOwnProperty(key)) {
        const experience = experiences[key];
        experience.description = experience.description[value.lang];
        experience.position = experience.position[value.lang];
        _experiences.push(experience);
      }
    }
    value.experiences = _experiences;
    // educations
    const _educations = [];
    for (const key in value.educations) {
      if (value.educations.hasOwnProperty(key)) {
        const education = educations[key];
        education.specialization = education.specialization[value.lang];
        education.name = education.name[value.lang];
        education.title = education.title[value.lang];
        _educations.push(education);
      }
    }
    value.educations = _educations;
    // hobbies
    const _hobbies = [];
    for (const key in value.hobbies) {
      if (value.hobbies.hasOwnProperty(key)) {
        const hobby = hobbies[key];
        _hobbies.push(hobby);
      }
    }
    value.hobbies = _hobbies;

    observer.next(value as User);
  }

  getUserObservable() {
    return this.userObservable;
  }
}
