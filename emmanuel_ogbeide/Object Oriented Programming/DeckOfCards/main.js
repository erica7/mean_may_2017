
var self = this
var suit = ['Spade', 'Heart', 'Diamond', 'Club'];
var cards = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];
var deck = []

function GameConstructor(name){
  if (!(this instanceof GameConstructor)) {
   return new GameConstructor(name);
  }


  this.deck = DeckConstructor.call().create()
  this.name = name;
  this.players = [];
  this.addplayer = function(name){
   var player = new PlayerConstructor(name)
   this.players.push(player)
   return player
  }
  return this
}

function DeckConstructor(){
  if (!(this instanceof DeckConstructor)) {
   return new DeckConstructor();
  }

  this.create = function(){
    if (deck.length > 0){
      return deck
    }
    else {
      for (var i = 0; i < suit.length; i++) {
        for (var j = 0; j < cards.length; j++) {
          deck.push([suit[i], cards[j]])
        }
      }
    }
    self.shuffle()
    return deck
  }

  self.shuffle = function(){
    var m = deck.length, t, i;
    while (m) {
      i = Math.floor(Math.random() * m--);
      t = deck[m];
      deck[m] = deck[i];
      deck[i] = t;
    }
    return deck;
  }
  self.reset = function(){
    deck = [];
    for (var player in players) {
      player[hand] = []
    }
    self.create()
  }
}


function PlayerConstructor(name){
  if (!(this instanceof PlayerConstructor)) {
   return new PlayerConstructor(name);
  }
  this.name = name;
  this.hand = [];
  var value = 0;

  this.discard = function(card){
    DeckConstructor.call().deck.push(card);
    hand.splice(hand.indexOf(card));
  }
  this.deal = function(){
    var temp = DeckConstructor.call().deck.pop()
    console.log(DeckConstructor.call().deck.pop())
    this.hand.push(temp);
    var updatescore = function(){  }
  }
}
