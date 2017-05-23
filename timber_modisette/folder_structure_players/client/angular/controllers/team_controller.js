/////////////////////////TEAM CONTROLLER///////////////////////////////////
app.controller('TeamController', function(TeamFactory){
	let self = this;
	self.player = [];


	self.createTeam = function(team){
		TeamFactory.createTeam(team, function(){
			self.getTeams();
			self.team = {};
		})
	}
	self.getTeams = function(){
		TeamFactory.getTeams(function(teams){
			self.teams = teams;
		})
	}
	self.removeTeam = function(team){
		// console.log(team);
		TeamFactory.removeTeam(team, self.getTeams);
	}
})