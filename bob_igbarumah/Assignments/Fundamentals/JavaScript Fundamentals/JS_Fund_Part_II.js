function sum(x,y){
var sum = 0;
for(var i=x;i<y; i++){
 sum+=i;
}
}

function min(arr){
  var min = arr[0];
   //var Sum = 0;
  for(var j = 0; j <arr.length;j++){
    if(arr[j] < min){
      min = arr[j];

    }
      //Sum +=arr[j];
  }
  console.log(min,);

}


function avg(arr){

   var Sum = 0;
  for(var j = 0; j <arr.length;j++){

      Sum +=arr[j];
  }
  var Avg = Sum/arr.length;
  console.log(Avg);
}

//assingned to variables as anonymous functions

var sumxy = function (x,y){
  var sum = 0;
  for(var i=x;i<y; i++){
   sum+=i;
  }

}


var Min = function(arr){

  var min = arr[0];
   //var Sum = 0;
  for(var j = 0; j <arr.length;j++){
    if(arr[j] < min){
      min = arr[j];
    }
      //Sum +=arr[j];
  }
  console.log(min,);
}

var avg = function(arr){
  var Sum = 0;
 for(var j = 0; j <arr.length;j++){

     Sum +=arr[j];
 }
 var Avg = Sum/arr.length;
 console.log(Avg);
}

// Rewriting these as methods of an object

var sum = {
  sumFunc : function (x,y){
                var sum = 0;
                for(var i=x;i<y; i++){
                 sum+=i;
                }

}
}

var Min = {
    MinFunc : function(arr){

            var min = arr[0];
             //var Sum = 0;
            for(var j = 0; j <arr.length;j++){
              if(arr[j] < min){
                min = arr[j];
              }
                //Sum +=arr[j];
            }
            console.log(min,);
          }
}

var avg = {
    AVG :  function(arr){
                    var Sum = 0;
                   for(var j = 0; j <arr.length;j++){

                       Sum +=arr[j];
                   }
                   var Avg = Sum/arr.length;
                   console.log(Avg);
                  }

}


var person = {
    name : "bob",
    distance_travelled : 0,
    say_name : function(){console.log(person.name);},
    say_something: function(param){console.log('${person.name } says:${param}');},
    walk : function() {console.log('${person.name}  is walking'); person.distance_travelled +=3;},
    run : function(){console.log('${person.name} is running'); person.distance_travelled+=10;},
    crawl : function(){console.log('${person.name} is crawling'); person.distance_travelled+=1;}


}
