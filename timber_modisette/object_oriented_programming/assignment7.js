function vehicleConstructor(name,number_of_wheels,number_of_passengers, speed){
	if (!(this instanceof vehicleConstructor)){
		return new vehicleConstructor(name,number_of_wheels,number_of_passengers,speed);
	}
	var chars = '1234567890abcdefghijklmnopqrstuvwxyz';

	this.distance_traveled = 0;
	this.name = name;
	this.number_of_wheels = number_of_wheels;
	this.number_of_passengers = number_of_passengers;
	this.speed = speed;
	this.vin = createvin();
	function createvin(){
		var vinNumber = '';
		for(var i = 0; i <= 17; i += 1){
			vinNumber += chars[Math.floor(Math.random() * vinNumber.length)];
			
		}
		// console.log(vinNumber);
		return vinNumber;
	}

}

vehicleConstructor.prototype.makeNoise = function(parm){
	console.log(parm);
	return this;
}

vehicleConstructor.prototype.move = function(){
	this.makeNoise();
	this.update_Distance_traveled();
	return this;
}

vehicleConstructor.prototype.check_miles = function(){
	console.log(this.distance_traveled);
	return this;
}

vehicleConstructor.prototype.update_Distance_traveled = function(){
	this.distance_traveled += this.speed;
	console.log(this.distance_traveled);
	return this;
}






var bike = new vehicleConstructor('bike', 2, 1, 100);

// bike.makeNoise("ring, ring, ring")

// console.log(bike)


var sedan = new vehicleConstructor('sedan', 4, 5, 100);

// sedan.makeNoise('Honk! Honk!')


var bus = new vehicleConstructor('bus', 4, 0, 100);
bus.pickUpPassengers = function(new_passengers){
	bus.number_of_passengers += new_passengers;
}
bus.dropOffPassengers = function(num){
	bus.number_of_passengers -= num;
}

var car = new vehicleConstructor('car', 4, 1, 100);
// car.move().move();
var Carvin = car.vin;
console.log(Carvin);


// console.log(bus.number_of_passengers);
// bus.pickUpPassengers(23);
// console.log(bus.number_of_passengers);
// bus.dropOffPassengers(20);
// console.log(bus.number_of_passengers);


