// require express,path and body-parser
var express = require("express");
var path = require("path");
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded());
// static content 
app.use(express.static(path.join(__dirname, "./static")));
// setting up ejs and our views folder
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function(request, response){
	var io = require('socket.io').listen(server)
	//setting counter into 0 
	var counter = 0;
	io.sockets.on('connection', function (socket) {
		socket.on("push_button", function (data){
			// counter will increment every event triggered
			counter += 1;
			io.emit('push_counter', {response: counter});
		})
		//resetting the counter into 0 
		socket.on("reset_counter", function (data){
			counter = 0;
			io.emit('reset_response', {response: counter});
		})
	})
	response.render('index')
})


// tell the express app to listen on port 8000
var server = app.listen(8000, function() {
	console.log("listening on port 8000");
})

