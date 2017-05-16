var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded());

app.use(express.static(path.join(__dirname, "./static")));

app.set('views', path.join(__dirname, "./views"));
app.set('view engine', 'ejs');


app.get('/',function(req,res){
	res.render('index')
});

var server = app.listen(8000, function(){
	console.log('server is listening on port 8000');
});

var io = require('socket.io').listen(server);

io.sockets.on('connection', function(socket){
	console.log('sockets are working');
	console.log('socket id', socket.id);

	socket.on("user", function(data){
		console.log('button clicked');
		console.log(data.data);
		if(data.data == 0){
			var no = 'no';
			console.log(no);
		}
		else{
			socket.emit('server_response', {response:data});
		};
			

	});
	socket.on('messages', function(data){
		console.log(data);
		io.emit('messages_response', {response:data});
	})
	// socket.on("random_number",function(data){
	// 	var random = Math.floor(Math.random() * 100);
	// 	console.log(data);
	// 	console.log(random);
	// 	socket.emit('random_number', {response: random});
	// });
});