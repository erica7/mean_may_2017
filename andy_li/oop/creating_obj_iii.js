"use strict"
// class to create Vehicles
function VehicleConstructor(name, num_wheels, num_passengers, speed) {
  if (!(this instanceof VehicleConstructor)){
    return new VehicleConstructor(name, num_wheels, num_passengers, speed);
  }

  this.distance_travelled = 0;
  this.name = name;
  this.num_wheels = num_wheels;
  this.num_passengers = num_passengers;
  this.speed = speed;

  this.vin = gen_vin();

  function gen_vin() {
    var chars = "0123456789ABCEDGHIJKLMNOPQRSTUVWXYZ";
    var vin = "";
    for (var i = 0; i < 17; i++) {
      vin += chars[Math.floor(Math.random() * 35)];
    }
    return vin;
  }

  // var updateDistanceTravelled = function() {
  //   distance_travelled += self.speed;
  //   return self;
  // }

  // this.makeNoise = function() {
  //   console.log("Beep, beep!");
  //   return this;
  // }

  // this.move = function() {
  //   updateDistanceTravelled();
  //   this.makeNoise();
  //   return this;
  // }

  // this.checkMiles = function() {
  //   console.log(distance_travelled);
  //   return this;
}

VehicleConstructor.prototype.updateDistanceTravelled = function() {
  this.distance_travelled += this.speed;
  return this;
}
VehicleConstructor.prototype.makeNoise = function(noise) {
  console.log(noise);
  return this;
}
VehicleConstructor.prototype.move = function() {
  this.updateDistanceTravelled();
  this.makeNoise();
  return this;
}
VehicleConstructor.prototype.checkMiles = function() {
  console.log(this.distance_travelled);
  return this;
}

var car = new VehicleConstructor('car', 4, 4, 80);
console.log(car);
