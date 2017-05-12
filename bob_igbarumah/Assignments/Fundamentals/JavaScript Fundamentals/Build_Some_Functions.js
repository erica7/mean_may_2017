function runningLogger(){
  console.log('I am running');
}

runningLogger();

function multiplyByTen(a){
  a = a*10;
  console.log(a);
  return a;

}

multiplyByTen(5);

function stringOne(){
  return('Go');
}

function stringTwo(){
  return('Come');
}

function caller(b){
  if(typeof(b) == 'function'){
    b();
  }

}

function myDoubleConsoleLog(param1, param2){
  if(typeof(param1) == 'function' && typeof(param2) == 'function'){
    var a = param1();
    console.log(a);
    var b = param2();
    console.log(b);
  }
}

function caller2(param1){
  console.log('starting');
  if(typeof(param1) == 'function'){
   param1(stringOne, stringTwo);
    setTimeout(param1,2000);
    console.log("ending");
    return "interesting";
  }
}

caller2(myDoubleConsoleLog);
