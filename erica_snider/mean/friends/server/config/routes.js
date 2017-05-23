var Friends = require('./../controllers/friends.js');

module.exports = function(app){

  // angular will allow us to send get, post, put / patch, and delete

  // app.get('/', function(){ res.redirect('/friends') });
  app.get('/friends', Friends.index);
  app.get('/friends/:id', Friends.show);
  app.post('/friends', Friends.create);
  app.get('/friends/:id/edit', Friends.edit);
  app.put('/friends/:id', Friends.update);
  app.delete('/friends/:id', Friends.destroy);

  // 'new' is handled entirely on the client side

}
