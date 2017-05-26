app.factory('customerFactory', function($http){
  var factory = {};
  factory.index = function(callback){
    $http.get('/customers').then(callback);
  }
  factory.create = function(newCustomer, callback){
    $http.post('/customers', newCustomer).then(callback);
  }
  factory.show = function(id, callback){
    $http.get('/customers'+id).then(callback);
  }
  factory.update = function(id, customer, callback){
    $http.put('/customers/'+id, customer).then(callback);
  }
  factory.destroy = function(id, callback){
    $http.delete('/customers/'+id).then(callback);
  }
  return factory;
})
