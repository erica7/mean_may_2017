var fs = require('fs'),
    http = require('http'),
    port = 7077;

var server = http.createServer(function server(request, response){
  // Figure out which file the HTTP request is looking for
  var file;

  switch (request.url) {
    case "/cars":
      file = 'cars.html'
      break;
    case "/cats":
      file = 'cats.html'
      break;
    case "/cars/new":
      file = 'new.html'
      break;
    default:
      file = null;
      break;
  }
  // Send file or error to browser
  if (file !== null) {
    // First argument uses string interpolation
    fs.readFile(`views/${file}`, 'utf8', function(err, contents){
      if (err) { console.log(err); }
      response.writeHead(200, {'Content-Type': 'text/html'});
      response.write(contents);
      response.end();
    });
   }
  else if(request.url === '/stylesheets/style.css'){
    fs.readFile('./stylesheets/style.css', 'utf8', function(errors, contents){
     response.writeHead(200, {'Content-type': 'text/css'});
     response.write(contents);
     response.end();
    })
  }
  else if(request.url === '/images/car1.jpg'){
    // notice we won't include the utf8 encoding
    fs.readFile('./images/car1.jpg', function(errors, contents){
        response.writeHead(200, {'Content-type': 'image/jpg'});
        response.write(contents);
        response.end();
    })
  }
  else if(request.url === '/images/car2.jpg'){
    // notice we won't include the utf8 encoding
    fs.readFile('./images/car2.jpg', function(errors, contents){
        response.writeHead(200, {'Content-type': 'image/jpg'});
        response.write(contents);
        response.end();
    })
  }
  else if(request.url === '/images/car3.jpg'){
    // notice we won't include the utf8 encoding
    fs.readFile('./images/car3.jpg', function(errors, contents){
        response.writeHead(200, {'Content-type': 'image/jpg'});
        response.write(contents);
        response.end();
    })
  }
  else if(request.url === '/images/car4.jpg'){
    // notice we won't include the utf8 encoding
    fs.readFile('./images/car4.jpg', function(errors, contents){
        response.writeHead(200, {'Content-type': 'image/jpg'});
        response.write(contents);
        response.end();
    })

  }

  else if(request.url === '/images/cat1.jpg'){
    // notice we won't include the utf8 encoding
    fs.readFile('./images/cat1.jpg', function(errors, contents){
        response.writeHead(200, {'Content-type': 'image/jpg'});
        response.write(contents);
        response.end();
    })
  }
  else if(request.url === '/images/cat2.jpg'){
    // notice we won't include the utf8 encoding
    fs.readFile('./images/cat2.jpg', function(errors, contents){
        response.writeHead(200, {'Content-type': 'image/jpg'});
        response.write(contents);
        response.end();
    })
  }
  else if(request.url === '/images/cat3.jpg'){
    // notice we won't include the utf8 encoding
    fs.readFile('./images/cat3.jpg', function(errors, contents){
        response.writeHead(200, {'Content-type': 'image/jpg'});
        response.write(contents);
        response.end();
    })
  }
  else if(request.url === '/images/cat4.jpg'){
    // notice we won't include the utf8 encoding
    fs.readFile('./images/cat4.jpg', function(errors, contents){
        response.writeHead(200, {'Content-type': 'image/jpg'});
        response.write(contents);
        response.end();
    })
  } 
  else { // If file is null, not found
    response.writeHead(404);
    response.end("The URL requested is not available!");
  }
});

server.listen(port, function(){
  console.log("Running on port: ", port);
});