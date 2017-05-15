var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');





//uses and sets
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, './client/static')));
app.set('views', path.join(__dirname, './client/views'));
app.set('view engine', 'ejs');

//root route loads all cats
require('./server/config/mongoose.js');
var routes_setter = require('./server/config/routes.js');
routes_setter(app)



app.listen(8000, function(){
	console.log('MAJOR TOM')
});










