function VehicleConstructor(name, numberofwheels, numberofpassengers, speed, time){
  if (!(this instanceof VehicleConstructor)) {
   return new VehicleConstructor(name, numberofwheels, numberofpassengers, speed, time);
  }
  var self = this;
  var maxspeed = speed;
  var time_traveled = time || 0;
  var distance_traveled = 0;
  var updateTimeTraveled = function(time){ time_traveled += time; };
  var updateDistanceTraveled = function(time, speed){ distance_traveled += time * speed};
  this.name = name;
  this.number_of_wheels = numberofwheels;
  this.number_of_passengers = numberofpassengers;
  this.make_noise = function(){console.log("Making Noise");}
  this.move = function(time, speed){ updateTimeTraveled(time); updateDistanceTraveled(time, speed); this.make_noise();}
  this.checkMiles = function(){ console.log(distance_traveled);}
  this.totaltraveltime = function(){console.log(time_traveled);}
}

var Bike = new VehicleConstructor("Bike", 2, 2, 60)
Bike.make_noise = function(){console.log("ring ring!")}
var Sedan = VehicleConstructor("Sedan", 4, 5, 170)
Sedan.make_noise = function(){console.log("Honk Honk!")}
var Bus = VehicleConstructor("Bus", 4, 14, 130)
Bus.pickupPassengers = function(newPassengers){ Bus.number_of_passengers += newPassengers; }
console.log(Bus.number_of_passengers);
Bus.pickupPassengers(10)
console.log(Bus.number_of_passengers);
Bus.move(2, 50)
Bus.checkMiles()
Bus.totaltraveltime()
