var express = require('express');
var path = require('path');

var app = express();

// this selects our port and listens
// note that we're now storing our app.listen within
// a variable called server. this is important!!
var server = app.listen(8000, function(){
  console.log('listening on port 8000');
})

// this is a new line we're adding AFTER our server listener
// take special note how we're passing the server
// variable. unless we have the server variable, this line will not work!!
var io = require('socket.io').listen(server);

// Connection event
// whenever a connection event happens (the connection event is built in) run the following code
io.sockets.on('connection', function(socket){
  console.log("we are using sockets");
  console.log(socket.id);
  // all the socket code goes in here
  socket.on("button_clicked", function(data){
    console.log('Someone clicked a button. Reason: ' + data.reason);
    socket.emit("server_response", {response: "sockets are the best"});  // the first parameter is the name of the event that will be emitted (in this case, "server_response")  Note: `connection` is a special built-in event name
  })

  // //  EMIT:
  // socket.emit('my_emit_event');
  // //  BROADCAST:
  // socket.broadcast.emit("my_broadcast_event");
  // //  FULL BROADCAST:
  // io.emit("my_full_broadcast_event");
})

app.use(express.static(path.join(__dirname, ".static")));
// app.use(express.static(__dirname, ".static"));  // same as above; `path` is not needed

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(req, res){
  res.render('index');
});

// app.listen(8000, function(){
//   console.log('listening to 8000');
// });
