var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
	.when('/',{
		templateUrl: 'partials/partials1.html',
		controller: 'PlayerController as PC'
	})
	.when('/partials2',{
		templateUrl: 'partials/partials2.html',
		controller: 'TeamController as TC'
	})
	.when('/partials3',{
		templateUrl: 'partials/partials3.html'
	})
	.otherwise({redirectTo:'/'})


});
////////////////PLAYER FACTORY////////////////////////////////
app.factory('PlayerFactory', function(){
	let factory = {};
	let players = [];

	factory.createPlayer = function(player, callback){
		// console.log(player);
		players.push(player);
		callback();
	}
	factory.getPlayers = function(callback){
		callback(players)
	}
	factory.removePlayer = function(player,callback){
		let i = players.indexOf(player);
		players.splice(i,1);
		callback();
	}
	factory.AddPlayerToTeam = function(newAssociation, callback){
		console.log(newAssociation)
		for(var i = 0; i<players.length; i++){
			if(players[i].name == newAssociation.player.name){
				players[i].team = newAssociation.team;
			}
		}
		callback();
		
	}
	return factory;
})
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

///////////////////PLAYER CONTROLLER///////////////////////////////////
app.controller('PlayerController', function(PlayerFactory){
	let self = this;
	self.players = [];

	
	self.getPlayers = function(){
		PlayerFactory.getPlayers(function(players){
			self.players = players;
		})
	}
	self.createPlayer = function(player){
		// console.log(player)
		PlayerFactory.createPlayer(player, function(){
			self.getPlayers();
			self.player = {};
		})
	}
	self.removePlayer = function(player){
		PlayerFactory.removePlayer(player, self.getPlayers);
	}
})
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

