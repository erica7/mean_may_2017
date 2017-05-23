app.controller('FriendsController', function(FriendFactory, $location, $routeParams){
	console.log('Friend controller connected!')
	var self = this
	self.friends = []
	self.errors = []
	self.friend = {}

	self.index = function(){
		FriendFactory.index(function(res){
			self.friends = res.data
		})
	}

	self.create = function(newFriend){
		FriendFactory.create(newFriend, function(res){
			self.errors = []
			if (res.data.errors){
				for(key in res.data.errors){
					var error = res.data.errors[key]
					self.errors.push(error.message)
				}
			} else {
				$location.url('/friends')
			}
		})
	}
	self.show = function(){
		FriendFactory.show($routeParams.id, function(res){
			self.friend = res.data
		})
	}
	self.destroy = function(friend){
		id = friend._id
		FriendFactory.destroy(id, self.index)
	}
	self.update = function(updatedfriend){
		console.log(updatedfriend)
		console.log($routeParams.id)
		FriendFactory.update($routeParams.id,updatedfriend,function(res){
			self.index()
			$location.url('/friends')
		})
	}

})