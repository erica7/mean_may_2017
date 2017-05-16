var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.get('/', function(request, response) {
	response.send('<h1>Hello Express</h1>');
});

app.use(express.static(__dirname + '/static'));
console.log(__dirname);
app.use(bodyParser.urlencoded({extended: true}));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/users', function(request, response){
	var users = [
        {name: "Michael", email: "michael@codingdojo.com"}, 
        {name: "Jay", email: "jay@codingdojo.com"}, 
        {name: "Brendan", email: "brendan@codingdojo.com"}, 
        {name: "Andrew", email: "andrew@codingdojo.com"}
    ];
    response.render('users', {users});
});













app.listen(8000, function(){
	console.log('listening on port 8000..')
});

