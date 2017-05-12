console.log('I am running from node')

var my_first_variable ;
my_first_variable = "Data";
console.log(my_first_variable);

console.log(a);
var a = "weird";
// Will it throw an error?  What will it print, if it doesn't throw an error?
// How about this?
console.log(typeof(b));
var b = "weird too";
console.log(typeof(b));

var empty_array = [];
var string_array = ["hi", "these", "are", "strings"];
var x  = 15;
console.log("Logging variables to the console", empty_array, string_array, x);
console.log('2nd value of string_array', string_array[1]);
console.log('string_array has a length of', string_array.length);
string_array.push('awesome');
console.log(string_array);
string_array.pop();                // removing the last value in the array
console.log(string_array);   
