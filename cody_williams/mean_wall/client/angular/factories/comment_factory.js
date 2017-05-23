app.factory('CommentFactory', function($http){
	var factory = {};

	factory.create = function(newComment, callback){
		$http.post('/comments', newComment).then(callback);
	}

	return factory;
})