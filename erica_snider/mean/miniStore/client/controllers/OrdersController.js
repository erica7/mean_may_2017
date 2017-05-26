app.controller('OrdersController', function(orderFactory, productFactory, $routeParams){
  var self = this;
  self.orders = [];
  self.errors = [];
  self.product = {};
  self.index = function(){
    orderFactory.index(function(res){
      self.orders = res.data;
    })
  }
  self.create = function(newOrder){
    self.errors = [];
    // compare product quantity with proposed order quantity
    productFactory.show(newOrder.product, function(res){
      self.product = res.data;
      if (newOrder.quantity > self.product.quantity){
        self.errors.push("Insufficient quantity in stock.")
        console.log(self.errors);
      } else {
        orderFactory.create(newOrder, function(res){
          self.newOrder = {};
          if(res.data.errors){
            for(key in res.data.errors){
              self.errors.push(res.data.errors[key].message);
            }
          } else {
            self.index();
          }
        })
      }
    })


  }
  self.show = function(){
    orderFactory.show($routeParams.id, function(res){
      self.order = res.data;
    })
  }
})
