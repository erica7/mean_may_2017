var express = require("express");
var path = require("path");
var bodyParser = require('body-parser');
var session = require('express-session');
var mongoose = require('mongoose');
var app = express();


app.use(express.static(path.join(__dirname, "./static")));
app.use(bodyParser.urlencoded({extended: true}));
app.use(session({secret:'codingdojorocks'}));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

mongoose.connect('mongodb://localhost/basic_mongoose');
mongoose.Promise = global.Promise;
var UserSchema = new mongoose.Schema({
  first_name:  { type: String, required: [true, "You don't have a first name?"], minlength: 2, maxlength: 20},
  last_name: { type: String, required: [true, "You don't have a last name?"], minlength: 2, maxlength: 20 },
  age: { type: Number, min: [18, "Kids are not allowed  here!"], max: [150, "Vampires are not allowed in here"] },
  email: { type: String, required: [true, "Please enter email."] }
}, {timestamps: true})
mongoose.model('User', UserSchema);
var User = mongoose.model('User');

app.get('/', function(request, response){
  User.find({}, function(error, users) {
    if (error){
      response.render('index', {title: "You have errors", error:users.errors})
    } else {
      response.render('index', {users:users});
    }
  })
})
app.get('/users', function(request, response){
  response.render('results');
});
app.post('/users', function(request, response){
  console.log("POST data is : \n\n", request.body)
  var user = new User({name:request.body.name, age:request.body.age})
  user.save(function(error){
    if(error){
      console.log("Oops! Something went wrong.");
      response.send({title: "Oops! Something went wrong.", errors: user.errors, users:[]})
    } else {
      console.log("Successfully added a user!");
      response.redirect('/')
    }
  })
});
app.get('/users/:id', function(request, response){
  console.log("The result id requested is : \n\n", request.params.id);
  response.send("You requested the user with id: " + request.params.id);
});

app.listen(8000, function(){
    console.log("listening on port 8000");
})
