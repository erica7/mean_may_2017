
var mongoose = require('mongoose')


//schema goes here
var CatSchema = new mongoose.Schema({
	name: {type:String, required:true, minLength:1}
}, {timestamps: true });

var Cat = mongoose.model('Cat', CatSchema);