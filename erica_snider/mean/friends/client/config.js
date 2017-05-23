var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider){
  $routeProvider
  .when('/', {
    templateUrl: '/partials/index.html',
    controller: 'FriendsController as FC'
  })
  .when('/new', {
    templateUrl: '/partials/new.html',
    controller: 'FriendsController as FC'
  })
  // .when('/edit', {
  //   templateUrl: '/partials/edit.html',
  //   controller: 'FriendsController as FC'
  // })
  .when('/friends/:id/edit', {
    templateUrl: '/partials/edit.html',
    controller: 'FriendsController as FC'
  })
  // .when('/show', {
  //   templateUrl: '/partials/show.html',
  //   controller: 'FriendsController as FC'
  // })
  .when('/friends/:id', {
    templateUrl: '/partials/show.html',
    controller: 'FriendsController as FC'
  })
  .otherwise({ redirectTo: '/' })
})
