var express = require("express");
var app = express();


app.get('/', function(request, response){
	response.send("hello express")
	
});

app.use(express.static(__dirname + '/static'));
console.log(__dirname)

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/users', function(request,response){
	var users_array = [
		{name: 'michael', email:'1@gmail.com'},
		{name: 'morbes', email:'2@gmail.com'},
		{name: 'tager', email:'3@gmail.com'},
		{name: 'jankard', email:'4@gmail.com'}
	];
	var cats_array = [
		{name:'froo', age:'1', color:'black'},
		{name:'lancelot', age:'7', color:'calico'},
		{name:'theo', age:'5', color:'white'},
	];

	response.render('users', {users: users_array});

});


app.listen(8000, function(){
	console.log('listening on port 8000')
})