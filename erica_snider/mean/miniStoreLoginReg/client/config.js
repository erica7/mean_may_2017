var app = angular.module('app', ['ngRoute', 'ngCookies']);

app.config(function($routeProvider){
  $routeProvider
  .when('/', {
    templateUrl: '/partials/index.html',
    controller: 'UsersController as UC'
  })
  .when('/dashboard', {
    templateUrl: '/partials/dashboard.html',
    controller: 'UsersController as UC'
    // controller: 'OrdersController as OC'
  })
  .when('/customers', {
    templateUrl: '/partials/customers.html',
    controller: 'UsersController as UC'
    // controller: 'CustomersController as CC'
  })
  .when('/orders', {
    templateUrl: '/partials/orders.html',
    controller: 'UsersController as UC'
    // controller: 'OrdersController as OC'
  })
  .when('/products', {
    templateUrl: '/partials/products.html',
    controller: 'UsersController as UC'
    // controller: 'ProductsController as PC'
  })
  .otherwise({ redirectTo: '/' })
});
