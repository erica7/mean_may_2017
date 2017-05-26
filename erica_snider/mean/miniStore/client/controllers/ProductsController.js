app.controller('ProductsController', function(productFactory, $routeParams){
  var self = this;
  self.products = [];
  self.errors = [];
  self.index = function(){
    productFactory.index(function(res){
      self.products = res.data;
    })
  }
  self.create = function(newProduct){
    self.errors = [];
    productFactory.create(newProduct, function(res){
      self.newProduct = {};
      if(res.data.errors){
        for(key in res.data.errors){
          self.errors.push(res.data.errors[key].message);
        }
      } else {
        self.index();
      }
    })
  }
  self.show = function(){
    productFactory.show($routeParams.id, function(res){
      self.product = res.data;
    })
  }
  self.destroy = function(productId){
    productFactory.destroy(productId, self.index);
  }
})
