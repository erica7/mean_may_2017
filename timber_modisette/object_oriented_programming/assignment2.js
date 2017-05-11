d
function NinjaConstructor(name, prevOccupation) {
	if (!(this instanceof NinjaConstructor)){
		return new NinjaConstructor(name,prevOccupation);
	}

  this.name = name;
  this.prevOccupation = prevOccupation;
  this.introduce = function() {
    console.log("Hi my name is " + this.name + ". I used to be a " + this.prevOccupation + " and now I'm a Ninja!");
  }
  return this; // <-- AND THIS LINE!
}

	
var piff = new NinjaConstructor("piff", "phlebotomist");
console.log(piff.name, piff.prevOccupation)

var nikki = NinjaConstructor("Nikki", "phlebotomist");
console.log(nikki.name);


////////////////////////////////////////////////////////////


function Ninja(name, age, prevOccupation) {
  // PRIVATE
  var privateVar = "This is a private variable";
  var privateMethod = function() {
    console.log("this is a private method");
  }
  // PUBLIC
  this.name = name;              
  this.age = age;
  this.prevOccupation = prevOccupation;
  this.introduce = function() {   
    console.log("Hi my name is " + this.name + ". I used to be a " + this.prevOccupation + " and now I'm a Ninja!");
    privateMethod(); // this works since it is a scope that can access privateMethod!
    console.log(privateVar);      // this works too!
  }
}

var timber = new Ninja('timber', 26, 'medtech');

console.log(timber.name);

///////////////////////////////////////////////////////

function User(name, ssn){
  var social = ssn;
  this.name = name;
  this.getSSN = function(){
  	return social;
  }
}
var user1 = new User('shia', 274164398);
console.log(user1.getSSN());

///////////////////////////////////////////////////////


function Ninja(name, age, prevOccupation) {
  // PRIVATE
  var self = this;
  var privateVar = "This is a private variable";
  var privateMethod = function() {
    console.log(self); // What will print here?
  }
  // PUBLIC
  this.name = name;
  this.age = age;
  this.prevOccupation = prevOccupation
  // PUBLIC METHODS DECLARED HERE
  this.introduce = function() {
    console.log("Hi my name is " + this.name + ". I used to be a " + this.prevOccupation + " and now I'm a Ninja!");
    privateMethod();           
    console.log(privateVar);
  }
}
var Speros = new Ninja("Speros", 24, "MBA");
Speros.introduce();





