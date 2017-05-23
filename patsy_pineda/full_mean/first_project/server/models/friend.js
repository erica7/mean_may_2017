var mongoose = require('mongoose')

var FriendSchema = new mongoose.Schema({
	first_name: {
		type: String, 
		required: [true, 'First name cannot be blank'],
		maxlength: [120, 'First name cannot exceed 120 characters.']},
	last_name: {
		type: String, 
		required: [true, 'Last name cannot be blank'],
		maxlength: [200, 'Last name cannot exceed 200 characters.']},
	birthday: {
		type: String, 
		required: [true, 'Birthday cannot be blank']}
}, {timestamps: true})

mongoose.model('Friend', FriendSchema)
var Friend = mongoose.model('Friend')