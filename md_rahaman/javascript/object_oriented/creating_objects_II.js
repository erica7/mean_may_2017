
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


	this.move = function(){
		this.makeNoise();
		updateDistanceTravelled();
	}	

	this.checkMiles = function(){
		console.log(distance_travelled)
	}

	this.makeNoise = function(type){
		console.log('honk honk')

	}
}


var car = VehicleConstructor('car', 4, 2,40)

car.move()
car.checkMiles()
console.log(car.speed)







