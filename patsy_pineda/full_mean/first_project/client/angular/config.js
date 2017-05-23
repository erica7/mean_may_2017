var app = angular.module('app', ['ngRoute'])

app.config(function($routeProvider){
	$routeProvider
	.when('/friends', {
		templateUrl: 'partials/friends.html',
		controller: 'FriendsController as FC'
	})
	.when('/friends/show/:id', {
		templateUrl: 'partials/show_friend.html',
		controller: 'FriendsController as FC'
	})
	.when('/friends/new',{
		templateUrl: 'partials/new_friend.html',
		controller: 'FriendsController as FC'
	})
	.when('/friends/edit/:id',{
		templateUrl: 'partials/edit.html',
		controller: 'FriendsController as FC'
	})
	.otherwise({redirectTo: '/friends'})
})