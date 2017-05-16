var x = [3,5, 'dojo', 'rocks', 'michael', 'sensei']
for(var i = 0; i < x.length; i++){
	document.write(x[i] + " ")
}
x.push(100)
document.write(x)
var new_arr = ['hello', 'world', 'javascript is fun']
x.push(new_arr)
document.write(x)

var sum = 0;
for(var i = 0; i < 501; i++){
	sum = i + sum;
}

var arr = [1, 5, 90, 25, -3, 0];
var min = arr[0];
var sum2 = 0;
for(var i = 0; i < arr.length; i++){
	if(arr[i] < min){
		min = arr[i]
	}
	sum2 = sum2 + arr[i]
}
var avg = sum2/arr.length

var newNinja = {
	name: 'Jessica',
	but: 'fucker'
}

for( key in newNinja){
	console.log(newNinja[key])
}

document.write(sum)
document.write(arr)
document.write(min)
document.write(avg)
console.log('hellow')