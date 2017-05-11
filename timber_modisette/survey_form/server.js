var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

var users_array = []
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "./static")));


app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

//root
app.get('/', function(req, res) {
 res.render("index");
});




//form route
app.post('/users', function(req, res) {
 console.log("POST DATA", req.body);
 users_array.push(req.body);

 res.redirect('/results');
})




//render results
app.get('/results', function(req, res) {
	console.log(users_array);

 res.render("results",{users:users_array});
});








app.listen(8000, function() {
 console.log("listening on port 8000");
});