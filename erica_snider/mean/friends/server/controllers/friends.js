console.log('SS friends controller loaded');

var mongoose = require('mongoose');
var Friend = mongoose.model('Friend');

module.exports = {
  index: function(req, res){
    console.log('SS friends controller -- index method');
    // res.json({placeholder:'index'});
    Friend.find({}).exec(function(err, friends){
      if(err){
        return res.json(err);
      }
      return res.json(friends);
    })
  },
  show: function(req, res){
    // res.json({placeholder:'show'})
    console.log('SS friends controller -- show method');
    Friend.findById(req.params.id).exec(function(err, friend){
      if(err){
        return res.json(err);
      }
      if(!friend){
        return res.json({
          errors: "404 - Friend not found"
        })
      }
      return res.json(friend)
    })
  },
  create: function(req, res){
    console.log('SS friends controller -- create method');
    // res.json({placeholder:'create'});
    console.log('req.body',req.body);
    var friend = new Friend(req.body);
    friend.save(function(err, friend){
      if(err){
        console.log('err', err);
        return res.json(err);
      }
      console.log('redirecting to /');
      return res.json(friend);
      // return res.redirect('/');
    })

    // .save way above; alternatively you can use the .create way
  },
  edit: function(req, res){  // never used
    console.log('SS friend controller -- edit method');
  },
  update: function(req, res){
    console.log('SS friends controller -- update method');
    // res.json({placeholder:'update'});
    Friend.findById(req.params.id).exec(function(err, friend){
      if(err){
        return res.json(err);
      }
      if(!friend){
        return res.json({
          errors: "404 - Friend not found"
        })
      }
      // console.log('friend found by id', friend);
      console.log('rec.body',req.body);
      for(var key in req.body){
        if(friend[key]){
          friend[key] = req.body[key];
        }
      }
      // console.log('friend to be saved', friend);
      friend.save(function(err){
        if(err){
          return res.json(err);
        }
        res.json(friend);
      })
      // above is the .save way; alternatively you can use the .findByIdAndUpdate way (see full MEAN demo; set { new: true })
    })
  },
  destroy: function(req, res){
    console.log('SS friend controller -- destroy method');
    // res.json({placeholder:'destroy'});
    Friend.remove({_id: req.params.id}).exec(function(err, friend){  ////// might have to change that id...
      if(err){
        return res.json(err);
      }
      return res.json(friend);  // recently deleted friend; just return something truthy
    })
    // alternatively, use .findByIdAndRemove
  }
}
