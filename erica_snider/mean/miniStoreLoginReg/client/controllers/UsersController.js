app.controller('UsersController', function(userFactory, $location, $routeParams, $cookies){
  console.log('CS users controller initialized');
  var self = this;
  self.users = {};
  self.currentUser = {};
  // self.errors = [];
  self.registrationErrors = [];
  self.loginErrors = [];
  self.index = function(){
    userFactory.index(function(res){
      self.users = res.data;
    })
  }
  self.show = function(){
    userFactory.show($routeParams.id, function(res){
      self.friend = res.data;  ////// what if there are errors?
    });
  }
  self.create = function(newUser){
    self.registrationErrors = [];
    console.log('newUser:', newUser);
    if (newUser.password != newUser.password_confirmation) {
      self.registrationErrors = ['Passwords do not match.'];
      // return;
    } else {
      userFactory.create(newUser, function(res){
        console.log('res',res);
        self.newUser = {}; //
        if (res.data.errors || res.data.code == 1100) {
          if (res.data.code == 11000) {
            self.registrationErrors.push('Email is already registered.');
          }
          for(key in res.data.errors){
            self.registrationErrors.push(res.data.errors[key].message);
          }
        } else {
          $cookies.put('userId', res.data._id);
          $location.url('/dashboard');
        }
      })
    }
  }
  self.login = function(checkUser){
    self.loginErrors = [];
    userFactory.login(checkUser, function(res){
      console.log('res',res);
      self.checkUser = {}; //
      if (res.data.errors) {
        for(key in res.data.errors){
          var error = res.data.errors[key];
          self.loginErrors.push(res.data.errors[key].message);
        }
      } else {
        console.log('res.data._id',res.data._id);
        $cookies.put('userId', res.data._id);
        console.log("$cookies.get('userId')", $cookies.get('userId'));
        $location.url('/dashboard');
      }
    })
  }
  self.logout = function(){
    console.log('$cookies',$cookies);
    $cookies.remove('userId');
    $location.url('/');
  }
  self.check = function(){
    userFactory.check(function(user){
      if (user) {
        self.currentUser = user;
      } else {
        $location.url('/');
      }
    })
  }
})
