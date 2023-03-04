const obj1 = {
  name: "Code Malayalam",
  place: "kerala",
};
const obj2 = {
  name: "Bob",
  place: "America",
};

function abc() {
  var { name, place } = obj1;
  var { name: name2, place: place2 } = obj2;
  console.log(name, place, name2, place2);
}

abc();
