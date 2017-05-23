console.log('mongo connection, mongoose setup');

var mongoose = require('mongoose');

var fs = require('fs');

mongoose.connect('mongodb://localhost/fullMeanFriends');

mongoose.Promise = global.Promise  // belongs here

var models_path = __dirname + '/../models';

fs.readdirSync(models_path).forEach(function(file){
  if(file.indexOf('.js') >= 0){
    console.log('loading',file,'...');
    require(models_path + '/' + file);
  }
})
