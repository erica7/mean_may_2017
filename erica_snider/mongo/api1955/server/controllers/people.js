var mongoose = require('mongoose');
var People = mongoose.model('People');

module.exports = {
  index: function(req, res){
    console.log('running index method in controller');
    People.find({}).exec(function(err, people){
      if(err){
        return res.json(err);
      }
      res.json(people);
    })
  },
  create: function(req, res){
    console.log('hit create method in controller');
    var person = new People({name: req.params.name});
    console.log('create person', person);
    person.save(function(err){
      if(err){
        return res.json(err);
      }
      console.log('no errors creating person');
      res.redirect('/')
    })
  },
  destroy: function(req, res){
    People.remove({name: req.params.name}).exec(function(err, person){
      if(err){
        return res.json(err);
      }
      res.redirect('/')
    })
  },
  show: function(req, res){
    People.find({name: req.params.name}).exec(function(err, person){
      if(err){
        return res.json(err);
      }
      res.json(person);
    })
  }
}
