/* EDIT CONTROLLER: this controller uses 'this', and the controlValue seems to not update (a bug for you to fix! possibly one new line of code ~ 14 characters, and one modification of something that already exists)*/
app.controller('editController', function(userFactory, $location, $routeParams) {
  var self = this;
  /* Public Properties */
  self.controlValue = "Current Name:";
  /* Public Methods */
  self.getUser = function() {
    userFactory.show($routeParams.id, function passedToUserFactoryShow(user) {
      self.user = user;
    })
  }
  self.updateUser = function(){
    userFactory.update(self.users, $routeParams.id, function passedToUserFactoryUpdate(userFromFactory){
      self.user = userFromFactory;
      // what is self?
      self.controlValue = "Updated Name: "
    });
  }
  /* on load time */
  self.getUser();
  console.log(self);
});
