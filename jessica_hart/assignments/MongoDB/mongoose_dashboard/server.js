var express = require('express')
var bodyParser = require('body-parser')
var mongoose = require('mongoose')
var path = require('path')
var app = express()

app.use(bodyParser.urlencoded({extended: false}))

app.set('views', __dirname + '/views')
app.set('view engine', 'ejs')

mongoose.connect('mongodb://localhost/mongoose_dashboard')

var MongooseSchema = new mongoose.Schema({
  name: {type: String, required: true},
  desc: {type: String}
}, {timestamps: true})

var Mongoose = mongoose.model('mongooses', MongooseSchema)

// Displays all of the mongooses
app.get('/', function(req, res) {
  Mongoose.find({}, function(err, data) {
    if (err) {
      response.send(err)
    }
    res.render('index', {mongooses: data})
  })
})

// Displays a form for making a new mongoose
app.get('/mongooses/new', function(req, res) {
  res.render('new')
})

// Should show a form to edit an existing mongoose
app.get('/mongooses/edit/:id', function(req, res) {
  Mongoose.find({ _id: req.params.id }, function(err, data) {
    if (err) {
      response.send(err)
    }
    res.render('edit', { mongoose: data[0] })
  })
})

// Displays information about one mongoose
app.get('/mongooses/:id', function(req, res) {
  Mongoose.find({_id: req.params.id}, function(err, data) {
    if (err) {
      response.send(err)
    }
    res.render('show', { mongoose: data[0] })
  })
})

// Should be the action attribute for the form in the route (GET '/mongooses/new')
app.post('/mongooses', function(req, res) {
  Mongoose.create(req.body, function(err, data){
    if (err) {
      response.send(err)
    }
    res.redirect('/')
  })
})

// Should delete the mongoose from the database by ID
app.post('/mongooses/destroy/:id', function(req, res) {
  Mongoose.remove({ _id: req.params.id }, function(err, data){
    if (err) {
      response.send(err)
    }
    res.redirect('/')
  });
})

// Should be the action attribute for the form in the route (GET '/mongooses/edit/:id')
app.post('/mongooses/:id', function(req, res) {
  Mongoose.update({ _id: req.params.id }, req.body, function(err, data){
    if (err) {
      response.send(err)
    }
    res.redirect('/');
  })
})

app.listen(8000, function () {
  console.log('Running at http://localhost:8000/')
})
