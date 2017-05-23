var mongoose = require('mongoose');

var MessageSchema = new mongoose.Schema({
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User'
	},
	message: {
		type: String,
		required: [true, 'Message cannot be blank'],
	},
	comments: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Comment'
	}]
}, { timestamps: true })

mongoose.model('Message', MessageSchema);
