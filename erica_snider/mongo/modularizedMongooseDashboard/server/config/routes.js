var animals = require('./../controllers/animals.js');

module.exports = function(app){
  // app.whatever
  app.get('/', function(req, res){
    // show all
    animals.show(req, res);
  });

  // OR, Do This
  // app.get('/', animals.index);
  // this pastes the entire value of the index key (a function with req and res params) here; don't need to pass req and res ... 

  app.get('/animals/new', function(req, res){
    // form for new animal
    res.render('new');
  });

  app.post('/animals', function(req, res){
    // action attribute to create new animal
    animals.create(req, res);
  })

  app.get('/animals/edit/:id', function(req, res){
    // form to edit existing animal
    res.render('edit', {animal_id: req.params.id});
  })

  app.post('/animals/:id', function(req, res){
    // action attribute to edit that animal
    animals.update(req, res);
  })

  app.post('/animals/destroy/:id', function(req, res){
    // delete that animal from DB by ID
    animals.destroy(req, res);
  })
}
