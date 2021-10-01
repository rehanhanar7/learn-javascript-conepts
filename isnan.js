/** RUN IN RUNJS only */

console.log("Check Is NaN")

console.log(isNaN('rehan')); // false
console.log(5 - 'rehan') // NaN
console.log(Number.isInteger('rehan')) // false
console.log(Number('rehan')) // NaN