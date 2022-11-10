import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Teacher } from '../shared/Model/teacher';
import { displayAlert } from '../shared/alert-function';
import { CreateTeacherService } from '../shared/services/create-teacher.service';

@Component({
  selector: 'app-create-teacher',
  templateUrl: './create-teacher.component.html',
  styleUrls: ['./create-teacher.component.css'],
})
export class CreateTeacherComponent implements OnInit {
  myForm!: FormGroup;
  addedTeacher = false;

  degrees = [
    {
      name: 'MSc',
      id: 0,
    },
    {
      name: 'BSc',
      id: 1,
    },
    {
      name: 'PHD',
      id: 2,
    },
  ];

  constructor(
    private teacherService: CreateTeacherService,
    private fb: FormBuilder,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.myForm = this.fb.group({
      name: new FormControl('', [Validators.required]),
      degree: new FormControl('', [Validators.required]),
    });

    this.addedTeacher = false;
  }

  setDegree(value: string) {
    this.myForm.patchValue({ degree: value });
  }

  postTeacher() {
    let teacher = new Teacher(
      this.myForm.get('name')?.value,
      this.myForm.get('degree')?.value
    );
    this.teacherService.saveTeacher(teacher).subscribe({
      error: (err) => {
        displayAlert('Error', '', 2000, 'error');
        console.log(err);
      },
      complete: () => {
        displayAlert('Success', 'Teacher saved!', 2000, 'success');
        this.dialog.closeAll();
      },
    });
  }
}
