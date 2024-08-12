import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';
import { CourseRoutingModule } from './course-routing.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CourseRoutingModule,
    AppMaterialModule,
    SharedModule,
  ]
})
export class CourseModule { }
