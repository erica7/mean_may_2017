// Dependencies
var express = require('express'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    path = require('path'),
    port = 8000;

// Create express app
var app = express();

// Use bodyParser to parse form data sent via HTTP POST
app.use(bodyParser.urlencoded({ extended: true }));

// Tell server where views are and what templating engine I'm using
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

// Create connection to database
var connection = mongoose.connect("mongodb://localhost/cat_db");

// Create dog schema and attach it as a model to our database
var CatSchema = new mongoose.Schema({
    name: String,
    weight: Number,
    color: String
});

// Mongoose automatically looks for the plural version of your model name, so a Dog model in Mongoose looks for 'dogs' in Mongo.
var Cat = mongoose.model('Cat', CatSchema);

// Routes go here!
app.get('/', function(req, res){
  Cat.find({}, function(err, results){
    if (err) { console.log(err); }
    res.render('index', { cats: results });
  });
});

// Create
app.post('/', function(req, res){
  // Create a new cat!
  Cat.create(req.body, function(err, result){
    if (err) { console.log(err); }
    res.redirect('/')
  });
});

// New
app.get('/new', function(req, res){
  res.render('new');
});

// Show
app.get('/:id', function(req, res){
  Cat.find({ _id: req.params.id }, function(err, response) {
    if (err) { console.log(err); }
    res.render('show', { cat: response[0] });
  });
});

app.get('/:id/edit/', function(req, res){
  Cat.find({ _id: req.params.id }, function(err, response) {
    if (err) { console.log(err); }
    res.render('edit', { cat: response[0] });
  })
});

// Update
app.post('/:id', function(req, res){
  Cat.update({ _id: req.params.id }, req.body, function(err, result){
    if (err) { console.log(err); }
    res.redirect('/');
  });
});

// Delete
app.post('/:id/delete', function(req, res){
  Cat.remove({ _id: req.params.id }, function(err, result){
    if (err) { console.log(err); }
    res.redirect('/');
  });
});


app.listen(port, function(){
  console.log("Running on ", port);
})