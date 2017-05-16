var express = require('express');
var bodyParser = require('body-parser');
var ejs = require('ejs');
var mongoose = require('mongoose');

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/static'));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

mongoose.connect('mongodb://localhost/mongooseDashboard');

mongoose.Promise = global.Promise;

// make a table (create the blueprint)
var MongooseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: [2, 'Animal name is too short.'],
    maxlength: [22, 'Animal name is too long.']
  },
  age: {
    type: Number
  },
  eye_color: {
    type: String
  }
}, { timestamps: true })

// register the schema with the DB (attach the blueprint to the specific model)
mongoose.model('Mongoose', MongooseSchema);

// extract the model from the DB
var Mongoose = mongoose.model('Mongoose');

// app.whatever
app.get('/', function(req, res){
  // show all
  Mongoose.find({}).exec(function(err, mongeese){
    if (err) {
      // console.log('err', err);
      return res.send(err);
    }
    // console.log('mongeese',mongeese);
    return res.render('index', {mongeese: mongeese});  ////////
  });
  // res.render('index', {mongeese: []});  /////////
});

app.get('/mongooses/new', function(req, res){
  // form for new mongoose
  res.render('new');
});

app.post('/mongooses', function(req, res){
  // action attribute to create new mongoose
  // console.log('post data - form', req.body);
  var mongoose = new Mongoose(req.body);
  // console.log('mongoose', mongoose);
  mongoose.save(function(err, mongoose){
    if (err) {
      return res.send(err);
    }
    return res.redirect('/');
  })
})

app.get('/mongooses/edit/:id', function(req, res){
  // form to edit existing mongoose
  res.render('edit', {mongoose_id: req.params.id});
})

app.post('/mongooses/:id', function(req, res){
  // actrion attribute to edit that mongoose
  Mongoose.findById(req.body.id).exec(function(err, mongoose){
    if(err){
      return res.send(err);
    }
    if(req.body.name){
      mongoose.name = req.body.name;
    }
    if(req.body.age){
      mongoose.age = req.body.age;
    }
    if(req.body.eye_color){
      mongoose.eye_color = req.body.eye_color;
    }
    mongoose.save(function(err){
      if(err){
        return res.send(err);
      }
      res.redirect('/');
    })
  })
})

app.post('/mongooses/destroy/:id', function(req, res){
  // delete that mongoose from DB by ID
  console.log('params id', req.params.id);
  Mongoose.remove({_id: req.params.id}).exec(function(err){
    if(err){
      return res.send(err);
    }
    res.redirect('/');
  })
})

app.listen(8000, function(){
  console.log('listening on 8...');
})
