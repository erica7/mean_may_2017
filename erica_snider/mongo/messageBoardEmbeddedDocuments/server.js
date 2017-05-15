var bodyParser = require('body-parser');
// var ejs = require('ejs');
var express = require('express');
var mongoose = require('mongoose');

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/static'));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

mongoose.connect('mongodb://localhost/messageBoard');

mongoose.Promise = global.Promise;

// make a table blueprint
// using embeded documents rather than separate Schema
var MessageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: [4, 'Name is too short.'],
    maxlength: [22, 'Name is too long.']
  },
  message: {
    type: String,
    require: true,
    minlength: [2, 'Message is too short.'],
    maxlength: [2222, 'Message is too long.']
  },
  comments: [{
    name: {
      type: String,
      required: true,
      minlength: [4, 'Name is too short.'],
      maxlength: [22, 'Name is too long.']
    },
    comment: {
      type: String,
      require: true,
      minlength: [2, 'Message is too short.'],
      maxlength: [2222, 'Message is too long.']
    }
  }]
}, { timestamps: true })

// register the schema with the DB (attach the blueprint to the specific model)
mongoose.model('Message', MessageSchema);

// extract the model from the DB
var Message = mongoose.model('Message');

app.get('/', function(req, res){
  Message.find({}).exec(function(err, messages){
    if(err){
      return res.send(err);
    }
    console.log('messages',messages);
    console.log('messages[0].comments',messages[0].comments);
    res.render('index', {messages:messages});
  })
})

app.post('/messages', function(req, res){
  var message = new Message(req.body);
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
    var comment = req.body
    console.log('comment',comment);
    message.comments.push(comment);
    message.save(function(err, message){
      if(err){
        return res.send(err);
      }
      res.redirect('/');
    })
  })
})

app.listen(8000, function(){
  console.log('listening on eight...');
});
