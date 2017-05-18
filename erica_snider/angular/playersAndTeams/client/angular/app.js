var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider){
  $routeProvider
    .when('/players', {
      templateUrl: "/partials/players.html",
      controller: "PlayersController as PC"
    })
    .when('/teams', {
      templateUrl: "/partials/teams.html",
      controller: "TeamsController as TC"
    })
    .when('/associations', {
      templateUrl: "/partials/associations.html",
      controller: "AssociationsController as AC"
    })
  .otherwise({
      redirectTo: '/'
    });
});

app.factory('playerFactory', function(){
  var factory = {};
  factory.players = [
    { name: "Tom" },
    { name: "Dave" },
    { name: "Debbie" },
    { name: "Amy" }
  ];
  factory.index = function(callback){
    callback(factory.players);
  }
  factory.createPlayer = function(newPlayer, callback){
    console.log(newPlayer);
    factory.players.push(newPlayer);
    callback();
  }
  factory.destroyPlayer = function(player, callback){
    var index = factory.players.indexOf(player);
    factory.players.splice(index, 1);
    callback();
  }
  return factory;
})

app.factory('teamFactory', function(){
  var factory = {};
  factory.teams = [
    { name: "Cowboys" },
    { name: "Panthers" },
    { name: "Pirates" },
    { name: "Tigers" },
  ];
  factory.index = function(callback){
    callback(factory.teams);
  }
  factory.createTeam = function(newTeam, callback){
    console.log(newTeam);
    factory.teams.push(newTeam);
    callback();
  }
  factory.destroyTeam = function(team, callback){
    var index = factory.teams.indexOf(team);
    factory.teams.splice(index, 1);
    callback();
  }

  return factory;
})

app.controller('PlayersController', function(playerFactory, $location){
  var self = this;  // captures the value of 'this' at the current scope
  self.players = [];
  self.index = function(){
    playerFactory.index(function(data){
      self.players = data;
    });
  }
  self.createPlayer = function(newPlayer){
    playerFactory.createPlayer(newPlayer, self.index);
    self.newPlayer = {};
    // $location.url('/players');
  }
  self.destroyPlayer = function(player){
    playerFactory.destroyPlayer(player, self.index);
  }
})

app.controller('TeamsController', function(teamFactory, $location){
  var self = this;  // captures the value of 'this' at the current scope
  self.teams = [];
  self.index = function(){
    teamFactory.index(function(data){
      self.teams = data;
    });
  }
  self.createTeam = function(newTeam){
    teamFactory.createTeam(newTeam, self.index);
    self.newTeam = {};
    // $location.url('/teams');
  }
  self.destroyTeam = function(team){
    teamFactory.destroyTeam(team, self.index);
  }
})

app.controller('AssociationsController', function(playerFactory, teamFactory, $location){
  var self = this;
  self.players = [];
  self.teams = [];
  self.associations = [];
  self.index = function(){
    playerFactory.index(function(data){
      self.players = data;
    });
    teamFactory.index(function(data){
      self.teams = data;
    });
  }
  self.createAssociation = function(newAssociation){
    self.associations.push({ player: newAssociation.player, team: newAssociation.team })
    console.log(self.associations);
  }
  self.destroyAssociation = function(association){
    var index = self.associations.indexOf(association);
    self.associations.splice(index, 1);
  }
})
