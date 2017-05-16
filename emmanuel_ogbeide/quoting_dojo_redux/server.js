var express = require("express");
var path = require("path");
var bodyParser = require('body-parser');
var session = require('express-session');
var mongoose = require('mongoose');
var app = express();


app.use(express.static(path.join(__dirname, "./static")));
app.use(bodyParser.urlencoded({extended: true}));
app.use(session({secret:'codingdojorocks'}));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

mongoose.connect('mongodb://localhost/quoting_dojo_redux');
mongoose.Promise = global.Promise;
var QuoteSchema = new mongoose.Schema({
  name:  { type: String, required: [true, "You don't have a name?"], minlength: 2, maxlength: 20},
  quote: { type: String, required: [true, "Please enter quote"], minlength: 4},
}, {timestamps: true})
mongoose.model('Quote', QuoteSchema);
var Quote = mongoose.model('Quote');


app.get('/', function(request, response){
  response.render('index');
});
app.get('/quotes', function(request, response){
  Quote.find({}, function(error, quotes) {
    if (error){
      response.render('error', {title: "You have errors", error:quotes.errors})
    } else {
      response.render('quotes', {quotes:quotes});
    }
  })
})
app.post('/quotes', function(request, response){
  console.log("POST data is : \n\n", request.body)
  var quote = new Quote({name:request.body.name, quote:request.body.quote})
  quote.save(function(error){
    if(error){
      console.log("Oops! Something went wrong.");
      response.render('error', {title: "Oops! Something went wrong.", errors:quote.errors})
    } else {
      console.log("Successfully added a quote!");
      response.redirect('/quotes')
    }
  })
});
app.get('/quotes/:id', function(request, response){
  console.log("The quote id requested is : \n\n", request.params.id);
  response.send("You requested the quote with id: " + request.params.id);
});

app.listen(8000, function(){
    console.log("listening on port 8000");
})
