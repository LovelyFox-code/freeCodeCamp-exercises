
function smallestCommons(arr) {
    let lowest = arr[0];
    let highest = arr[1];
    if(arr[0] > arr[1]){
      lowest = arr[1];
      highest = arr[0];
    }
    let range = [];
    for(let i = lowest; i <= highest; i++){
      range.push(i);
    }
    let i = 2;
    while(true) {
      let current = range[range.length - 1] * i;
      let check = true;
      for(let j = 0; j < range.length-1; j++){
       check = current % range[j] === 0 && check;
       console.log(current + " " + i + " " + check);
      }
      if(check){
        return current;
      }
      i++;
    }
  }
  
  
 console.log(smallestCommons([1,5]));
