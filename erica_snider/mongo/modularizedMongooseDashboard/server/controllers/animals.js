var mongoose = require('mongoose');
var Animal = mongoose.model('Animal');

module.exports = {
  show: function(req, res){
    Animal.find({}).exec(function(err, animals){
      if (err) {
        return res.send(err);
      }
      return res.render('index', {animals: animals});
    });
  },
  create: function(req,res){
    var animal = new Animal(req.body);
    animal.save(function(err, animal){
      if (err) {
        return res.send(err);
      }
      return res.redirect('/');
    })
  },
  update: function(req, res){
    Animal.findById(req.body.id).exec(function(err, animal){
      if(err){
        return res.send(err);
      }
      if(req.body.name){
        animal.name = req.body.name;
      }
      if(req.body.age){
        animal.age = req.body.age;
      }
      if(req.body.eye_color){
        animal.eye_color = req.body.eye_color;
      }
      animal.save(function(err){
        if(err){
          return res.send(err);
        }
        res.redirect('/');
      })
    })
  },
  destroy: function(req, res){
    console.log('params id', req.params.id);
    Animal.remove({_id: req.params.id}).exec(function(err){
      if(err){
        return res.send(err);
      }
      res.redirect('/');
    })
  }
}
