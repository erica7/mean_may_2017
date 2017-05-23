app.factory('FriendFactory', function($http){
	var factory = {}
	
	factory.index = function(callback){
		$http.get('/friends').then(callback)
	}
	factory.create = function(newFriend, callback){
		$http.post('/friends', newFriend).then(callback)
	}
	factory.show = function(id, callback){
		$http.get('/friends/'+id).then(callback)
	}

	factory.destroy = function(id, callback){
		console.log(id)
		$http.delete('/friends/' +id).then(callback)
	}
	factory.update = function(id, friend, callback){
		$http.put('/friends/' + id, friend).then(callback)
	}
	return factory
})