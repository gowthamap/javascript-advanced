function one() {
  var a = {
    value: 100,
  }
  two(a);
  console.log("one", a.value);
}

function two(a) {
  a = {
    value: 400
  };
  console.log("two", a.value);
}

one();
