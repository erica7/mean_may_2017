var mongoose = require('mongoose');

// mongoose.Promise = global.Promise;

// make a schema
var PeopleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 22
  }
}, { timestamps: true });

// register the schema with the DB
mongoose.model('People', PeopleSchema);

// assign model to a variable
// var People = mongoose.model('People');   ///////////////
