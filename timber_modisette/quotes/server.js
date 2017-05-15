var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose')
    
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/quoting_dojo');

var QuoteSchema = new mongoose.Schema({
  name: {type:String, required:true,minlength:10},
  quote: { type: String, required: true, minlength: 10},
});

var Quote = mongoose.model('quotes', QuoteSchema);

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, '.static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');


//first hit
app.get('/', function(req, res){
  res.render('welcome');
});

//form route redirects to second hit
app.post('/quotes', function(req, res){
  Quote.create(req.body, function(err){
    if(err) { console.log(err); 
      res.render('welcome', {errors:err.errors})
    }
    else{
      res.redirect('/quotes');
      
    }
  });
});
//second hit
app.get('/quotes', function(req, res){
  // Logic to grab all quotes and pass into the rendered view
  Quote.find({}, function(err, results){
    if(err) { console.log(err); }
    res.render('quotes', { quotes: results });
  });
});

// END OF ROUTING...

app.listen(8000, function(){
  console.log('MAJOR TOM');
});