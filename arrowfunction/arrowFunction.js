const fn2 = () => ({a: 1, b:2});

const val = fn2();

console.log(val);

const obj = {
  a: 100,
  b: 200,
  myFun: () =>  {
    return this.a + this.b;
  },
};

console.log(obj.myFun());
