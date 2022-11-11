import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { displayAlert } from '../shared/alert-function';
import { CourseResponse } from '../shared/Model/courseResponse';
import { Teacher } from '../shared/Model/teacher';
import { CreateCourseService } from '../shared/services/create-course.service';
import { CreateTeacherService } from '../shared/services/create-teacher.service';

@Component({
  selector: 'app-list-all-courses',
  templateUrl: './list-all-courses.component.html',
  styleUrls: ['./list-all-courses.component.css'],
})
export class ListAllCoursesComponent implements OnInit, AfterViewInit {
  isTableOnAll = false;

  courseList = new MatTableDataSource<CourseResponse[]>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  teacherList!: Teacher[];
  descriptions: string[] = ['id', 'Name', 'Actions'];
  ngOnInit(): void {
    this.loadAllCourses();
  }

  constructor(
    private courseService: CreateCourseService,
    private teacherService: CreateTeacherService
  ) {}
  ngAfterViewInit(): void {
    this.courseList.paginator = this.paginator;
  }

  loadAllCourses() {
    this.courseService.getCourses().subscribe({
      error: (err) => {
        console.log(err);
      },
      next: (data: any) => {
        this.courseList.data = data;
        this.isTableOnAll = true;
      },
    });
  }

  loadAllCoursesWithoutTeacher() {
    this,
      this.courseService.getAllCoursesWithoutTeacher().subscribe({
        next: (data: any) => {
          this.courseList.data = data;
          this.isTableOnAll = false;
        },
        error: (err) => {
          console.log(err);
        },
      });
  }
  loadAllTeachers() {
    this.teacherService.getAllTeachers().subscribe({
      next: (data: any) => {
        this.teacherList = data;
        console.log(this.teacherList);
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }
  addTeacher(courseId: number, teacherId: number) {
    this.courseService.setTeacherToCourse(courseId, teacherId).subscribe({
      error: (err) => {
        displayAlert(
          'Error',
          'Unable to set teacher to course!',
          2000,
          'error'
        );
      },
      complete: () => {
        displayAlert(
          'Success',
          'Teacher set to course successfully',
          2000,
          'success'
        );
      },
    });
  }
}
