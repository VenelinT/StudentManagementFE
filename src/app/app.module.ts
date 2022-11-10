import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenu, MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';

import { MatTableModule } from '@angular/material/table';
import { WelcomeComponent } from './welcome/welcome.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { CreateStudentComponent } from './create-student/create-student.component';
import { CreateTeacherComponent } from './create-teacher/create-teacher.component';
import { CreateCourseComponent } from './create-course/create-course.component';
import { ListStudentComponent } from './list-student/list-student.component';
import { FormsModule } from '@angular/forms';
import { ListCoursesComponent } from './list-courses/list-courses.component';
import { SharedModule } from './shared/shared.module';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AddGradeComponent } from './add-grade/add-grade.component';
@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    CreateStudentComponent,
    CreateTeacherComponent,
    CreateCourseComponent,
    ListStudentComponent,
    ListCoursesComponent,
    AddGradeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatCheckboxModule,
    MatChipsModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatDialogModule,
    MatTableModule,
    MatPaginatorModule,
    FormsModule,
    SharedModule,
    MatTooltipModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    CreateCourseComponent,
    CreateStudentComponent,
    CreateTeacherComponent,
    ListCoursesComponent,
    ListStudentComponent,
  ],
})
export class AppModule {}
