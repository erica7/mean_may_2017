var app = angular.module('app', [])
console.log('ProductsController Accessed')

// Factories
app.factory('ProductsFactory', function() {
  var factory = {}
  factory.productList = []
  factory.getProducts = function(callback) {
    callback(this.productList)
  }
  factory.createProduct = function(newProduct, callback) {
    if (newProduct) {
      this.productList.push(newProduct)
      callback(this.productList)
    }
  }
  factory.destroyProduct = function(product, callback) {
    var index = this.productList.indexOf(product)
    this.productList.splice(index, 1)
    callback()
  }
  return factory
})

// Controllers
app.controller('ProductsController', ['$scope', 'ProductsFactory', function($scope, ProductsFactory) {
  $scope.getProducts = function() {
    ProductsFactory.getProducts(function(products) {
      $scope.productList = products
    })
  }
  $scope.createProduct = function(newProduct) {
    ProductsFactory.createProduct(newProduct, function() {
      $scope.getProducts()
      $scope.newProduct = {}
    })
  }
  $scope.destroyProduct = function(product) {
    ProductsFactory.destroyProduct(product, function() {
      $scope.getProducts()
    })
  }
}])
