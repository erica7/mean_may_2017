var app = angular.module('app', [])
console.log('UsersController Accessed')

app.controller('UsersController', ['$scope', function($scope) {
  $scope.userList = []
  $scope.createUser = function() {
    if ($scope.newUser) {
      $scope.userList.push(this.newUser)
      $scope.newUser = {}
    }
  }
  $scope.destroyUser = function(user) {
    var index = $scope.userList.indexOf(user)
    $scope.userList.splice(index, 1)
  }
}])
