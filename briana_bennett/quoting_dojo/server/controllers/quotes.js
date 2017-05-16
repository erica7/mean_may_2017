var mongoose = require('mongoose')
var Quote = mongoose.model('Quote')

module.exports = {
	show: function(request, response){
		Quote.find({}, function(err, quotes){
			response.render('quotes', {quotes:quotes})
		})
	},

	create: function(request, response){
		var quote = new Quote(request.body)
		quote.save(function(err, quote){
			if(err){
				console.log(err)
			} else {
				console.log(quote)
				response.redirect('/')
			}
		})
	}







}


