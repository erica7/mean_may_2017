var app = angular.module('app', [])
console.log('foodController Accessed')

app.controller('foodController', ['$scope', function($scope) {
  // $scope.list = []
  $scope.getFood = function() {
    $scope.list = ['Spaghetti', 'Meatballs', 'Papa Johns']
  }
  $scope.submit = function() {
    if ($scope.food) {
      $scope.list.push(this.food);
      $scope.food = '';
    }
  }
  $scope.destroy = function(food) {
    var index = $scope.list.indexOf(food)
    $scope.list.splice(index, 1)
  }
  $scope.state = true
  $scope.changeState = function() {
    $scope.state = !$scope.state
  }
}])
