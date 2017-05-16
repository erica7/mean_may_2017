var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/message_board');

var Schema = mongoose.Schema;
// create schema here
var MessageSchema = new mongoose.Schema({
	name:{type:String, required:true, minLength:1},
	content:{type:String, required:true, minLength:1},
	comments:[{type: Schema.Types.ObjectId, ref: 'Comment'}]
}, {timestamps:true});

var CommentSchema = new mongoose.Schema({
	_message: {type: Schema.Types.ObjectId, ref: 'Message'},
	name:{type:String, required:true, minLength:1},
	content: {type: String, required: true }
}, {timestamps:true});

mongoose.model('Message', MessageSchema);
mongoose.model('Comment', CommentSchema);

var Message = mongoose.model('Message');
var Comment = mongoose.model('Comment');

app.use(express.static(path.join(__dirname, './static/')));
app.use(bodyParser.urlencoded({extended:false}));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');


app.get('/', function(req,res){
	Message.find({}).populate('comments').exec(function(err, messages){
		console.log(messages);
		if(err){
			res.render('index', {errors:err});
		}
		res.render('index', {messages: messages});
		// res.json(messages)
	})

		
});

app.post('/createMessage', function(req,res){
	Message.create({name: req.body.name, content:req.body.content}, function(err){
		console.log(req.body)
		if(err){
			console.log('err at createMessage', err);
			res.render('index', {errors:err});
		}
		else{
			res.redirect('/');
		}
	})
})


app.post('/createcomment/:id', function(req,res){
	Message.findOne({_id: req.params.id}, function(err,message){
		var comment = new Comment(req.body);
		comment._message = message._id;
		comment.save(function(err){
			if(err){
				console.log('error at comments');
				res.render('index', {errors:err.errors})
			}
			message.comments.push(comment._id);
			message.save(function(err, message){
				if(err){
					console.log('error at createcomment')
				}
				res.redirect('/')
			});
		});
	});
});



app.listen(8000, function(){
	console.log('MAJOR TOM')
});



