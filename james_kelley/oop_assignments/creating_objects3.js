// Modify your Vehicle Class to take advantage of Prototypes!

// To recap, here is what we did in Parts I & II:

// Create a VehicleConstructor that takes in the name, number of wheels, and number of passengers

// Each vehicle should have a makeNoise methodUsing the constructor, create a Bikeredefine the Bike’s makeNoise method to print “ring ring!” Using the constructor, create a Sedanredefine the Sedan’s makeNoise method to print “Honk Honk!”Using the constructor, create a BusGive the bus a pickUpPassengers method that takes in the number of passengers to pick up and adds them to the passenger count
// Then make the following modifications:

// Have the Vehicle constructor also take in a “speed”Store the speed as an attributeCreate a private variable called distance_travelled that starts at 0Create a private method called updateDistanceTravelled that increments distance traveled by speedAdd a method to the Vehicle called “move” that calls updateDistanceTravelled and then makeNoiseAdd a method called checkMiles that console.logs the distance_travelled
// Now modify your code to use Prototype and the recommended way of OOP we showed in the previous chapter.

// You may have to change some private variables/methods to attributes to make all of the functionality work.

// Then make the following additions:

// Have each vehicle generate a random VIN number (study Math.random & Math.floor). Don’t worry about potential duplicates for now.



function VehicleConstructor(name, wheels, passengerNumber,speed){
  if (!(this instanceof VehicleConstructor)){
    return new VehicleConstructor(name,wheels,passengerNumber, speed);
  }
  // String used to generate vin number
  var chars = "0123456789ABCEDGHIJKLMNOPQRSTUVWXYZ";

  this.distanceTraveled = 0;
  this.speed = speed;
  this.name = name || "unicycle";
  this.wheels = wheels || 1;
  this.passengerNumber = passengerNumber || 0;
  // Invoke createVin to generate random vin number
  this.vin = createVin();

  function createVin(){
    var vin = '';
    for (var i = 0; i < 17; i+=1 ){
      // Use Math.floor and Math.random to generate random index to access character from char string
      vin += chars[Math.floor(Math.random()*35)];
    }
    return vin;
  }

}

VehicleConstructor.prototype.makeNoise = function(noise){
  var noise = noise || "Honk Honk";
  console.log(noise);
  return this;
};

VehicleConstructor.prototype.move = function(){
  this.makeNoise();
  this.updateDistanceTraveled();
  return this;
};

VehicleConstructor.prototype.checkMiles = function(){
  console.log(this.distanceTraveled);
  return this;
};

VehicleConstructor.prototype.updateDistanceTraveled = function(){
  this.distanceTraveled += this.speed;
  console.log(this.distanceTraveled);
  return this;
}

var car = new VehicleConstructor('car', 4, 4, 80);
