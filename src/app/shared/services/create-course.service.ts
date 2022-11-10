import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Course } from '../Model/course';
import { Observable } from 'rxjs';
import { Student } from '../Model/student';
import { url } from '../baseUrl';
@Injectable({
  providedIn: 'root',
})
export class CreateCourseService {
  constructor(private httpClient: HttpClient) {}

  saveCourse(course: Course) {
    return this.httpClient.post(url.courseApi + '/add', course);
  }
  getCourses() {
    return this.httpClient.get<any>(url.courseApi + '/showall');
  }

  addStudentToCourse(courseId: number, studentId: number) {
    return this.httpClient.put(
      url.courseApi + `/${courseId}/student/${studentId}/add`,
      null
    );
  }
  getStudentsOfCourse(courseId: number): Observable<any> {
    return this.httpClient.get<Student[]>(
      url.courseApi + `/getstudents/${courseId}`
    );
  }
  setTeacherToCourse(courseId: number, teacherId: number) {
    return this.httpClient.put<Course>(
      url.courseApi + `/${courseId}/teacher/${teacherId}/add`,
      null
    );
  }
  getAllCoursesWithoutTeacher() {
    return this.httpClient.get<any[]>(url.courseApi + '/no-teacher');
  }
}
