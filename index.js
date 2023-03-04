const myObj = {
  a: 1,
  b: 2,
  c: function (a, b) {
    console.log(this, a, b);
  },
};

var k = myObj.c;
k.apply(myObj, [1, 2]);

class MyClass {
  myFunction = () =>  {
    console.log(this);
  }
}

const myc = new MyClass();
myc.myFunction()
const k = myc.myFunction;
k()