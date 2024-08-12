import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';

import { AppMaterialModule } from '../../shared/app-material/app-material.module';
import { Course } from '../model/course';
import { CourseService } from '../services/course.service';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from '../../shared/components/error-dialog/error-dialog.component';
import { SharedModule } from "../../shared/shared.module";

@Component({
  selector: 'app-course',
  standalone: true,
  imports: [AppMaterialModule, SharedModule],
  templateUrl: './course.component.html',
  styleUrl: './course.component.scss',
})
export class CourseComponent implements OnInit {
  course$: Observable<Course[]>;
  displayedColumns = ['name', 'category'];

  constructor(
    private courseService: CourseService,
    private router: Router,
    private routeActive: ActivatedRoute,
    public dialog: MatDialog
  ) {
    this.course$ = this.courseService.list().pipe(catchError(error => {
      console.log(this.onError('Erro ao carregar cursos!'))
      return of([])
    }));

    // this.courseService.list().subscribe(data => {
    //   this.course$ = data;
    // });
  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }

  ngOnInit(): void {}
}
