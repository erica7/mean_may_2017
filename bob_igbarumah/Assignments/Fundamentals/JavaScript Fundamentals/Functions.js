function myFunctionName(firstParameter, secondParameter){
  var myProduct = firstParameter * secondParameter;
  console.log(myProduct);
  return myProduct;
}
myFunctionName(5,14);

var ninja = {
  name:'Susanna',
  MEAN_belt:10,
  iOS_belt:10,
  python_belt:10,
  php_belt:9, // she hadn't mastered deploying yet!
  ruby_belt:9.75 // done in 1.5 hrs though!
}
for (var key in ninja) {
  if (ninja.hasOwnProperty(key)) {
    console.log(key);
    console.log(ninja[key]);
  }
}
