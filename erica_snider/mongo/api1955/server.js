var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());

require('./server/config/mongoose.js');

// var routes_setter = require('./server/config/routes.js');
// routes_setter(app);

require('./server/config/routes.js')(app);


app.listen(8000, function(){
  console.log('listening on 8000');
})
