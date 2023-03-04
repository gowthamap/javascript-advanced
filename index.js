var objA = {
  a: 1,
  b: 2,
  c: "Hello",
};

var objB = {
  a1: 1,
  b1: 2,
  c1: "Hello 2 ",
};

var obj2 = { ...objA, ...objB, z:32 };

console.log(obj2);

var a = [1, 2, 3, 4];
var b = [6,7,8,9]
var c = [...a, ...b]

console.log(c);

var obj1 = {
  a: 1,
  b: 2,
  c : {
    name: 'raman',
    age: 45
  }
};

var obj2 = {...obj1}

obj1.d = 44
obj1.c.name = 'krishnan'
console.log(obj1 , obj2);

var arr = [1, 2, 33, 49, 15, 6];
var a = Math.max(...arr);
console.log(a);
