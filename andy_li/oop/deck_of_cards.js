function Card(value, suit){
	this.value = value;
	this.suit = suit;
}

function Deck(){
	this.values = ['A','2','3','4','5','6','7','8','9','10','J','Q','K'];
	this.suits = ['hearts', 'diamonds', 'spades', 'clubs'];
	this.cards = [];

  	this.reset = function(){
  		this.cards = [];
  		for(var s = 0; s < this.suits.length; s++){
	  		for(var v = 0; v < this.values.length; v++){
	  			var card = new Card(this.values[v], this.suits[s]);
	  			this.cards.push(card);
	  		}
  		}
  	}
  	this.reset()

	this.shuffle = function(){
		var m = this.cards.length, temp, i;

		// While there remain elements to shuffle…
		while(m) {

		// Pick a remaining element…
		i = Math.floor(Math.random() * m--);

		// And swap it with the current element.
		temp = this.cards[m];
		this.cards[m] = this.cards[i];
		this.cards[i] = temp;
		}

		return this.cards;
	}

	this.deal = function(){
		this.shuffle();
		var card_dealt = this.cards.pop();
		// return this;
		return card_dealt;
	}
}


function Player(name){
	var self = this;
	this.name = name;
	this.hand = [];

	this.takeCard = function(deck){
		this.hand.push(deck.deal());
		return this.hand;
	}

	this.discard = function(){
		this.hand.pop();
		return this.hand;
	}
}

var deck1 = new Deck();
console.log(deck1.shuffle());
console.log(deck1.deal());

var player = new Player('rob');
console.log(player.takeCard(deck1));
console.log(player.discard())
console.log(deck1);
