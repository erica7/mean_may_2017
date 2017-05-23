app.controller('TeamsController', function(teamFactory) {
  var self = this

  self.index = function() {
    teamFactory.index(function(teams) {
      self.teams = teams
    })
  }

  self.create = function(newTeam) {
    teamFactory.create(newTeam, function() {
      self.newTeam = {}
      self.index()
    })
  }

  self.delete = function(team) {
    teamFactory.delete(team, function() {
      self.index()
    })
  }
})
