var mongoose = require('mongoose')
var Mongoose = mongoose.model('Mongoose')
var mongooses = require('../controllers/mongooses.js')

module.exports = function(app){

	// index page
	app.get('/', function(request, response){
		mongooses.show(request, response)
	})

	// takes you to create new mongoose page
	app.get('/mongooses/new', function(request, response){
		response.render('create')
	})
	//adds new mongoose
	app.post('/mongooses', function(request, response){
		mongooses.add(request, response)
	})
	//goes to page to edit a mongoose
	app.get('/mongooses/edit/:id', function(request, response){
		mongooses.edit_form(request, response)
	})
	//edits mongoose
	app.post('/mongooses/:id', function(request, response){
		mongooses.update(request, response)
	})
	//show info about a mongoose
	app.get('/mongooses/:id', function(request, response){
		mongooses.show_one(request, response)
	})
	// delete
	app.post('/mongooses/destroy/:id', function(request, response){
		mongooses.delete(request, response)
	})
}