var mongoose = require('mongoose');
var fs = require('fs');

mongoose.Promise = global.Promise;  // where is this supposed to be? 

// path to DB
mongoose.connect('mongodb://localhost/api1955');

// store the model path in a variable
var models_path = __dirname + '/../models';

// require each file in the model path that ends with extension .js
fs.readdirSync(models_path).forEach(function(file){
  if(file.indexOf('.js') >= 0){
    require(models_path + '/' + file);
  }
})
