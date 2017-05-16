// Have the Vehicle constructor also take in a “speed” 
// Store the speed as an attribute 
// Create a private variable called distance_travelled that starts at 0 
// Create a private method called updateDistanceTravelled that increments distance traveled by speed 
// Add a method to the Vehicle called “move” that calls updateDistanceTravelled and then makeNoise 
// Add a method called checkMiles that console.logs the distance_travelled

function VehicleConstructor(name, wheels, passengerNumber, speed){
  if (!(this instanceof VehicleConstructor)){
    return new VehicleConstructor(name, wheels, passengerNumber, speed);
  }
  var self = this;

  // PRIVATE METHODS
  function updateDistanceTravelled(){
    distance_travelled += self.speed;
  }

  // PRIVATE VARIABLES
  var distance_travelled = 0;


  // PUBLIC 
  this.name = name || "unicycle";
  this.wheels = wheels || 1;
  this.passengerNumber = passengerNumber || 0;
  this.speed = speed || 0;

  this.makeNoise = function(noise) {
    var noise = noise || "Honk Honk";
    console.log(noise);
  }

  this.move = function() {
    updateDistanceTravelled();
    this.makeNoise();
  }

  this.checkMiles = function(){
    return distance_travelled;
  }

}

var bus = VehicleConstructor("Bus", 8, 35, 60);
console.log(bus.speed);




