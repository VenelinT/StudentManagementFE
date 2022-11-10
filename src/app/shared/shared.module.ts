import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HorizontalMenuComponent } from './horizontal-menu/horizontal-menu.component';
import { MatMenuModule } from '@angular/material/menu';
import { MobileMenuComponent } from './mobile-menu/mobile-menu.component';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CreateCourseComponent } from '../create-course/create-course.component';
import { CreateStudentComponent } from '../create-student/create-student.component';
import { MatDialogModule } from '@angular/material/dialog';
@NgModule({
  declarations: [HorizontalMenuComponent, MobileMenuComponent],
  imports: [CommonModule, MatMenuModule, MatDialogModule],
  exports: [HorizontalMenuComponent, MobileMenuComponent],
})
export class SharedModule {}
