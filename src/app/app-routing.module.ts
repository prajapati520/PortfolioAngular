import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AwardsComponent } from './awards/awards.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { InterestsComponent } from './interests/interests.component';
import { SkillsComponent } from './skills/skills.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,

    children: [
      { path: '', redirectTo: 'about', pathMatch: 'full' },
      {
        component: AboutComponent,
        path: 'about',
      },
      {
        component: AwardsComponent,
        path: 'awards',
      },
      {
        component: EducationComponent,
        path: 'education',
      },
      {
        component: ExperienceComponent,
        path: 'experience',
      },
      {
        component: InterestsComponent,
        path: 'interests',
      },
      {
        component: SkillsComponent,
        path: 'skills',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
