import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { CreateCourseService } from '../shared/services/create-course.service';
import { CourseResponse } from '../shared/Model/courseResponse';
import { GradeService } from '../shared/services/grade.service';
import { GradeRequest } from '../shared/Model/gradeRequest';
import { MatDialog } from '@angular/material/dialog';
import { AddGradeComponent } from '../add-grade/add-grade.component';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-list-courses',
  templateUrl: './list-courses.component.html',
  styleUrls: ['./list-courses.component.css'],
})
export class ListCoursesComponent implements OnInit {
  courseId!: number;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(
    private courseService: CreateCourseService,
    private dialog: MatDialog
  ) {}

  courses: CourseResponse[] = [];
  dataSource = new MatTableDataSource<any[]>();

  displayedColumns: string[] = ['Name', 'Age', 'Actions'];
  ngOnInit(): void {}
  loadCourses() {
    this.courseService.getCourses().subscribe((data) => {
      this.courses = data;
    });
  }
  loadData(courseId: number) {
    this.courseService.getStudentsOfCourse(courseId).subscribe((data) => {
      this.dataSource = data;
      this.dataSource.paginator = this.paginator;
      this.courseId = courseId;
    });
  }
  openModal(student: number) {
    this.dialog.open(AddGradeComponent, {
      data: {
        studentId: student,
        courseId: this.courseId,
      },
    });
  }
}
