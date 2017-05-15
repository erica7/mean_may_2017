var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose')


mongoose.connect('mongodb://localhost/cat_project');
mongoose.promise = global.Promise;

//schema goes here
var CatSchema = new mongoose.Schema({
	name: {type:String, required:true, minLength:1}
}, {timestamps: true });

var Cat = mongoose.model('Cat', CatSchema);

//uses and sets
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

//root route loads all cats
app.get('/', function(req,res){
	Cat.find({}, function(err,results){
		if(err){
			console.log('error');
		}
		// console.log(results);
		res.render('index', {cats: results});
		
	});
});

// add new cat route loads new cat form page
app.get('/new', function(req,res){
	
	res.render('new');
});

//build route for form
app.post('/addcat', function(req,res){
	//add cat to database
	var cat = new Cat({name:req.body.name});
	//save into the database
	cat.save(function(err){
		if(err){
			console.log(err);
			res.render('new', {errors:err.errors});
		}
		else{
			res.redirect('/');
		}

	});
});

app.get('/cat/:id', function(req,res){
	Cat.find({ _id: req.params.id }, function(err,results){
		if(err){
			console.log('error at cat id');
		}
		res.render('cat', {cat: results});
	});
});

app.get('/edit/:id', function(req,res){
	Cat.find({_id: req.params.id}, function(err, results){
		if(err){
			console.log('error at edit id')
		}
		res.render('edit', {cat: results});
	});
});

app.post('/editcat/:id', function(req,res){
	//find cat. change cat save
	console.log(req.body.name)
	Cat.update({_id: req.params.id},{$set:{name:req.body.change_name}}, function(err,results){
		if(err){
			console.log('error at editcat');
		}
		// console.log('finding edit cats results',results);
		res.redirect('/');
	});
});

app.get('/delete/:id', function(req,res){
	Cat.remove({_id: req.params.id}, function(err){
		if(err){
			console.log('error at delete cat');
		}
		res.redirect('/');
	});
});


app.listen(8000, function(){
	console.log('MAJOR TOM')
});










