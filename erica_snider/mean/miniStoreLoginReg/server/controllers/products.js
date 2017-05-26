var mongoose = require('mongoose');

var Product = mongoose.model('Product');

module.exports = {
  index: function(req, res){
    Product.find({}).populate('orders').exec(function(err, products){
      if(err){
        return res.json(err);
      }
      return res.json(products);
    })
  },
  create: function(req, res){
    Product.create(req.body, function(err, product){
      if(err){
        return res.json(err);
      }
      return res.json(product);
    })
  },
  show: function(req, res){
    Product.findById(req.params.id).populate('orders').exec(function(err, product){
      if(err){
        return res.json(err);
      }
      return res.json(product);
    })
  },
  // edit: function(req, res){
  //
  // },
  update: function(req, res){
    return res.json({placeholder: 'Product.update'})
  },
  destroy: function(req, res){
    Product.findById(req.params.id, function(err, product){
      if(err){
        return res.json(err);
      }
      product.remove(function(err, product){
        if(err){
          return res.json(err);
        }
        return res.json(product);
      })
    })
  }
}
