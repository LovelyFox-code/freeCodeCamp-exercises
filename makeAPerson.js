var Person = function (firstAndLast) {
    // Only change code below this line
    // Complete the method below and implement the others similarly
    let fullName = firstAndLast;
  
    this.setFirstName = function(name){
      fullName = name + " " + fullName.split(" ")[1];
    }
    this.setLastName = function(name){
      fullName = fullName.split(" ")[0] + " " + name;
    }
    this.setFullName = function(name){
       fullName = name;
    }
    this.getFullName = function () {
      return fullName;
    };
    this.getFirstName = function () {
      return fullName.split(" ")[0];
    };
    this.getLastName = function () {
      return fullName.split(" ")[1];
    };
    return fullName;
  };
  var bob = new Person("Haskell Curry");
  bob.getFullName();
  

var bob = new Person("Bob Ross");
console.log(bob.getFullName());
console.log(bob.getFirstName());
console.log(bob.getLastName());

