var express = require('express')
var app = express()
var bp = require('body-parser')
var mongoose = require('mongoose')

app.use(bp.urlencoded({extended: true}))
app.use(express.static(__dirname + '/static'))
app.use(express.static(__dirname + '/node_modules'))

app.set('views', __dirname + '/views')
app.set('view engine', 'ejs')

//index page
app.get('/', function(request, response){
	Mongoose.find({}).exec(function(err, mongooses){
		if(err){
			console.log(err)
		} else {
			response.render('index', {'mongooses': mongooses})
		}
	})
})
//takes you to create new mongoose page
app.get('/mongooses/new', function(request, response){
	response.render('create')
})
//adds new mongoose
app.post('/mongooses', function(request, response){
	var mongoose = new Mongoose(request.body)
	mongoose.save(function(err, mongoose){
		if(err){
			console.log(err)
		} else {
			console.log(mongoose)
		}
	})
	response.redirect('/mongooses/new')
})
//goes to page to edit a mongoose
app.get('/mongooses/edit/:id', function(request, response){
	var mongoose = Mongoose.findById(request.params.id).exec(function(err, mongoose){
	 	if(err){
	 		return response.send(err)
	 	} if(!mongoose) {
	 		return response.send('no mongoose found')
		} console.log(mongoose)
		response.render('edit', {'mongoose': mongoose})
	})
})
//edits mongoose
app.post('/mongooses/:id', function(request, response){
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
})
//show info about a mongoose
app.get('/mongooses/:id', function(request, response){
	Mongoose.findById(request.params.id).exec(function(err, mongoose){
		if(err){
			return response.send(err)
		} if(!mongoose) {
			return response.send('no mongoose found')
		} console.log(mongoose)

		response.render('show_mongoose', {'mongoose':mongoose})
	})

})
// delete
app.post('/mongooses/destroy/:id', function(request, response){
	Mongoose.remove({_id:request.params.id}, function(err){
		if(err){
			return response.send(err)
		}
	}) 
	response.redirect('/')
})

mongoose.connect('mongodb://localhost/mongooses')
mongoose.Promise = global.Promise

var MongooseSchema = new mongoose.Schema({
	name: String,
	age: Number,
	favorite_food: String
}, {timestamps: true})

mongoose.model('Mongoose', MongooseSchema)
var Mongoose = mongoose.model('Mongoose')


app.listen(8000, function(){
	console.log("listening on port 8000")
})