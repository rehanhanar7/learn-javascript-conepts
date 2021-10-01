/** RUN IN RUNJS only */

/** call apply & bind **/


var normalObject = {
  a: 10,
  b: 20,
  c: function(...args){
    console.log(args);
    return this.a + this.b;
  }
}

normalObject.c(); // [] & 30

secondObject = {a: 30, b: 40};
thirdObject = {a: 50, b: 60};
fourthObject = {a: 70, b: 100};

console.log(normalObject.c.call(secondObject, 'rehan', 'hanar')) // 70 & [ 'rehan', 'hanar' ]

console.log(normalObject.c.apply(thirdObject, ['hello', 'world'])) // 70 & ["hello", "world"]

var newfn = normalObject.c.bind(fourthObject);
console.log(newfn('meow', 'cat')) // 70 & ["meow", "cat"]