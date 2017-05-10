// function Deck(){

class Deck {
  constructor(){

    this.makeDeck();

    // this.deck = this.makeDeck();

  }

}

Deck.prototype.makeDeck = function(){

  var suits = ['Spade', 'Heart', 'Club', 'Diamond'];
  var cards = ['A','2','3','4','5','6','7','8','9','10','J','Q','K']
  this.deck = [];

  for (var i=0; i<suits.length; i++){
    for (var j=0; j<cards.length; j++){
      this.deck.push(cards[j]+suits[i]);
    }
  }

  return this;
}

Deck.prototype.shuffle = function(){
  var m = this.deck.length, t, i;

  // While there remain elements to shuffle…
  while (m) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = this.deck[m];
    this.deck[m] = this.deck[i];
    this.deck[i] = t;
  }

  return this.deck;
}

Deck.prototype.reset = function(){
  this.makeDeck();
}

Deck.prototype.deal = function(){
  return this.deck.pop();
}

// myDeck = new Deck;
// console.log(myDeck);
// myDeck.shuffle();
// console.log(myDeck);
// console.log(myDeck.deal());
// console.log(myDeck);
// myDeck.reset();
// console.log(myDeck);


class Player {
  constructor(name){
    this.name = name;
    this.hand = [];
  }
}

Player.prototype.take = function(deck){
  this.hand.push(deck.deal());
  return this;
}

Player.prototype.discard = function(){
  this.hand.pop();
  return this;
}

myPlayer = new Player("Shizan");
console.log(myPlayer.hand);
myDeck = new Deck;
myDeck.shuffle();
myPlayer.take(myDeck).take(myDeck).take(myDeck);
console.log(myPlayer);
myPlayer.discard().discard();
console.log(myPlayer);
