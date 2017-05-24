console.log('user schema initialized');

var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

var Schema = mongoose.Schema;

var UserSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: [true, 'First name cannot be blank.'],
    minlength: [2, 'First name is too short.'],
    maxlength: [102, 'First name is too long']
  },
  last_name: {
    type: String,
    required: [true, 'Last name cannot be blank.'],
    minlength: [2, 'Last name is too short.'],
    maxlength: [102, 'Last name is too long']
  },
  email: {
    type: String,
    required: [true, 'Email cannot be blank.'],
    minlength: [5, 'Email is too short.'],
    maxlength: [105, 'Email is too long'],
    validate: {
      validator: function(v){
        return /\S*\@\S*\.\S+/g.test(v);
      },
      message: 'Email must be valid.'
    },
    unique: true  ////////////////////
  },
  password: {
    type: String,
    required: [true, 'Password cannot be blank.'],
    minlength: [4, 'Password must be at least 4 characters long.'],
    maxlength: [444, 'Password cannot be longer than 444 characters.']
  },
  birthday: {
    type: Date,
    // required: true
  },
  comments: [{
    type: Schema.Types.ObjectId,
    ref: 'Comment'
  }],
  messages: [{
    type: Schema.Types.ObjectId,
    ref: 'Message'
  }]
}, { timestamps: true })

UserSchema.methods.hashPassword = function(password){
  this.password = bcrypt.hashSync(password, bcrypt.genSaltSync(10))
}

UserSchema.methods.authenticate = function(password){
  return bcrypt.compareSync(password, this.password);
}

UserSchema.pre('save', function(callback){
  this.hashPassword(this.password);
  callback();
})

mongoose.model('User', UserSchema);
