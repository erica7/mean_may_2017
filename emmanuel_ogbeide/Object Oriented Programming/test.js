function NinjaConstructor(name, prevOccupation) {
  if (!(this instanceof NinjaConstructor)) {
   return new NinjaConstructor(name, prevOccupation);
 }
  this.name = name;
  this.prevOccupation = prevOccupation;
  this.introduce = function() {
    console.log("Hi my name is " + this.name + ". I used to be a " + this.prevOccupation + " and now I'm a Ninja!");
  }
}
var dylan = new NinjaConstructor('Dylan', 'Construction Worker');
var nikki = NinjaConstructor('Nikki','Historian');
console.log(nikki.name, dylan.name);



function Ninja(name, age, prevOccupation) {
  // PRIVATE
  var self = this
  var privateVar = "This is a private variable";
  var privateMethod = function() {
    console.log(self);
  }
  // PUBLIC
  this.name = name;
  this.age = age;
  this.prevOccupation = prevOccupation;
  this.introduce = function(){
    console.log("Hi my name is " + this.name + ". I used to be a " + this.prevOccupation + " and now I'm a Ninja!");
    privateMethod();
    console.log(privateVar);
  }
}
var Pariece = new Ninja("Pariece", 24, "TFA Teacher");
Pariece.introduce();


// function Ninja(name){
//   this.name = name;
//   this.distance_traveled = 0;
// }
//
// Ninja.prototype.walk = function() {
//     console.log(this.name + ' is walking');
//     this.distance_traveled += 1;
//     return this;
//   };
//
// Ninja.prototype.run = function() {
//     console.log(this.name + ' is running');
//     this.distance_traveled += 5;
//     this.displayDistanceTraveled();
//     return this;
//   };
//
// Ninja.prototype.displayDistanceTraveled = function() {
//     console.log('distance traveled: ', this.distance_traveled);
// }
//
//
// var ninja1 = new Ninja('Jay');
// var ninja2 = new Ninja('Michael');
// var ninja3 = new Ninja('Andrew');
//
//
// ninja1.walk().run().walk().run().run().displayDistanceTraveled();
// console.log(ninja1);
