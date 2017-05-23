var mongoose = require('mongoose')
var Person = mongoose.model('persons')

module.exports = {
  // GET '/' will serve up the full collection of people born in 1955
  index: function(req, res) {
    Person.find({}, function(err, data) {
      if (err) {
        response.send(err)
      }
      res.json(data)
    })
  },
  // GET '/new/:name/' will add a name into the database which can be used for blank spaces
  // i.e. adding Steve Jobs to our database, you'd type in the URL 'localhost:8000/new/Steve Jobs'
  new: function(req, res) {
    var newPerson = new Person()
    newPerson.name = req.params.name
    newPerson.save(function(err) {
      if (err) {
        response.send(err)
      }
      res.redirect('/')
    })
  },
  // GET '/remove/:name/' will delete a name from the database
  destroy: function(req, res) {
    Person.remove({ name: req.params.name }, function(err, data){
      if (err) {
        response.send(err)
      }
      res.redirect('/')
    })
  },
  // GET '/:name' will bring up the document of that particular person
  show: function(req, res) {
    Person.find({name: req.params.name}, function(err, data) {
      if (err) {
        response.send(err)
      }
      res.json(data)
    })
  }
}
