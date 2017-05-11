	$(document).ready(function(){
function Game(){
	this.player = [];
	this.deck = new Deck();
	this.shuffle = function(){
		for(var i = this.deck.card.length; i; i--){
			var j = Math.floor(Math.random() * i);
			[this.deck.card[i - 1], this.deck.card[j]] = [this.deck.card[j], this.deck.card[i-1]];

		}
	}
	this.shuffle();
	this.addplayer = function(player){
		this.player.push(player);
	}
	this.reset = function(){
		this.player = [];

	}

}



function Deck(){
	var self = this;
	this.deck = [];
	var suits = ['diamond', 'spade', 'heart', 'club'];
	var list = ['ace',2,3,4,5,6,7,8,9,10,'jack','king','queen'];
	var path1 = ['d', 's', 'h', 'c'];
	var path2 = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'j', 'k', 'q'];
	this.card = [];
	this.reset = function(){
		for(var i = 0; i < suits.length; i++){
			for(var j = 0; j < list.length; j++){
				var path = 'cards-png/' + path1[i] + path2[j] + '.png';
				this.card.push(new Card(suits[i], list[j], path ))
			}
		}

	}

	this.reset();
	console.log('card:', self.card);

		for(var i = 0; i < self.card.length; i++){
			$('#cards').append('<img src=' + self.card[i].img + '>')
		}
}



Deck.prototype.deal = function(player){
	for(var i = 0; i <= 6; i++){
		rand = Math.floor(Math.random() * this.card.length);
		player.hand.push(this.card[rand]);
		this.card.splice(rand,1)
	}
	console.log(this.card.length)
}



function Card(suit, val, img_path){
	this.suit = suit;
	this.val = val;
	this.img = img_path;
}

function Player(name){
	this.name = name;
	this.hand = [];
	
}

Player.prototype.clear = function(){
	this.hand = [];
}


var game = new Game()
player1 = new Player('MD');
player2 = new Player('Piff');
game.addplayer(player1);
game.addplayer(player2);

console.log(player1.hand);
console.log(player2.hand);
console.log(game.player);

game.reset();
})










		



	

