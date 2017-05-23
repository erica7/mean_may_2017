app.controller('PlayersController', function(playerFactory, $routeParams, $location) {
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

  self.show = function() {
    playerFactory.showPlayer($routeParams.name, function(player) {
      if (player !== false) {
        self.player = player
      } else {
        $location.url('/players')
      }
    })
  }
})
