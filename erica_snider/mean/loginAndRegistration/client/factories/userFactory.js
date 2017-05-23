app.factory('userFactory', function($http){
  console.log('CS user factory initialized');
  var factory = {};
  factory.index = function(callback){
    $http.get('/users').then(callback);
  }
  factory.show = function(id, callback){
    $http.get('/users'+id).then(callback);
  }
  factory.create = function(newUser, callback){
    $http.post('/users', newUser).then(callback); // do I need to pass the newUser ? ?
  }
  factory.login = function(checkUser, callback){
    $http.post('/login', checkUser).then(callback);
  }
  return factory;
})
