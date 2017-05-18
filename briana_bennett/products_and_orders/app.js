var app = angular.module('app', [])

app.factory('ProductFactory', function(){
	var products = [{name: 'cody', price: 'priceless', qty:50}]
	var factory = {}
	factory.getProducts = function(callback){
		callback(products)
	}
	//create a product
	factory.createProduct = function(newProduct, callback){
		newProduct.qty = 50
		products.push(newProduct)
		callback()
	}
	//delete a product
	factory.deleteProduct = function(product, callback){
		var i = products.indexOf(product)
		products.splice(i, 1)
		callback()
	}
	//buy a product
	factory.buyProduct = function(product, callback){
		var i = products.indexOf(product)
		products[i].qty = products[i].qty -1
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
			//update the products array on controller side
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
//Orders Controller
app.controller('OrdersController', ['$scope', 'ProductFactory', function($scope, ProductFactory){
	$scope.products = []
	$scope.getProducts = function(){
		ProductFactory.getProducts(function(data){
			$scope.products = data
		})
	}
	$scope.buyProduct = function(product){
		ProductFactory.buyProduct(product, function(){
			$scope.getProducts()
		})
	}
}])