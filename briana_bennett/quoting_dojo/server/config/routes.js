var mongoose = require('mongoose')
var Quote = mongoose.model('Quote')
var quotes = require('../controllers/quotes')

module.exports = function(app){
	
	app.get('/', function(request, response){
		response.render('index')
	})

	app.post('/quotes', function(request, response){
		//add the quotes to the database
		quotes.create(request, response)
	})

	app.get('/quotes', function(request, response){
		quotes.show(request, response)
	})
}