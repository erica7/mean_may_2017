var express = require('express')
var bodyParser = require('body-parser')
var mongoose = require('mongoose')
var path = require('path')
var app = express()

app.use(bodyParser.urlencoded({extended: false}))

app.set('views', __dirname + '/views')
app.set('view engine', 'ejs')

mongoose.connect('mongodb://localhost/message_board')

// Define Schema variable
var Schema = mongoose.Schema

// Define Post Schema
var PostSchema = new mongoose.Schema({
  name: {type: String, required: true},
  text: {type: String, required: true},
  _comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
}, {timestamps: true })

// Define Comment Schema
var CommentSchema = new mongoose.Schema({
  _post: {type: Schema.Types.ObjectId, ref: 'Post'},
  name: {type: String, required: true},
  text: {type: String, required: true}
}, {timestamps: true })

// Set models by passing them respective Schemas
mongoose.model('Post', PostSchema)
mongoose.model('Comment', CommentSchema)

// Store models in variables
var Post = mongoose.model('Post')
var Comment = mongoose.model('Comment')

// Model validations
PostSchema.path('name').required(true, 'Name cannot be blank');
PostSchema.path('text').required(true, 'Post cannot be blank');
CommentSchema.path('name').required(true, 'Name cannot be blank');
CommentSchema.path('text').required(true, 'Comment cannot be blank');

// Displays all messages and comments
app.get('/', function(req, res) {
  Post.find({}, false, true).populate('_comments').exec(function(err, data) {
    if (err) {
      response.send(err)
    }
    console.log(data)
    res.render('index', {posts: data})
	})
})

// New message
app.post('/', function(req, res) {
  Post.create(req.body, function(err, data){
    if (err) {
      response.send(err)
    }
    res.redirect('/')
  })
})

// New comment
app.post('/comment', function(req, res) {
  var post_id = req.body.id
	Post.findOne({_id: post_id}, function(err, post) {
		var newComment = new Comment({name: req.body.name, text: req.body.text})
		newComment._post = post._id
    console.log(newComment)
		Post.update({_id: post._id}, {$push: {"_comments": newComment}}, function(err) {
      if (err) {
        response.send(err)
      }
    })
		newComment.save(function(err) {
      if (err) {
        response.send(err)
      }
      res.redirect('/')
		})
	})
})

app.listen(8000, function () {
  console.log('Running at http://localhost:8000/')
})
