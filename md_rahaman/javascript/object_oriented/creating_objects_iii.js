
function VehicleConstructor(name, number_of_wheels, number_of_passengers,speed){
	if (!(this instanceof VehicleConstructor)){
    	return new VehicleConstructor(name,number_of_wheels,number_of_passengers, speed);
  	}

  	//private
  	var distance_travelled = 0;
  	var self = this;
	var updateDistanceTravelled = function(){
		distance_travelled += self.speed
		console.log(distance_travelled)
	}

	this.name = name;
	this.number_of_wheels = number_of_wheels;
	this.number_of_passengers = number_of_passengers;
	this.speed = speed || 0;
}

VehicleConstructor.prototype.move = function(){
	this.makeNoise();
	updateDistanceTravelled();
	return this;
}

VehicleConstructor.prototype.checkMiles = function(){
	console.log(distance_travelled)
}

VehicleConstructor.prototype.makeNoise = function(){
	console.log('honk honk')
}

VehicleConstructor.prototype.vinNum = function(){
	vinnum = Math.random().toString(36)
	console.log(vinnum)
}



var car = VehicleConstructor('car', 4, 4,80)
console.log(car)









