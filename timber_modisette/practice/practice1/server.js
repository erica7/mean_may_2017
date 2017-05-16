var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/user_practice');
mongoose.Promise = global.Promise;

var UserSchema = new mongoose.Schema({
    name:  { type: String, required: true, minlength: 6},
    age: { type: Number, required:true, min: 1, max: 150 }
}, {timestamps: true });

var User = mongoose.model('User', UserSchema);



app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, '.static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

//first hit
app.get('/', function(req,res){
	res.render('index');
});





//form url redirects to second hit
app.post('/users', function(req,res){
	console.log('post data', req.body);
	var user = new User({name: req.body.name, age: req.body.age});
	user.save(function(err){
		if(err){
			console.log(err);
			res.render('index', {errors: err.errors});
		} 
		else{
			console.log('great');
			res.redirect('/results');
		}
	});

});

app.get('/results', function(req,res){
	User.find({age:{$lte:20}},function(err,results){
		if(err){
			console.log('error at the results route');
		}
		else{
			console.log(results);
			res.render('results', {user: results});
		}
	})
})





app.listen(8000, function(){
	console.log('MAJOR TOM');
});