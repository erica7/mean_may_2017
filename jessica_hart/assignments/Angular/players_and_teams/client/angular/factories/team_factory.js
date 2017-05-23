app.factory('teamFactory', function() {
  var factory = {}

  factory.teams = [
    {name: 'Fnatic'},
    {name: 'Moscow Five'},
    {name: 'Taipei Assassins'},
    {name: 'KOO Tigers'}
  ]

  factory.index = function(callback) {
    callback(this.teams)
  }

  factory.create = function(newTeam, callback) {
    this.teams.push(newTeam)
    callback()
  }

  factory.delete = function(team, callback) {
    var index = this.teams.indexOf(team)
    this.teams.splice(index, 1)
    callback()
  }

  return factory
})
