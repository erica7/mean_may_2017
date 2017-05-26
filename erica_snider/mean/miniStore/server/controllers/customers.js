var mongoose = require('mongoose');

var Customer = mongoose.model('Customer');

module.exports = {
  index: function(req, res){
    Customer.find({}).populate('orders').exec(function(err, customers){  // populate as
      if(err){
        return res.json(err);
      }
      return res.json(customers);
    })
  },
  create: function(req, res){
    Customer.create(req.body, function(err, customer){
      if(err){
        return res.json(err);
      }
      return res.json(customer);
    })
  },
  show: function(req, res){
    Customer.findById(req.params.id).populate('orders').exec(function(err, customer){
      if(err){
        return res.json(err);
      }
      return res.json(customer);
    })
  },
  // edit: function(req, res){
  //
  // },
  update: function(req, res){
    return res.json({placeholder: 'Customer.update'})
  },
  destroy: function(req, res){
    Customer.findById(req.params.id, function(err, customer){
      if(err){
        return res.json(err);
      }
      customer.remove(function(err, customer){
        if(err){
          return res.json(err);
        }
        return res.json(customer);
      })
    })
  }
}
