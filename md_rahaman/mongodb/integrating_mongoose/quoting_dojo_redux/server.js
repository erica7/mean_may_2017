// Require the Express Module
var express = require('express');
// Create an Express App
var app = express();
//To connect to mongodb
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/basic_mongoose');
  var QuoteSchema = new mongoose.Schema({
 		name: { type: String, required: true, minlength: 3},
 		quote: { type: String, required: true, minlength: 10},
       
    likes: {
      type: Number,
      default: 0
    }

  },{timestamps: true })

mongoose.model('Quote', QuoteSchema);
var Quote = mongoose.model('Quote')

var bodyParser = require('body-parser');
mongoose.Promise = global.Promise;
app.use(bodyParser.urlencoded({ extended: true }));
var path = require('path');
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    
    res.render('index');
})

app.post('/post', function(req, res) {

  var quote = new Quote(req.body);
    quote.save(function(err){
        if(err){
            res.render('index', {title: 'you have errors!', errors: quote.errors})
        }
        else {
            res.redirect('/quotes');
        }
    });
})

app.get('/likes/:id', function(req,res){
  console.log(req.params.id)
  Quote.findOne({_id:req.params.id}, function(err,quote){
    console.log(quote.likes)
    if(err){

      console.log('update not working')
    }else{
        quote.likes++
      quote.save(function(err){
        if(err){
          console.log('cannot save to database')
        }
        else{
          console.log('saving successful')
          res.redirect('/quotes')
        }
      })
    }
  })

})

app.get('/quotes', function(req, res){
    var quote = Quote.find({}).sort('-likes').exec(function(err, quotes) {
      if(err){
        console.log("error retriving data")
      }else{
        // console.log(quotes)
        res.render('quotes', {quotes:quotes});
      }
    })

})


app.listen(8000)

