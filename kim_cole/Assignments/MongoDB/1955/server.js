
//the home base of the project:
        // - where we require the routes and the mongoose config
        // - crates the express application, loads config into it and listen
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

// This sets the location where express will look for the ejs views
app.set('views',path.join(__dirname, './client/views'));
// set the view engine itself so that express knows that we are using ejs as opposed to another templating engine like jade
app.set('view engine', 'ejs');

require('./server/config/mongoose.js');

var routes = require("./server/config/routes.js")(app);

app.listen(port, function(){
  console.log("Running on ", port);
});