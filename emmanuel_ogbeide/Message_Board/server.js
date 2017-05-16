var express = require("express");
var path = require("path");
var bodyParser = require('body-parser');
var session = require('express-session');
var mongoose = require('mongoose');
var app = express();


app.use(express.static(path.join(__dirname, "./static")));
app.use(bodyParser.urlencoded({extended: true}));
app.use(session({secret:'codingdojorocks'}));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

mongoose.connect('mongodb://localhost/message_board');
mongoose.Promise = global.Promise;
var Schema = mongoose.Schema;

var PostSchema = new mongoose.Schema({
  name:  { type: String, required: [true, "You don't have a name?"], minlength: 4, maxlength: 20},
  message: { type: String, required: [true, "Please enter quote"], minlength: 4},
  comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}],
}, {timestamps: true})
var CommentSchema = new mongoose.Schema({
  _post: {type: Schema.Types.ObjectId, ref: 'Post'},
  name: { type: String, required: [true, "You don't have a name?"], minlength: 2, maxlength: 20},
  text: {type: String, required: true }
}, {timestamps: true });

mongoose.model('Post', PostSchema);
mongoose.model('Comment', CommentSchema);

var Post = mongoose.model('Post');
var Comment = mongoose.model('Comment');


app.get('/', function(request, response){
  Post.find({}).populate('comments').exec(function(error, posts){
    if (error){
      response.render('error', {title: "You have errors", error:quotes.errors})
    } else {
      response.render('index', {posts:posts});
    }
  })
});

app.post('/posts', function(request, response){
  console.log("POST data is : \n\n", request.body)
  var post = new Post(request.body)
  post.save(function(error){
    if(error){
      console.log("Oops! Something went wrong.");
      response.render('error', {title: "Oops! Something went wrong.", errors:post.errors})
    } else {
      console.log("Successfully added a quote!");
      response.redirect('/')
    }
  })
});

app.post('/posts/:id', function (request, response){
  Post.findOne({_id: request.params.id}, function(error, post){
    var comment = new Comment(request.body);
    comment._post = post._id;
    post.comments.push(comment);
    comment.save(function(error){
      post.save(function(error){
        if(error){
          console.log("Oops! Something went wrong.");
          response.render('error', {title: "Oops! Something went wrong.", errors:post.errors})
        } else {
          console.log("Successfully added a quote!");
          response.redirect('/')
        }
      })
    })
   })
 });

app.listen(8000, function(){
    console.log("listening on port 8000");
})
