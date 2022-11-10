import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from '../Model/student';
@Injectable({
  providedIn: 'root',
})
export class CreateStudentService {
  constructor(private httpClient: HttpClient) {}

  saveStudent(student: Student) {
    return this.httpClient.post<Student>(
      'http://localhost:8080/student/add',
      student
    );
  }
}
