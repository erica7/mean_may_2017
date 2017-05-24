var app = angular.module('app', ['ngRoute', 'ngCookies']);

app.config(function($routeProvider){
  $routeProvider
  .when('/', {
    templateUrl: '/partials/index.html',
    controller: 'UsersController as UC'
  })
  .when('/dashboard', {
    templateUrl: '/partials/messages.html',
    controller: 'UsersController as UC'
  })
  .otherwise({ redirectTo: '/' })
})
