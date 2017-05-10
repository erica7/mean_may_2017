class Vehicle {
  constructor(name = "a vehicle", numberOfWheels = 1, numberOfPassengers = 1, speed = 100){

    // private properties
    // var distance_traveled = 0;
    var string = "ABCDERGHIJKLMNOPQRSTUVWXYZ0123456789"
    // var vin = makeVIN();

    // public properties
    this.name = name;
    this.numberOfWheels = numberOfWheels;
    this.numberOfPassengers = numberOfPassengers;
    this.speed = speed;
    this.distance_traveled = 0;
    this.vin = makeVIN();

    // private methods
    // function updateDistanceTraveled(){
    //   distance_traveled += speed;
    // }

    function makeVIN(){
      var vin = "";
      for(var i=1; i<=16; i++){
        vin += string[Math.floor(Math.random()*35)]
      }
      return vin;
    }

    // public methods moved to Prototype

  }
}



Vehicle.prototype.updateDistanceTraveled = function(){
  this.distance_traveled += this.speed;
}

Vehicle.prototype.makeNoise = function(noise){
  var noise = noise || "noise!"
  console.log(noise);
}

Vehicle.prototype.move = function(){
  this.updateDistanceTraveled();
  this.makeNoise();
}

Vehicle.prototype.checkMiles = function(){
  console.log(this.distance_traveled);
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
console.log(Bus.vin);
