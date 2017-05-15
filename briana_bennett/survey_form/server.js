var express = require('express');
var app = express();
var bp = require('body-parser');

app.use(bp.urlencoded({extended: true}));
app.use(express.static(__dirname + '/static'));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
//show index page
app.get('/', function(request, respond){
	respond.render('index');
});
//show result page
app.post('/result', function(request, respond){
	console.log(request.body);	
	respond.render('results', request.body);
});
//go back to index with go back button
app.get('/', function(request, respond){
	respond.redirect('/');
});

app.listen(8000, function() {
 console.log("listening on port 8000");
});