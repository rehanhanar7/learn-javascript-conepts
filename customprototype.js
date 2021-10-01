String.prototype.myfunction = function(){
  return 'you have called me ' + this.valueOf()
}

console.log('rehan'.myfunction()); //'you have called me rehan'