/** RUN IN RUNJS only */

/** Hoisting 
 * By Default all the variable declarations are moved to the top 
*/

function normalFunction(){
  a = 10;
  // b = 5;
  console.log("Hoisted", a);
  // console.log(b); // hoisting will not work for let
  var a;
  // let b;
}

normalFunction();

