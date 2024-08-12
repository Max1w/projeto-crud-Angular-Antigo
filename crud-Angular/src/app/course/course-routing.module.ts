import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseComponent } from './course/course.component';
import { CourseFormComponent } from './course-form/course-form.component';

const routes: Routes = [
{ path: '', component: CourseComponent },
{ path: 'new', component: CourseFormComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourseRoutingModule { }
