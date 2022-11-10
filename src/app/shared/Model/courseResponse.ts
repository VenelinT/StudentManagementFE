import { Student } from './student';
import { Teacher } from './teacher';

export class CourseResponse {
  id!: number;
  name!: string;
  students?: Student[];
  teacher!: Teacher;
}
