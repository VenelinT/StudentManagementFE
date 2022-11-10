import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Teacher } from '../Model/teacher';

@Injectable({
  providedIn: 'root',
})
export class CreateTeacherService {
  constructor(private httpClient: HttpClient) {}

  saveTeacher(teacher: Teacher) {
    return this.httpClient.post('http://localhost:8080/teacher/add', teacher);
  }
}
