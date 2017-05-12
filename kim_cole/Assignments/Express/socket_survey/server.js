var express = require ('express');
var bp = require('body-parser');


var app = express();

app.use(express.static(__dirname + '/static'));
app.use(express.static(__dirname + '/bower_components'));
app.use(express.static(__dirname + '/node_modules'));
app.use(bp.urlencoded({extended: true}));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response){
	response.render('index')
	// response.send('hello world')
})

var server = app.listen(8000, function(){
	console.log('listen on port 8000...')
})

var io = require('socket.io').listen(server)

io.sockets.on('connection', function(socket){
	console.log('new socket connection...')
	console.log('ID: ', socket.id)
	socket.on('posting_form', function(data){
		var random_number = Math.floor((Math.random() * 1000) + 1);
		console.log(data);
		socket.emit('random_number', {number: random_number});
		socket.emit('updated_message', {form: data});
	})	
})