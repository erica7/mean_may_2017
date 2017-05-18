var app = angular.module('app', []);

app.controller('usersController', ['$scope', function($scope){
	$scope.users = []
	$scope.addUser = function(){
		$scope.users.push($scope.newUser)
		$scope.newUser = {}
	}
	$scope.deleteUser = function(user, index){
		$scope.users.splice(index,1)
	}
}]);