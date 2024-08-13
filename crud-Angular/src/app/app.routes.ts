import { Routes } from '@angular/router';
import { CourseComponent } from './course/containers/course/course.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'course' },
  {
    path: 'course',
    loadChildren: () => import ('./course/course.module').then(m => m.CourseModule)
  }
];
