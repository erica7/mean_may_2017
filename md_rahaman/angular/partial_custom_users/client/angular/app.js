var app = angular.module('app', ['ngRoute'])

app.config(function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl : 'partials/customizeUsers.html',
		controller : 'CustomizeUsersController'
	})
	.when('/user', {
		templateUrl : 'partials/userList.html',
		controller : 'CustomizeUsersController'
	})
	.otherwise({
		redirect: '/'
	})
})

app.factory('UserFactory', function(){
	var factory = {};
	var users = [
		{first_name: 'Md', last_name: 'Rahaman', fav_lang: 'python'}

	];

	factory.createUser = function(newUser, callback){
		users.push(newUser)
		callback()
		// $scope.getUsers()
	}

	factory.getUsers = function(callback){
		callback(users)
	}

	factory.deleteUser = function(user, callback){
		var i = users.indexOf(user)
		users.splice(i,1)
		callback()
	}

	return factory;
})

app.controller('CustomizeUsersController', function($scope, UserFactory){
	$scope.users = [];
	$scope.createUser = function(newUser){
		console.log(newUser);
		UserFactory.createUser(newUser, function(){
			$scope.getUsers();
			$scope.newUser = {};
		})

	}
	$scope.getUsers = function(){
		UserFactory.getUsers(function(users){
			$scope.users = users;
			console.log(users)
		})
	}

	$scope.deleteUser = function(user){
		UserFactory.deleteUser(user, $scope.getUsers)
	}
})

// app.controller('UserListsController', function($scope){
// 	$scope.getUsers = function(){
// 		UserFactory.getUsers(function(users){
// 			$scope.users = users;
// 		})
// 	}

// })



