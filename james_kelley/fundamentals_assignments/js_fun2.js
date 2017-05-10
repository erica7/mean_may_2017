// Create a simple for loop that sums all the integers between x and y (inclusive). Have it console log the final sum.

// function sumXY(x, y) {
//     var sum = 0;
//     for (var i = x; i < y + 1; i++) {
//         sum += i;
//     }
//     return sum;
// }
// console.log(sumXY(2,10));

// Write a loop that will go through an array, find the minimum value, and then return it

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
// console.log(findMin([2,4,6,8]));


// Write a loop that will go through an array, find the average of all of the values, and then return it

// function findAvg(arr) {
//     var sum = 0;
//     for (var i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum / arr.length;
// }
// console.log(findAvg([8,9,6]));

// Anonymous functions assigned to variables.

// var sumXY = function(x, y) {
//     var sum = 0;
//     for (var i = x; i < y + 1; i++) {
//         sum += i;
//     }
//     return sum;
// };
// console.log(sumXY(0,2));

// var findAvg = function(arr) {
//     var sum = 0;
//     for (var i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum / arr.length;
// };

// console.log(findAvg([4,5,6,7]));

// var findMin = function findMin(arr) {
//     if (arr) {
//         var min = arr[0];
//         for (var i = 1; i < arr.length; i++) {
//             if (arr[i] < min) {
//                 min = arr[i];
//             }
//         }
//         return min;
//     }
// };

// console.log(findMin([-1,3,4,5,6]));

// var myObject = {
//     sumXY: function(x, y) {
//         var sum = 0;
//         for (var i = x; i < y + 1; i++) {
//             sum += i;
//         }
//         return sum;
//     }, //end sumXY

//     findAvg: function(arr) {
//         var sum = 0;
//         for (var i = 0; i < arr.length; i++) {
//             sum += arr[i];
//         }
//         return sum / arr.length;
//     }, //end findAvg

//     findMin: function findMin(arr) {
//         if (arr) {
//             var min = arr[0];
//             for (var i = 1; i < arr.length; i++) {
//                 if (arr[i] < min) {
//                     min = arr[i];
//                 }
//             }
//             return min;
//         }
//     } // end find min
// } //end object
// console.log(myObject.sumXY(0,2));

// /*
// This is a basic person object, declared as an object literal, it has
//   properties: name, distanceTraveled,
//   methods: aayName, saySomething, walk, run, crawl
//   "DON'T FORGET THE COMMAS AFTER EACH METHOD/PROPERTY"
// */

var person = {
  name : "Charlie",
  distance_traveled : 0,
  say_name : function(){
    console.log(person.name);
  },
  say_something : function(phrase){
    console.log(`${person.name} says: ${phrase}`);
  },
  walk : function(){
    console.log(`${person.name} is walking!`);
    person.distance_traveled += 3;
    return person;
  },
  run : function(){
    console.log(`${person.name} is running!`);
    person.distance_traveled += 10;
    return person;
  },
  crawl : function(){
    console.log(`${person.name} is crawling!`);
    person.distance_traveled += 1;
    return person;
  }
}

console.log(person.distance_traveled);
person.walk();
person.run();
person.crawl();
console.log(person.distance_traveled);


// person.walk().run().crawl() This works because of return