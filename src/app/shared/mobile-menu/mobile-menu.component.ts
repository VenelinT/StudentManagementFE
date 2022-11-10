import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CreateCourseComponent } from 'src/app/create-course/create-course.component';
import { CreateStudentComponent } from 'src/app/create-student/create-student.component';
import { CreateTeacherComponent } from 'src/app/create-teacher/create-teacher.component';

@Component({
  selector: 'app-mobile-menu',
  templateUrl: './mobile-menu.component.html',
  styleUrls: ['./mobile-menu.component.css'],
  animations: [
    trigger('openClose', [
      // ...
      state(
        'open',
        style({
          height: '160px',
          opacity: 1,
          transform: 'translateX(10%)',
        })
      ),
      state(
        'closed',
        style({
          height: '20px',
          opacity: 0,
          transform: 'translateX(-10%)',
        })
      ),
      transition('open => closed', [animate('0.5s')]),
      transition('closed => open', [animate('0.5s')]),
      transition('* => closed', [animate('0.5s')]),
      transition('* => open', [animate('0.5s')]),
      transition('open <=> closed', [animate('0.5s')]),
      transition('* => open', [animate('0.5s', style({ opacity: '*' }))]),
      transition('* => *', [animate('0.5s')]),
    ]),
  ],
})
export class MobileMenuComponent implements OnInit {
  isOpen = false;

  constructor(protected router: Router, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.router.events.subscribe({
      next: (event: any) => {
        this.isOpen = false;
      },
    });
  }

  navigation = [
    {
      link: () => {
        this.router.navigate(['/']);
      },
      auth: true,
      text: 'Home Page',
    },
    {
      link: () => {
        this.openAddStudentModal();
      },
      auth: true,
      text: 'Add Student',
    },
    {
      link: () => {
        this.openAddCourseModal();
      },
      auth: true,
      text: 'Add Course',
    },
    {
      link: () => {
        this.openAddTeacherModal();
      },
      auth: true,
      text: 'Add Teacher',
    },
    {
      link: () => {
        this.router.navigate(['student/show']);
      },
      auth: true,
      text: 'List Students',
    },
    {
      link: () => {
        this.router.navigate(['course/show']);
      },
      auth: true,
      text: 'List Students In Courses',
    },
    {
      link: () => {
        this.router.navigate(['courses']);
      },
      auth: true,
      text: 'List Courses',
    },
  ];

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }

  openAddStudentModal() {
    let dialogRef = this.dialog.open(CreateStudentComponent, {
      width: '400px',
    });
  }
  openAddCourseModal() {
    let dialogRef = this.dialog.open(CreateCourseComponent, {
      width: '400px',
    });
  }
  openAddTeacherModal() {
    let dialogRef = this.dialog.open(CreateTeacherComponent, {
      width: '400px',
    });
  }
}
