function VehicleConstructor(name, num_of_wheels, num_of_passengers, speed, vin){

    this.name =  name;
    this.num_of_wheels = num_of_wheels;
    this.num_of_passengers = num_of_passengers;
    this.speed = speed;
    this.Distance_Traveled = 0;
    this.vin = Math.floor(Math.random() * 100000000000000000);
}
// ************* METHODS ****************
// make noise method
VehicleConstructor.prototype.makeNoise = function () {
    console.log("I'm makeing noise!");
};
// update distance traveled method
VehicleConstructor.prototype.updateDistanceTraveled = function () {
    for(var i = 0; i < this.speed; i++){
        this.Distance_Traveled++
    }
    return this.Distance_Traveled
};
// move method
VehicleConstructor.prototype.move = function () {
    this.updateDistanceTraveled();
    this.makeNoise();
    console.log(this.Distance_Traveled);
    return this
};
// check miles
VehicleConstructor.prototype.checkMiles = function () {
    console.log(Distance_Traveled);
    return this.Distance_Traveled
};
// get distance traveled method
VehicleConstructor.prototype.getDistanceTraveled = function () {
    return this.Distance_Traveled
};
// *************** END METHODS ***************

// Bike
var Bike = new VehicleConstructor('mongoose', 2, 1, 10, this.vin);
Bike.move().move()
console.log(Bike.vin);
console.log(Bike.Distance_Traveled);
// var bike = new VehicleConstructor('mongoose', 2, 2, )
// Bike.makeNoise();
// Bike.move();
// console.log(Bike.getDistanceTraveled());
// // sedan
// var Sedan = new VehicleConstructor('q50', 4, 5);
// Sedan.makeNoise = function() {
//     console.log('Honk honk in the thong thong')
// }
// Sedan.makeNoise();
// // bus
// var Bus = new VehicleConstructor('Tour Bus', 10, 20);
// for (var i = 0; i < Bus.num_of_passengers; i++){
//    Bus.num_of_passengers + i
// }
// Bus.makeNoise();
// console.log('Ho Ho in the...');
// console.log(Bus.num_of_passengers);
