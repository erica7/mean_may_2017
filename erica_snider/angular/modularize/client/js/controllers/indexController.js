app.controller('indexController', function(userFactory, $location) {
  var self = this;
  /* Private Methods */
  var usersIndex = function() {
    userFactory.index(function beingPassedToTheFactoryIndexByThisController(usersFromTheFactory) {
      self.users = usersFromTheFactory;
    } /* end args passed to userFactor index */ ); //end userFactory method invokation
  } //end usersIndex
  /* Scope Methods */
  self.show = function(user_id) {
    $location.url('/edit/' + user_id);
  }
  /* on load time */
  console.log("loading the controller");
  console.log(userFactory);
  console.log(this);
  usersIndex();
});
