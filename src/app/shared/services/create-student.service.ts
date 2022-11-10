import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from '../Model/student';
import { url } from '../baseUrl';
@Injectable({
  providedIn: 'root',
})
export class CreateStudentService {
  constructor(private httpClient: HttpClient) {}

  saveStudent(student: Student) {
    return this.httpClient.post<Student>(url.studentApi + '/add', student);
  }
}
