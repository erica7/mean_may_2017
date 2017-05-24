console.log('server side routes initialized');

var User = require('./../controllers/users.js');
var Message = require('./../controllers/messages.js');
var Comment = require('./../controllers/comments.js');

module.exports = function(app){
  app.get('/users', User.index);
  app.post('/users', User.create);
  app.post('/login', User.login);
  app.get('/users/:id', User.show);
  app.get('/messages', Message.index);
  app.post('/messages', Message.create);
  app.post('/comments', Comment.create); ///
}
