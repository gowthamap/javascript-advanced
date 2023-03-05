var obj = {
  name: "Alice",
  mark: 35,
  place: "Kannur",
  subject: {
    teacher: "Bob",
  },
};

var {
  subject: { teacher },
} = obj;

console.log(teacher);

var arr = [
  {
    name: "Alice",
    mark: 35,
    place: "Kannur",
    subject: {
      teacher: "Bob",
    },
  },
  22,
  33,
];
var [{subject: {teacher}}] = arr;

console.log(teacher);
