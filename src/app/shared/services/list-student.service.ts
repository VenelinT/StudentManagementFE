import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ListStudentService {

  constructor(private httpClient:HttpClient) { 
  }


  getStudents(pageNumber: number, pageSize: number, order: string, sortField: string, filter:string): Observable<any> {
    return this.httpClient.get<any>("http://localhost:8080/student/getall?page=" + pageNumber + "&size=" + pageSize +
    "&order=" + order + "&sortField=" + sortField + "&filter="+filter);
  }
  
 
}
