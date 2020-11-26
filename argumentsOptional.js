function addTogether(...arg) {
  for(let i = 0; i < arg.length; i++){
  if (typeof(arg[i]) !== 'number') {
      return undefined;
    }
  }
    if (arg.length === 1) {
      return function (b) {
        if (typeof(b) !== 'number') {
      return undefined;
    }
        return addTogether(arg[0], b);
      }
    }
   
    return arg[0] + arg[1];
  }
  
  addTogether(2,3);
  

//   It has to add two numbers passed as parameters and return the sum.
//   It has to check if any of the numbers are actual numbers, otherwise return undefined and stop the program right there.
//   It has to check if it has one or two arguments passed. More are ignored.
//   If it has only one argument then it has to return a function that uses that number and expects another one, to then add it.
