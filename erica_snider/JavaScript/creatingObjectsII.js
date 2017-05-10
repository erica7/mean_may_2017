// CONSTRUCTOR METHOD

// function VehicleConstructor(name = "a vehicle", numberOfWheels = 1, numberOfPassengers = 1, speed = 100){
//
//   // private properties
//   var distance_traveled = 0;
//
//   // public properties
//   this.name = name;
//   this.numberOfWheels = numberOfWheels;
//   this.numberOfPassengers = numberOfPassengers;
//   this.speed = speed;
//
//   // private methods
//   function updateDistanceTraveled(){
//     distance_traveled += speed;
//   }
//
//   // public methods
//   this.makeNoise = function(noise){
//     var noise = noise || "noise!"
//     console.log(noise);
//   }
//   this.move = function(){
//     updateDistanceTraveled();
//     this.makeNoise();
//   }
//   this.checkMiles = function(){
//     console.log(distance_traveled);
//   }
//
// }

// Bike = new VehicleConstructor("My Bike", 2, 1);
// console.log(Bike);
// Bike.makeNoise();
// Bike.makeNoise('ring ring!');
// Sedan = new VehicleConstructor("Beige Sedan", 4, 5);
// Sedan.makeNoise("beep beep!");
// Bus = new VehicleConstructor("Big Bus", 14, 20);
// Bus.passengerCount = 0;
// Bus.pickUp = function(number){
//   this.passengerCount += number;
// }
// console.log(Bus.passengerCount);
// Bus.pickUp(5);
// console.log(Bus.passengerCount);
// Bus.move();
// Bus.checkMiles();


// CLASS

class Vehicle {
  constructor(name = "a vehicle", numberOfWheels = 1, numberOfPassengers = 1, speed = 100){

    // private properties
    var distance_traveled = 0;

    // public properties
    this.name = name;
    this.numberOfWheels = numberOfWheels;
    this.numberOfPassengers = numberOfPassengers;
    this.speed = speed;

    // private methods
    function updateDistanceTraveled(){
      distance_traveled += speed;
    }

    // public methods
    this.makeNoise = function(noise){
      var noise = noise || "noise!"
      console.log(noise);
    }
    this.move = function(){
      updateDistanceTraveled();
      this.makeNoise();
    }
    this.checkMiles = function(){
      console.log(distance_traveled);
    }

  }
}


Bike = new Vehicle("My Bike", 2, 1);
console.log(Bike);
Bike.makeNoise();
Bike.makeNoise('ring ring!');
Sedan = new Vehicle("Beige Sedan", 4, 5);
Sedan.makeNoise("beep beep!");
Bus = new Vehicle("Big Bus", 14, 20);
Bus.passengerCount = 0;
Bus.pickUp = function(number){
  this.passengerCount += number;
}
console.log(Bus.passengerCount);
Bus.pickUp(5);
console.log(Bus.passengerCount);
Bus.move();
Bus.checkMiles();
