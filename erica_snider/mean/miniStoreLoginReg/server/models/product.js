var mongoose = require('mongoose');

var Order = mongoose.model('Order');

var productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Product name cannot be blank."],
    minlength: [2, "Product name is too short."],
    maxlength: [222, "Product name is too long."],
  },
  imageUrl: {
    type: String,
    required: [true, "Image URL cannot be blank."],
    minlength: [2, "Image URL is too short."],
    maxlength: [222, "Image URL is too long."],
    // add regex validation
  },
  description: {
    type: String,
    required: [true, "Description cannot be blank."],
    minlength: [2, "Description is too short."],
    maxlength: [2222, "Description is too long."],
  },
  quantity: {
    type: Number,
    required: [true, "Quantity cannot be blank."],
  },
  orders: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Order'
  }]
}, { timestamps: true });

productSchema.pre('remove', function(callback){
  var self = this;
  Order.remove({ product: self._id }, function(){
    callback();
  });
})

mongoose.model('Product', productSchema)
