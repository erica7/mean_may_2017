var express = require('express');
var ejs = require('ejs');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/static'));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

// connect to the database
mongoose.connect('mongodb://localhost/quotingDojoRedux');  // if that database doesn't exist, it will be made

// update the promise library
mongoose.Promise = global.Promise;

// make a table
// (creates the blueprint)
var QuoteSchema = new mongoose.Schema({
  // name: String,
  name: {
    type: String,
    required: true,
    minlength: [2, 'Your name is too short.'],
    maxlength: [22, 'Your name is too long.']
  },
  quote: {
    type: String,
    required: true,
    minlength: [2, 'Your quote is too short.'],
    maxlength: [222, 'Your quote is too long.']
  }
}, { timestamps: true })

// register the schema with the DB
// (attaches the blueprint to a specific model)
mongoose.model('Quote', QuoteSchema);

// extracts the model from the DB
var Quote = mongoose.model('Quote');

app.get('/', function(req, res){
  res.render('index');
})

app.post('/quotes', function(req, res){
  console.log("Post Data", req.body);
  var quote = new Quote(req.body);
  console.log('Quote', quote);
  quote.save(function(err, quote){
    if (err) {
      return res.send(err);
    }
    // else {
    //   res.send(quote);
    // }
  })
  res.redirect('/quotes');
})

app.get('/quotes', function(req, res){
  Quote.find({}, function(err, quotes){
    if(err){
      return res.send(err);
    } else {
      // return res.send(quotes);
      res.render('quotes', {quotes:quotes})
    }
  })
  // res.render('quotes');
})

app.listen(8000, function(){
  console.log('listening on 8000');
})
