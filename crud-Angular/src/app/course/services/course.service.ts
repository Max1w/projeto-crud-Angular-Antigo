import { Injectable } from '@angular/core';

import { Course } from '../model/course';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private readonly API = 'assets/cursos.json'

  constructor(private httpClient: HttpClient) { }

  list(): Observable<Course[]> {
    return this.httpClient.get<Course[]>(this.API)
  }
}
