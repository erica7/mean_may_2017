var bodyParser = require('body-parser');
var express = require('express');
// var mongoose = require('mongoose');

var app = express();

app.use(express.static(__dirname + '/bower_components'));
app.use(express.static(__dirname + '/client'));
app.use(bodyParser.json());

// require the mongoose configuration (essentially copy/pastes the code from that file here)
require("./server/config/mongoose.js");

// require routes configuration; invoke the module.exports function, passing it the app
require("./server/config/routes.js")(app);

app.listen(8000, function(){
  console.log('listening on 8k...');
})
