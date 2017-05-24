app.factory('messageFactory', function($http, $cookies){
  console.log('CS message factory initialized');
  var factory = {};
  factory.index = function(callback){
    $http.get('/messages').then(callback);
  }
  factory.show = function(id, callback){
    $http.get('/messages'+id).then(callback);
  }
  factory.create = function(newMessage, callback){
    $http.post('/messages', newMessage).then(callback);
  }
  // factory.createComment = function(messageId, newComment, callback){
  //   $http.post('/messages/'+messageId+'/comments', newComment).then(callback);
  // }
  // factory.createComment = function(newComment, callback){
  //   $http.post('/comments', newComment).then(callback);
  // }
  return factory;
})
