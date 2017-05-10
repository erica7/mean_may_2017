
"use strict"
// class to create Vehicles
function VehicleConstructor(name, num_wheels, num_passengers, speed) {
  var self = this;
  var distance_travelled = 0;

  this.name = name;
  this.num_wheels = num_wheels;
  this.num_passengers = num_passengers;
  this.speed = speed;

  var updateDistanceTravelled = function() {
    distance_travelled += self.speed;
    return self;
  }

  this.makeNoise = function() {
    console.log("Beep, beep!");
    return this;
  }

  this.move = function() {
    updateDistanceTravelled();
    this.makeNoise();
    return this;
  }

  this.checkMiles = function() {
    console.log(distance_travelled);
    return this;
  }

}

// class Vehicle {
//   constructor(name, num_wheels, num_passengers, speed) {
//     var self = this;
//     var distance_travelled = 0;
//
//     this.name = name;
//     this.num_wheels = num_wheels;
//     this.num_passengers = num_passengers;
//     this.speed = speed;
//
//     let updateDistance = function(speed) {
//       distance_travelled += speed;
//
//       return self;
//     }
//
//     this.getDistance = function() {
//       return distance_travelled;
//     }
//
//     this.makeNoise = function() {
//       console.log("Beep, beep!");
//
//       return self;
//     }
//
//     this.move = function() {
//       updateDistance();
//       self.makeNoise();
//
//       return self;
//     }
//
//     this.checkMiles = function() {
//       return self;
//     }
//   }
// }

var car = new VehicleConstructor("car", 4, 5, 30);
console.log(car.move().checkMiles());
