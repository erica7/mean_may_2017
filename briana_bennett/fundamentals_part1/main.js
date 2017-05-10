var x = [3,5,"Dojo", "rocks", "Michael", "Sensei"]
	for(var i=0; i<x.length; i++){
		console.log(x[i]);
	};
	x.push(100);
	x.push(["hello", "world", "JavaScript is Fun"])
	console.log(x);
	
	function sumToFiveHundred(){
		var sum = 0;
		for(var i=1; i<=500; i++){
			sum += i;
		};
		console.log(sum);
	}

	function findMin(arr){
		var min = arr[0];
		for (var i = 0; i<arr.length; i++) {
			if(arr[i] < min){
				min = arr[i];
			}
		} 
		console.log(min);
	}

	function findAvg(arr){
		var sum = 0;
		for (var i = 0; i < arr.length; i++) {
			sum += arr[i];
		}
		var avg = sum/(arr.length);
		console.log(avg)
	}



var newNinja = {
 name: 'Jessica',
 profession: 'coder',
 favorite_language: 'JavaScript', //like that's even a question!
 dojo: 'Dallas'
}

for(var key in newNinja){
	console.log(key + ":" + newNinja[key]);
}
