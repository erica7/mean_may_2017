// require express and path
var express = require("express");
var path = require("path");

var app = express();
// static content 
app.use(express.static(path.join(__dirname, "./static")));
// setting up ejs and our views folder
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

var count = 0

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


  socket.on("click", function (data){
    console.log('data',data)
    if(data.reason == 'blue'){
      count += 1
    }
    if(data.reason == 'red'){
      count = 0
    }

    io.emit('server_response', {click: count});
    console.log(count)
  })
})
