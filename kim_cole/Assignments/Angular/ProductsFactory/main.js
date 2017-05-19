var app = angular.module('app', []);
app.factory('productFactory', function (){
    // The factory is nothing more than a function that returns an object
    var products = [];
    var factory = {};
    // Add a getStudents key to the factory object with a value of a function.
    factory.index = function (callback){
        callback(products);
    }
    factory.create = function(product,callback){
      if(product.price && Number(parseFloat(product.price))==product.price){
        products.push(product);
        callback(products);
      }
    }
    factory.delete = function(id,callback){
      products.splice(id,1);
      callback(products);
    }
    return factory;
});


// Create a controller (attached to this module), and inject the studentFactory in it.
app.controller('productController', ['$scope', 'productFactory', function ($scope, productFactory){
  function setProducts(data){
    $scope.products = data;
    $scope.product = {};
  }
    $scope.product = {};
    $scope.products = {};

    $scope.index = function(){
      productFactory.index(setProducts);
    }
    $scope.index();
    $scope.create = function(){
      productFactory.create($scope.product, setProducts);
    }
    $scope.delete = function(id){
      productFactory.delete(id,setProducts);
    }
}]);