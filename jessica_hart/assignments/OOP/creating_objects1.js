// Create a VehicleConstructor that takes in the name, number of wheels, and the number of passengers.
// Each vehicle should have a makeNoise method.
function VehicleConstructor (name, numWheels, numPassengers) {
  var vehicle = {}
  vehicle.name = name
  vehicle.wheels = numWheels
  vehicle.passengers = numPassengers
  vehicle.makeNoise = function () {
    console.log('MAKING NOISE')
  }
  return vehicle
}

// Using the constructor, create a Bike
var bike = VehicleConstructor('Bike', 2, 1)

// Redefine the Bike’s makeNoise method to print “ring ring!”
bike.makeNoise = function () {
  console.log('ring ring!')
}

bike.makeNoise()

// Create a Sedan
var sedan = VehicleConstructor('Sedan', 4, 4)

// Redefine the Sedan’s makeNoise method to print “Honk Honk!”
sedan.makeNoise = function () {
  console.log('Honk Honk!')
}

sedan.makeNoise()

// Using the constructor, create a Bus
var bus = VehicleConstructor('Bus', 6, 1)

// Add a method to Bus that takes in the number of passengers to pick up and adds them to the passenger count
bus.pickUp = function () {
  if (this.passengers < 72) {
    this.passengers++
    console.log('Passenger picked up! Passenger count now at ' + this.passengers)
  } else {
    console.log('Capacity full!')
  }
}

bus.pickUp()
