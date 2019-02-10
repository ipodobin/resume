import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {User} from './user.model';
import {Skill} from './skill.model';
import {Education} from './education.model';
import {Experience} from './experience.model';
import {Hobby} from './hobby.model';
import {WebPage} from './webpage.model';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {
  private user: User;
  userChanged = new Subject<User>();
  private userObservable: Observable<User>;


  constructor(private http: HttpClient) {
    this.userObservable = this.loadUser();
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

  loadUser(): Observable<User> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    const apiURL = 'https://resume-ipodobin.firebaseio.com/data.json';
    return this.http.get<User>(apiURL);
  }


  getUser() {
    return this.user;
  }

  getUserObservable() {
    return this.userObservable;
  }

  initUser() {
    const name = 'Igor Podobiński';
    const title = 'Java/Javascript Developer';
    const birthDate: Date = new Date('1985-08-14');
    const webPages: WebPage[] = [
      new WebPage(
        'GitHub',
        'https://github.com/ipodobin'
      ),
      new WebPage(
        'LinkedIn',
        'https://www.linkedin.com/in/ipodobin/'
      )
    ];
    const phone = '00 48 501 031 552';
    const email = 'ipodobin@gmail.com';
    const about = '<p></p>';
    const skills: Skill[] = [
      new Skill(
        'Java 7/8',
        90,
        'Java 7/8'
      ),
      new Skill(
        'Java EE',
        90,
        'Java Enterprise Edition'
      ),
      new Skill(
        'EJB',
        90,
        'Enterprise Java Beans'
      ),
      new Skill(
        'EclipseLink',
        80,
        'Java Persistent API - EclipseLink'
      ),
      new Skill(
        'Hibernate',
        80,
        'Java Persistent API - Hibernate'
      ),
      new Skill(
        'GlassFish',
        80,
        'Serwer aplikacyjny GlassFish'
      ),
      new Skill(
        'Wildfly',
        80,
        'Serwer aplikacyjny Wildfly/JBoss'
      ),
      new Skill(
        'JS ES7',
        90,
        'JavaScript Ecma Script 2016'
      ),
      new Skill(
        'jQuery',
        80,
        'jQuery + jQuery UI'
      ),
      new Skill(
        'JSF',
        80,
        'Java Server Faces'
      ),
      new Skill(
        'JMS',
        60,
        'Java Message Service'
      ),
      new Skill(
        'Java Spring',
        50,
        'Java Spring'
      ),
      new Skill(
        'Angular 5',
        50,
        'Angular 5'
      ),
      new Skill(
        '.Net C#',
        60,
        '.Net C#'
      ),
      new Skill(
        '.Net WPF',
        60,
        '.Net WPF'
      ),
      new Skill(
        'C++',
        60,
        'C++'
      )
    ];
    const educations: Education[] = [
      new Education(
        'Politechnika Warszawska - Wydział Elektroniki i Technik Informacyjnych',
        'Elektronika i informatyka w medycynie',
        new Date('2005-02-01'),
        new Date('2010-02-01'),
        'Inżynier',
        '<ol>' +
        '<li>Wykorzystanie osiągnięć elektroniki i informatyki w medycynie.</li>' +
        '<li>Projektowanie i testowanie układów i systemów elektronicznych i fotonicznych stosowanych w szeroko rozumianej informatyce, ' +
        'komunikacji, medycynie, metrologii i ochronie środowiska.</li>' +
        '</ol>'
      ),
      new Education(
        'Politechnika Warszawska - Wydział Elektroniki i Technik Informacyjnych',
        'Elektronika i inżynieria komputerowa',
        new Date('2005-02-01'),
        new Date('2010-02-01'),
        'Inżynier',
        '<ol>' +
        '<li>Projektowanie i wykorzystanie systemów tworzone w oparciu o techniki mikroelektroniczne, ' +
        'optoelektroniczne i komputerowe.</li>' +
        '<li>Projektowanie złożonych systemów elektronicznych obejmujących przyrządy półprzewodnikowe, czujniki, ' +
        'przetworniki analogowo-cyfrowe i cyfrowo-analogowe, moduły komunikacyjne, mikroprocesory ' +
        'oraz rekonfigurowalne układy cyfrowego przetwarzania sygnałów.</li></ol>'
      )
    ];
    const experiences: Experience[] = [
      new Experience(
        'Content Networks sp. z o.o.',
        new Date('2012-01-10'),
        null,
        'Programista Java',
        '<div>Rozwijanie i utrzymanie aplikacji webowych dewelopowanych przez firmę. Między innymi:</div>' +
        '<ol>' +
        '<li>Aplikacja typu Digital Signage ' +
        '(planowanie i zarządzanie wyświetlaniem kontentu na wyświetlaczach w różnych lokalizacjach).</li>' +
        '<li>Aplikacja automatyzująca pobieranie materiałów do emisji w telewizji.</li>' +
        '<li>Aplikacja automatyzująca archiwizowanie materiałów (wideo/audio/napisy) w telewizji.</li>' +
        '</ol>'
      ),
      new Experience(
        'Content Networks sp. z o.o.',
        new Date('2010-08-30'),
        new Date('2012-01-10'),
        'Inżynier Systemowy',
        'Integracja systemów informatycznych, głównie archiwów cyfrowych w polskich stacjach telewizyjnych. '
      )
    ];
    const hobbies: Hobby[] = [
      new Hobby(
        'speleologia',
        'caving2.svg',
        'http://www.speleo.waw.pl'
      ),
      new Hobby(
        'wspinaczka',
        'climbing.svg',
        'http://www.speleo.waw.pl'
      ),
      new Hobby(
        'rower',
        'biking.svg',
        null
      ),
      new Hobby(
        'żeglarstwo',
        'sailing.svg',
        null
      ),
      new Hobby(
        'alpinizm',
        'mountaineering.svg',
        'http://www.speleo.waw.pl'
      ),
      new Hobby(
        'narciarstwo przełajowe',
        'cross-country-skiing.svg',
        null
      )
    ];
    const consent = '';
    const photoUrl = '';
    this.user = new User(
      name,
      title,
      birthDate,
      webPages,
      phone,
      email,
      about,
      skills,
      educations,
      experiences,
      hobbies,
      consent,
      photoUrl
    );
  }
}
