var app = angular.module('app', [])

app.factory('ProductFactory', function(){
    var factory = {};
    var products = [
        {name: 'Keyboard', price: 149.99, qty: 25},
        {name: 'Mouse', price: 59.99, qty: 34},
        {name: 'Basketball', price: 59.99, qty: 24},
    ];

    factory.createProduct = function(newProduct, callback){
        newProduct.qty = 50;
        products.push(newProduct);
        callback();
    }
    factory.getProducts = function(callback){
        callback(products);
    }
    factory.deleteProduct = function(product, callback){
        var i = products.indexOf(product);
        products.splice(i, 1);
        callback();
    }
    factory.buyProduct = function(product, callback){
        var i = products.indexOf(product);
        products[i].qty--;
        callback();
    }

    return factory;
})

app.controller('ProductsController', function($scope, ProductFactory){
    $scope.products = [];
    $scope.createProduct = function(newProduct){
        ProductFactory.createProduct(newProduct,  function(){
            $scope.getProducts();
            $scope.newProduct = {};
        })
    }
    $scope.getProducts = function(){
        ProductFactory.getProducts(function(products){
            $scope.products = products;
        })
    }
    $scope.deleteProduct = function(product){
        ProductFactory.deleteProduct(product, $scope.getProducts)
    }
})

app.controller('OrdersController', function($scope, ProductFactory){
    $scope.products = [];
    $scope.getProducts = function(){
        ProductFactory.getProducts(function(products){
            $scope.products = products;
            console.log(products)
        })
    }
    $scope.buyProduct = function(product){
        $scope.error = '';
        if(product.qty <= 0){
            $scope.error = "That product is no longer available.";
        } else {
            ProductFactory.buyProduct(product, $scope.getProducts);
        }
    }
})