//Load the express module
var express = require('express');
var bodyParser = require('body-parser');

//Use express to create our app
var app = express();

//These lines allows our routing to find the static folder directly
app.use(express.static(__dirname + '/client'));
app.use(express.static(__dirname + '/bower_components'));
app.use(bodyParser.json());

//Tells our server to listen on port 8000
app.listen(8000, function(){
  console.log('listening on port 8000');
})