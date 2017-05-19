var mongoosesController = require('./../controllers/mongooses')

module.exports = function(app) {
  // Displays all of the mongooses
  app.get('/', mongoosesController.index)

  // Displays a form for making a new mongoose
  app.get('/mongooses/new', mongoosesController.new)

  // Should show a form to edit an existing mongoose
  app.get('/mongooses/edit/:id', mongoosesController.edit)

  // Displays information about one mongoose
  app.get('/mongooses/:id', mongoosesController.show)

  // Should be the action attribute for the form in the route (GET '/mongooses/new')
  app.post('/mongooses', mongoosesController.create)

  // Should delete the mongoose from the database by ID
  app.post('/mongooses/destroy/:id', mongoosesController.destroy)

  // Should be the action attribute for the form in the route (GET '/mongooses/edit/:id')
  app.post('/mongooses/:id', mongoosesController.update)
}
