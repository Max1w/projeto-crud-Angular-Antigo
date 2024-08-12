import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, first, Observable, tap } from 'rxjs';

import { Course } from '../model/course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private readonly API = 'api/hello/TodosOsItens'

  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Course[]>(this.API)
    .pipe(
      first(),
      tap( course => console.log(course))
    );
  }

  save(register: Course){
    return this.httpClient.post<Course>(this.API, register).pipe(first())
  }



}
