import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { CreateCourseService } from '../shared/services/create-course.service';
import { CourseResponse } from '../shared/Model/courseResponse';
import { ListStudentService } from '../shared/services/list-student.service';
import { displayAlert } from '../shared/alert-function';

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css'],
})
export class ListStudentComponent implements OnInit {
  totalRaws = 0;
  currentPage = 0;
  pageSize = 5;
  pageSizeOptions: number[] = [5, 10];
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  dataSource: MatTableDataSource<any> = new MatTableDataSource<object>();
  orders: string[] = ['ASC', 'DESC'];
  myFilterForm!: FormGroup;
  courses: CourseResponse[] = [];
  order: string = 'ASC';
  orderField: string = 'name';
  filter = '';
  displayedColumns: string[] = ['Name', 'Age', 'Enroll'];

  orderColumns: any[] = [
    { columnId: 'name', columnValue: 'Name' },
    { columnId: 'age', columnValue: 'Age' },
  ];

  constructor(
    private listStudentService: ListStudentService,
    private fb: FormBuilder,
    private courseService: CreateCourseService
  ) {}

  ngOnInit(): void {
    this.loadData();
    this.myFilterForm = this.fb.group({
      filter: '',
    });
  }

  loadData() {
    this.listStudentService
      .getStudents(
        this.currentPage,
        this.pageSize,
        this.order,
        this.orderField,
        this.filter
      )
      .subscribe((value) => {
        this.dataSource.data = value.content;
        setTimeout(() => {
          this.paginator.pageIndex = value.number;
          this.paginator.length = value.totalElements;
          this.paginator.pageSize = value.size;
        });
      });
  }

  pageChanged(event: PageEvent) {
    this.pageSize = event.pageSize;
    this.currentPage = event.pageIndex;
    this.loadData();
  }

  reloadDataOrdered(filterValue: string) {
    this.order = filterValue;
    this.loadData();
  }

  reloadDataOrderedBy(filterValue: string) {
    this.orderField = filterValue;
    this.loadData();
  }
  reloadDataFilteredBy() {
    this.filter = this.myFilterForm.get('filter')?.value;
    this.loadData();
  }
  loadCourses() {
    this.courseService.getCourses().subscribe((data) => {
      this.courses = data;
    });
  }

  enrollStudent(studentId: number, courseIdIndex: number) {
    this.courseService
      .addStudentToCourse(this.courses[courseIdIndex].id, studentId)
      .subscribe({
        error: (err: any) => {
          console.log(err);
          displayAlert('Error', 'Cannot enroll student', 2000, 'error');
        },
        complete: () => {
          displayAlert(
            'Success',
            'Student successfully enrolled',
            2000,
            'success'
          );
        },
      });
  }
}
