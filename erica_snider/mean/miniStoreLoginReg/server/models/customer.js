var mongoose = require('mongoose');

var Order = mongoose.model('Order');

var customerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Customer name cannot be blank."],
    minlength: [2, "Customer name is too short."],
    maxlength: [222, "Customer name is too long."],
    // add unique
  },
  orders: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Order'
  }]
}, { timestamps: true });

customerSchema.pre('remove', function(callback){
  var self = this;
  Order.remove({ customer: self._id }, function(){
    callback();
  });
})

mongoose.model('Customer', customerSchema);
