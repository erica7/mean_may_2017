// Basic: Make a function that can be used anywhere in your file 
// and that when invoked will console.log('I am running!'); Give it the name runningLogger.

// function runningLogger(){
// 	console.log("I am Running!")
// }
// runningLogger();

// Basic: Make a function that is callable, has one parameter and multiplies the value of the 
// parameter by 10 before returning the result. Give it the name multiplyByTen. Invoke it, passing it the argument 5.

// function multiplyByTen(val){
// 	result = val * 10;
// 	console.log(result);
// }
// multiplyByTen(5);

// Basic: Write two functions (stringReturnOne and stringReturnTwo) that each return a different hard-coded string

// function stringReturnOne() {
// 	return "James";
// }

// function stringReturnTwo() {
// 	return "Kelley";
// }

// console.log(stringReturnOne());
// console.log(stringReturnTwo());


// Write a function named caller that has one parameter. If the argument provided to caller is a function 
// (typeof may be useful), invoke the argument. Nothing is returned.

// function caller(someParam) {
// 	if (typeof someParam === "function"){
// 		console.log("It's a function!");
// 		someParam();
// 	}
// }
// caller(function(){
// 	console.log("Hey there")
// });

// function someFunc(){
// 	console.log("Hey there, I am a function!")
// }


// Write a function named myDoubleConsoleLog that has two parameters. if the arguments passed to the 
// function are functions, console.log the value that each function returns when invoked


function myDoubleConsoleLog(param1, param2){
	if(typeof(param1) === "function"){
		console.log(param1())

	}
	if(typeof(param2) === "function"){
		console.log(param2())
		
	}
}

function returnFive(){
	return "5";
}

function returnHello(){
	return "hello";
}

// Write a function named caller2 that has one parameter. Have it console.log the string 
// 'starting', wait 2 seconds, and then invokes the argument if the argument is a function. 
// (setTimeout may be useful for this one.) The function should then console.log ‘ending?’ and 
// return “interesting”. Invoke this function by passing it myDoubleConsoleLog.

function caller2(someParam){
	console.log("Starting...")
	setTimeout(function(){
		if(typeof someParam === "function"){
			console.log("About to invoke a function")
			someParam(returnFive, returnHello);
		}
	}, 2000);
	console.log("Ending?")
	return "interesting";

}
console.log(caller2(myDoubleConsoleLog));

