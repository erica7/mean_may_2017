var express = require('express');
var bp = require('body-parser');
var mongoose = require('mongoose');


var app = express()

app.use(express.static(__dirname + '/static'));
app.use(express.static(__dirname + '/node_modules'));
app.use(bp.urlencoded({extended: true}))

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs' )

//connect to the database
mongoose.connect('mongodb://localhost/basic_mongoose')

mongoose.Promise = global.Promise;

//make mongoose table 
var MongooseSchema = new mongoose.Schema({
	name:{
		'type': String,
		'minlength': [2, 'name length is too short']
	}
}, {timestamps: true})

//register the schema with the DB
mongoose.model('Mongoose', MongooseSchema);

var Mongoose = mongoose.model('Mongoose')

//retriving all mongooses
app.get("/", function(req,res){
	Mongoose.find({},function(err,mongooses){
		if(err){
			res.render('error retriving mongooses');
		}else{
			res.render('index', {mongooses: mongooses});
		}
	})
})

//find one mongoose
app.get('/mongoose/:id', function(req,res){
	console.log(req.params.id);
	Mongoose.findById(req.params.id, function(err,mongoose){
		if(err){
			return res.send(err)
		}else{
			res.render('one_mongoose', {mongoose: mongoose})
		}
	})
})

//making new mongooses
app.get("/mongooses/new", function(req,res){
	res.render('making_mongoose')
})

//post route for making new mongooses
app.post('/mongooses', function(req,res){
	var mongoose = new Mongoose(req.body);
	// console.log(mongoose)
	mongoose.save(function(err,mongoose){
		if(err){
			res.send(err);
		}else{
			res.redirect('/');
		}
	})
})

// edit a mongoose get route
app.get('/mongooses/edit/:id', function(req,res){
	console.log(req.params.id);
	res.render('edit_mongoose', {id: req.params.id});
	
})

//editing mongoose post route
app.post('/mongooses/:id', function(req,res){
	console.log(req.params.id);
	Mongoose.findById(req.params.id, function(err, mongoose){
		if(err){
			return res.send(err)
		}
		if(!mongoose){
			return res.send('no mongoose')
		}
		mongoose.name = req.body.name
		mongoose.save(function(err, mongoose){
			if(err){
				return res.send(err)
			}
			res.redirect('/');
		})
	})
})

//delete the mongoose
app.get('/mongooses/destroy/:id', function(req,res){
	console.log(req.params.id)
	Mongoose.findByIdAndRemove(req.params.id, function(err, mongoose){
		if(err){
			return res.send(err)
		}else{
			res.redirect('/')
		}
	})
})

app.listen(8000, function(){
	console.log('listening to port 8000...')
})




