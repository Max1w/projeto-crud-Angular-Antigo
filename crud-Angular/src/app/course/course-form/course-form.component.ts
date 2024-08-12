import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, ReactiveFormsModule } from '@angular/forms';
import { AppMaterialModule } from '../../shared/app-material/app-material.module';
import { SharedModule } from '../../shared/shared.module';
import { CourseService } from '../services/course.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Location } from '@angular/common';

@Component({
  selector: 'app-course-form',
  standalone: true,
  imports: [AppMaterialModule, SharedModule, ReactiveFormsModule],
  templateUrl: './course-form.component.html',
  styleUrl: './course-form.component.scss'
})
export class CourseFormComponent implements OnInit {

  form: UntypedFormGroup;

  constructor(private untypedFormBuilder: UntypedFormBuilder,
              private service: CourseService,
              private _snackBar: MatSnackBar,
              private location: Location,
  ) {
    this.form = this.untypedFormBuilder.group({
      name: [null],
      category: [null]
    });
  }

  ngOnInit(): void {

  }

  onSubmit(){
    this.service.save(this.form.value)
    .subscribe(result => this.onSuccess(), error => this.onError);
  }

  onCancel(){
    this.location.back();
  }

  private onSuccess(){
    this._snackBar.open('Curso salvo com sucesso!', '',{duration: 5000} );
    this.onCancel();
  }

  private onError(){
    this._snackBar.open('Erro ao salvar curso.', '',{duration: 5000} );
  }
}
