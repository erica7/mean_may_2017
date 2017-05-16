var express = require('express');
var bodyParser = require('body-parser');
var ejs = require('ejs');

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/client/static'));
app.set('views', __dirname + '/client/views');
app.set('view engine', 'ejs');

require('./server/config/mongoose.js')

var routes_setter = require('./server/config/routes');

routes_setter(app);

app.listen(8000, function(){
  console.log('listening on 8...');
})
