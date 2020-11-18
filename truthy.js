function truthCheck(collection, pre) {
    // Is everyone being true?
    //return collection.every(obj => obj[pre]);
    let result = true;
    for(let i = 0; i < collection.length; i++){
     if(collection[i][pre]){
         result = true && result;
     }else{
         result = false;
     }
      }
     
      return result;
  }
  
 console.log(truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"));
  