var mongoose = require('mongoose');

var orderSchema = new mongoose.Schema({
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Customer'
  },
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product'
  },
  quantity: {
    type: Number,
    required: [true, "Quantity cannot be blank."],
  },
}, { timestamps: true });

mongoose.model('Order', orderSchema);
