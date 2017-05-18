var app = angular.module('app', [])

app.factory('ProductFactory', function(){
	var products = []
	var factory = {}
	factory.getProducts = function(callback){
		callback(products)
	} 
	
	//make createProduct function
	factory.createProduct = function(newProduct, callback){
		products.push(newProduct)
		callback()
	}
	//deleteProduct function
	factory.deleteProduct = function(product, callback){
		var i = products.indexOf(product)
		products.splice(i, 1)
		callback()
	}
	return factory
})

app.controller('ProductsController', ['$scope', 'ProductFactory', function($scope, ProductFactory){
	$scope.products = []
	$scope.getProducts = function(){
		ProductFactory.getProducts(function(data){
			$scope.products = data
		})
	}
	$scope.createProduct = function(newProduct){
		ProductFactory.createProduct(newProduct, function(){
			//update the products array
			$scope.getProducts()
			$scope.newProduct = {}
		})
	}
	$scope.deleteProduct = function(product){
		ProductFactory.deleteProduct(product, function(){
			$scope.getProducts()
		})
	}
}])