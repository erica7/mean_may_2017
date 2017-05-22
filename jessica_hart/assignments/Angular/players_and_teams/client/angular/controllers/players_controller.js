app.controller('PlayersController', function(playerFactory) {
  var self = this

  self.index = function() {
    playerFactory.index(function(players) {
      self.players = players
    })
  }

  self.create = function(newPlayer) {
    playerFactory.create(newPlayer, function() {
      self.newPlayer = {}
      self.index()
    })
  }

  self.delete = function(player) {
    playerFactory.delete(player, function() {
      self.index()
    })
  }
})
