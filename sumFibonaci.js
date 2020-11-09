function sumFibs(num) {
  var a = 1, b = 0, temp;
  const finalNum = num;
  let sum = 0;
  while (num >= 0){
    temp = a;
    a = a + b;
    b = temp;
    num--;
    if(temp % 2 != 0 && temp <= finalNum){
      sum += temp; 
    }
  }
 
return sum;
  
}

console.log(sumFibs(10));