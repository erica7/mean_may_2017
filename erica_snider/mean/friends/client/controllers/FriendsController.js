app.controller('FriendsController', function(friendFactory, $location, $routeParams){  // friendFactory is a service; all services being used must be passed in
  console.log('CS friends controller loaded');
  var self = this;
  self.friends = [];
  self.friend = {};
  self.errors = [];
  self.index = function(){
    console.log('CS friends controller -- index method');
    friendFactory.index(function(res){
      console.log('index res',res);
      self.friends = res.data;
    })
  }
  self.create = function(newFriend){   // maybe use UC.newFriend (throughout!)
    // set newFriend object perfectly, then send to factory (e.g. if you need to add a key-value such as defaults that are not part of the client form)
    console.log('CS friends controller -- create method');
    self.errors = [];
    console.log(newFriend);
    friendFactory.create(newFriend, function(res){
      // newFriend = {};
      if(res.data.errors){
        for(key in res.data.errors){  // better than ngMessages because it uses server-side validations; ngMessages requires mirroring the validations from server-side to client-side perfectly
          var error = res.data.errors[key];
          self.errors.push(error.message)
        }
        return
      }
      $location.url('/');
    });  // self.newFriend or newFriend ??
  }
  self.show = function(){    ////////////////////////////
    console.log('CS friends controller -- show method');
    console.log($routeParams);
    friendFactory.show($routeParams.id, function(res){
      console.log('CS friends controller -- show method - CALLBACK');
      console.log('res.data',res.data);
      self.friend = res.data;
      console.log('self.friend',self.friend);
    });
  }
  // self.edit = function(id){  // ? taken care of in angular routes
  //   console.log('CS friends controller -- edit method');
  //   $location.url('#!/friends/id/edit')
  //   // $location.url('#!/friends/' + id + '/edit')
  // }
  self.update = function(friend){
    console.log('CS friends controller -- update method');
    self.errors = [];
    friendFactory.update($routeParams.id, friend, function(res){
      if(res.data.err){
        for(key in res.data.err){
          var error = res.data.err[key];
          self.errors.push(error.message)
        }
        return
      }
      if(res.data.errors){
        for(key in res.data.errors){
          var error = res.data.errors[key];
          self.errors.push(error.message)
        }
        return
      }
      $location.url('/');
    });
  }
  self.destroy = function(id){
    console.log('CS friends controller -- destroy method');
    friendFactory.destroy(id, function(res){
      if(res.data.errors){
        console.log('res.data.errors in CS friends controller destroy method', res.data.errors);
        for(key in res.data.errors){
          var error = res.data.errors[key];
          self.errors.push(error.message)
        }
      }
      console.log('CS friends controller destroy method just before redirect to slash');
      $location.url('/');
    });
  }
})
