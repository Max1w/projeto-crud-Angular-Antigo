import { Component, OnInit } from '@angular/core';

import { AppMaterialModule } from '../../shared/app-material/app-material.module';
import { Course } from '../model/course';
import { CourseService } from '../services/course.service';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-course',
  standalone: true,
  imports: [AppMaterialModule],
  templateUrl: './course.component.html',
  styleUrl: './course.component.scss',
})
export class CourseComponent implements OnInit {
  course: Course[] = [];
  displayedColumns = ['name', 'category'];

  constructor(private courseService: CourseService,
              private router: Router,
              private routeActive: ActivatedRoute) {
  };

  ngOnInit(): void {
    this.courseService.list().subscribe(data => {
      this.course = data;
    });
  }
}
