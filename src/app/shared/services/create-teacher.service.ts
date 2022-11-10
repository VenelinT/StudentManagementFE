import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { url } from '../baseUrl';
import { Teacher } from '../Model/teacher';

@Injectable({
  providedIn: 'root',
})
export class CreateTeacherService {
  constructor(private httpClient: HttpClient) {}

  saveTeacher(teacher: Teacher) {
    return this.httpClient.post(url.teacherApi + '/add', teacher);
  }
  getAllTeachers() {
    return this.httpClient.get(url.teacherApi + '/get/all');
  }
}
