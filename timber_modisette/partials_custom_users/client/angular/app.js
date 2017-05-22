var app = angular.module('app', ['ngRoute']);

console.log('angular')

app.config(function($routeProvider){
	$routeProvider
	.when('/',{
		templateUrl: 'partials/partials1.html',
		controller: 'UserController as UC'
	})
	.when('/partials2', {
		templateUrl: 'partials/partials2.html'
	})
	.otherwise({redirectTo: '/'})
})
//////create factory and name it.
app.factory('UserFactory', function(){
	var factory = {};
	var users = [];

	factory.createUser = function(user, callback){
		console.log(user)
		users.push(user);
		callback()
	}
	factory.getUsers = function(callback){
		callback(users);

	}
	factory.deleteUser = function(user,callback){
		var i = users.indexOf(user);
		users.splice(i,1);
	}
	return factory;
})
////create, name and link to factory a controller
app.controller('UserController',function(UserFactory){
	var self = this;
	var users = [];

	self.createUser = function(user){
		UserFactory.createUser(user,function(){
			self.getUsers();
			self.user = {};
		})
	}
	self.getUsers = function(){
		UserFactory.getUsers(function(users){
			self.users = users;
		})
	}
	self.deleteUser = function(user){
		UserFactory.deleteUser(user, this.getUsers)
	}
})



