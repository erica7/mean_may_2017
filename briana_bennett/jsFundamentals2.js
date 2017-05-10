var findSum = function(x,y){
	var sum = 0;
	for(var i=x; i<=y; i++){
		sum += i;
	};
	console.log(sum);
}

var findMin = function(arr){
	var min = arr[0];
	for (var i = 0; i<arr.length; i++) {
		if(arr[i] < min){
			min = arr[i];
		}
	} 
	console.log(min);
	}

var findAvg = function(arr){
	var sum = 0;
	for (var i = 0; i < arr.length; i++) {
		sum += arr[i];
	}
	var avg = sum/(arr.length);
	console.log(avg)
}



myObj = {
	sum: findSum,
	min: findMin,
	avg: findAvg
}

person = {
	name: "briana",
	distance_traveled: 0,
	say_name: console.log(this.name),
	say_something: function(string){
		console.log(this.name + ' says ' + string) 
	},
	walk: function(){
		console.log(this.name + 'is walking')
		this.distance_traveled += 3
	},
	run: function(){
		console.log(this.name + 'is running')
		this.distance_traveled += 10
	},
	crawl: function(){
		console.log(this.name + 'is crawling')
		this.distance_traveled += 1
	}
}

