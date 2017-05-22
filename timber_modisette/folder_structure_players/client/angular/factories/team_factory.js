/////////////////////////////team factory///////////////////////////////////
app.factory('TeamFactory', function(){
	let factory = {};
	let teams = [];

	factory.createTeam = function(team, callback){
		// console.log(team);
		teams.push(team);
		callback();
	}
	factory.getTeams = function(callback){
		callback(teams)
	}
	factory.removeTeam = function(team,callback){
		let i = teams.indexOf(team);
		teams.splice(i,1);
		callback();
	}
	return factory;
})