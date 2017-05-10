// // Create a VehicleConstructor that takes in the name, number of wheels, and the number of passengers. 
// Then complete the following tasks:


function VehicleConstructor(name, wheels, passengers){
  var vehicle = {};

  vehicle.name = name;
  vehicle.wheels = wheels;
  vehicle.passengers = passengers;


// Each vehicle should have a makeNoise method

  vehicle.makeNoise = function(){
    console.log("Making noise!");
  }

  return vehicle;
}

// Using the constructor, create a Bike 
// Redefine the Bike’s makeNoise method to print “ring ring!” 

var Bike = VehicleConstructor('Bike', 2, 1);
Bike.makeNoise();
Bike.makeNoise = function() {
  console.log("Ring ring!")
}
Bike.makeNoise();

// Create a sedan
// Redefine the Sedan’s makeNoise method to print “Honk Honk!” 

var Sedan = VehicleConstructor('Sedan', 4, 4);
Sedan.makeNoise();
Sedan.makeNoise = function(){
  console.log("Honk Honk");
}

Sedan.makeNoise();


// Using the constructor, create a Bus 
// Add a method to Bus that takes in the number of passengers to pick up and adds them to the passenger count​

var Bus = VehicleConstructor('Bus', 8, 1);
Bus.pickUpPassengers = function(passengers) {
  Bus.passengers += passengers;
}
console.log(Bus.passengers)
Bus.pickUpPassengers(14);
console.log(Bus.passengers)

























