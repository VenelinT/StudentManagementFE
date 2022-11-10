import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { url } from '../baseUrl';
import { GradeRequest } from '../Model/gradeRequest';

@Injectable({
  providedIn: 'root',
})
export class GradeService {
  constructor(private httpClient: HttpClient) {}

  addGradeToStudent(grade: GradeRequest) {
    return this.httpClient.post<GradeRequest>(url.gradeApi + '/add', grade);
  }
  getGradesofStudent(courseId: number, studentId: number) {
    return this.httpClient.get<number[]>(
      url.gradeApi + `/get/course/${courseId}/student/${studentId}`
    );
  }
}
