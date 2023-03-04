const arr = [
  { name: "Alice", mark: 35, place: "Kannur" },
  { name: "Bob", mark: 28, place: "Palakkad" },
  { name: "Catherine", mark: 44, place: "Trissur" },
  { name: "Daniel", mark: 23, place: "Kollam" },
];

var value = arr.reduce((total, item) => {
  total.push(item.name);
  return total;
}, []);

console.log(value);
