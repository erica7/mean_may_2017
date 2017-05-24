console.log('message schema initialized');

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MessageSchema = new mongoose.Schema({
  user: {  // _  // author
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  message: {
    type: String,
    presence: true,
    minlength: 4,
    maxlength: 2222
  },
  comments: [{
    type: Schema.Types.ObjectId,
    ref: 'Comment'
  }]
}, { timestamps: true })

mongoose.model('Message', MessageSchema);

var Message = mongoose.model('Message');
