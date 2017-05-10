// Create a VehicleConstructor that takes in the name, number of wheels, and the number of passengers. Then complete the following tasks:

// Each vehicle should have a makeNoise method
// Using the constructor, create a Bike 
// Redefine the Bike’s makeNoise method to print “ring ring!” 
// Create a Sedan 
// Redefine the Sedan’s makeNoise method to print “Honk Honk!” 
// Using the constructor, create a Bus 
// Add a method to Bus that takes in the number of passengers to pick up and adds them to the passenger count​

function VehicleConstructor(name, wheels, passengerNumber){
  var vehicle = {};
/*
  Properties
*/
  vehicle.name = name || "unicycle";
  vehicle.wheels = wheels || 1;
  vehicle.passengerNumber = passengerNumber || 0;
  /*
    methods
  */
  vehicle.makeNoise = function(noise){
    var noise = noise || "Honk Honk";
    console.log(noise)
  }
  /*
  return
  */
  return vehicle;
}

var unicycle = VehicleConstructor();

var bike = VehicleConstructor("bicycle", 2, 0);
bike.makeNoise = function(){
  console.log('ring, ring');
}
// or simply: bike.makenoise("ring, ring");
var sedan = VehicleConstructor("sedan", 4, 4);
sedan.makeNoise = function(){
  console.log('Honk Honk');
}

var bus = VehicleConstructor('bus',6, 0);
bus.pickupPassengers = function(newPassengers){
  bus.passengerNumber += newPassengers;
}

console.log(bus.passengerNumber);
bus.pickupPassengers(6);
console.log(bus.passengerNumber);



























