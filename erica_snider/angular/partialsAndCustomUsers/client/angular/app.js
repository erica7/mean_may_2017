var angularApp = angular.module('myApp', ['ngRoute']);

angularApp.config(function($routeProvider){
  $routeProvider
    .when('/users',{
      templateUrl: 'partials/customizeUsers.html',
      // controller: "UsersController as <alias, such as UC>"  // once this is here, might not need to add it in partials
      controller: "CustomizeUsersController as CUC"
    })
    .when('/list',{
      templateUrl: 'partials/userList.html',
      controller: "CustomizeUsersController as CUC"
    })
    .otherwise({
      redirectTo: '/'
    });
});

angularApp.factory('userFactory', function(){
  // var self = this;
  var factory = {};
  factory.users = [
    {
      first_name: 'A',
      last_name: 'B',
      favorite_language: 'HTML'
    },
    {
      first_name: 'C',
      last_name: 'D',
      favorite_language: 'VBA'
    },
    {
      first_name: 'E',
      last_name: 'F',
      favorite_language: 'JS'
    }
  ];
  factory.index = function(callback){
    callback(factory.users);
  }
  factory.createUser = function(newUser, callback){
    console.log(newUser);
    factory.users.push(newUser);
    callback();
  }
  factory.destroyUser = function(user, callback){
    var index = factory.users.indexOf(user);
    factory.users.splice(index, 1);
    callback();
  }
  return factory;
})

angularApp.controller('CustomizeUsersController', function(userFactory, $location){
  var self = this;  // captures the value of 'this' at the current scope
  console.log($location);
  self.index = function(){
    userFactory.index(function(data){
      self.users = data;
    });
    console.log(self.users);
  }
  self.createUser = function(newUser){
    userFactory.createUser(newUser, self.index);
    // self.newUser = {};
    $location.url('/list');
  }
  self.destroyUser = function(user){
    userFactory.destroyUser(user, self.index);
  }
})

angularApp.controller('UserListsController', function(userFactory){
  var self = this;
})
