app.factory('friendFactory', function($http){
  console.log('CS friend factory loaded');
  var factory = {};
  var friends = [];
  factory.index = function(callback){
    console.log('CS friend factory -- index method');
    // $http.get('friends').then(function(){   // $http returns a promise
    //   // more work?... if not, use shorthand below
    //   callback();
    // })
    $http.get('/friends').then(callback)  // res from $http is given to the callback as a param
  }
  factory.create = function(newFriend, callback){
    console.log('CS friend factory -- create method');
    $http.post('/friends', newFriend).then(callback);
    // $http.post('/friends', newFriend).then(function(){  // this is the longhand version of the line above
    //   callback();
    // });
    // friends.push(newFriend);
    // callback();
  }
  factory.show = function(id, callback){
    console.log('CS friend factory -- show method');
    $http.get('/friends/'+id).then(callback)
  }
  factory.update = function(id, friend, callback){
    console.log('CS friend factory -- update method');
    $http.put('/friends/'+id, friend).then(callback)
  }
  factory.destroy = function(id, callback){
    console.log('CS friend factory -- destroy method');
    $http.delete('/friends/'+id).then(callback)
  }
  return factory;
})
