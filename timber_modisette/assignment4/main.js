
// function sumXY(x, y) {
//     var sum = 0;
//     for (var i = x; i < y + 1; i++) {
//         sum += i;
//     }
//     return sum;
// }

// var one = sumXY(3,5);
// console.log(one)


// function findMin(arr) {
//     if (arr) {
//         var min = arr[0];
//         for (var i = 1; i < arr.length; i++) {
//             if (arr[i] < min) {
//                 min = arr[i];
//             }
//         }
//         return min;
//     }
// }

// var two = findMin([1,3,2,1,5]);
// console.log(two)


// function findAvg(arr) {
//     var sum = 0;
//     for (var i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum / arr.length;
// }

// var three = findAvg([3,3,3]);
// console.log(three)









// var sumXY = function (x, y) {
//     var sum = 0;
//     for (var i = x; i < y + 1; i++) {
//         sum += i;
//     }
//     return sum;
// }




// var findMin = function (arr) {
//     if (arr) {
//         var min = arr[0];
//         for (var i = 1; i < arr.length; i++) {
//             if (arr[i] < min) {
//                 min = arr[i];
//             }
//         }
//         return min;
//     }
// }



// var findAvg = function (arr) {
//     var sum = 0;
//     for (var i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum / arr.length;
// }



// console.log(sumXY(3,5));
// console.log(findMin([3,5,1]));
// console.log(findAvg([3,5,1]));


// var myObject = {
// 	sumXY: function (x, y) {
// 		var sum = 0;
// 		for (var i = x; i < y + 1; i++) {
//         sum += i;
//     }
//     return sum;
// },
// 	findMin: function(arr){
// 		var min = arr[0];
// 		for (var i = 1; i < arr.length; i++){
// 			if (arr[i] < min){
// 				min = arr[i];
// 			}
// 		}
// 		return min;
// 	},

// 	findAvg: function(arr){
// 		var sum =0;
// 		for (var i = 0; i < arr.length; i++){
// 			sum += arr[i];
// 		}
// 		return sum / arr.length;
// 	}
 
// }

// console.log(myObject.sumXY(0,2));



var person = {
	name: 'Timber',
	distance_traveled: 0,
	say_name : function(){
		console.log(person.name);
	},
	say_something : function(parm){
		console.log(`${person.name} says: ${parm}`);
	},
	walk : function(){
		console.log(`${person.name} is walking`);
		person.distance_traveled += 3;
		return person;
	},
	run : function(){
		console.log(`${person.name} is running`);
		person.distance_traveled += 10;
		return person
	},
	crawling : function(){
		console.log(`${person.name} is crawling`);
		person.distance_traveled += 1;
		return person
	}
	
}
console.log(person.distance_traveled)
person.say_name()
person.say_something('is awesome')
person.walk()
console.log(person.distance_traveled)
person.run()
console.log(person.distance_traveled)
person.crawling()
console.log(person.distance_traveled)

person.walk().run().run().crawling();
console.log(person.distance_traveled)



