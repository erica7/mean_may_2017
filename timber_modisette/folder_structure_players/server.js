var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');


app.use(express.static(path.join(__dirname, '/client/')));
// app.use(express.static(path.join(__dirname, '/client/angular/controllers')));
// app.use(express.static(path.join(__dirname, '/client/static')));
app.use(express.static(path.join(__dirname, '/bower_components/')));
app.use(bodyParser.json());

app.listen(8000, function(){
	console.log("MAJOR TOM")
})