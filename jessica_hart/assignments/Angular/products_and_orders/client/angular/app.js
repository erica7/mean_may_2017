var app = angular.module('app', [])
console.log('Factories and Controllers Accessed')

// Factories
app.factory('ProductsFactory', function() {
  var factory = {}
  factory.productList = [
    {name: 'Fidget Spinner', price: 20, quantity: 50},
    {name: 'MacBook Pro', price: 1200, quantity: 45},
    {name: 'PlayStation 4', price: 300, quantity: 20},
    {name: 'Amazon Echo', price: 180, quantity: 0}
  ]
  factory.getProducts = function(callback) {
    callback(this.productList)
  }
  factory.createProduct = function(newProduct, callback) {
    if (newProduct) {
      newProduct.quantity = 50
      this.productList.push(newProduct)
      callback(this.productList)
    }
  }
  factory.destroyProduct = function(product, callback) {
    var index = this.productList.indexOf(product)
    this.productList.splice(index, 1)
    callback()
  }
  factory.buyOrder = function(product, callback) {
    var index = this.productList.indexOf(product)
    if (this.productList[index].quantity > 0) {
      this.productList[index].quantity--
      callback()
    }
  }
  return factory
})

// Controllers
app.controller('ProductsController', function($scope, ProductsFactory) {
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
})

app.controller('OrdersController', function($scope, ProductsFactory) {
  $scope.getProducts = function() {
    ProductsFactory.getProducts(function(products) {
      $scope.productList = products
    })
  }
  $scope.buyOrder = function(product) {
    $scope.error = ''
    if (product.quantity < 1) {
      $scope.error = 'That product is no longer available.'
    } else {
      ProductsFactory.buyOrder(product, $scope.getProducts)
    }
  }
})
