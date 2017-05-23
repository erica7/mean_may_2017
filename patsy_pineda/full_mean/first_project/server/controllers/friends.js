var mongoose = require('mongoose')
var Friend = mongoose.model('Friend')

module.exports = {
  index: function(req,res){
    Friend.find({}).exec(function(err, friends){
    	if (err){
    		return res.json(err);
    	}
    	return res.json(friends)
    })
  },
  create: function(req,res){
  	Friend.create(req.body, function(err, friend){
  		if(err){
  			return res.json(err)
  		}
  		return res.json(friend)
  	})
  },
  update: function(req,res){
   Friend.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true}, function(err, friend){
   	 console.log(friend)
   	 if(err){
   	 	return res.json(err)
   	 }
   	 if (!friend){
   	 	return res.json({errors: '404 - Friend not found'})
   	 }
   	 return res.json(friend)
   })
  },
  destroy: function(req,res){
    Friend.findByIdAndRemove(req.params.id, function(err, friend){
    	if (err){
    		return res.json(err)
    	}
   	 	return res.json(friend)
    }) 
  },
  show: function(req,res){
    Friend.findById(req.params.id, function(err, friend){
    	if(err){
    		return res.json(err)
    	}
    	if (!friend){
    		return res.json({errors: '404 - Friend not found'})
    	}
    	return res.json(friend)
    })
  }
}