app.factory('playerFactory', function() {
  var factory = {}

  factory.players = [
    {name: 'Enrique Martinez', team: null},
    {name: 'Wang June Tsan', team: null},
    {name: 'Chen Hui Chung', team: null},
    {name: 'Evgeny Mazaev', team: null},
    {name: 'Alexey Ichetovkin', team: null},
    {name: 'Song Kyung-ho', team: {name: 'KT Rolster'}},
    {name: 'Kang Beom-hyeon', team: {name: 'GorillA'}}
  ]

  factory.index = function(callback) {
    callback(this.players)
  }

  factory.create = function(newPlayer, callback) {
    newPlayer.team = null
    this.players.push(newPlayer)
    callback()
  }

  factory.delete = function(player, callback) {
    var index = this.players.indexOf(player)
    this.players.splice(index, 1)
    callback()
  }

  factory.createAssociation = function(player, team, callback) {
    for (var i = 0; i < this.players.length; i++) {
      if (this.players[i].name === player.name) {
        this.players[i].team = team
      }
    }
    callback()
  }

  factory.deleteAssociation = function(player, callback) {
    for (var i = 0; i < this.players.length; i++) {
      if (this.players[i].name === player.name) {
        this.players[i].team = null
      }
    }
    callback()
  }

  factory.showPlayer = function(playerName, callback) {
    for (var i = 0; i < this.players.length; i++) {
      if (this.players[i].name === playerName) {
        callback(this.players[i])
        return
      }
    }
    callback(false)
  }

  return factory
})
