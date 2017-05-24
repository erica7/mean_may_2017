console.log('comment schema initialized');

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CommentSchema = new mongoose.Schema({
  message: {  // _
    type: Schema.Types.ObjectId,
    ref: 'Message'
  },
  user: {  // _  // author
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  comment: {
    type: String,
    presence: true,
    minlength: 4,
    maxlength: 2222
  },
}, { timestamps: true })

mongoose.model('Comment', CommentSchema);

var Comment = mongoose.model('Comment');
