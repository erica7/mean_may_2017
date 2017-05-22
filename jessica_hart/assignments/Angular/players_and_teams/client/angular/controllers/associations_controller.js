app.controller('AssociationsController', function(playerFactory, teamFactory) {
  var self = this
  self.players = []
  self.teams = []

  self.playersIndex = function() {
    playerFactory.index(function(players) {
      self.players = players
      self.dropdownReset()
    })
  }

  self.teamsIndex = function() {
    teamFactory.index(function(teams) {
      self.teams = teams
      self.dropdownReset()
    })
  }

  self.dropdownReset = function() {
    self.assocTeam = self.teams[0]
    self.assocPlayer = self.players[0]
  }

  self.createAssociation = function(player, team) {
    playerFactory.createAssociation(player, team, function() {
      self.dropdownReset()
    })
  }

  self.deleteAssociation = function(player) {
    playerFactory.deleteAssociation(player, function() {
      // self.playersIndex()
    })
  }
})
