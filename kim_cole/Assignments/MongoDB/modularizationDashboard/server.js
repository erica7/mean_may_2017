// Dependencies
var express = require('express'),
    bp = require('body-parser'),
    mongoose = require('mongoose'),
    fs = require('fs'),
    path = require('path'),
    port = 8000;

// Create express app
var app = express();

// Use bodyParser to parse form data sent via HTTP POST
app.use(bp.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './client/static')));

// Tell server where views are and what templating engine I'm using
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './client/views'));

require('./server/config/mongoose.js');

// Create cat schema and attach it as a model to our database

// Mongoose automatically looks for the plural version of your model name, so a Dog model in Mongoose looks for 'dogs' in Mongo.


// Routes go here!
var routes_setter = require('./server/config/routes.js');
// invoke the function stored in routes_setter and pass it the "app" variable
routes_setter(app);


app.listen(port, function(){
  console.log("Running on ", port);
})