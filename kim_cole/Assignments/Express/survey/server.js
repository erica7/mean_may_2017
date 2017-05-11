var express = require("express");
var bp = require('body-parser');

var app = express();

var users = [];
//var session = require('express-session');

app.use(express.static(__dirname + '/static'))
app.use(bp.urlencoded({ extended:  true }))
//app.use(session({secret:  'codingdojoroks'})) //string for encryption **

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response){
	//response.send('<h1>hello world</h1>') or//
	response.render('index')
})
app.get('/users', function(request, response){
	response.render('users', {users: users})
})

app.post('/users', function(request, response){
	//validate user data
	//store in the DB
	//request.session.name = request.body.name;
	//console.log(request.session.name);
	console.log(request.body);
	// submitted_info = {
	// 	Name: request.body.name,
	// 	Dojo_Location: request.body.favorite_language,
	// 	Comment: request.body.comment
	// };
	response.render("users",{user_data: request.body});	
})
	

//Tell the express app to listen on port 8000
app.listen(8000, function() {
	console.log("listening on port 8000");
})