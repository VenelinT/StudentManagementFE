import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GradeRequest } from '../Model/gradeRequest';

@Injectable({
  providedIn: 'root',
})
export class GradeService {
  constructor(private httpClient: HttpClient) {}

  addGradeToStudent(grade: GradeRequest) {
    return this.httpClient.post<GradeRequest>(
      'http://localhost:8080/grade/add',
      grade
    );
  }
  getGradesofStudent(courseId: number, studentId: number) {
    return this.httpClient.get<number[]>(
      `http://localhost:8080/grade/get/course/${courseId}/student/${studentId}`
    );
  }
}
