import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateCourseComponent } from './create-course/create-course.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { CreateTeacherComponent } from './create-teacher/create-teacher.component';
import { ListCoursesComponent } from './list-courses/list-courses.component';
import { ListStudentComponent } from './list-student/list-student.component';


import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {
    path:"course/show" , component:ListCoursesComponent
  },
  {
    path: 'student/add',
    component: CreateStudentComponent
  },
  {
    path: 'course/add',
    component: CreateCourseComponent,
  },
  {
    path: 'teacher/add',
    component: CreateTeacherComponent
  },
  {
    path: 'student/show',
    component: ListStudentComponent
  },
  {
    path:'' , component:WelcomeComponent
  },

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
