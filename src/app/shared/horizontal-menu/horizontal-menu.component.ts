import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CreateCourseComponent } from 'src/app/create-course/create-course.component';
import { CreateStudentComponent } from 'src/app/create-student/create-student.component';
import { CreateTeacherComponent } from 'src/app/create-teacher/create-teacher.component';

@Component({
  selector: 'app-horizontal-menu',
  templateUrl: './horizontal-menu.component.html',
  styleUrls: ['./horizontal-menu.component.css'],
})
export class HorizontalMenuComponent implements OnInit {
  constructor(protected router: Router, private dialog: MatDialog) {}

  ngOnInit(): void {}

  openAddStudentModal() {
    let dialogRef = this.dialog.open(CreateStudentComponent, {
      width: '400px',
      enterAnimationDuration: '200ms',
      autoFocus: true,
    });
  }
  openAddCourseModal() {
    let dialogRef = this.dialog.open(CreateCourseComponent, {
      width: '400px',
      enterAnimationDuration: '200ms',
    });
  }
  openAddTeacherModal() {
    let dialogRef = this.dialog.open(CreateTeacherComponent, {
      width: '400px',
      enterAnimationDuration: '200ms',
    });
  }
}
