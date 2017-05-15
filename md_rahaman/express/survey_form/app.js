
var express = require("express");
var bodyParser = require('body-parser')
var app = express();
app.set('views', __dirname + '/views')
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(request,response){
    response.render('index');
})

app.post("/users", function (request, response){
    // hard-coded user data
    // console.log("POST DATA \n\n", request.body)
    console.log(request.body)
    var users_array = [
        request.body;
    ];
    response.render('result', {users: users_array});
})

app.listen(8000,function(){
	console.log("listening on 8000")
})