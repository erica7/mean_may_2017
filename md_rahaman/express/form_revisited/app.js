// require express and path
var express = require("express");
var path = require("path");

var app = express();
// static content 
app.use(express.static(path.join(__dirname, "./static")));
// setting up ejs and our views folder
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');



app.get('/', function(req, res) {
 res.render("index");
})


var server = app.listen(8000, function(){
	console.log("listening on port 8000")
})

var io = require('socket.io').listen(server);

io.sockets.on('connection', function (socket) {
  
  console.log("WE ARE USING SOCKETS!");
  console.log(socket.id);
  //all the socket code goes in here!
  socket.on("posting_form", function (data){
  	console.log(data['reason'])
  	for(var i=0; i<data['reason'].length;i++){
  		console.log(data['reason'][i]['name']+' : '+data['reason'][i]['name'])

  	}
    // console.log('Someone clicked a button!  Reason: ' + data.reason);
    socket.emit('server_response', {response: data});
    socket.emit('random_num', {response: Math.floor(Math.random()*(1001))});
    console.log(data)
  })
})
