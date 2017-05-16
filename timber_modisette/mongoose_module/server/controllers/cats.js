var mongoose = require('mongoose');
var Cat = mongoose.model('Cat');

module.exports = {
	show: function(req,res){
		Cat.find({}, function(err,results){
			if(err){
				console.log('error');
			}
			// console.log(results);
			res.render('index', {cats: results});
		
	});
	},
	new: function(req,res){
		res.render('new');
	},
	add: function(req,res){
		var cat = new Cat({name:req.body.name});
		cat.save(function(err){
			if(err){
				console.log(err);
				res.render('new', {errors:err.errors});
			}
			else{
				res.redirect('/');
			}

		});
	},
	catPage: function(req,res){
		Cat.find({ _id: req.params.id }, function(err,results){
			if(err){
				console.log('error at cat id');
			}
			res.render('cat', {cat: results});
		});
	},
	editPage:function(req,res){
		Cat.find({_id: req.params.id}, function(err, results){
			if(err){
				console.log('error at edit id')
			}
			res.render('edit', {cat: results});
		});
	},
	updateCat: function(req,res){
		Cat.update({_id: req.params.id},{$set:{name:req.body.change_name}}, function(err,results){
			if(err){
				console.log('error at editcat');
			}
			res.redirect('/');
		});
	},
	delete: function(req,res){
		Cat.remove({_id: req.params.id}, function(err){
			if(err){
				console.log('error at delete cat');
			}
			res.redirect('/');
		});
	}
	
}

















// app.get('/', function(req,res){
// 	Cat.find({}, function(err,results){
// 		if(err){
// 			console.log('error');
// 		}
// 		// console.log(results);
// 		res.render('index', {cats: results});
		
// 	});
// });

// // add new cat route loads new cat form page
// app.get('/new', function(req,res){
	
// 	res.render('new');
// });

// //build route for form
// app.post('/addcat', function(req,res){
// 	//add cat to database
// 	var cat = new Cat({name:req.body.name});
// 	//save into the database
// 	cat.save(function(err){
// 		if(err){
// 			console.log(err);
// 			res.render('new', {errors:err.errors});
// 		}
// 		else{
// 			res.redirect('/');
// 		}

// 	});
// });

// app.get('/cat/:id', function(req,res){
// 	Cat.find({ _id: req.params.id }, function(err,results){
// 		if(err){
// 			console.log('error at cat id');
// 		}
// 		res.render('cat', {cat: results});
// 	});
// });

// app.get('/edit/:id', function(req,res){
// 	Cat.find({_id: req.params.id}, function(err, results){
// 		if(err){
// 			console.log('error at edit id')
// 		}
// 		res.render('edit', {cat: results});
// 	});
// });

// app.post('/editcat/:id', function(req,res){
// 	//find cat. change cat save
// 	console.log(req.body.name)
// 	Cat.update({_id: req.params.id},{$set:{name:req.body.change_name}}, function(err,results){
// 		if(err){
// 			console.log('error at editcat');
// 		}
// 		// console.log('finding edit cats results',results);
// 		res.redirect('/');
// 	});
// });

// app.get('/delete/:id', function(req,res){
// 	Cat.remove({_id: req.params.id}, function(err){
// 		if(err){
// 			console.log('error at delete cat');
// 		}
// 		res.redirect('/');
// 	});
// });