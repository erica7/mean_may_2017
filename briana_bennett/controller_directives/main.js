var app = angular.module('app', []);

app.controller('foodsController', ['$scope', function($scope){
	//what is my food controller gonna do?!
	$scope.foods = []
	$scope.addFood = function(){
		$scope.foods.push($scope.newFood);
		$scope.newFood = {};
	}
}]);