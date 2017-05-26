app.factory('productFactory', function($http){
  var factory = {};
  factory.index = function(callback){
    $http.get('/products').then(callback);
  }
  factory.create = function(newProduct, callback){
    $http.post('/products', newProduct).then(callback);
  }
  factory.show = function(id, callback){
    $http.get('/products/'+id).then(callback);
  }
  factory.update = function(id, product, callback){
    $http.put('/products/'+id, product).then(callback);
  }
  factory.destroy = function(id, callback){
    $http.delete('/products/'+id).then(callback);
  }
  return factory;
})
