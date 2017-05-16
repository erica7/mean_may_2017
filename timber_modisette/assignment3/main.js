function RunningLogger(){
	var run = "i am running"
	console.log(run)
}

RunningLogger();

function multiplyByTen(num){
	num = num * 10;
	return num;
}

var number = multiplyByTen(5)
console.log(number)


function stringReturnOne(){
	return "The end is Nigh"
}

function stringReturnTwo(){
	return " so, Dream."
}

var end = stringReturnOne();
var Dream = stringReturnTwo();

// console.log(end, Dream)


function caller(parm){
	if( typeof(parm) == "function" ){
		console.log('is function')
	}
	else{
		console.log('not function')
	}
}


// caller("hello")
// caller(stringReturnTwo())
// caller(stringReturnTwo)

function myDoubleConsoleLog(parm1, parm2){
	if(typeof(parm1) == 'function' && typeof(parm2) == 'function'){
		
		console.log(parm1());
		console.log(parm2());

	}

}
myDoubleConsoleLog(stringReturnOne,stringReturnTwo)



function caller2(parm){
  console.log('starting');
  var x = setTimeout(function(){
    if (typeof(parm)=='function'){
      
      parm(stringReturnOne, stringReturnTwo);
    }
  }, 2000);
  console.log('ending');
  return "interesting";
}
caller2(myDoubleConsoleLog);