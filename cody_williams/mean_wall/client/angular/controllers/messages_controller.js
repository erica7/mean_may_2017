app.controller('MessagesController', function(UserFactory, MessageFactory, CommentFactory){
	console.log('initializing MessagesController...');
	
	var self = this;
	self.messages = [];
	self.new_message_errors = [];
	self.newMessage = {};
	self.newComment = {};
	self.new_comment_errors = {};

	self.index = function(){
		MessageFactory.index(function(res){
			self.messages = res.data;
		})
	}

	self.createComment = function(newComment, index, message_id){
		newComment = newComment[index];
		newComment.message = message_id
		UserFactory.session(function(user){
			newComment.user = user;
			CommentFactory.create(newComment, function(res){
				self.newComment = {};
				if(res.data.errors){

				} else {
					self.index();
				}
			})
		})
	}

	self.create = function(newMessage){
		self.new_message_errors = [];
		UserFactory.session(function(user){
			newMessage.user = user._id;
			MessageFactory.create(newMessage, function(res){
				if(res.data.errors){
					for(key in res.data.errors){
						var error = res.data.errors[key];
						self.new_message_errors.push(error.message)
					}
				} else {
					self.index();
				}
			})
		})
	}


})