/** RUN IN RUNJS only */

var a = 'global';

var obj1 = {
  a: 'obj1',
  valueOfThis: function(){
    return this.a;
  }
}
var obj2 = {
  a: 'obj2',
  valueOfThis: ()=>{
    return this.a;
  }
}

obj1.valueOfThis(); // Will return the object obj1
obj2.valueOfThis(); // Will return window/global object