var x = [3,5,"Dojo","rocks", "Michael", "SENSEI"]
for(var i = 0; i < x.length; i++){
  console.log(x[i]);
}
x.push(100);
x.push(["hello","world", "javascript is Fun"]);
console.log(x);

 var sum = 0;
for(var i=1;i<500; i++){
  sum+=i;
}
console.log(sum);

var arr = [1,5,90,25,-3,0];
var min = arr[0];
 var Sum = 0;
for(var j = 0; j <arr.length;j++){
  if(arr[j] < min){
    min = arr[j];

  }
    Sum +=arr[j];
}
console.log(min,Sum/arr.length);


var newNinja = {
 name: 'Jessica',
 profession: 'coder',
 favorite_language: 'JavaScript', //like that's even a question!
 dojo: 'Dallas'
}

for(var key in newNinja){
  if (newNinja.hasOwnProperty(key)) {
    console.log(key);
    console.log(newNinja[key]);
  }
}
