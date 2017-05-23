var mongoose = require('mongoose')
var fs = require('fs')
var models_path  = __dirname + '/../models'

mongoose.connect('mongodb://localhost/friends_db')
mongoose.Promise = global.Promise;

fs.readdirSync(models_path).forEach(function(file){
	if (file.indexOf('.js') >=0){
		require(models_path + '/' + file)
	}
})