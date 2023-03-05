class Student {
  name;
  yob;
  place;
  constructor(name, yob) {
    this.name = name;
    this.yob = yob;
  }

  getAge() {
    return new Date().getFullYear() - this.yob;
  }
  getName() {
    return this.name;
  }
}

Student.printMinYob = function(...args) {
  var arr = args.map((item) => item.yob);
  console.log(Math.min(...arr));
}

var student1 = new Student("Alen", 1990);

var student2 = new Student("Bob", 1995);

var student3 = new Student("Cook", 1980);

console.log(student1,student1.getName(), student1.getAge());
console.log(student2,student2.getName(), student2.getAge());
console.log(student3,student3.getName(), student3.getAge());

Student.printMinYob(student1, student2, student3)

 