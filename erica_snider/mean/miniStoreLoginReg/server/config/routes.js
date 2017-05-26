var User = require('./../controllers/users.js');
var Customer = require('./../controllers/customers.js');
var Order = require('./../controllers/orders.js');
var Product = require('./../controllers/products.js');

module.exports = function(app){

  app.get('/users', User.index);
  app.post('/users', User.create);
  app.post('/login', User.login);
  app.get('/users/:id', User.show);

  // RESTFUL CUSTOMERS
  app.get('/customers', Customer.index);
  app.post('/customers', Customer.create);
  app.get('/customers/:id', Customer.show);
  app.put('/customers/:id', Customer.update);
  app.delete('/customers/:id', Customer.destroy);

  // RESTFUL ORDERS
  app.get('/orders', Order.index);
  app.post('/orders', Order.create);
  app.get('/orders/:id', Order.show);
  app.put('/orders/:id', Order.update);
  app.delete('/orders/:id', Order.destroy);

  // RESTFUL PRODUCTS
  app.get('/products', Product.index);
  app.post('/products', Product.create);
  app.get('/products/:id', Product.show);
  app.put('/products/:id', Product.update);
  app.delete('/products/:id', Product.destroy);

}
