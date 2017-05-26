app.factory('orderFactory', function($http){
  var factory = {};
  factory.index = function(callback){
    $http.get('/orders').then(callback);
  }
  factory.create = function(newOrder, callback){
    $http.post('/orders', newOrder).then(callback);
  }
  factory.show = function(id, callback){
    $http.get('/orders/'+id).then(callback);
  }
  factory.update = function(id, order, callback){
    $http.put('/orders/'+id, order).then(callback);
  }
  factory.destroy = function(id, callback){
    $http.delete('/orders/'+id).then(callback);
  }
  return factory;
})
