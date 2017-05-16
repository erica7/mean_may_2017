var express = require('express')
var app = express()
var bp = require('body-parser')
var mongoose = require('mongoose')


app.use(bp.urlencoded({extended: true}))
app.use(express.static(__dirname + '/static'))
app.use(express.static(__dirname + '/node_modules'))

app.set('views', __dirname + '/views')
app.set('view engine', 'ejs')

app.get('/', function(request, response){
	response.render('index')
})

app.post('/users', function(request, response){
	console.log(request.body)
	//get post data and add user to db
	var user = new User(request.body)
	console.log(user)
	user.save(function(err, user){
		if(err){
			console.log(err)
		} else {
			console.log(user)
		}
	})
	response.redirect('/')
})

app.get('/users', function(request, response){
	User.find({}, function(err, users){
		if(err){
			console.log(err)
		} else {
			response.send(users)
		}
	})
})

mongoose.connect('mongodb://localhost/basic_mongoose')
mongoose.Promise = global.Promise

var UserSchema = new mongoose.Schema({
	name: String,
	age: Number
}, {timestamps: true})

mongoose.model('User', UserSchema)
var User = mongoose.model('User')



app.listen(8000, function(){
	console.log('listening on port 8000')
})

