var mongoose = require('mongoose')
var Mongoose = mongoose.model('Mongoose')

module.exports = {
	show: function(request, response){
		Mongoose.find({}).exec(function(err, mongooses){
			if(err){
				console.log(err)
			} else {
				response.render('index', {'mongooses': mongooses})
			}
		})
	},

	add: function(request, response){
		var mongoose = new Mongoose(request.body)
		mongoose.save(function(err, mongoose){
			if(err){
				console.log(err)
			} else {
				console.log(mongoose)
			}
		})
		response.redirect('/mongooses/new')
	},

	edit_form: function(request, response){
		var mongoose = Mongoose.findById(request.params.id).exec(function(err, mongoose){
		 	if(err){
		 		return response.send(err)
		 	} if(!mongoose) {
		 		return response.send('no mongoose found')
			} console.log(mongoose)
			response.render('edit', {'mongoose': mongoose})
		})
	},

	update: function(request, response){
		Mongoose.findById(request.params.id).exec(function(err, mongoose){
		 	if(err){
		 		return response.send(err)
		 	} if(!mongoose) {
		 		return response.send('no post found')
			}

			console.log(request.body)
			Mongoose.update({_id: request.params.id}, request.body, function(err){
				if(err){
					console.log(err)
					return response.send(err)
				}
			})
		//redirect to mongoose page
		response.redirect('/')
		})
	},

	show_one: function(request, response){
		Mongoose.findById(request.params.id).exec(function(err, mongoose){
			if(err){
				return response.send(err)
			} if(!mongoose) {
				return response.send('no mongoose found')
			} console.log(mongoose)

			response.render('show_mongoose', {'mongoose':mongoose})
		})
	},

	delete: function(request, response){
		Mongoose.remove({_id:request.params.id}, function(err){
			if(err){
				return response.send(err)
			}
		}) 
			response.redirect('/')
	}
}


