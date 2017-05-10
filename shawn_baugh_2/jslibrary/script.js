var _ = {
   map: function(arr, callback) {
     //code here;
     var output = []
     for(var i = 0; i < arr.length; i++){
         output.push(callback(arr[i]));
     }
     return output
   },
   reduce: function(arr, callback) {
     for(var i=0;i < arr.length; i++){
         
     }
   },
   find: function() {
     // code here;
   },
   filter: function() {
     // code here;
   },
   reject: function() {
     // code here;
   }
 }
// you just created a library with 5 methods!
var arr = [1, 2, 3, 4, 5, 6]
var evens = _.map(arr, function(num){ return num * 2; });
console.log(arr);
console.log(evens); // if things are working right, this will return [2,4,6].
