var app = angular.module('app', ['ngRoute'])
console.log('App Accessed')

app.config(function($routeProvider) {
  $routeProvider
  .when('/users', {
    templateUrl: 'partials/customizeUsers.html',
    controller: 'CustomizeUsersController as CUC'
  })
  .when('/list', {
    templateUrl: 'partials/userList.html',
    controller: 'UserListsController as ULC'
  })
  .otherwise({
    redirectTo: '/users'
  })
})

app.factory('userFactory', function() {
  var factory = {}
  factory.userList = [
    {firstName: 'Yukihiro', lastName: 'Matsumoto', language: 'Ruby'},
    {firstName: 'Ryan', lastName: 'Dahl', language: 'JavaScript'},
    {firstName: 'Brendan', lastName: 'Eich', language: 'JavaScript'}
  ]
  // Retrieve all users
  factory.index = function(callback) {
    callback(this.userList)
  }
  // Add users
  factory.create = function(newUser, callback) {
    if (newUser) {
      this.userList.push(newUser)
      callback(this.userList)
    }
  }
  // Destroy one user
  factory.delete = function(user, callback) {
    var index = this.userList.indexOf(user)
    this.userList.splice(index, 1)
    callback()
  }

  return factory
})

app.controller('CustomizeUsersController', function(userFactory) {
  console.log('Initializing CustomizeUsersController')
  var self = this
  self.userList = []

  self.getUsers = function() {
    userFactory.index(function(users) {
      self.userList = users
    })
  }

  self.createUser = function(newUser) {
    userFactory.create(newUser, function() {
      self.getUsers()
      self.newUser = {}
    })
  }

  self.destroyUser = function(user) {
    userFactory.delete(user, function() {
      self.getUsers()
    })
  }
})

app.controller('UserListsController', function(userFactory) {
  console.log('Initializing UserListsController')
  var self = this

  self.getUsers = function() {
    userFactory.index(function(users) {
      self.userList = users
    })
  }
})
