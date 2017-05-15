
function VehicleConstructor(name, number_of_wheels, number_of_passengers){

	var vehicle = {}  //this will e returned

	vehicle.name = name;
	vehicle.number_of_wheels = number_of_wheels;
	vehicle.number_of_passengers = number_of_passengers;

	vehicle.makeNoise = function(type){
		if(type == 'bike'){
			console.log('ring ring')
		}
		if(type == 'sedan'){
			console.log('honk')
		}

		if(type == 'bus'){
			console.log('honk')
		}

	}

	return vehicle;
}


var car = VehicleConstructor("Mazda6", 4, 4)
var bike = VehicleConstructor("honda", 2, 2)
bike.makeNoise('bike')
var sedan = VehicleConstructor("sedan", 4, 4)
sedan.makeNoise('sedan')
var bus = VehicleConstructor("bus", 6, 0)

bus.pickupPassengers = function(newpassengers){
	bus.number_of_passengers+=newpassengers;
}
console.log(bus.number_of_passengers);
bus.pickupPassengers(10)
console.log(bus.number_of_passengers);








