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

   socket.on("user", function (data){
      if(data.name == 0){
         console.log("ener a valid name")
      }
      else{
         io.emit('user_info', {name: data.name, socketid:socket.id});
      }  
   })

   socket.on("message", function(data){
      console.log(data.message)
      if(data.message == 0){
         console.log("ener a valid message")
      }
      else{
         io.emit('message', {response:data})        
      }
   })


})
