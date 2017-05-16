var express = require('express')
var app = express()
var bp = require('body-parser')
var mongoose = require('mongoose')

app.use(bp.urlencoded({extended: true}))
app.use(express.static(__dirname + '/static'))
app.use(express.static(__dirname + '/node_modules'))

app.set('views', __dirname + '/views')
app.set('view engine', 'ejs')

app.get('/', function(request, response){
	response.render('index')
})

app.post('/quotes', function(request, response){
	//add the quotes to the database
	console.log(request.body)
	var quote = new Quote(request.body)
	quote.save(function(err, quote){
		if(err){
			console.log(err)
		} else {
			console.log(quote)
		}
	})
	response.redirect('/')
})

app.get('/quotes', function(request, response){
	Quote.find({}).sort({createdAt: 'desc'}).exec(function(err, quotes){
		if(err){
			console.log(err)
			response.render('/errors')
		} else {
			console.log(quotes)
			response.render('quotes', {'quotes': quotes})
		}
	})
})



//add mongoose and create db and collections
mongoose.connect('mongodb://localhost/quoting_dojo')
mongoose.Promise = global.Promise

var QuoteSchema = new mongoose.Schema({
	name: String,
	quote: String
}, {timestamps: true})

mongoose.model('Quote', QuoteSchema)
var Quote = mongoose.model('Quote')


app.listen(8000, function(){
	console.log('listening on port 8000')
})