import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ResumeComponent } from "./resume/resume.component";
import { SkillsComponent } from "./resume/skills/skills.component";
import { ExperienceComponent } from "./resume/experience/experience.component";
import { EducationComponent } from "./resume/education/education.component";
import { ContactComponent } from "./resume/contact/contact.component";
import { AboutComponent } from "./resume/about/about.component";


const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/resume',
        pathMatch: 'full'
    }, {
        path: 'resume',
        component: ResumeComponent,
        // children: [
        //     {
        //         path: '',
        //         component: AboutComponent,
        //         pathMatch: 'full'
        //     }, {
        //         path: 'skills',
        //         component: SkillsComponent
        //     }, {
        //         path: 'experience',
        //         component: ExperienceComponent
        //     }, {
        //         path: 'education',
        //         component: EducationComponent
        //     }, {
        //         path: 'contact',
        //         component: ContactComponent
        //     }
        // ]
    }
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