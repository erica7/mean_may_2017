
function Deck(){

	this.reset = function(){
	card = []
	var suits = ['spreds', 'hearts', 'diamonds', 'clubs']
	var list = ['ace',2,3,4,5,6,7,8,9,10,'jack','queen','king']

	var path1 = ['s', 'h', 'd', 'c']
	var path2 = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'j', 'q', 'k']


		for(var i=0; i<suits.length; i++){
			for(var j=0; j<list.length;j++){
				var path = 'cards-png/' + path1[i] + path2[j] + '.png'
				card.push(new Card(suits[i], list[j], path))
			}
		}
		console.log('resetting')
	}
	this.reset();
	console.log(card)
	console.log(card.length)
		// $('#cards').append(card.path) 
		el = document.getElementById('cards')
		for(i=0;i<card.length;i++){
			// $('#cards').append('<img src='+card[i].img+'>')
			el.innerHTML = el.innerHTML + '<img src='+card[i].img+'>'
		}

}

Deck.prototype.suffle = function(){
	for (var i = card.length; i; i--) {
        var j = Math.floor(Math.random() * i);
        [card[i - 1], card[j]] = [card[j], card[i - 1]];
    }
    // console.log(card)
}

Deck.prototype.deal = function(player){

	for(var i=0; i<=3;i++){
		rand =Math.floor(Math.random()*card.length)
		player.hand.push(card[rand])
		card.splice(rand,1)

	}
	// console.log(card)
	// console.log(card.length)
}

function Game(){
	this.deck = new Deck()
	console.log(this.deck)
	this.players = [];
	this.resetGame = function(){
		console.log(this.players)
		//reset the deck
		//loop through the players and empty their hands
		el = document.getElementById('players')
		for(i=0;i<this.players.length;i++){
			var player = this.players[i];
			player.hand = [];
			console.log('player:', player)
			el.innerHTML = el.innerHTML + '<p>' + player.name + '</p>'
			// el.innerHTML = el.innerHTML + '<p>' + player.hand + '</p>'

		}
	}
	this.createCharacter = function(player){
		this.players.push(player)
	}
	this.resetGame()
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



var game = new Game()
var player1 = new Player("soikat")
var player2 = new Player("timber")
game.deck.suffle()
// console.log(player1)
// console.log(player2)
// game.deck.deal(player1)
// console.log(player1)
// game.deck.deal(player1)

// game.resetGame()
// console.log(player1)
// console.log(player2)




