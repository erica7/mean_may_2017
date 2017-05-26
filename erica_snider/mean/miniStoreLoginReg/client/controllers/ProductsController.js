app.controller('ProductsController', function(productFactory, $routeParams){
  var self = this;
  self.products = [];
  self.errors = [];
  self.index = function(){
    productFactory.index(function(res){
      self.products = res.data;
      console.log(self.products);
    })
  }
  self.create = function(newProduct){
    self.errors = [];
    productFactory.create(newProduct, function(res){
      console.log(res);
      if(res.data.errors){
        for(key in res.data.errors){
          self.errors.push(res.data.errors[key].message);
        }
        self.newProduct = {};
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
