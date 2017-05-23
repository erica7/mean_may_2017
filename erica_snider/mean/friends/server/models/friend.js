console.log('friend model');

var mongoose = require('mongoose');
// var bcrypt = require('bcryptjs');

// mongoose.Promise = global.Promise;  // put this in the config/mongoose.js file

var FriendSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: [true, 'First name cannot be blank'],  // validation messages (add throughout)
    minlength: 4,
    maxlength: 44
  },
  last_name: {
    type: String,
    required: true,
    minlength: 4,
    maxlength: 44

  },
  birthday: {
    type: Date,
    required: true,
  }
}, { timestamps: true })


// email: {
//   type: String,
//   required: true,
//   validate: {
//     validator: funciton(emailToBeValidated){
//       return /\S*\@\S*\.\S+/g.test(emailToBeValidated);
//     },
//     message: 'Email must be valid'
//   },
//   unique: true
// }

// password: {
//   type: String,
//   required: true
// }

// UserSchema.methods.hashPassword = function(password){
//   this.password = bcrypt.hashSync(password, bcrypt.genSaltSync(10))  // `this` is the particular user model calling it on; calling it on a particular instance
//   // e.g.
//   //   var user = new User()
//   //   user.hashPassword
//   // param is the number of logrithmic rounds to go through; 10 is the current standard
// }

// UserSchema.methods.autheticate = function(password){
//   return bcrypt.compareSync(password, this.password);
//   //                         ^user input   ^stored hash for a particular instance
// }

// UserSchema.pre('save', function(callback){  // this is from the Mongoose docs; it tells Mongoose to run whatever's next. We do not write/pass this callback
//   this.hashPassword(this.password);
//   callback();
// })


mongoose.model('Friend', FriendSchema);
