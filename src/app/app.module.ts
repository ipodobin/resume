import { BrowserModule } from '@angular/platform-browser';
import {
  NgModule,
  LOCALE_ID
} from '@angular/core';

import { AppComponent } from './app.component';
import { ResumeComponent } from './resume/resume.component';
import { AppRoutingModule } from './app-routing.module';
import { EducationComponent } from './resume/education/education.component';
import { HeaderComponent } from './resume/header/header.component';
import { SkillsComponent } from './resume/skills/skills.component';
import { ExperienceComponent } from './resume/experience/experience.component';
import { ContactComponent } from './resume/contact/contact.component';
import { AboutComponent } from './resume/about/about.component';
import { SkillLevelComponent } from './resume/skills/skill-level/skill-level.component';
import { HobbyComponent } from './resume/hobby/hobby.component';
import {
  HttpClientModule,
  HttpClient
} from '@angular/common/http';
import {
  TranslateModule,
  TranslateLoader
} from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { registerLocaleData } from '@angular/common';
import localePL from '@angular/common/locales/pl';
registerLocaleData(localePL);



// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

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
    HobbyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    // { provide: LOCALE_ID, useValue: "en-US" }
    { provide: LOCALE_ID, useValue: "pl-PL" }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
