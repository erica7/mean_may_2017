var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(express.static(__dirname + "/static"));

app.use(bodyParser.urlencoded({extended: true}));

app.set('views', __dirname + '/views');  // set the location where express will look for ejs views
app.set('view engine', 'ejs');  // set the view engine itself

var results;

app.get('/', function(req, res){
  res.render('index');
});

app.post('/users', function(req, res){
  console.log("post data", req.body)
  results = { 'name': req.body.name,
              'location': req.body.location,
              'language': req.body.language,
              'comment': req.body.comment
            };
  console.log("req", req);
  console.log("results variable", results);
  res.redirect('/result')
});

app.get('/result', function(req, res){
  res.render('result', {results: results});
});

app.listen(8000, function(){
  console.log('listening on port 8000');
});
