app.controller('newController', function(userFactory, $location) {
  var self = this;
  self.create = function(newUser){
    console.log('create() in controller');
    userFactory.create(newUser, self.index)
    $location.url('/');
  }
});
