// Use Prototype and the recommended way of OOP
// Have each vehicle generate a random VIN number
function VehicleConstructor (name, numWheels, numPassengers, speed) {
  this.name = name
  this.speed = speed
  this.wheels = numWheels
  this.passengers = numPassengers
  this.distanceTraveled = 0
  this.VIN = Math.floor(Math.random()*89999+10000)
}

VehicleConstructor.prototype.makeNoise = function () {
  console.log('MAKING NOISE')
}
VehicleConstructor.prototype.move = function () {
  this.updateDistanceTraveled()
  this.makeNoise()
  return this
}
VehicleConstructor.prototype.checkMiles = function () {
  console.log(this.distanceTraveled)
}
VehicleConstructor.prototype.updateDistanceTraveled = function () {
  this.distanceTraveled += this.speed
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
console.log(bus.VIN)
