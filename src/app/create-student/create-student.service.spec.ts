import { TestBed } from '@angular/core/testing';

import { CreateStudentService } from '../shared/services/create-student.service';

describe('CreateStudentService', () => {
  let service: CreateStudentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateStudentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
