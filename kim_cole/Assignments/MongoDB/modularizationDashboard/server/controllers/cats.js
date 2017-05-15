var mongoose = require('mongoose');
var Cat = mongoose.model('Cat', CatSchema);
module.exports = {
	index: function(req, res){
		Cat.find({}, function(err, results){
		    if (err) { console.log(err); }
		    res.render('index', { cats: results });
		})
	},
	create: function(req, res){
		Cat.create(req.body, function(err, result){
		    if (err) { console.log(err); }
		    res.redirect('/');
	  	})	
	},
	new: function(req, res){
		res.render('new');	
	},
	show: function(req, res){
		Cat.find({ _id: req.params.id }, function(err, response) {
    		if (err) { console.log(err); }
    		res.render('show', { cat: response[0] });
  		})	
	},
	edit: function(req, res){
		Cat.find({ _id: req.params.id }, function(err, response) {
    		if (err) { console.log(err); }
    		res.render('edit', { cat: response[0] });
  		})	
	},
	update: function(req, res){
		Cat.update({ _id: req.params.id }, req.body, function(err, result){
    		if (err) { console.log(err); }
    	res.redirect('/');
  		})	
	},
	delete: function(req, res){
		Cat.remove({ _id: req.params.id }, function(err, result){
    		if (err) { console.log(err); }
    	res.redirect('/');
  		})
	}
}


