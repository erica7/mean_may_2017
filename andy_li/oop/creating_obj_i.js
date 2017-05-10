// class to create Vehicles
function VehicleConstructor(name, num_wheels, num_passengers) {
  var self = this;
  this.name = name;
  this.num_wheels = num_wheels;
  this.num_passengers = num_passengers;

  this.makeNoise = function() {
    console.log("Beep, beep!");
    return this;
  }

}

var bike = new VehicleConstructor("bike", 2, 1);
bike.makeNoise = function() {
  console.log("Ring, ring!");
  return this;
}
bike.makeNoise();

var sedan = new VehicleConstructor("sedan", 4, 5);
sedan.makeNoise = function() {
  console.log("Honk, honk!");
  return this;
}
sedan.makeNoise();

var bus = new VehicleConstructor("bus", 8, 30);
bus.pickUpPassenger = function(num) {
  bus.num_passengers += num;
  return this;
}

console.log(bus.pickUpPassenger(5));
