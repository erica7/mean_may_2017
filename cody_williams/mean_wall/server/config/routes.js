var Users = require('../controllers/users');
var Messages = require('../controllers/messages');
var Comments = require('../controllers/comments');

module.exports = function(app){
	app.get('/users', Users.index);
	app.post('/users', Users.create);
	app.post('/sessions', Users.login);
	app.get('/messages', Messages.index);
	app.post('/messages', Messages.create);
	app.get('/comments', Comments.index);
	app.post('/comments', Comments.create);
	app.get('/users/:id', Users.show);
}
