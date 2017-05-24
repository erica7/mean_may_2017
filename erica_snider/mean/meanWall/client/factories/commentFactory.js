app.factory('commentFactory', function($http, $cookies){
  var factory = {};
  factory.create = function(newComment, callback){
    $http.post('/comments', newComment).then(callback);
  }
  return factory;
})
