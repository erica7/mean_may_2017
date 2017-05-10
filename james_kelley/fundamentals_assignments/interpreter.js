// example 
//declarations get hoisted*

// var hello = "interesting";
// function example() {
//   var hello = "hi!";
//   console.log(hello);
// }
// example();
// console.log(hello);


// //example answer

// var hello;
// function example(){
// 	var hello;
// 	hello = "hi";
// 	console.log(hello);
// }

//assignments and invocation maintain order*

// hello = "interesting";
// example();
// console.log(hello);


//problem 1

// console.log(first_variable);
// var first_variable = "Yipee I was first!";
// function firstFunc() {
//   first_variable = "Not anymore!!!";
//   console.log(first_variable);
// }
// console.log(first_variable);


//problem 1 answer

// var first_variable;
// function firstFunc(){
// 	var first_variable;
// 	first_variable = "Not anymore!!!";
// 	console.log(first_variable);
// }
// console.log(first_variable);
// first_variable = "Yipee I was first!";
// console.log(first_variable);


// problem 2

// var food = "Chicken";
// function eat(){
// 	food = "half-chicken";
// 	console.log(food);
// 	var food = "gone";
// 	console.log(food);
// }
// eat();
// console.log(food);

// // problem 2 answer

// var food;
// function eat(){
// 	var food;
// 	food = "half-chicken"
// 	console.log(food);
// 	food = "gone";
// 	console.log(food);

// }
// food = "Chicken";
// eat();
// console.log(food)


// problem 3

// var new_word = "NEW!";
// function lastFunc() {
// 	new_word = "old";
// }
// console.log(new_word);

// // problem 3 answer

// var new_word;
// function lastFunc() {
// 	new_word = "old";
// }
// new_word = "NEW!";
// console.log(new_word);











