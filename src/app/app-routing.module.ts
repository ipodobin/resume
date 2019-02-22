import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ResumeComponent} from './resume/resume.component';


const appRoutes: Routes = [
  // {path: '', pathMatch: 'full', redirectTo: '/'},
  // {path: '/:lang?', component: ResumeComponent},
  // {path: '', component: ResumeComponent},
  {path: ':name', component: ResumeComponent},
  // {path: '/edit/:lang?', component: ResumeComponent}
  // {path: ':mode', component: ResumeComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {})
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {

}
