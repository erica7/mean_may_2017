function personConstructor(name){
	return person = {
		name: name,
		distance_traveled: 0,
		say_name: function(){
			console.log(this.name)
		},
		say_something: function(string){
			console.log(this.name + ' says ' + string) 
		},
		walk: function(){
			console.log(this.name + ' is walking')
			this.distance_traveled += 3
		},
		run: function(){
			console.log(this.name + ' is running')
			this.distance_traveled += 10
		},
		crawl: function(){
			console.log(this.name + ' is crawling')
			this.distance_traveled += 1
		}
	}

}

function ninjaConstructor(name, cohort){
	return {
		name: name,
		cohort: cohort,
		belt_level: "yellow",
		level_up: function(){
			if(this.belt_level == 'yellow'){
				this.belt_level = 'red';
			}
			else if(this.belt_level == 'red'){
				this.belt_level = 'black';
			}
			else{
				console.log("cannot level up")
			}
		}
	}
}

var bri = ninjaConstructor('bri', 'uptown');
console.log(bri.belt_level);

