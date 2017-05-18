var app = angular.module('app', ['ngRoute'])

//setting up routes
app.config(function($routeProvider){
	$routeProvider
	.when('/players', {
		templateUrl : 'partials/players.html',
		controller : 'PlayersController'
	})
	.when('/teams', {
		templateUrl : 'partials/teams.html',
		controller : 'TeamsController'
	})
	.when('/associations',{
		templateUrl : 'partials/associations.html',
		controller : 'AssociatinsController'
	})
	.otherwise({
		redirect : '/'
	})
})
//*******************************************************
//player factory
app.factory('PlayerFactory', function(){
	var factory = {}
	var players = [
			{name: 'Md'},
			{name: 'timber'}
		]
	factory.createPlayer = function(newPlayer, callback){
		players.push(newPlayer);
		callback();
	}

	factory.getPlayers = function(callback){
		callback(players)
	}

	factory.deletePlayer = function(player, callback){
		var i = players.indexOf(player)
		players.splice(i,1)
		callback()
	}

	factory.addPlayerToTeam = function(data){
		// console.log(players[data.playerIdx])
		console.log(data.player)
		console.log(players.indexOf(data.player))
		players[players.indexOf(data.player)].team = data.team
		console.log(players)
	}

	factory.removePlayerFormTeam = function($index){
		players[$index].team = ""
	}


	return factory;
})

app.factory('TeamFactory', function(){
	var factory = {}
	var teams = [
		{name: 'PCC'},
		{name: 'RR'}
	]

	factory.createTeam = function(newTeam, callback){
		teams.push(newTeam)
		callback()
	}

	factory.getTeams = function(callback){
		callback(teams);
	}

	factory.deleteTeam = function(team, callback){
		var i=teams.indexOf(team);
		teams.splice(i,1);
		callback();
	}
	return factory;
})

//*******************************************************

//player controller
app.controller('PlayersController', function($scope, PlayerFactory){
	$scope.players = []

	$scope.createPlayer = function(newPlayer){
		console.log(newPlayer)
		PlayerFactory.createPlayer(newPlayer, function(){
			$scope.getPlayers();
			$scope.newPlayer = {};
		})
	}

	$scope.getPlayers = function(){
		PlayerFactory.getPlayers(function(players){
			$scope.players = players;
		})
	}

	$scope.deletePlayer = function(player){
		PlayerFactory.deletePlayer(player, $scope.getPlayers)
	}
})

//teams controller
app.controller('TeamsController', function($scope, TeamFactory){
	$scope.teams = []

	$scope.createTeam = function(newTeam){
		console.log(newTeam)
		TeamFactory.createTeam(newTeam, function(){
			$scope.getTeams()
			$scope.newTeam = {}
		})
	}

	$scope.getTeams = function(){
		TeamFactory.getTeams(function(teams){
			$scope.teams = teams;
		})
	}
	$scope.deleteTeam = function(team){
		TeamFactory.deleteTeam(team,$scope.getTeams)
	}
})


//associations controller
app.controller('AssociatinsController', function($scope, TeamFactory, PlayerFactory){
	// $scope.teams
	// $scope.players
	// $scope.assignplayers = {} 
	$scope.getTeams = function(){
		TeamFactory.getTeams(function(teams){
			$scope.teams = teams;
			console.log($scope.teams)
		})
	}

	$scope.getPlayers = function(){
		PlayerFactory.getPlayers(function(players){
			$scope.players = players;
			console.log($scope.players)
		})
	}

	$scope.addPlayerToTeam = function(objects){
		PlayerFactory.addPlayerToTeam(objects)
	}

	$scope.removePlayerFormTeam = function($index){
		PlayerFactory.removePlayerFormTeam($index);
	}

})



