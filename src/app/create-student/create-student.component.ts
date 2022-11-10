import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Student } from '../shared/Model/student';
import { displayAlert } from '../shared/alert-function';
import { CreateStudentService } from '../shared/services/create-student.service';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css'],
})
export class CreateStudentComponent implements OnInit {
  myForm!: FormGroup;
  addedStudent = false;
  constructor(
    private studentService: CreateStudentService,
    private fb: FormBuilder,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.myForm = this.fb.group({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(50),
      ]),
      age: new FormControl(14, [
        Validators.required,
        Validators.min(14),
        Validators.max(100),
      ]),
    });
    this.addedStudent = false;
  }

  postStudent() {
    let student = new Student(
      this.myForm.get('name')?.value,
      this.myForm.get('age')?.value
    );
    this.studentService.saveStudent(student).subscribe({
      error: (err) => {
        displayAlert('Error', '', 2000, 'error');
        console.log(err);
      },
      complete: () => {
        displayAlert('Success', 'Student saved!', 2000, 'success');
        this.dialog.closeAll();
      },
    });
  }
}
