import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ResumeComponent} from './resume/resume.component';
import {EditComponent} from './resume/edit/edit.component';
import {LoginComponent} from './resume/login/login/login.component';
import {AuthGuard} from './resume/service/auth-guard.service';


const appRoutes: Routes = [
  {path: 'edit', component: EditComponent, canActivate: [AuthGuard]},
  {path: 'data/:name', component: ResumeComponent},
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  // {path: 'register', component: RegisterComponent, canActivate: [AuthGuard]},
  // {path: 'user', component: UserComponent, resolve: {data: UserResolver}}
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
