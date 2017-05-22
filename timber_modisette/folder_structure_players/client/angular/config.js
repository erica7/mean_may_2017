var app = angular.module('app', ['ngRoute', 'ngMessages']);

app.config(function($routeProvider){
	$routeProvider
	.when('/',{
		templateUrl: 'partials/partials1.html',
		controller: 'PlayerController as PC'
	})
	.when('/partials2',{
		templateUrl: 'partials/partials2.html',
		controller: 'TeamController as TC'
	})
	.when('/partials3',{
		templateUrl: 'partials/partials3.html'
	})
	.when('/players/:name',{
		templateUrl: 'partials/partials4.html'
	})
	.otherwise({redirectTo:'/'})


});



