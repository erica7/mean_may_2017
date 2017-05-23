app.controller('PlayerController',function(teamFactory,$routeParams){
  var self = this;

  self.show = function(){
      console.log($routeParams);
  }

})
