var express = require('express');
var app = express();
var bp = require('body-parser');

app.use(bp.urlencoded({extended: true}));
app.use(express.static(__dirname + '/static'));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response){
	response.render('index');
});


var server = app.listen(8000, function(){
	console.log('listening on port 8000')
});

var io = require('socket.io').listen(server);

io.sockets.on('connection', function(socket){
	socket.on('posting_form', function(form_data){
		console.log(form_data);
		// turn this into a string and stuff
		socket.emit('updated_message', {form_data: form_data})
		//create random number
		var random = Math.floor(Math.random()*1000 + 1)
		socket.emit('random_number', {random})
	});
});