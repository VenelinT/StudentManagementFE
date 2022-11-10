import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Course } from '../shared/Model/course';
import { displayAlert } from '../shared/alert-function';
import { CreateCourseService } from '../shared/services/create-course.service';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.css'],
})
export class CreateCourseComponent implements OnInit {
  myForm!: FormGroup;
  addedCourse = false;

  constructor(
    private courseService: CreateCourseService,
    private fb: FormBuilder,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.myForm = this.fb.group({
      name: new FormControl('', [Validators.required]),
    });
    this.addedCourse = false;
    this.courseService.getStudentsOfCourse(1).subscribe((data) => {
      console.log(data);
    });
  }

  postCourse() {
    let course = new Course(this.myForm.get('name')?.value);
    this.courseService.saveCourse(course).subscribe({
      error: (err) => {
        displayAlert('Error', '', 2000, 'error');
        console.log(err);
      },
      complete: () => {
        displayAlert('Success', 'Course saved!', 2000, 'success');
        this.dialog.closeAll();
      },
    });
  }
}
