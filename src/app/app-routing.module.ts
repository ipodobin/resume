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
        pathMatch: 'full',
        component: ResumeComponent,
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