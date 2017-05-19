var personsController = require('./../controllers/persons')

module.exports = function(app) {
  // GET '/' will serve up the full collection of people born in 1955
  app.get('/', personsController.index)
  // GET '/new/:name/' will add a name into the database which can be used for blank spaces
  // i.e. adding Steve Jobs to our database, you'd type in the URL 'localhost:8000/new/Steve Jobs'
  app.get('/new/:name', personsController.new)
  // GET '/remove/:name/' will delete a name from the database
  app.get('/remove/:name', personsController.destroy)
  // GET '/:name' will bring up the document of that particular person
  app.get('/:name', personsController.show)
}
