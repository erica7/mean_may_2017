var express = require('express')
var bp = require('body-parser')
var mongoose = require('mongoose')

var app = express()

app.use(express.static(__dirname + '/static'));
app.use(express.static(__dirname + '/node_modules'));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

//connect to database
mongoose.connect('mongodb://localhost/1955_api')

//updated the promise library
mongoose.Promise = global.Promise;

//creating prople table

var PeopleSchema = new mongoose.Schema({
	name: {
		'type': String,
		'minlength': [4, 'name is too short']
	}
}, {timestamps: true})

//register the schema with the DB
mongoose.model('People', PeopleSchema)

var People = mongoose.model('People')

// app.all('/*', function(req, res, next) {
// 	res.header('Access-Control-Allow-Origin', '*');
// 	res.header('Access-Control-Allow-Headers', 'X-Requested-With');
// 	next();
// })

app.get("/", function(req,res){
	People.find({}, function(err, people){
		if(err){
			res.send(err)
		}else{
			res.json(people)
		}
	})
})

app.get("/new/:name/", function(req,res){
	console.log('adding name')
	var people = new People({
		'name': req.params.name
	});
	people.save(function(err, people){
		if(err){
			res.send(err);
		}else{
			res.send(people);
		}
	})
	// console.log(req.params.name)
})

app.get("/remove/:name/", function(req,res){
	People.remove({'name': req.params.name}, function(err){
		if(err){
			res.send(err)
		}
	})
})

app.get("/:name", function(req, res){
	People.findOne({'name': req.params.name}, function(err, people){
		if(err){
			res.send(err)
		}else{
			res.send(people)
		}
	})

})

app.listen(8000);


