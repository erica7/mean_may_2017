// function vehicleConstructor(name,number_of_wheels,number_of_passengers){
// 	var vehicle = {};
// 	vehicle.name = name;
// 	vehicle.number_of_wheels = number_of_wheels;
// 	vehicle.number_of_passengers = number_of_passengers;
// 	vehicle.makeNoise = function(parm){
// 		console.log(parm);
// 	};
// 	return vehicle;

// }

// var bike = vehicleConstructor('bike', 2, 1);

// bike.makeNoise("ring, ring, ring")

// // console.log(bike)


// var sedan = vehicleConstructor('sedan', 4, 5);

// sedan.makeNoise('Honk! Honk!')

// // console.log(sedan, sedan.makeNoise)

// var bus = vehicleConstructor('bus', 4, 0);
// bus.pickUpPassengers = function(new_passengers){
// 	bus.number_of_passengers += new_passengers;
// }
// bus.dropOffPassengers = function(num){
// 	bus.number_of_passengers -= num;
// }

// console.log(bus.number_of_passengers);
// bus.pickUpPassengers(23);
// console.log(bus.number_of_passengers);
// bus.dropOffPassengers(20);
// console.log(bus.number_of_passengers);










function vehicleConstructor(name,number_of_wheels,number_of_passengers, speed){
	var distance_traveled = 0;
	var self = this;
	var updateDistance = function(){
		distance_traveled += self.speed;
		console.log(distance_traveled);
	}
	this.name = name;
	this.number_of_wheels = number_of_wheels;
	this.number_of_passengers = number_of_passengers;
	this.speed = speed;
	this.makeNoise = function(parm){
		console.log(parm);
	};
	this.move = function(){
		updateDistance();
		this.makeNoise("honk");
	}
	this.check_miles = function(){
		console.log(distance_traveled);
	}

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

// var car = new vehicleConstructor('car', 4, 1, 100);
// car.move();

// console.log(bus.number_of_passengers);
// bus.pickUpPassengers(23);
// console.log(bus.number_of_passengers);
// bus.dropOffPassengers(20);
// console.log(bus.number_of_passengers);



class Rectangle{
	constructor(height, width){
		this.height = height;
		this.width = width;
	}
}

var rec = new Rectangle(2, 1);
console.log(rec.width)