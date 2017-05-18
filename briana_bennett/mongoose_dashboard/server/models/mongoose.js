var mongoose = require('mongoose')

var MongooseSchema = new mongoose.Schema({
	name: String,
	age: Number,
	favorite_food: String
}, {timestamps: true})

var Mongoose = mongoose.model('Mongoose', MongooseSchema)