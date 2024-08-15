import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RedirectCommand, Router } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';

import { AppMaterialModule } from '../../../shared/app-material/app-material.module';
import { Course } from '../../model/course';
import { CourseService } from '../../services/course.service';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from '../../../shared/components/error-dialog/error-dialog.component';
import { SharedModule } from '../../../shared/shared.module';
import { CourseListComponent } from '../../components/course-list/course-list.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { error } from 'node:console';
import { ConfirmationDialogComponent } from '../../../shared/components/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-course',
  standalone: true,
  imports: [AppMaterialModule, SharedModule, CourseListComponent],
  templateUrl: './course.component.html',
  styleUrl: './course.component.scss',
})
export class CourseComponent implements OnInit {
  course$: Observable<Course[]> | null = null;

  constructor(
    private courseService: CourseService,
    private router: Router,
    private snackBar: MatSnackBar,
    private routeActive: ActivatedRoute,
    public dialog: MatDialog
  ) {
    this.refresh();
  }

  refresh() {
    this.course$ = this.courseService.list().pipe(
      catchError((error) => {
        this.onError('Erro ao carregar cursos!');
        return of([]);
      })
    );
  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg,
    });
  }

  ngOnInit(): void {}

  onAdd() {
    this.router.navigate(['new'], { relativeTo: this.routeActive });
  }

  onEdit(course: Course) {
    this.router.navigate(['edit', course._id], {
      relativeTo: this.routeActive,
    });
  }

  onDelete(course: Course) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: 'Tem certeza que deseja remover esse curso?',
    });

    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result) {
        this.courseService.delete(course._id).subscribe({
          next: () => {
            this.refresh(),
              this.snackBar.open('Curso excluido com sucesso!', '', {
                duration: 5000,
                verticalPosition: 'top',
                horizontalPosition: 'center',
              });
          },
          error: () => this.onError('Erro ao tentar remover curso!'),
        });
      }
    });
  }
}
