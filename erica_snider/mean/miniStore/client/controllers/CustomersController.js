app.controller('CustomersController', function(customerFactory, $routeParams){
  var self = this;
  self.customers = []; // {};
  self.errors = [];
  self.index = function(){
    customerFactory.index(function(res){
      self.customers = res.data;
    })
  }
  self.create = function(newCustomer){
    self.errors = [];
    customerFactory.create(newCustomer, function(res){
      self.newCustomer = {};
      if(res.data.errors){
        for(key in res.data.errors){
          self.errors.push(res.data.errors[key].message);
        }
      } else {
        self.index();
      }
    })
  }
  // self.show = function(){
  //   customerFactory.show($routeParams.id, function(res){
  //     self.customer = res.data;
  //   })
  // }
  self.destroy = function(customerId){
    customerFactory.destroy(customerId, self.index);
  }
})
