import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Course } from '../Model/course';
import { CourseResponse } from '../Model/courseResponse';
import { Observable } from 'rxjs';
import { Student } from '../Model/student';
@Injectable({
  providedIn: 'root',
})
export class CreateCourseService {
  constructor(private httpClient: HttpClient) {}

  saveCourse(course: Course) {
    return this.httpClient.post('http://localhost:8080/course/add', course);
  }
  getCourses() {
    return this.httpClient.get<any>('http://localhost:8080/course/showall');
  }

  addStudentToCourse(courseId: number, studentId: number) {
    return this.httpClient.put(
      'http://localhost:8080/course/' +
        courseId +
        '/student/' +
        studentId +
        '/add',
      null
    );
  }
  getStudentsOfCourse(courseId: number): Observable<any> {
    return this.httpClient.get<Student[]>(
      'http://localhost:8080/course/getstudents/' + courseId
    );
  }
}
