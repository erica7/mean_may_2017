var express = require("express");
var bodyParser = require('body-parser');
var session = require('express-session');
var app = express();


app.use(express.static(__dirname + '/static'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(session({secret:'codingdojorocks'}));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

var users = [
  {name: "Michael", email:"mchoi@codingdojo.com"},
  {name: "Jay", email:"jaypatel@codingdojo.com"},
  {name: "Brendan", email:"brogers@codingdojo.com"},
  {name: "Andrew", email:"drewmich@codingdojo.com"},
];

app.get('/', function(request, response){
    response.render('index');
})
app.get('/users', function(request, response){
  response.render('users', {users:users});
});
app.post('/users', function(request, response){
  console.log("POST data is : \n\n", request.body)
  request.session.name = request.body.name;
  users.push(request.body)

  response.redirect('/users');
});
app.get('/users/:id', function(request, response){
  console.log("The user id requested is : \n\n", request.params.id);
  response.send("You requested the user with id: " + request.params.id);
});

app.listen(8000, function(){
    console.log("listening on port 8000");
})
