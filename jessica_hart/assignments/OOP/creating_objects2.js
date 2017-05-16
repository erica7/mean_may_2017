// Modify the VehicleConstructor (from earlier) to use this & new
// Have the Vehicle constructor also take in a “speed” and store as an attribute
function VehicleConstructor (name, numWheels, numPassengers, speed) {
  var self = this
  // Create a private variable called distance_travelled that starts at 0
  var distanceTraveled = 0
  // Create a private method called updateDistanceTravelled that increments distance traveled by speed
  var updateDistanceTraveled = function () {
    distanceTraveled += self.speed
  }
  this.name = name
  this.speed = speed
  this.wheels = numWheels
  this.passengers = numPassengers
  this.makeNoise = function () {
    console.log('MAKING NOISE')
  }
  // Add a method to the Vehicle called “move” that calls updateDistanceTravelled and then makeNoise
  this.move = function () {
    updateDistanceTraveled()
    this.makeNoise()
    return this
  }
  // Add a method called checkMiles that console.logs the distance_travelled
  this.checkMiles = function () {
    console.log(distanceTraveled)
  }
}

var bike = new VehicleConstructor('Bike', 2, 1, 10)
bike.makeNoise = function () {
  console.log('ring ring!')
}
bike.move().checkMiles()

var sedan = new VehicleConstructor('Sedan', 4, 4, 70)
sedan.makeNoise = function () {
  console.log('Honk Honk!')
}
sedan.move().checkMiles()

var bus = new VehicleConstructor('Bus', 6, 1, 40)
bus.pickUp = function () {
  if (this.passengers < 72) {
    this.passengers++
    console.log('Passenger picked up! Passenger count now at ' + this.passengers)
  } else {
    console.log('Capacity full!')
  }
  return this
}
bus.pickUp().move().move().checkMiles()
