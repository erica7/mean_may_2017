var express = require("express");
var path = require("path");
var bodyParser = require('body-parser');
var session = require('express-session');
var app = express();


app.use(express.static(path.join(__dirname, "./static")));
app.use(bodyParser.urlencoded({extended: true}));
app.use(session({secret:'codingdojorocks'}));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');


app.get('/', function(request, response){
    response.render('index');
})
app.get('/results', function(request, response){
  response.render('results', {result:request.session.data});
});
app.post('/results', function(request, response){
  console.log("POST data is : \n\n", request.body)
  request.session.data = request.body;

  response.redirect('/results');
});
app.get('/results/:id', function(request, response){
  console.log("The result id requested is : \n\n", request.params.id);
  response.send("You requested the user with id: " + request.params.id);
});

app.listen(8000, function(){
    console.log("listening on port 8000");
})
