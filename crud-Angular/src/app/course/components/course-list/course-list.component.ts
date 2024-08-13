import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Course } from '../../model/course';
import { ActivatedRoute, Router } from '@angular/router';
import { AppMaterialModule } from '../../../shared/app-material/app-material.module';
import { SharedModule } from '../../../shared/shared.module';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [AppMaterialModule, SharedModule],
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.scss'
})
export class CourseListComponent implements OnInit {

  @Input() courses: Course[] = [];
  @Output() add = new EventEmitter(false);
  @Output() edit = new EventEmitter(false);
  @Output() delete = new EventEmitter(false);

  readonly displayedColumns = ['name', 'category', 'actions'];

  constructor(){}

  ngOnInit(): void {
  }

  onAdd(){
    this.add.emit(true)
  }

  onEdit(course: Course){
    this.edit.emit(course)
  }
  onDelete(course: Course){
    this.delete.emit(course)
  }
}
