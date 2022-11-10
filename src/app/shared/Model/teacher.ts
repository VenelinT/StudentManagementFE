export class Teacher {
  name!: string;
  degree!: string;
  id!: number;

  constructor(name: string, degree: string) {
    this.name = name;
    this.degree = degree;
  }
}
