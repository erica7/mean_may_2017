app.controller('AssociationsController', function(TeamFactory,PlayerFactory){
	let self = this;
	self.players = [];
	self.teams = [];

	self.getTeams = function(){
		TeamFactory.getTeams(function(teams){
			self.teams = teams;
		})
	}

	self.getPlayers = function(){
		PlayerFactory.getPlayers(function(players){
			self.players = players;
		})
	}
	self.AddPlayerToTeam = function(newAssociation){
		PlayerFactory.AddPlayerToTeam(newAssociation, function(){
			self.newAssociation = {};
			self.getPlayers();
		});
	}


})