var mongoose = require('mongoose');
var Cat = mongoose.model('Cat');
module.exports = function(app){
	app.get('/', function(req, res){
	  Cat.find({}, function(err, results){
	    if (err) { console.log(err); }
	    res.render('index', { cats: results });
	  });
	});

	// Create
	app.post('/', function(req, res){
	  // Create a new cat!
	  Cat.create(req.body, function(err, result){
	    if (err) { console.log(err); }
	    res.redirect('/')
	  });
	});

	// New
	app.get('/new', function(req, res){
	  res.render('new');
	});

	// Show
	app.get('/:id', function(req, res){
	  Cat.find({ _id: req.params.id }, function(err, response) {
	    if (err) { console.log(err); }
	    res.render('show', { cat: response[0] });
	  });
	});

	app.get('/:id/edit/', function(req, res){
	  Cat.find({ _id: req.params.id }, function(err, response) {
	    if (err) { console.log(err); }
	    res.render('edit', { cat: response[0] });
	  })
	});

	// Update
	app.post('/:id', function(req, res){
	  Cat.update({ _id: req.params.id }, req.body, function(err, result){
	    if (err) { console.log(err); }
	    res.redirect('/');
	  });
	});

	// Delete
	app.post('/:id/delete', function(req, res){
	  Cat.remove({ _id: req.params.id }, function(err, result){
	    if (err) { console.log(err); }
	    res.redirect('/');
	  });
	});
}