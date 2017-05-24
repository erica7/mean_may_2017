console.log('SS messages controller initialized');

var mongoose = require('mongoose');

var Message = mongoose.model('Message');
var Comment = mongoose.model('Comment');
var User = mongoose.model('User');

module.exports = {
  index: function(req, res){
    // Message.find({}).populate('user').populate('comments').exec(function(err, messages){
    Message.find({}).populate({path: 'user', model: 'User'}).populate({path: 'comments', model: 'Comment', populate: {path: 'user', model: 'User'}}).exec(function(err, messages){   // populate user too
      if(err){
        return res.json(err);
      }
      return res.json(messages);
    });
  },
  create: function(req, res){
    Message.create(req.body, function(err, message){
      if(err){
        return res.json(err);
      }
      User.findByIdAndUpdate(req.body.user, { $push : { messages: message.id }}, function(err, user){  //////
        if(err){
          return res.json(err);
        }
        return res.json(message);
      })
    })
  }
}
