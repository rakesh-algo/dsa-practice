class Student {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName() {
    return `Your full name is ${this.firstName} ${this.lastName}`
  }
}

const firstStudent = new Student('Colt', 'Steele');
const secondStudent = new Student('Blue', 'Steele');
console.log(firstStudent.getFullName());
console.log(secondStudent);
