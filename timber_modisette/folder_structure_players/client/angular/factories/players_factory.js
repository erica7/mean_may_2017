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
	factory.showPlayer = function(name, callback){
		for(var i = 0; i<players.length; i++){
			if(players[i].name == name){
				callback(players[i]);
				return;
			}
		}
		callback(false)
	}
	return factory;
})