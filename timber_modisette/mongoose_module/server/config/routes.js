var mongoose = require('mongoose');
var Cat = mongoose.model('Cat');
var cats = require('../controllers/cats.js')

module.exports = function(app){

	app.get('/', function(req,res){
		cats.show(req,res)
		
	});
	app.get('/new', function(req,res){
		cats.new(req,res)
	
	});
	app.post('/addcat', function(req,res){
		cats.add(req,res)
	});
	app.get('/cat/:id', function(req,res){
		cats.catPage(req,res)
	});
	app.get('/edit/:id', function(req,res){
		cats.editPage(req,res)
	});
	app.post('/editcat/:id', function(req,res){
		cats.updateCat(req,res)
	});
	app.get('/delete/:id', function(req,res){
		cats.delete(req,res)
	});



}