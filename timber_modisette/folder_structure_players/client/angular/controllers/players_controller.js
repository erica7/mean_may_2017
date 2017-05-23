///////////////////PLAYER CONTROLLER///////////////////////////////////
app.controller('PlayerController', function(PlayerFactory, $routeParams, $location,){
	let self = this;
	self.players = [];
	self.player = {};

	
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
	self.showPlayer = function(){
		PlayerFactory.showPlayer($routeParams.name, function(player){
			if(player === false){
				$location.url('/partials1')
			}
			else{
				self.player = player;
			}
		})
	}
})