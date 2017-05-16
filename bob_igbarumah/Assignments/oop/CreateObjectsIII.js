function VehicleConstructor(name, numberOfWheels, numberOfPassengers,speed){

  if (!(this instanceof VehicleConstructor)) {
   // the constructor was called without "new".
   return new VehicleConstructor(name, numberOfWheels,numberOfPassengers,speed);
 }
 var chars = "0123456789ABCEDGHIJKLMNOPQRSTUVWXYZ";
  this.name = name;
  this.numberOfPassengers = numberOfPassengers;
  this.numberOfWheels = numberOfWheels;
  this.speed = speed;

  this.vin = createVin();

 function createVin(){
   var vin = '';
   for (var i = 0; i < 17; i+=1 ){
     // Use Math.floor and Math.random to generate random index to access character from char string
     vin += chars[Math.floor(Math.random()*35)];
   }
   return vin;
 }

  //this.makeNoise  = function(){console.log('vehicle')};

  //PRIVATE
   var distance_travelled = 0;
   var updateDistanceTravelled = function(){
     distance_travelled+=this.speed;
   };
   //this.move = function(){updateDistanceTravelled;this.makeNoise() ; };

  // this.checkMiles = function(){console.log(distance_travelled)}

}

VehicleConstructor.prototype.makeNoise = function(){
  console.log('vehicle');
  return this;
};

VehicleConstructor.prototype.move = function(){
                             updateDistanceTravelled;this.makeNoise() ;
                               return this;};
VehicleConstructor.prototype.checkMiles =  function(){
                         console.log(distance_travelled)};

var bike =  new VehicleConstructor('bicycle',2,1);

bike.makeNoise = function(){console.log("ring  ring!")};
bike.makeNoise();
bike.move();
var sedan =  new VehicleConstructor('Car',4,5);

sedan.makeNoise = function(){console.log("Honk Honk")};
sedan.makeNoise();

var bus =  new VehicleConstructor('Car',8,20);

//var bus = VehicleConstructor('bus',6, 0);

bus.pickupPassengers = function(newPassengers){
  bus.numberOfPassengers += newPassengers;
}

console.log(bus.numberOfPassengers);
bus.pickupPassengers(6);
console.log(bus.numberOfPassengers);
