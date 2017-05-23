 var app = angular.module('myApp', ['ngRoute','ngMessages']);
app.config(function($routeProvider){
  $routeProvider
  .when('/players',{
    templateUrl:'partials/players.html',
    controller:'PlayersController as PC'

  })

  .when('/teams', {
    templateUrl:'partials/teams.html',
      controller:'TeamController'
  })
  .when('/associations',{
    templateUrl:'partials/associations.html',
    controller:'AssociationsController'
  })
  .when('/:teamname',{
    templateUrl: 'partials/team_show.html',
    controller:'tController'
  })
  .when('/players/:name',{
    templateUrl:'partials/player_show.html',
    controller:'PlayersController as PC'
  })
  .otherwise('/players',{
    redirectTo :'/players'
  })

})
