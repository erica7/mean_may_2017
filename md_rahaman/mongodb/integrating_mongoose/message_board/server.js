var express = require('express');
var bp = require('body-parser');
var mongoose = require('mongoose');

var app = express()

app.use(express.static(__dirname + '/static'));
app.use(express.static(__dirname + '/node_modules'));
app.use(bp.urlencoded({extended:true}))

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

//connect to the database
mongoose.connect('mongodb://localhost/message_board')

//update promise library
mongoose.Promise = global.Promise;

//make a message table

var MessageSchema = new mongoose.Schema({
	'user': {
		'type': String,
		'minlength': [2, 'Your name is too short, sorry!']
	},
	'body': {
		'type': String,
		'minlength': [3, 'your message is too short']
	}, 
	'comments': [{
		'type': mongoose.Schema.Types.ObjectId,
		'ref': 'Comment'
	}]
}, {'timestamps': true})

mongoose.model('Message', MessageSchema)
var Message = mongoose.model('Message')

//comment table
var CommentSchema = new mongoose.Schema({
	'user': {
		'type': String,
		'minlength': [2, 'Your name is too short, sorry!']
	},
	'comment': {
		'type': String,
		'minlength': [3, 'your comment is too short']
	},
	'likes':[{
		'type': mongoose.Schema.Types.ObjectId,
		'ref': 'Like'
	}],
	'_message': {
		'type': mongoose.Schema.Types.ObjectId,
		'ref': 'Message'
	}
}, {'timestamps': true})


mongoose.model('Comment', CommentSchema)
var Comment = mongoose.model('Comment')

//Likes schema
var LikeSchema = new mongoose.Schema({
	'likes':{
		'type': Number,
		default: 0
	},
	'_comment':{
		'type': mongoose.Schema.Types.ObjectId,
		'ref': 'Comment'
	}
})

mongoose.model('Like', LikeSchema)
var Like = mongoose.model('Like')

//**************routes******************
//index page
app.get("/", function(req,res){
	Message.find({}).populate('comments').exec(function(err, messages){
		if(err){
			return res.send(err)
		}
		res.render('index', {'messages': messages})
		
	})

})

//creating a message
app.post('/messages', function(req, res){
	var message = new Message(req.body)
	console.log(message)
	message.save(function(err, message){
		if(err){
			res.send(err)
		}else{
			res.redirect('/')
		}
	})
})

//saving comments
app.post('/comments/:id', function(req, res){
	// console.log(req.params.id)
	//find the message
	Message.findById(req.params.id).exec(function(err, message){
		if(err){
			return res.send(err);
		}
		if(!message){
			return res.send('no message found')
		}
		var comment = new Comment(req.body)
		comment._message = message._id;
		comment.save(function(err, comment){
			if(err){
				return res.send(err);
			}
			message.comments.push(comment._id);
			message.save(function(err, message){
				if(err){
					return res.send(err);
				}
				return res.redirect('/')
			})
		})
	})
})


//**************endroutes****************
//***************************************
app.listen(8000, function(){
	console.log('listening to port 8000...')
})