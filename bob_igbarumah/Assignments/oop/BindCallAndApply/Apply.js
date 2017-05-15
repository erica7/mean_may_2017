//Call and Apply allow us to inherit methods from other constructors:
function Ninja(name, age){
  this.name = name;
  this.age = age;
  // there could be lots of other stuff here!
}
function BlackBelt(name,age){
  //Commas!
  Ninja.call(this,name,age);
  this.belt = 'black';
}
function YellowBelt(name,age){
  //ARRAY
  Ninja.apply(this,[name,age]);
  this.belt = 'yellow';
}
var yB = new YellowBelt('mike', 40);
var bB = new BlackBelt('charlie', 29);
console.log(bB.name);
console.log(yB.name);


function levelUp() {
  console.log(this.name + " has learned a new kata, in " + this.gender + " favorite language: " + this.language);
}

//Another use of call and apply: It allows us to use this, without constructing an object with new first:
var person = {
  name: 'Lisa',
  gender: 'her',
  language: 'JavaScript, duh!'
};


levelUp.call(person);
