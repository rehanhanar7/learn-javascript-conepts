/** RUN IN RUNJS only */

var a = 'global';

function normalFunction(){
  console.log('am called ', this.a); // 'am called ' 'global' (since global is calling this)
}

normalFunction(); // 'am called ' 'global' (since global is calling this)
console.log("normalFunction", normalFunction()); // undefined (there is no a variable in the console object)

// * Another example *//

obj1 = {
  a: 'obj1',
  b : 15,
  geta : function(){
    console.log('am called 2', this.a);
  }
}

obj1.geta(); // am called 2 obj1

var getafn = obj1.geta; 

getafn(); // am called 2 global (since global object is calling the function)

obj2 = {a: 'obj2', b: 20, getafn}; // 'am called 2' 'obj2' & object

obj2.getafn(); // am called 2 'obj2'

console.log(obj2.getafn()); // undefined