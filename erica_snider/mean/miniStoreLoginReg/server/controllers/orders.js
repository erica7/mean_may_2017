var mongoose = require('mongoose');

var Order = mongoose.model('Order');
var Customer = mongoose.model('Customer');
var Product = mongoose.model('Product');

module.exports = {
  index: function(req, res){
    Order.find({}).populate('customer').populate('product').exec(function(err, orders){  // populate as
      if(err){
        return res.json(err);
      }
      return res.json(orders);
    })
  },
  create: function(req, res){
    Order.create(req.body, function(err, order){
      if(err){
        return res.json(err);
      }
      Customer.findByIdAndUpdate(req.body.customer, { $push : { orders: order._id }}, function(err, customer){
        if(err){
          return res.json(err);
        }
        Product.findByIdAndUpdate(req.body.product, { $push : { orders: order._id }, $inc : { quantity: -order.quantity }}, { new: true }, function(err, product){  // not working; add qty decrement; add qty check at front end
          if(err){
            return res.json(err);
          }
          return res.json(order);
        })
      })
    })
  },
  show: function(req, res){
    Order.findById(req.params.id).populate('customer').populate('product').exec(function(err, order){
      if(err){
        return res.json(err);
      }
      return res.json(order);
    })
  },
  // edit: function(req, res){
  //
  // },
  update: function(req, res){
    return res.json({placeholder: 'Order.update'})

  },
  destroy: function(req, res){
    Order.findById(req.params.id, function(err, order){
      if(err){
        return res.json(err);
      }
      order.remove(function(err, order){
        if(err){
          return res.json(err);
        }
        return res.json(order);
      })
    })
  }
}
