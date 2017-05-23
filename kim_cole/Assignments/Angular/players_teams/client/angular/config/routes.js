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

