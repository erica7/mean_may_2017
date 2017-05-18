var express = require('express')
var bodyParser = require('body-parser')
var mongoose = require('mongoose')
var path = require('path')
var app = express()

app.use(bodyParser.urlencoded({extended: false}))

app.set('views', __dirname + '/views')
app.set('view engine', 'ejs')

mongoose.connect('mongodb://localhost/quoting_dojo')

var QuoteSchema = new mongoose.Schema({
  name: {type: String, required: true},
  quote: {type: String, required: true}
}, {timestamps: true})

var Quote = mongoose.model('quotes', QuoteSchema)


app.get('/', function(req, res) {
  res.render('index')
})

app.post('/quotes', function(req, res) {
  Quote.create(req.body, function(err){
    if (err) {
      response.send(err)
    }
    res.redirect('/quotes')
  })
})

app.get('/quotes', function(req, res) {
  Quote.find({}, function(err, data) {
    if (err) {
      response.send(err)
    }
    res.render('quotes', {quotes: data})
  })
})

app.listen(8000, function () {
  console.log('Running at http://localhost:8000/')
})
