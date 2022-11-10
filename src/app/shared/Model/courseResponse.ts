import { Student } from "./student";

export class CourseResponse{ 
    id!:number;
    name!:string;
    students!:Student[];
}