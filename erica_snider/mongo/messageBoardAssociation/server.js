var bodyParser = require('body-parser');
var express = require('express');
var mongoose = require('mongoose');

var app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/static'));

mongoose.connect('mongodb://localhost/messageBoardAssociation2');

mongoose.Promise = global.Promise;

var Schema = mongoose.Schema;

var MessageSchema = new mongoose.Schema({
  name: {
    type: String,
    presence: true,
    minlength: 4,
    maxlength: 222
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

var CommentSchema = new mongoose.Schema({
  _message: {
    type: Schema.Types.ObjectId,
    ref: 'Message'
  },
  name: {
    type: String,
    presence: true,
    minlength: 4,
    maxlength: 222
  },
  comment: {
    type: String,
    presence: true,
    minlength: 4,
    maxlength: 2222
  },
}, { timestamps: true })

mongoose.model('Message', MessageSchema);
mongoose.model('Comment', CommentSchema);

var Message = mongoose.model('Message');
var Comment = mongoose.model('Comment');

app.get('/', function(req, res){
  Message.find({}).populate('comments').exec(function(err, messages){
    if(err){
      return res.send(err);
    }
    // console.log('messages',messages);
    res.render('index', {messages:messages});
  })
})

app.post('/messages', function(req, res){
  var message = new Message(req.body)
  message.save(function(err, message){
    if(err){
      return res.send(err);
    }
    res.redirect('/');
  })
})

app.post('/messages/:id/comments', function(req, res){
  Message.findOne({_id: req.params.id}).exec(function(err, message){
    if(err){
      return res.send(err);
    }
    var comment = new Comment(req.body);
    comment._message = message._id;
    comment.save(function(err, comment){
      if(err){
        return res.send(err);
      }
      console.log('comment after save', comment);
      message.comments.push(comment);  // push comment after it has been saved
        // why does this only push the comment object ID into the message document?...
      message.save(function(err, message){
        if(err){
          return res.send(err);
        }
        console.log('message after save', message);
        res.redirect('/');
      })
    })
  })
})

app.listen(8000, function(){
  console.log('listening on 8k...');
})
