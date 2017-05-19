var app = angular.module('app', [])

app.controller('divController', function($scope) {
  $scope.myName = 'Lance';
  $scope.myFavoriteLanguage = 'JavaScript';
  $scope.myFavoriteJSLibrary = 'Angular';
})
