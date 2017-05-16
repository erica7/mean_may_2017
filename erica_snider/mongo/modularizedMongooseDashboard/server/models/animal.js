var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// make a table (create the blueprint)
var AnimalSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: [2, 'Animal name is too short.'],
    maxlength: [22, 'Animal name is too long.']
  },
  age: {
    type: Number
  },
  eye_color: {
    type: String
  }
}, { timestamps: true })

// register the schema with the DB (attach the blueprint to the specific model)
mongoose.model('Animal', AnimalSchema);

// extract the model from the DB / register the schema as a model
var Animal = mongoose.model('Animal');
