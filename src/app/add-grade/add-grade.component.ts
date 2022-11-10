import { Component, Inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { displayAlert } from '../shared/alert-function';
import { GradeRequest } from '../shared/Model/gradeRequest';
import { GradeService } from '../shared/services/grade.service';

@Component({
  selector: 'app-add-grade',
  templateUrl: './add-grade.component.html',
  styleUrls: ['./add-grade.component.css'],
})
export class AddGradeComponent implements OnInit {
  myForm!: FormGroup;

  ngOnInit(): void {
    this.myForm = this.fb.group({
      grade: new FormControl('', [
        Validators.required,
        Validators.min(2),
        Validators.max(6),
      ]),
    });
  }
  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private gradeService: GradeService,
    private fb: FormBuilder,
    private dialog: MatDialog
  ) {}

  onSubmit() {
    let gradeRequest: GradeRequest = {
      studentId: this.data.studentId,
      courseId: this.data.courseId,
      grade: this.myForm.get('grade')?.value,
    };
    this.gradeService.addGradeToStudent(gradeRequest).subscribe({
      error: (err: any) => {
        displayAlert('Error', '', 2000, 'error');
        console.log(err);
      },
      complete: () => {
        displayAlert('Success', 'Grade saved!', 2000, 'success');
        this.dialog.closeAll();
      },
    });
  }
}
