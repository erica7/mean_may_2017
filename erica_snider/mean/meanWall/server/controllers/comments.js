console.log('SS messages controller initialized');

var mongoose = require('mongoose');

var Message = mongoose.model('Message');
var Comment = mongoose.model('Comment');
var User = mongoose.model('User');

module.exports = {
  index: function(req, res){
    Comment.find({}).populate('user').exec(function(err, comments){
      if(err){
        return res.json(err);
      }
      return res.json(comments);
    });
  },
  create: function(req, res){
    console.log('req.body',req.body);
    Comment.create(req.body, function(err, comment){
      if(err){
        return res.json(err);
      }
      Message.findByIdAndUpdate(req.body.message, { $push : { comments: comment._id }}, function(err, message){
        if(err){
          return res.json(err);
        }
        User.findByIdAndUpdate(req.body.user, { $push : { comments: comment._id }}, function(err, message){
          if(err){
            return res.json(err);
          }
          return res.json(comment);
        })
      })
    })
  }
}
