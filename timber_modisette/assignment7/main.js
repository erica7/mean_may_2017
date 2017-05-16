

$(document).ready(function() {

	$('button').click(function(){
	var game = {
	  players: [],
	  addPlayer: function(player){
	  	this.players.push(player)
	  }
	};


	function playerConstructor(name){
	  player = {};
	  player.name = name;
	    player.hand = [];
	  player.addCard = function(){
	  	rand = Math.floor((Math.random() * 811)+1)
		url ="http://pokeapi.co/api/v2/pokemon/"+rand+"/";
		 $.get(
			url,
			function(res){
			    player.hand.push(res);
			},
			'json'
		)
	  };
	  return player;
	};




		player1 = playerConstructor('timber');
		player1.addCard();
		player2 = playerConstructor("MD");
		player2.addCard();
		game.addPlayer(player1);
		game.addPlayer(player2);

		$("body").append(player1.name + " vs " + player1.name);
	});


})







