var mongoose = require('mongoose')
var Mongoose = mongoose.model('mongooses')

module.exports = {
  // Displays all of the mongooses
  index: function(req, res) {
    Mongoose.find({}, function(err, data) {
      if (err) {
        response.send(err)
      }
      res.render('index', {mongooses: data})
    })
  },
  // Displays information about one mongoose
  show: function(req, res) {
    Mongoose.find({_id: req.params.id}, function(err, data) {
      if (err) {
        response.send(err)
      }
      res.render('show', { mongoose: data[0] })
    })
  },
  new: function(req, res) {
    res.render('new')
  },
  // Should show a form to edit an existing mongoose
  edit: function(req, res) {
    Mongoose.find({ _id: req.params.id }, function(err, data) {
      if (err) {
        response.send(err)
      }
      res.render('edit', { mongoose: data[0] })
    })
  },
  // Should be the action attribute for the form in the route (GET '/mongooses/new')
  create: function(req, res) {
    Mongoose.create(req.body, function(err, data){
      if (err) {
        response.send(err)
      }
      res.redirect('/')
    })
  },
  // Should be the action attribute for the form in the route (GET '/mongooses/edit/:id')
  update: function(req, res) {
    Mongoose.update({ _id: req.params.id }, req.body, function(err, data){
      if (err) {
        response.send(err)
      }
      res.redirect('/');
    })
  },
  // Should delete the mongoose from the database by ID
  destroy: function(req, res) {
    Mongoose.remove({ _id: req.params.id }, function(err, data){
      if (err) {
        response.send(err)
      }
      res.redirect('/')
    })
  }
}
