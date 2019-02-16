import {BrowserModule} from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ResumeComponent} from './resume/resume.component';
import {AppRoutingModule} from './app-routing.module';
import {EducationComponent} from './resume/education/education.component';
import {HeaderComponent} from './resume/header/header.component';
import {SkillsComponent} from './resume/skills/skills.component';
import {ExperienceComponent} from './resume/experience/experience.component';
import {ContactComponent} from './resume/contact/contact.component';
import {AboutComponent} from './resume/about/about.component';
import {SkillLevelComponent} from './resume/skills/skill-level/skill-level.component';
import {HobbyComponent} from './resume/hobby/hobby.component';
import {HttpClientModule} from '@angular/common/http';
// import {
//   TranslateModule,
//   TranslateLoader
// } from '@ngx-translate/core';
// import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import {DatePipe, registerLocaleData} from '@angular/common';
import localePL from '@angular/common/locales/pl';
import {MonthNamePipe} from './resume/shared/pipes/MonthNamePipe';
import {ConsentComponent} from './resume/consent/consent.component';
import {AngularFireModule} from '@angular/fire';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SkillsEnabledPipe} from './resume/skills/skills.enabled.pipe';
import { RouterModule, Routes } from '@angular/router';
import {AngularFireDatabase} from '@angular/fire/database';
import {AngularFireAuthModule} from '@angular/fire/auth';

registerLocaleData(localePL);


@NgModule({
  declarations: [
    AppComponent,
    ResumeComponent,
    EducationComponent,
    HeaderComponent,
    SkillsComponent,
    ExperienceComponent,
    ContactComponent,
    AboutComponent,
    SkillLevelComponent,
    HobbyComponent,
    ConsentComponent,
    MonthNamePipe,
    SkillsEnabledPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp({
      apiKey: 'AIzaSyCOC5S7YuCIrZgf1G8HtsJnXGil0AIZ7NA',
      authDomain: 'resume-ipodobin.firebaseapp.com',
      databaseURL: 'https://resume-ipodobin.firebaseio.com',
      projectId: 'resume-ipodobin',
      storageBucket: 'resume-ipodobin.appspot.com',
      messagingSenderId: '1062616642548'
    }),
    AngularFireStorageModule,
    AngularFireAuthModule
    // TranslateModule.forRoot({
    //   loader: {
    //     provide: TranslateLoader,
    //     useFactory: HttpLoaderFactory,
    //     deps: [HttpClient]
    //   }
    // })
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'en-US' },
    // {provide: LOCALE_ID, useValue: 'pl-PL'},
    DatePipe,
    AngularFireDatabase
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
