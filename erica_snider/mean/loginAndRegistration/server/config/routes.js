console.log('server side routes initialized');

var User = require('./../controllers/users.js');

module.exports = function(app){
  app.get('/users', User.index);
  app.post('/users', User.create);
  app.post('/login', User.login);
}
